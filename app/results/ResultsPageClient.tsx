"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Trophy, Filter, Calendar, DollarSign, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const winningSlips = [
  {
    id: 1,
    title: "Yankees Moneyline + Judge HR Parlay",
    description:
      "Our MLB BettingBot recommended this parlay with a 'High Value' rating. The user turned $100 into $850!",
    image: "/placeholder.svg?height=600&width=800&text=Winning%20Bet%20Slip",
    date: "May 15, 2025",
    betAmount: "$100",
    winAmount: "$850",
    category: "mlb",
    user: "Michael S.",
    location: "New York, NY",
    prediction: "Yankees -150, Judge HR +320",
  },
  {
    id: 2,
    title: "Dodgers Run Line + Over Parlay",
    description: "Our system identified value on both the Dodgers -1.5 and the over 8.5 runs, resulting in a big win.",
    image: "/placeholder.svg?height=600&width=800&text=Dodgers%20Bet%20Slip",
    date: "May 12, 2025",
    betAmount: "$200",
    winAmount: "$720",
    category: "mlb",
    user: "Jennifer T.",
    location: "Los Angeles, CA",
    prediction: "Dodgers -1.5 +110, Over 8.5 -115",
  },
  {
    id: 3,
    title: "Red Sox Upset + Devers HR",
    description: "Our value bet finder identified the Red Sox as a strong underdog play, paired with a Devers HR prop.",
    image: "/placeholder.svg?height=600&width=800&text=Red%20Sox%20Bet%20Slip",
    date: "May 10, 2025",
    betAmount: "$50",
    winAmount: "$475",
    category: "mlb",
    user: "David K.",
    location: "Boston, MA",
    prediction: "Red Sox +180, Devers HR +380",
  },
  {
    id: 4,
    title: "Braves Game Total Under",
    description: "Our pitching matchup analysis highlighted strong value on the under in this NL East showdown.",
    image: "/placeholder.svg?height=600&width=800&text=Braves%20Under%20Slip",
    date: "May 8, 2025",
    betAmount: "$150",
    winAmount: "$285",
    category: "mlb",
    user: "Sarah M.",
    location: "Atlanta, GA",
    prediction: "Under 7.5 -110",
  },
  {
    id: 5,
    title: "Astros + Blue Jays Parlay",
    description:
      "Our system identified strong value on both these favorites, creating a profitable parlay opportunity.",
    image: "/placeholder.svg?height=600&width=800&text=MLB%20Parlay%20Slip",
    date: "May 5, 2025",
    betAmount: "$100",
    winAmount: "$264",
    category: "mlb",
    user: "Robert J.",
    location: "Houston, TX",
    prediction: "Astros -135, Blue Jays -125",
  },
  {
    id: 6,
    title: "Player Props Multi-Bet",
    description: "Our player performance model identified three high-value prop bets that all hit for a big payday.",
    image: "/placeholder.svg?height=600&width=800&text=Props%20Bet%20Slip",
    date: "May 3, 2025",
    betAmount: "$50",
    winAmount: "$650",
    category: "mlb",
    user: "Thomas B.",
    location: "Chicago, IL",
    prediction: "Ohtani 2+ Hits, Cole 8+ Ks, Soto HR",
  },
]

