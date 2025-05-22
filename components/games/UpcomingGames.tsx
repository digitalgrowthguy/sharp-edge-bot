"use client"

import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, TrendingUp, Trophy, AlertCircle, Clock, BarChart3, RefreshCw } from "lucide-react"
import { useGameData } from '@/contexts/GameDataContext'

export function UpcomingGames() {
  const { gameData, loading, error, refreshData, modelAccuracy } = useGameData();
  
  // Format the moneyline odds for display
  const formatOdds = (odds: number) => {
    if (odds > 0) return `+${odds}`;
    return odds.toString();
  };
  
  // Format the time for display
  const formatGameTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };
  
  // Format the date for display
  const formatGameDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  // Calculate win probability from American odds
  const calculateWinProbability = (odds: number) => {
    if (odds > 0) {
      return Math.round(100 / (odds + 100) * 100);
    } else {
      return Math.round(Math.abs(odds) / (Math.abs(odds) + 100) * 100);
    }
  };
  
  // Get color class for confidence badge
  const getConfidenceColor = (confidence: string) => {
    switch (confidence.toLowerCase()) {
      case 'high':
        return 'bg-green-500/20 text-green-400 hover:bg-green-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30';
      case 'low':
        return 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30';
    }
  };

  return (
    <Tabs defaultValue="games" className="w-full">
      <TabsList className="grid grid-cols-2 mb-4 bg-zinc-900/50">
        <TabsTrigger value="games" className="text-base py-2">
          <Calendar className="mr-2 h-4 w-4" />
          Upcoming Games
        </TabsTrigger>
        <TabsTrigger value="picks" className="text-base py-2">
          <TrendingUp className="mr-2 h-4 w-4" />
          Top Picks
        </TabsTrigger>
      </TabsList>
      
      {/* Games Tab */}
      <TabsContent value="games" className="mt-0">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-400">
            {gameData?.lastUpdated ? (
              <>Last updated: {new Date(gameData.lastUpdated).toLocaleTimeString()}</>
            ) : (
              <>Loading latest data...</>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => refreshData()}
            disabled={loading}
            className="text-gray-400 hover:text-white"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
        
        {error ? (
          <div className="text-center py-8 px-4 bg-zinc-900/30 rounded-lg border border-white/5">
            <AlertCircle className="h-8 w-8 text-red-400 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-2">Unable to load games</h3>
            <p className="text-sm text-gray-400 mb-4">{error}</p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => refreshData()}
              className="border-white/10 hover:bg-white/5"
            >
              Try Again
            </Button>
          </div>
        ) : loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-zinc-900/30 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : !gameData?.games?.length ? (
          <div className="text-center py-8 px-4 bg-zinc-900/30 rounded-lg border border-white/5">
            <Calendar className="h-8 w-8 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-2">No games scheduled</h3>
            <p className="text-sm text-gray-400">Check back later for upcoming games</p>
          </div>
        ) : (
          <div className="space-y-4">
            {gameData.games.map((game) => {
              // Find the moneyline market and outcomes
              const bookmaker = game.bookmakers[0];
              const market = bookmaker?.markets?.find(m => m.key === 'h2h');
              const homeOutcome = market?.outcomes?.find(o => o.name === game.home_team);
              const awayOutcome = market?.outcomes?.find(o => o.name === game.away_team);
              
              return (
                <div key={game.id} className="bg-zinc-900/30 rounded-lg p-4 border border-white/5 hover:bg-zinc-800/30 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{formatGameDate(game.commence_time)}</span>
                      <span className="mx-1">•</span>
                      <Clock className="h-4 w-4" />
                      <span>{formatGameTime(game.commence_time)}</span>
                    </div>
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                      MLB
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="font-medium">{game.away_team}</div>
                      {awayOutcome && (
                        <div className="flex items-center gap-1 mt-1">
                          <Badge variant="outline" className="font-mono">
                            {formatOdds(awayOutcome.price)}
                          </Badge>
                          <span className="text-xs text-gray-400">{calculateWinProbability(awayOutcome.price)}%</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">vs</div>
                      <div className="text-xs bg-zinc-800 rounded px-2 py-1 inline-block">
                        Moneyline
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-medium">{game.home_team}</div>
                      {homeOutcome && (
                        <div className="flex items-center gap-1 mt-1 justify-end">
                          <Badge variant="outline" className="font-mono">
                            {formatOdds(homeOutcome.price)}
                          </Badge>
                          <span className="text-xs text-gray-400">{calculateWinProbability(homeOutcome.price)}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </TabsContent>
      
      {/* Picks Tab */}
      <TabsContent value="picks" className="mt-0">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-medium flex items-center">
              <Trophy className="h-5 w-5 text-purple-400 mr-2" />
              AI-Powered Predictions
            </h3>
            <p className="text-sm text-gray-400">
              Model accuracy: {Math.round(modelAccuracy.overall * 100)}% overall, {Math.round(modelAccuracy.lastWeek * 100)}% last week
            </p>
          </div>
        </div>
        
        {error ? (
          <div className="text-center py-8 px-4 bg-zinc-900/30 rounded-lg border border-white/5">
            <AlertCircle className="h-8 w-8 text-red-400 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-2">Unable to load predictions</h3>
            <p className="text-sm text-gray-400 mb-4">{error}</p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => refreshData()}
              className="border-white/10 hover:bg-white/5"
            >
              Try Again
            </Button>
          </div>
        ) : loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-zinc-900/30 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : !gameData?.topPicks?.length ? (
          <div className="text-center py-8 px-4 bg-zinc-900/30 rounded-lg border border-white/5">
            <TrendingUp className="h-8 w-8 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-2">No picks available</h3>
            <p className="text-sm text-gray-400">We don't have any recommended picks at this time</p>
          </div>
        ) : (
          <div className="space-y-4">
            {gameData.topPicks.map((pick) => (
              <div key={pick.gameId} className="bg-zinc-900/30 rounded-lg p-4 border border-white/5 hover:bg-zinc-800/30 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <div className="font-medium">
                    {pick.awayTeam} @ {pick.homeTeam}
                  </div>
                  <Badge className={getConfidenceColor(pick.confidence)}>
                    {pick.confidence} Confidence
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded text-sm">
                    <strong>Pick:</strong> {pick.pick} {formatOdds(pick.odds)}
                  </div>
                  <div className="bg-zinc-800 px-2 py-1 rounded text-sm">
                    <strong>Bet:</strong> {pick.recommendedBet}
                  </div>
                </div>
                
                <p className="text-sm text-gray-400">
                  {pick.reasoning}
                </p>
              </div>
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}

export function UpcomingGames() {
  const { gameData, loading, error, refreshData } = useGameData();
  
  // Format the moneyline odds for display
  const formatOdds = (odds: number) => {
    if (odds > 0) return `+${odds}`;
    return odds.toString();
  };
  
  // Format the time for display
  const formatGameTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };
  
  // Format the date for display
  const formatGameDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  // Calculate win probability from American odds
  const calculateWinProbability = (odds: number) => {
    if (odds > 0) {
      return Math.round(100 / (odds + 100) * 100);
    } else {
      return Math.round(Math.abs(odds) / (Math.abs(odds) + 100) * 100);
    }
  };
      minute: '2-digit',
      hour12: true
    })
  }

  // Get color for confidence badge
  const getConfidenceColor = (confidence: string) => {
    switch (confidence.toLowerCase()) {
      case 'high':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'low':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Data Unavailable</h3>
        <p className="text-gray-400 max-w-md">{error}</p>
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline" 
          className="mt-4"
        >
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <Tabs defaultValue="games" className="w-full">
      <TabsList className="grid grid-cols-2 mb-8">
        <TabsTrigger value="games" className="text-base py-3">
          <Calendar className="mr-2 h-4 w-4" />
          Upcoming Games
        </TabsTrigger>
        <TabsTrigger value="picks" className="text-base py-3">
          <TrendingUp className="mr-2 h-4 w-4" />
          Top Picks
        </TabsTrigger>
      </TabsList>
      
      {/* Upcoming Games Tab */}
      <TabsContent value="games" className="mt-0">
        <div className="grid gap-6">
          {gameData?.games.map((game) => (
            <Card key={game.id} className="overflow-hidden bg-zinc-900/50 border-white/10">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">{game.away_team} @ {game.home_team}</CardTitle>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                    MLB
                  </Badge>
                </div>
                <CardDescription className="flex items-center mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatGameTime(game.commence_time)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-gray-400 mb-1">Away</div>
                    <div className="font-semibold mb-1">{game.away_team}</div>
                    <div className="text-xs px-2 py-1 rounded bg-zinc-800 inline-block">
                      {game.bookmakers[0]?.markets[0]?.outcomes.find(o => o.name === game.away_team)?.price 
                        ? formatOdds(game.bookmakers[0]?.markets[0]?.outcomes.find(o => o.name === game.away_team)?.price) 
                        : 'N/A'}
                    </div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="text-gray-400 mb-1">Spread</div>
                    <div className="font-mono text-xs px-2 py-1 rounded bg-zinc-800 inline-block">
                      +/- 1.5
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 mb-1">Home</div>
                    <div className="font-semibold mb-1">{game.home_team}</div>
                    <div className="text-xs px-2 py-1 rounded bg-zinc-800 inline-block">
                      {game.bookmakers[0]?.markets[0]?.outcomes.find(o => o.name === game.home_team)?.price 
                        ? formatOdds(game.bookmakers[0]?.markets[0]?.outcomes.find(o => o.name === game.home_team)?.price) 
                        : 'N/A'}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm" className="text-xs text-purple-400 hover:text-purple-300">
                    Full Analysis
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {gameData?.games.length === 0 && (
            <div className="text-center py-12 bg-zinc-900/50 rounded-lg border border-white/10">
              <Calendar className="h-10 w-10 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Upcoming Games</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                There are no MLB games scheduled at the moment. Check back later for updates.
              </p>
            </div>
          )}
        </div>
      </TabsContent>
      
      {/* Top Picks Tab */}
      <TabsContent value="picks" className="mt-0">
        <div className="grid gap-6">
          {gameData?.topPicks.map((pick) => (
            <Card key={pick.gameId} className="overflow-hidden bg-zinc-900/50 border-white/10">
              <CardHeader className="pb-3 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">{pick.awayTeam} @ {pick.homeTeam}</CardTitle>
                  <Badge className={getConfidenceColor(pick.confidence)}>
                    {pick.confidence} Confidence
                  </Badge>
                </div>
                <CardDescription className="flex items-center mt-2">
                  <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="font-semibold text-white">Top Pick: {pick.pick}</span>
                  <span className="ml-2 font-mono text-sm">
                    {formatOdds(pick.odds)}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-sm mb-2">Analysis</h4>
                <p className="text-gray-300 text-sm mb-4">
                  {pick.reasoning}
                </p>
                
                <div className="bg-zinc-800/50 p-3 rounded-md border border-white/5">
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-purple-400" />
                    Recommended Bet
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{pick.recommendedBet}: {pick.pick}</span>
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                      {formatOdds(pick.odds)}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm" className="text-xs text-purple-400 hover:text-purple-300">
                    Full Analysis
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {gameData?.topPicks.length === 0 && (
            <div className="text-center py-12 bg-zinc-900/50 rounded-lg border border-white/10">
              <TrendingUp className="h-10 w-10 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Top Picks</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Our AI is analyzing the upcoming games. Check back soon for our top betting recommendations.
              </p>
            </div>
          )}
        </div>
      </TabsContent>
      
      {/* Last updated timestamp */}
      {gameData?.lastUpdated && (
        <div className="mt-6 text-center text-xs text-gray-500">
          Last updated: {new Date(gameData.lastUpdated).toLocaleString()}
        </div>
      )}
    </Tabs>
  )
}
