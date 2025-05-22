"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  Menu,
  MessageSquare,
  RefreshCw,
  Send,
  Settings,
  Trophy,
  X,
  Calendar,
  Clock,
  BarChart3,
  Percent,
  TrendingUp,
  LineChart,
  Info,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { SignedIn, SignedOut, RedirectToSignIn, useClerk } from "@clerk/nextjs"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Import our games component
import { UpcomingGames } from "@/components/games/UpcomingGames"
import { GameProvider } from "@/contexts/GameDataContext"

// Define types for game and bet objects
interface Game {
  id: number
  homeTeam: string
  awayTeam: string
  time: string
  date: string
  homeOdds: string
  awayOdds: string
  prediction: string
}

interface Bet {
  id: number
  description: string
  odds: string
  confidence: string
  value: string
}

export default function ChatbotPage() {
  const { toast } = useToast()
  const { signOut } = useClerk()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content:
        "Welcome to MLB BettingBot! I can help you with MLB betting insights, odds, and predictions. What would you like to know about today's games?",
    },
  ])
  const [showSettings, setShowSettings] = useState(false)
  const [showInfo, setShowInfo] = useState(true)
  const [activeTab, setActiveTab] = useState("chat")
  // Fix the ref type to properly handle DOM element
  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  // Mock upcoming games data
  const upcomingGames = [
    {
      id: 1,
      homeTeam: "New York Yankees",
      awayTeam: "Boston Red Sox",
      time: "7:05 PM ET",
      date: "Today",
      homeOdds: "-150",
      awayOdds: "+130",
      prediction: "Yankees (62%)",
    },
    {
      id: 2,
      homeTeam: "Los Angeles Dodgers",
      awayTeam: "San Francisco Giants",
      time: "10:10 PM ET",
      date: "Today",
      homeOdds: "-180",
      awayOdds: "+160",
      prediction: "Dodgers (68%)",
    },
    {
      id: 3,
      homeTeam: "Chicago Cubs",
      awayTeam: "St. Louis Cardinals",
      time: "2:20 PM ET",
      date: "Tomorrow",
      homeOdds: "-110",
      awayOdds: "-110",
      prediction: "Cardinals (53%)",
    },
  ]

  // Mock trending bets
  const trendingBets = [
    {
      id: 1,
      description: "Aaron Judge to hit a home run",
      odds: "+320",
      confidence: "Medium",
      value: "High",
    },
    {
      id: 2,
      description: "Dodgers -1.5 run line",
      odds: "+110",
      confidence: "High",
      value: "Medium",
    },
    {
      id: 3,
      description: "Yankees vs Red Sox over 8.5 runs",
      odds: "-115",
      confidence: "Medium",
      value: "Medium",
    },
  ]

  // Scroll to bottom of chat when new messages are added - fixed type issue
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) {
      return
    }

    const userMessage = {
      role: "user",
      content: message,
    }

    setChatHistory((prev) => [...prev, userMessage])
    setMessage("")
    setIsSubmitting(true)

    // Simulate API call to Flowise
    // In a real implementation, this would be a fetch to your Flowise endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock response based on user message
    let botResponse = {
      role: "system",
      content:
        "I'm sorry, I don't have information about that specific query. Would you like to know about today's MLB games instead?",
    }

    // Simple keyword matching for demo purposes
    if (message.toLowerCase().includes("yankees") || message.toLowerCase().includes("red sox")) {
      botResponse = {
        role: "system",
        content:
          "The Yankees are favored at -150 against the Red Sox (+130) tonight. Based on my analysis of recent performance, pitching matchups, and historical data, I give the Yankees a 62% chance to win. The starting pitcher for the Yankees has a 2.1 ERA in his last 5 starts, while the Red Sox starter has struggled with a 4.8 ERA.",
      }
    } else if (message.toLowerCase().includes("dodgers") || message.toLowerCase().includes("giants")) {
      botResponse = {
        role: "system",
        content:
          "The Dodgers are heavily favored at -180 against the Giants (+160) tonight. My model gives the Dodgers a 68% chance to win, largely due to their dominant home record and the pitching matchup. The over/under is set at 8.5 runs, and I'm seeing value on the over based on both teams' recent offensive output.",
      }
    } else if (message.toLowerCase().includes("odds") || message.toLowerCase().includes("betting")) {
      botResponse = {
        role: "system",
        content:
          "Here are today's MLB odds for the top games:\n\n- Yankees (-150) vs Red Sox (+130)\n- Dodgers (-180) vs Giants (+160)\n- Astros (-135) vs Rangers (+115)\n- Braves (-160) vs Phillies (+140)\n\nWould you like more detailed analysis on any of these matchups?",
      }
    } else if (message.toLowerCase().includes("prediction") || message.toLowerCase().includes("who will win")) {
      botResponse = {
        role: "system",
        content:
          "Based on my analysis, here are today's top predictions:\n\n1. Dodgers over Giants (68% confidence)\n2. Yankees over Red Sox (62% confidence)\n3. Braves over Phillies (59% confidence)\n\nThese predictions are based on pitching matchups, recent team performance, head-to-head history, and several other factors.",
      }
    } else if (message.toLowerCase().includes("prop") || message.toLowerCase().includes("player")) {
      botResponse = {
        role: "system",
        content:
          "Here are today's top player prop bets with value:\n\n1. Aaron Judge to hit a home run (+320) - High value\n2. Shohei Ohtani over 1.5 total bases (-125) - Medium value\n3. Gerrit Cole over 7.5 strikeouts (-110) - Medium value\n\nWould you like more detailed analysis on any of these props?",
      }
    }

    setChatHistory((prev) => [...prev, botResponse])
    setIsSubmitting(false)
  }

  const clearChat = () => {
    setChatHistory([
      {
        role: "system",
        content:
          "Welcome to MLB BettingBot! I can help you with MLB betting insights, odds, and predictions. What would you like to know about today's games?",
      },
    ])
  }

  // Fix the game parameter type
  const handleGameSelect = (game: Game) => {
    const gameQuery = `Tell me more about the ${game.awayTeam} vs ${game.homeTeam} game.`
    setMessage(gameQuery)
    handleSubmit({ preventDefault: () => {} } as React.FormEvent)
  }

  // Fix the bet parameter type
  const handleBetSelect = (bet: Bet) => {
    const betQuery = `Tell me more about "${bet.description}" with odds ${bet.odds}.`
    setMessage(betQuery)
    handleSubmit({ preventDefault: () => {} } as React.FormEvent)
  }
  return (
    <>
      <SignedIn>
        <GameProvider>
        <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <Trophy className="h-6 w-6 text-purple-500 absolute animate-ping opacity-75" />
                <Trophy className="h-6 w-6 text-purple-500 relative" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                SharpEdge Bot
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#solutions" className="text-sm hover:text-purple-400 transition-colors">
                Solutions
              </Link>
              <Link href="/#about" className="text-sm hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/results" className="text-sm hover:text-purple-400 transition-colors">
                Results
              </Link>
              <Link href="/chatbot" className="text-sm hover:text-purple-400 transition-colors">
                MLB Bot
              </Link>
              <Link href="/#contact" className="text-sm hover:text-purple-400 transition-colors">
                Contact
              </Link>
              <SignedOut>
                <Link href="/sign-in">
                  <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                    Log In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </SignedIn>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 pt-20 mobile-menu"
          >
            {/* Mobile Menu */}
            <nav className="flex flex-col items-center space-y-6 p-8">
              <Link
                href="/#solutions"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/#about"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/results"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Results
              </Link>
              <Link
                href="/chatbot"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                MLB Bot
              </Link>
              <Link
                href="/#contact"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <SignedOut>
                <Link href="/sign-in" className="w-full">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/sign-up" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white mt-4">
                    Sign Up
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Button variant="outline" className="w-full" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </SignedIn>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar - Info Panel */}
            <div className="lg:w-1/4 space-y-6">
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                    <h2 className="text-xl font-bold">MLB BettingBot</h2>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300">Live</Badge>
                </div>
                <p className="text-gray-400 mb-4">
                  Your AI assistant for MLB betting insights, predictions, and analysis.
                </p>
                <Accordion type="single" collapsible defaultValue="features">
                  <AccordionItem value="features">
                    <AccordionTrigger>Features</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <BarChart3 className="h-4 w-4 text-purple-400 mr-2 mt-1 shrink-0" />
                          <span>Game predictions and analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Percent className="h-4 w-4 text-purple-400 mr-2 mt-1 shrink-0" />
                          <span>Odds comparison and value bets</span>
                        </li>
                        <li className="flex items-start">
                          <TrendingUp className="h-4 w-4 text-purple-400 mr-2 mt-1 shrink-0" />
                          <span>Player prop recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <LineChart className="h-4 w-4 text-purple-400 mr-2 mt-1 shrink-0" />
                          <span>Historical stats and trends</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="commands">
                    <AccordionTrigger>Sample Questions</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-300">
                        <li
                          className="text-sm cursor-pointer hover:text-purple-400 transition-colors"
                          onClick={() => setMessage("What are today's MLB odds?")}
                        >
                          "What are today's MLB odds?"
                        </li>
                        <li
                          className="text-sm cursor-pointer hover:text-purple-400 transition-colors"
                          onClick={() => setMessage("Who will win Yankees vs Red Sox tonight?")}
                        >
                          "Who will win Yankees vs Red Sox tonight?"
                        </li>
                        <li
                          className="text-sm cursor-pointer hover:text-purple-400 transition-colors"
                          onClick={() => setMessage("What are the best player prop bets today?")}
                        >
                          "What are the best player prop bets today?"
                        </li>
                        <li
                          className="text-sm cursor-pointer hover:text-purple-400 transition-colors"
                          onClick={() => setMessage("Give me value bets for today's games")}
                        >
                          "Give me value bets for today's games"
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500">
                    Disclaimer: This tool is for informational purposes only. Please gamble responsibly.
                  </p>
                </div>
              </div>

              {/* Upcoming Games */}
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-purple-400" />
                    <h2 className="text-xl font-bold">Upcoming Games</h2>
                  </div>
                </div>
                <div className="space-y-4">
                  {upcomingGames.map((game) => (
                    <div
                      key={game.id}
                      className="p-3 bg-zinc-800/50 rounded-lg border border-white/5 hover:border-purple-500/30 cursor-pointer transition-colors"
                      onClick={() => handleGameSelect(game)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-gray-400 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {game.date}, {game.time}
                        </div>
                        <Badge className="bg-purple-500/20 text-purple-300 text-xs">{game.prediction}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{game.awayTeam}</div>
                          <div className="font-medium">{game.homeTeam}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-300">{game.awayOdds}</div>
                          <div className="text-gray-300">{game.homeOdds}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-white/10 hover:bg-white/5">
                  View All Games
                </Button>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="lg:w-2/4 flex flex-col">
              <Tabs defaultValue="chat" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 bg-zinc-900/50 mb-4">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>
                <TabsContent value="chat" className="flex-grow flex flex-col">
                  {/* Info Banner */}
                  <AnimatePresence>
                    {showInfo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-4 mb-4 border border-white/10"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex gap-3">
                            <Info className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-gray-300">
                                Welcome to MLB BettingBot! Ask me about today's games, odds, predictions, or player
                                props.
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                Note: This is a visual demo. Please join the wait list for the latest updates and early
                                access
                              </p>
                            </div>
                          </div>
                          <button onClick={() => setShowInfo(false)} className="text-gray-400 hover:text-white">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Chat Messages */}
                  <div
                    ref={chatContainerRef}
                    className="flex-grow bg-zinc-900/30 rounded-xl border border-white/10 p-4 overflow-y-auto mb-4"
                    style={{ height: "calc(100vh - 300px)" }}
                  >
                    <div className="space-y-4">
                      {chatHistory.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[80%] rounded-xl p-3 ${
                              msg.role === "user"
                                ? "bg-purple-600/20 border border-purple-500/30"
                                : "bg-zinc-800/50 border border-white/10"
                            }`}
                          >
                            {msg.role === "system" && (
                              <div className="flex items-center gap-2 mb-1">
                                <MessageSquare className="h-4 w-4 text-purple-400" />
                                <span className="text-xs text-purple-400 font-medium">MLB BettingBot</span>
                              </div>
                            )}
                            <p className="text-sm whitespace-pre-line">{msg.content}</p>
                          </div>
                        </div>
                      ))}
                      {isSubmitting && (
                        <div className="flex justify-start">
                          <div className="max-w-[80%] rounded-xl p-3 bg-zinc-800/50 border border-white/10">
                            <div className="flex items-center gap-2 mb-1">
                              <MessageSquare className="h-4 w-4 text-purple-400" />
                              <span className="text-xs text-purple-400 font-medium">MLB BettingBot</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                              <div
                                className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Chat Controls */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-white/10 hover:bg-white/5"
                      onClick={clearChat}
                      title="Clear chat"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-white/10 hover:bg-white/5"
                      onClick={() => setShowSettings(!showSettings)}
                      title="Settings"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                    <form onSubmit={handleSubmit} className="flex-grow flex gap-2">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask about MLB games, odds, or predictions..."
                        className="flex-grow bg-zinc-900/50 border-white/10 focus:border-purple-500"
                        disabled={isSubmitting}
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting || !message.trim()}
                        className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>

                  {/* Settings Panel */}
                  <AnimatePresence>
                    {showSettings && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 bg-zinc-900/50 rounded-xl p-4 border border-white/10"
                      >
                        <h3 className="text-sm font-medium mb-3">Chat Settings</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <label className="text-sm text-gray-300">Show welcome message</label>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-white/10 hover:bg-white/5"
                              onClick={() => setShowInfo(!showInfo)}
                            >
                              {showInfo ? "Hide" : "Show"}
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm text-gray-300">Connect to Flowise</label>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-white/10 hover:bg-white/5"
                              onClick={() => {
                                toast({
                                  title: "Flowise Connection",
                                  description: "This would connect to your Flowise chatbot in production.",
                                })
                              }}
                            >
                              Configure
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TabsContent>                <TabsContent value="insights">
                  <div className="space-y-6">
                    {/* Use our new UpcomingGames component */}
                    <UpcomingGames />
                    
                    <Card className="bg-zinc-900/50 border-white/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-purple-400" />
                          Trending Bets
                        </CardTitle>
                        <CardDescription>Popular bets with high value based on our analysis</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {trendingBets.map((bet) => (
                            <div
                              key={bet.id}
                              className="p-3 bg-zinc-800/50 rounded-lg border border-white/5 hover:border-purple-500/30 cursor-pointer transition-colors"
                              onClick={() => handleBetSelect(bet)}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <div className="font-medium">{bet.description}</div>
                                <div className="text-purple-300 font-medium">{bet.odds}</div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="text-xs text-gray-400">
                                  Confidence:{" "}
                                  <span
                                    className={`${bet.confidence === "High" ? "text-green-400" : "text-yellow-400"}`}
                                  >
                                    {bet.confidence}
                                  </span>
                                </div>
                                <div className="text-xs text-gray-400">
                                  Value:{" "}
                                  <span className={`${bet.value === "High" ? "text-green-400" : "text-yellow-400"}`}>
                                    {bet.value}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-white/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-purple-400" />
                          Performance Stats
                        </CardTitle>
                        <CardDescription>Our prediction model performance</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-zinc-800/50 p-4 rounded-lg border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">Win Rate (Last 7 Days)</div>
                            <div className="text-2xl font-bold text-green-400">62%</div>
                            <div className="text-xs text-gray-400 flex items-center mt-1">
                              <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                              <span className="text-green-400">+3%</span> vs previous week
                            </div>
                          </div>
                          <div className="bg-zinc-800/50 p-4 rounded-lg border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">ROI (Last 30 Days)</div>
                            <div className="text-2xl font-bold text-green-400">28%</div>
                            <div className="text-xs text-gray-400 flex items-center mt-1">
                              <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                              <span className="text-green-400">+5%</span> vs previous month
                            </div>
                          </div>
                          <div className="bg-zinc-800/50 p-4 rounded-lg border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">Prop Bet Accuracy</div>
                            <div className="text-2xl font-bold text-yellow-400">58%</div>
                            <div className="text-xs text-gray-400 flex items-center mt-1">
                              <ChevronDown className="h-3 w-3 text-red-400 mr-1" />
                              <span className="text-red-400">-2%</span> vs previous week
                            </div>
                          </div>
                          <div className="bg-zinc-800/50 p-4 rounded-lg border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">Value Bet Hit Rate</div>
                            <div className="text-2xl font-bold text-green-400">64%</div>
                            <div className="text-xs text-gray-400 flex items-center mt-1">
                              <ChevronUp className="h-3 w-3 text-green-400 mr-1" />
                              <span className="text-green-400">+4%</span> vs previous week
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar - Recommendations */}
            <div className="lg:w-1/4 space-y-6">
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <LineChart className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-bold">Top Picks Today</h2>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-zinc-800/50 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <Badge className="bg-green-500/20 text-green-300">High Confidence</Badge>
                      <span className="text-xs text-gray-400">Moneyline</span>
                    </div>
                    <div className="font-medium mb-1">Dodgers to win vs Giants</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Odds: -180</span>
                      <span className="text-sm text-green-400">68% probability</span>
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-800/50 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <Badge className="bg-green-500/20 text-green-300">Value Bet</Badge>
                      <span className="text-xs text-gray-400">Player Prop</span>
                    </div>
                    <div className="font-medium mb-1">Aaron Judge HR</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Odds: +320</span>
                      <span className="text-sm text-green-400">26% probability</span>
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-800/50 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <Badge className="bg-yellow-500/20 text-yellow-300">Medium Confidence</Badge>
                      <span className="text-xs text-gray-400">Total</span>
                    </div>
                    <div className="font-medium mb-1">Yankees/Red Sox Over 8.5</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Odds: -115</span>
                      <span className="text-sm text-yellow-400">56% probability</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 border-white/10 hover:bg-white/5">
                  View All Picks
                </Button>
              </div>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-bold">Coming Soon</h2>
                </div>
                <p className="text-gray-400 mb-4">We're expanding our AI betting assistants to cover more sports:</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">NFL BettingBot</span>
                    <Badge className="bg-yellow-500/20 text-yellow-300">Coming Soon</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">NBA BettingBot</span>
                    <Badge className="bg-yellow-500/20 text-yellow-300">Coming Soon</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">UFC BettingBot</span>
                    <Badge className="bg-yellow-500/20 text-yellow-300">Coming Soon</Badge>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    Want to be notified when these launch? Sign up for our newsletter.
                  </p>
                  <Button
                    className="w-full mt-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                    onClick={() => window.open("https://agilebets.fillout.com/wait-list", "_blank")}
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>          <Toaster />
        </div>
        </GameProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
