import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Get the last user message
    const lastUserMessage = messages.filter((m) => m.role === "user").pop()

    // In a real implementation, this would call your Flowise API
    // const flowiseResponse = await fetch('YOUR_FLOWISE_ENDPOINT', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ message: lastUserMessage.content }),
    // });
    // const data = await flowiseResponse.json();

    // For demo purposes, we'll return a simple response
    let response =
      "I'm sorry, I don't have information about that specific query. Would you like to know about today's MLB games instead?"

    // Simple keyword matching for demo purposes
    if (
      lastUserMessage.content.toLowerCase().includes("yankees") ||
      lastUserMessage.content.toLowerCase().includes("red sox")
    ) {
      response =
        "The Yankees are favored at -150 against the Red Sox (+130) tonight. Based on my analysis of recent performance, pitching matchups, and historical data, I give the Yankees a 62% chance to win. The starting pitcher for the Yankees has a 2.1 ERA in his last 5 starts, while the Red Sox starter has struggled with a 4.8 ERA."
    } else if (
      lastUserMessage.content.toLowerCase().includes("dodgers") ||
      lastUserMessage.content.toLowerCase().includes("giants")
    ) {
      response =
        "The Dodgers are heavily favored at -180 against the Giants (+160) tonight. My model gives the Dodgers a 68% chance to win, largely due to their dominant home record and the pitching matchup. The over/under is set at 8.5 runs, and I'm seeing value on the over based on both teams' recent offensive output."
    } else if (
      lastUserMessage.content.toLowerCase().includes("odds") ||
      lastUserMessage.content.toLowerCase().includes("betting")
    ) {
      response =
        "Here are today's MLB odds for the top games:\n\n- Yankees (-150) vs Red Sox (+130)\n- Dodgers (-180) vs Giants (+160)\n- Astros (-135) vs Rangers (+115)\n- Braves (-160) vs Phillies (+140)\n\nWould you like more detailed analysis on any of these matchups?"
    } else if (
      lastUserMessage.content.toLowerCase().includes("prediction") ||
      lastUserMessage.content.toLowerCase().includes("who will win")
    ) {
      response =
        "Based on my analysis, here are today's top predictions:\n\n1. Dodgers over Giants (68% confidence)\n2. Yankees over Red Sox (62% confidence)\n3. Braves over Phillies (59% confidence)\n\nThese predictions are based on pitching matchups, recent team performance, head-to-head history, and several other factors."
    } else if (
      lastUserMessage.content.toLowerCase().includes("prop") ||
      lastUserMessage.content.toLowerCase().includes("player")
    ) {
      response =
        "Here are today's top player prop bets with value:\n\n1. Aaron Judge to hit a home run (+320) - High value\n2. Shohei Ohtani over 1.5 total bases (-125) - Medium value\n3. Gerrit Cole over 7.5 strikeouts (-110) - Medium value\n\nWould you like more detailed analysis on any of these props?"
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
