"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateGameSummary, getModelAccuracy } from '@/lib/services/ai-analysis';

// Types for our game data
interface Outcome {
  name: string;
  price: number;
}

interface Market {
  key: string;
  outcomes: Outcome[];
}

interface Bookmaker {
  key: string;
  markets: Market[];
}

interface Game {
  id: string;
  sport_key: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
}

interface Pick {
  gameId: string;
  homeTeam: string;
  awayTeam: string;
  pick: string;
  confidence: string;
  reasoning: string;
  recommendedBet: string;
  odds: number;
}

interface GameData {
  games: Game[];
  topPicks: Pick[];
  lastUpdated: string;
}

interface GameContextType {
  gameData: GameData | null;
  loading: boolean;
  error: string | null;
  gameSummary: string;
  modelAccuracy: {
    overall: number;
    lastWeek: number;
    lastMonth: number;
  };
  refreshData: () => Promise<void>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [gameSummary, setGameSummary] = useState<string>('');
  const [modelAccuracy] = useState(getModelAccuracy());

  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/games');
      
      if (!response.ok) {
        throw new Error('Failed to fetch game data');
      }
      
      const data = await response.json();
      setGameData(data);
      
      // Generate a natural language summary for AI context
      if (data?.games && data?.topPicks) {
        setGameSummary(generateGameSummary(data.games, data.topPicks));
      }
      
      setError(null);
    } catch (err) {
      console.error('Error fetching game data:', err);
      setError('Unable to load game data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
    
    // Refresh data every 30 minutes
    const intervalId = setInterval(fetchGames, 30 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <GameContext.Provider 
      value={{ 
        gameData, 
        loading, 
        error, 
        gameSummary,
        modelAccuracy,
        refreshData: fetchGames
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameData() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameData must be used within a GameProvider');
  }
  return context;
}
