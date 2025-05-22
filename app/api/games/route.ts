//  Route handler for MLB game data with caching and AI analysis
import { NextRequest, NextResponse } from 'next/server';
import { analyzeGames } from '@/lib/services/ai-analysis';

// In-memory cache for development - in production use Vercel KV or similar
let cachedGames: { games: any[]; topPicks: any[]; lastUpdated: string } | null = null;
let cachedTimestamp: number | null = null;
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

export async function GET(request: NextRequest) {
  try {
    // Check if we have fresh cached data
    if (cachedGames && cachedTimestamp && Date.now() - cachedTimestamp < CACHE_DURATION) {
      console.log('Serving cached MLB game data');
      return NextResponse.json(cachedGames);
    }    // Fetch fresh data from sports API
    console.log('Fetching fresh MLB game data');
    const games = await fetchMLBGames();
      // Generate top picks using AI analysis
    const topPicks = await analyzeGames(games);
    
    // Cache the results
    cachedGames = { games, topPicks, lastUpdated: new Date().toISOString() };
    cachedTimestamp = Date.now();
    
    return NextResponse.json(cachedGames);
  } catch (error) {
    console.error('Error fetching MLB game data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch game data' },
      { status: 500 }
    );
  }
}

async function fetchMLBGames() {
  // TODO: Replace with actual API call
  // Example using The Odds API
  // const API_KEY = process.env.ODDS_API_KEY;
  // const response = await fetch(
  //   `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=${API_KEY}&regions=us&markets=h2h,spreads&oddsFormat=american`
  // );
  // return await response.json();
  
  // Mock data for development
  return [
    {
      id: 'mlb_123',
      sport_key: 'baseball_mlb',
      commence_time: new Date(Date.now() + 3600000).toISOString(),
      home_team: 'New York Yankees',
      away_team: 'Boston Red Sox',
      bookmakers: [
        {
          key: 'draftkings',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'New York Yankees', price: -150 },
                { name: 'Boston Red Sox', price: +130 }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'mlb_124',
      sport_key: 'baseball_mlb',
      commence_time: new Date(Date.now() + 7200000).toISOString(),
      home_team: 'Los Angeles Dodgers',
      away_team: 'San Francisco Giants',
      bookmakers: [
        {
          key: 'draftkings',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Los Angeles Dodgers', price: -200 },
                { name: 'San Francisco Giants', price: +170 }
              ]
            }
          ]
        }
      ]
    }
  ];
}
