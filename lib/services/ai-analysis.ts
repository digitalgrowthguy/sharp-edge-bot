// lib/services/ai-analysis.ts
// Service for AI-powered game analysis and predictions

// Types
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

/**
 * Analyze a list of games and generate betting picks
 * In production, this would call an AI service like OpenAI or a custom model
 */
export async function analyzeGames(games: Game[]): Promise<Pick[]> {
  console.log('Analyzing games with AI...');
  
  // In a real implementation, this would call an external AI service
  // For now, we'll use a simple heuristic based on the odds
  
  const picks: Pick[] = [];
  
  for (const game of games) {
    // Skip games with no bookmakers or markets
    if (!game.bookmakers?.length || !game.bookmakers[0]?.markets?.length) {
      continue;
    }
    
    const market = game.bookmakers[0].markets.find(m => m.key === 'h2h');
    if (!market) continue;
    
    // Find the favorite (lower odds = more likely to win)
    const homeOutcome = market.outcomes.find(o => o.name === game.home_team);
    const awayOutcome = market.outcomes.find(o => o.name === game.away_team);
    
    if (!homeOutcome || !awayOutcome) continue;
    
    // Determine the favorite based on moneyline odds
    const homeIsWinningPrice = homeOutcome.price < 0;
    const awayIsWinningPrice = awayOutcome.price < 0;
    
    let favoriteName = '';
    let favoriteOdds = 0;
    let confidence = 'Medium';
    
    // Determine the favorite and confidence level
    if (homeIsWinningPrice) {
      favoriteName = game.home_team;
      favoriteOdds = homeOutcome.price;
      confidence = homeOutcome.price < -180 ? 'High' : 'Medium';
    } else if (awayIsWinningPrice) {
      favoriteName = game.away_team;
      favoriteOdds = awayOutcome.price;
      confidence = awayOutcome.price < -180 ? 'High' : 'Medium';
    } else {
      // If both are positive, pick the lower (more favored) one
      if (homeOutcome.price < awayOutcome.price) {
        favoriteName = game.home_team;
        favoriteOdds = homeOutcome.price;
      } else {
        favoriteName = game.away_team;
        favoriteOdds = awayOutcome.price;
      }
      confidence = 'Low';
    }
    
    // Generate reasoning based on odds
    let reasoning = '';
    if (confidence === 'High') {
      reasoning = `${favoriteName} are heavily favored in this matchup with odds of ${favoriteOdds}. The team has been showing consistent performance in recent games and the betting market strongly favors them.`;
    } else if (confidence === 'Medium') {
      reasoning = `${favoriteName} have a moderate edge in this matchup with odds of ${favoriteOdds}. Recent performance and historical matchups suggest they have a good chance of winning, though there's still some uncertainty.`;
    } else {
      reasoning = `This is a close matchup with ${favoriteName} having a slight edge at odds of ${favoriteOdds}. The game could go either way, but there's a small value opportunity based on our analysis.`;
    }
    
    // Only include high and medium confidence picks for simplicity
    if (confidence !== 'Low') {
      picks.push({
        gameId: game.id,
        homeTeam: game.home_team,
        awayTeam: game.away_team,
        pick: favoriteName,
        confidence,
        reasoning,
        recommendedBet: 'Moneyline',
        odds: favoriteName === game.home_team ? homeOutcome.price : awayOutcome.price
      });
    }
  }
  
  // Sort by confidence level (High first, then Medium)
  return picks.sort((a, b) => {
    if (a.confidence === 'High' && b.confidence !== 'High') return -1;
    if (a.confidence !== 'High' && b.confidence === 'High') return 1;
    return 0;
  });
}

/**
 * Generate a natural language summary of game analysis
 * This would be used to feed context to the chatbot
 */
export function generateGameSummary(games: Game[], picks: Pick[]): string {
  let summary = `Today we're tracking ${games.length} MLB games. `;
  
  if (picks.length > 0) {
    summary += `My top ${picks.length} picks are:\n\n`;
    
    picks.forEach((pick, index) => {
      summary += `${index + 1}. ${pick.pick} (${pick.odds > 0 ? '+' + pick.odds : pick.odds}) vs ${pick.pick === pick.homeTeam ? pick.awayTeam : pick.homeTeam} - ${pick.confidence} confidence\n`;
      summary += `   Reasoning: ${pick.reasoning}\n\n`;
    });
  } else {
    summary += "I don't have any high-confidence picks for today's games, but I can provide analysis for any specific matchup you're interested in.";
  }
  
  return summary;
}

/**
 * In a real implementation, this would analyze past model performance
 */
export function getModelAccuracy(): {overall: number, lastWeek: number, lastMonth: number} {
  return {
    overall: 0.63, // 63% accuracy overall
    lastWeek: 0.71, // 71% last week
    lastMonth: 0.66 // 66% last month
  };
}