const testimonials = [
  {
    quote:
      "The MLB BettingBot has completely changed how I approach baseball betting. The insights are incredibly accurate and have helped me win consistently.",
    name: "Michael S.",
    location: "New York, NY",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I was skeptical at first, but after using the MLB BettingBot for a month, I'm a believer. My ROI has increased by over 30%!",
    name: "Jennifer T.",
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The player prop recommendations are where this system really shines. I've hit multiple longshot props that I would never have considered on my own.",
    name: "David K.",
    location: "Boston, MA",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const stats = [
  { value: "62%", label: "Win Rate on Predictions" },
  { value: "$1.2M+", label: "User Winnings This Season" },
  { value: "28%", label: "Average User ROI" },
  { value: "15K+", label: "Winning Bet Slips" },
]

export default function ResultsPageClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900/30 to-black py-24 md:py-32">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Winning Results</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Real winning bet slips from our users who have found success with our AI-powered predictions and insights.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <section className="py-12 bg-gradient-to-r from-purple-900/30 to-black border-y border-white/10 rounded-xl mb-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Winning Slips Categories */}
          <section className="mb-16">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Winning Bet Slips</h2>
                <div className="flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-gray-400" />
                  <TabsList className="bg-zinc-900/50">
                    <TabsTrigger value="all">All Bets</TabsTrigger>
                    <TabsTrigger value="mlb">MLB</TabsTrigger>
                    <TabsTrigger value="parlays">Parlays</TabsTrigger>
                    <TabsTrigger value="props">Player Props</TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {winningSlips.map((slip, index) => (
                    <WinningSlipCard key={index} slip={slip} />
                  ))}
                </div>
              </TabsContent>

              {["mlb", "parlays", "props"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {winningSlips
                      .filter(
                        (slip) =>
                          slip.category === category ||
                          (category === "parlays" && slip.title.toLowerCase().includes("parlay")) ||
                          (category === "props" && slip.title.toLowerCase().includes("prop")),
                      )
                      .map((slip, index) => (
                        <WinningSlipCard key={index} slip={slip} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* Submit Your Win Section */}
          <section className="mb-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 border border-white/10">
            <div className="text-center">
              <Badge className="mb-4 bg-green-500/20 text-green-300 hover:bg-green-500/30">Share Your Success</Badge>
              <h2 className="text-3xl font-bold mb-4">Won Using Our Predictions?</h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Share your winning bet slip with us and get featured on our site! Plus, get a free month of our premium
                predictions.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8">
                Submit Your Win
              </Button>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-gray-300 italic mb-6 text-center">"{testimonial.quote}"</p>
                    <div className="text-center">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Winning?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of bettors who are using our AI-powered tools to make more informed betting decisions and
              win more consistently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chatbot">
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-6 text-lg h-auto">
                  Try MLB BettingBot
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg h-auto"
              >
                View Our Solutions
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} BetGenius AI. All rights reserved.{" "}
            <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </Link>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            BetGenius AI is intended for informational purposes only. Please gamble responsibly and be aware of your
            local gambling laws.
          </p>
        </div>
      </footer>
    </div>
  )
}

function WinningSlipCard({ slip }) {
  return (
    <Card className="bg-zinc-900/50 border-white/10 overflow-hidden h-full flex flex-col hover:border-purple-500/30 transition-all">
      <div className="relative h-48">
        <Image src={slip.image || "/placeholder.svg"} alt={slip.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <Badge className="bg-green-500/20 text-green-300">Winner</Badge>
          <div className="flex items-center text-xs text-gray-300">
            <Calendar className="h-3 w-3 mr-1" />
            {slip.date}
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-400">
            {slip.user} from {slip.location}
          </div>
        </div>
        <CardTitle className="text-xl">{slip.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-400 mb-4">{slip.description}</CardDescription>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-zinc-800/50 p-2 rounded-lg flex items-center">
            <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-sm">Bet: {slip.betAmount}</span>
          </div>
          <div className="bg-green-900/20 p-2 rounded-lg flex items-center">
            <Trophy className="h-4 w-4 text-green-400 mr-1" />
            <span className="text-sm text-green-400">Won: {slip.winAmount}</span>
          </div>
        </div>
        <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
          <div className="flex items-center mb-1">
            <Zap className="h-4 w-4 text-purple-400 mr-1" />
            <span className="text-xs text-purple-400">Our Prediction</span>
          </div>
          <p className="text-sm">{slip.prediction}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="outline"
          className="w-full border-white/10 hover:bg-white/10 flex items-center justify-center gap-2"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
