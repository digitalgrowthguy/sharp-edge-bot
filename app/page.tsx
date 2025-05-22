"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { SignedOut, SignedIn, useClerk } from "@clerk/nextjs"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import './animations.css'
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Code,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  Twitter,
  X,
  Zap,
  Globe,
  Shield,
  Trophy,
  TrendingUp,
  LineChart,
  Percent,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
// use relative imports for local components
import ParticleNetwork from '../components/ParticleNetwork'
import CodeSnippet from '../components/codesnippet'

export default function Home() {
  const { toast } = useToast()
  const { signOut } = useClerk()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [animatedText, setAnimatedText] = useState(0)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Animated text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText((prev) => (prev + 1) % sportsBettingCapabilities.length)
    }, 3000) // cycle every ~3s for faster rotation
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !message || !name) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    })

    setEmail("")
    setMessage("")
    setName("")
    setIsSubmitting(false)
  }

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

  const services = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "AI Prediction Models",
      description:
        "Advanced prediction models that analyze team stats, player performance, and historical data to forecast game outcomes with high accuracy.",
      link: "/solutions/prediction-models",
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Sports Betting Assistants",
      description:
        "Intelligent chatbots that provide personalized betting advice, odds comparison, and insights for various sports leagues.",
      link: "/solutions/betting-assistants",
    },
    {
      icon: <Percent className="h-10 w-10" />,
      title: "Value Bet Finder",
      description:
        "Proprietary algorithms that identify betting opportunities where our predicted odds differ significantly from the market odds.",
      link: "/solutions/value-bets",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Bankroll Management",
      description:
        "Smart tools to help you manage your betting budget, track performance, and maximize long-term profitability.",
      link: "/solutions/bankroll-management",
    },
  ]

  const teamMembers = [
    {
      name: "J.D. Chiles",
      role: "Founder & Sports AI Architect",
      bio: "Former sports analytics researcher with 10+ years experience in machine learning and sports prediction systems.",
      expertise: ["Sports Analytics", "Machine Learning", "Betting Algorithms"],
    },
    {
      name: "Sophia Chen",
      role: "Lead Data Scientist",
      bio: "PhD in Computer Science specializing in predictive modeling and statistical analysis for sports outcomes.",
      expertise: ["Statistical Modeling", "Game Prediction", "Player Analytics"],
    },
    {
      name: "Marcus Johnson",
      role: "Engineering Director",
      bio: "Veteran software engineer with expertise in building scalable betting platforms and real-time analytics systems.",
      expertise: ["Betting Platforms", "Real-time Systems", "API Integration"],
    },
    {
      name: "Olivia Rodriguez",
      role: "UX/UI Design Lead",
      bio: "Award-winning designer focused on creating intuitive interfaces for sports betting applications.",
      expertise: ["Betting UX", "Mobile Design", "User Research"],
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Data Collection",
      description:
        "We gather comprehensive sports data including team stats, player performance, historical odds, and betting trends.",
    },
    {
      number: "02",
      title: "Analysis",
      description:
        "Our AI systems analyze the data to identify patterns, trends, and potential betting opportunities across markets.",
    },
    {
      number: "03",
      title: "Model Development",
      description:
        "We build and train sophisticated prediction models tailored to specific sports and betting markets.",
    },
    {
      number: "04",
      title: "Integration",
      description: "Our engineers seamlessly integrate these models into user-friendly interfaces and chatbots.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "We rigorously test our systems against historical data and real-world scenarios to ensure accuracy.",
    },
    {
      number: "06",
      title: "Continuous Improvement",
      description: "Our models are constantly updated with new data and refined to improve prediction accuracy.",
    },
  ]

  // Rotating AI agent roles for hero section
  // Rotating AI agent roles for hero section
  const sportsBettingCapabilities = [
    "Trends Analysis Agents",
    "Travel Impact Agents",
    "Advanced Statistical Agents",
    "Predictive Modeling Agents",
    "Real-time Odds Agents",
    "Injury Insight Agents",
    "Strategy Synthesizer Agents",
    "Bankroll Management Agents",
  ]

  const featuredProjects = [
    {
      title: "MLB BettingBot",
      description:
        "An AI-powered chatbot that provides MLB betting insights, odds comparison, and personalized recommendations based on user preferences.",
      image: "/placeholder.svg?height=600&width=800&text=MLB%20BettingBot",
      client: "Sports Betting Platform",
      category: "ai-assistants",
      results: ["28% improvement in bet win rate", "35% increase in user engagement"],
    },
    {
      title: "Odds Comparison Engine",
      description:
        "Real-time odds comparison tool that aggregates data from multiple sportsbooks to find the best value for bettors.",
      image: "/placeholder.svg?height=600&width=800&text=Odds%20Comparison",
      client: "Sports Analytics Company",
      category: "sports-analytics",
      results: ["Users saved avg. 12% on odds", "89% user retention rate"],
    },
    {
      title: "Player Prop Analyzer",
      description:
        "Advanced analytics tool that evaluates player prop bets across multiple sports using historical data and current form.",
      image: "/placeholder.svg?height=600&width=800&text=Prop%20Analyzer",
      client: "Fantasy Sports Platform",
      category: "predictive-modeling",
      results: ["32% higher accuracy than market average", "4.8/5 user satisfaction rating"],
    },
  ]

  const technologies = [
    {
      category: "AI & Machine Learning",
      items: [
        "Deep Neural Networks",
        "Reinforcement Learning",
        "Ensemble Models",
        "Bayesian Inference",
        "Computer Vision",
      ],
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      category: "Sports Data Processing",
      items: [
        "Real-time Analytics",
        "Time Series Analysis",
        "Predictive Modeling",
        "Statistical Inference",
        "Feature Engineering",
      ],
      icon: <Database className="h-6 w-6" />,
    },
    {
      category: "Infrastructure",
      items: ["Distributed Computing", "GPU Acceleration", "Containerization", "Microservices", "Edge Computing"],
      icon: <Globe className="h-6 w-6" />,
    },
    {
      category: "Integration & Delivery",
      items: ["API Ecosystems", "WebSockets", "Mobile SDKs", "Automated Pipelines", "Real-time Notifications"],
      icon: <Code className="h-6 w-6" />,
    },
  ]

  const stats = [
    { value: "30+", label: "AI Agents Working in Parallel Per Prediction Cycle" },
    { value: "10,000+", label: "Game Data Points Analyzed Per Day" },
    { value: "1M+", label: "Historical Features Indexed for Trend Detection" },
    { value: "95%+", label: "Coverage on All Daily MLB Matchups" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Trophy className="h-6 w-6 text-purple-500 absolute animate-ping opacity-75" />
                <Trophy className="h-6 w-6 text-purple-500 relative" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                SharpEdge Bot
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-sm hover:text-purple-400 transition-colors">
                Solutions
              </a>
              <a href="#about" className="text-sm hover:text-purple-400 transition-colors">
                About
              </a>
              <Link href="/results" className="text-sm hover:text-purple-400 transition-colors">
                Results
              </Link>
              <Link href="/chatbot" className="text-sm hover:text-purple-400 transition-colors">
                MLB Bot
              </Link>
              <a href="#contact" className="text-sm hover:text-purple-400 transition-colors">
                Contact
              </a>
              <SignedOut>
                <Link href="/sign-in">
                  <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                    Get Started
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
            <nav className="flex flex-col items-center space-y-6 p-8">
              <a
                href="#solutions"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a
                href="#about"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
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
              <a
                href="#contact"
                className="text-lg hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
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

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20&text=.')] bg-repeat opacity-5"></div>

          {/* Particle Network Background */}
          <ParticleNetwork />
        </div>

        <motion.div style={{ opacity, scale }} className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Zap className="h-4 w-4 text-purple-400" />
              <span className="text-sm">AI-Powered Sports Betting Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-center">
              <span className="block">Smarter Betting Decisions</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Powered by AI
              </span>
            </h1>

            <div className="h-12 mt-6 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={animatedText}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl text-gray-300"
                >
                  <span className="text-purple-400 font-semibold">
                    {sportsBettingCapabilities[animatedText]}
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform analyzes vast amounts of sports data to provide you with intelligent betting insights and recommendations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chatbot">
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-6 text-lg h-auto group">
                  Launch MLB BettingBot
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg h-auto"
              >
                Learn More
              </Button>
            </div>
            {/* Hero CTAs moved to header */}

            {/* Trust badge */}
            <div className="mt-4 text-sm text-gray-400 flex justify-center space-x-2">
              <span>50K+ conversations</span>
              <span className="text-white/50">•</span>
              <span>4.1★ on GPT Store</span>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="animate-bounce">
                <ChevronRight className="h-8 w-8 rotate-90 text-white/50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-purple-900/30 to-black border-y border-white/10">
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

      {/* Services Section */}
      <section id="solutions" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Our Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sports Betting Intelligence</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive betting solutions designed to give you the edge using cutting-edge AI technology and data
              analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl hover:bg-zinc-800/80 transition-all hover:shadow-lg hover:shadow-purple-500/10 group"
              >
                <div className="text-purple-500 mb-6 transform transition-transform group-hover:scale-110 group-hover:text-cyan-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="mt-6">
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 group-hover:translate-x-1 transition-all"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/solutions/sports-analytics">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 to-black"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-purple-600/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30">Tech Stack</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-Edge Technologies</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build powerful, accurate sports betting prediction
              systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-3 rounded-full">
                    <div className="text-purple-400">{tech.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, idx) => (
                    <Badge key={idx} variant="outline" className="bg-zinc-800/50 border-white/10">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Our Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Betting Tools</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our innovative betting tools and see how they've helped users make more informed betting
              decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-white/10 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-purple-500/10 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-500/20 text-purple-300">
                      {project.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="space-y-1 mb-4">
                    {project.results.map((result, idx) => (
                      <p key={idx} className="text-sm text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {result}
                      </p>
                    ))}
                  </div>
                  <Link href="/portfolio" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                    View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                View All Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MLB Bot Highlight Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Featured Tool</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">MLB BettingBot</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our flagship AI assistant that provides personalized MLB betting insights, predictions, and
                recommendations.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full h-fit">
                    <BarChart3 className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                    <p className="text-gray-400">
                      Analyzes team performance, player stats, historical matchups, and current form to generate
                      accurate predictions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
                    <LineChart className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
                    <p className="text-gray-400">
                      Provides up-to-the-minute odds, line movements, injury updates, and weather conditions that might
                      affect games.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full h-fit">
                    <Percent className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Value Betting</h3>
                    <p className="text-gray-400">
                      Identifies betting opportunities where our predicted odds differ significantly from the market
                      odds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
                    <MessageSquare className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Conversational Interface</h3>
                    <p className="text-gray-400">
                      Ask questions in natural language and get instant, personalized betting advice and insights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/chatbot">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-4 text-lg h-auto">
                    Try MLB BettingBot Now
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-xl overflow-hidden border border-white/10"
            >
              <Image
                src="/placeholder.svg?height=1000&width=800&text=MLB%20BettingBot%20Preview"
                alt="MLB BettingBot Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-zinc-900/80 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">MLB BettingBot</div>
                      <p className="text-white">
                        The Yankees have a 62% chance to win tonight against the Red Sox. Their starting pitcher has a
                        2.1 ERA in his last 5 starts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SharpEdge Bot</h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine deep sports knowledge with advanced AI technology to help you make more informed betting
                decisions.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full h-fit">
                    <BarChart3 className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                    <p className="text-gray-400">
                      Our predictions are based on comprehensive data analysis, not hunches or biases.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
                    <Code className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced AI Models</h3>
                    <p className="text-gray-400">
                      We use sophisticated machine learning algorithms that continuously improve with new data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full h-fit">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-400">
                      Our prediction models consistently outperform industry benchmarks and traditional handicapping
                      methods.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
                    <Shield className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Responsible Betting</h3>
                    <p className="text-gray-400">
                      We promote responsible gambling practices and provide tools for bankroll management.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl shadow-lg shadow-purple-500/5"
              >
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500 min-h-[120px]"
                      placeholder="Tell us about your betting needs..."
                    ></Textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white",
                      isSubmitting && "opacity-70 cursor-not-allowed",
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-y border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg h-auto">
              View Our Solutions
            </Button>
          </div>
        </div>
      </section>

      <Toaster />

      {/* Add custom styles for animations */}
      {/* @ts-ignore */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}
