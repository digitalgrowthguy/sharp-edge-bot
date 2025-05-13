import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Brain, Code, Database, ExternalLink, Filter, MessageSquare, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Portfolio | Agile Bots",
  description: "Explore our AI projects and success stories across various industries.",
}

const projects = [
  {
    title: "Retail Inventory Management System",
    description:
      "An AI-powered inventory management system that uses computer vision to track stock levels, predict demand, and automate reordering.",
    image: "/placeholder.svg?height=600&width=800&text=Retail%20Inventory%20System",
    client: "Global Retail Chain",
    category: "computer-vision",
    technologies: ["Computer Vision", "Predictive Analytics", "Cloud Infrastructure"],
    results: [
      "35% reduction in out-of-stock incidents",
      "28% decrease in inventory holding costs",
      "42% improvement in inventory turnover",
    ],
  },
  {
    title: "Financial Services Chatbot",
    description:
      "An intelligent virtual assistant for a major financial institution that handles customer inquiries, account management, and transaction support.",
    image: "/placeholder.svg?height=600&width=800&text=Financial%20Chatbot",
    client: "Leading Bank",
    category: "conversational-ai",
    technologies: ["Natural Language Processing", "Machine Learning", "Secure API Integration"],
    results: [
      "85% of customer inquiries resolved without human intervention",
      "Customer satisfaction increased by 32%",
      "Average response time reduced from 15 minutes to 10 seconds",
    ],
  },
  {
    title: "Predictive Maintenance Platform",
    description:
      "A machine learning system that predicts equipment failures before they occur, enabling proactive maintenance and minimizing downtime.",
    image: "/placeholder.svg?height=600&width=800&text=Predictive%20Maintenance",
    client: "Manufacturing Company",
    category: "data-engineering",
    technologies: ["IoT Sensors", "Time Series Analysis", "Anomaly Detection"],
    results: [
      "92% accuracy in predicting equipment failures",
      "45% reduction in unplanned downtime",
      "Annual maintenance costs reduced by $2.4M",
    ],
  },
  {
    title: "Healthcare Patient Monitoring",
    description:
      "An AI system that monitors patient vital signs and medical data to predict adverse events and alert healthcare providers before critical situations develop.",
    image: "/placeholder.svg?height=600&width=800&text=Patient%20Monitoring",
    client: "Regional Hospital Network",
    category: "ai-strategy",
    technologies: ["Real-time Analytics", "Medical Data Processing", "Alert Systems"],
    results: [
      "Early detection of patient deterioration improved by 64%",
      "Average length of ICU stay reduced by 2.3 days",
      "Estimated 120 lives saved in first year of deployment",
    ],
  },
  {
    title: "E-commerce Recommendation Engine",
    description:
      "A sophisticated recommendation system that analyzes customer behavior, purchase history, and product attributes to deliver highly personalized product suggestions.",
    image: "/placeholder.svg?height=600&width=800&text=Recommendation%20Engine",
    client: "Online Marketplace",
    category: "custom-ai",
    technologies: ["Collaborative Filtering", "Deep Learning", "Behavioral Analysis"],
    results: [
      "35% increase in conversion rate",
      "28% higher average order value",
      "42% improvement in customer engagement metrics",
    ],
  },
  {
    title: "Supply Chain Optimization",
    description:
      "An end-to-end supply chain optimization platform that uses AI to forecast demand, optimize inventory, and streamline logistics operations.",
    image: "/placeholder.svg?height=600&width=800&text=Supply%20Chain%20AI",
    client: "Global Logistics Provider",
    category: "data-engineering",
    technologies: ["Predictive Analytics", "Optimization Algorithms", "Digital Twin Modeling"],
    results: [
      "22% reduction in logistics costs",
      "18% improvement in on-time delivery",
      "30% decrease in safety stock requirements",
    ],
  },
]

const testimonials = [
  {
    quote:
      "Agile Bots transformed our customer service operations with their conversational AI solution. The implementation was smooth, and the results exceeded our expectations.",
    name: "Sarah Johnson",
    title: "CTO, Leading Bank",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The predictive maintenance system developed by Agile Bots has revolutionized our manufacturing operations. We've seen dramatic reductions in downtime and maintenance costs.",
    name: "Michael Chen",
    title: "VP of Operations, Manufacturing Company",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Agile Bots on our AI strategy was a game-changer. Their expertise and strategic guidance helped us identify the right opportunities and implement solutions that delivered real business value.",
    name: "Emily Rodriguez",
    title: "Chief Innovation Officer, Healthcare Network",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function PortfolioPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our successful AI projects and discover how we've helped businesses across various industries
            transform their operations and achieve remarkable results.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Project Categories */}
          <section className="mb-16">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <div className="flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-gray-400" />
                  <TabsList className="bg-zinc-900/50">
                    <TabsTrigger value="all">All Projects</TabsTrigger>
                    <TabsTrigger value="computer-vision">Computer Vision</TabsTrigger>
                    <TabsTrigger value="conversational-ai">Conversational AI</TabsTrigger>
                    <TabsTrigger value="data-engineering">Data Engineering</TabsTrigger>
                    <TabsTrigger value="ai-strategy">AI Strategy</TabsTrigger>
                    <TabsTrigger value="custom-ai">Custom AI</TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>

              {["computer-vision", "conversational-ai", "data-engineering", "ai-strategy", "custom-ai"].map(
                (category) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {projects
                        .filter((project) => project.category === category)
                        .map((project, index) => (
                          <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                  </TabsContent>
                ),
              )}
            </Tabs>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
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
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Retail", icon: <Tag className="h-10 w-10" /> },
                { name: "Finance", icon: <Database className="h-10 w-10" /> },
                { name: "Healthcare", icon: <Brain className="h-10 w-10" /> },
                { name: "Manufacturing", icon: <Code className="h-10 w-10" /> },
                { name: "Logistics", icon: <ArrowRight className="h-10 w-10" /> },
                { name: "Technology", icon: <MessageSquare className="h-10 w-10" /> },
                { name: "Energy", icon: <Database className="h-10 w-10" /> },
                { name: "Education", icon: <Brain className="h-10 w-10" /> },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl hover:bg-zinc-900 transition-colors text-center"
                >
                  <div className="flex justify-center text-purple-400 mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our AI solutions can help you achieve your business objectives and stay
              ahead of the competition.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8">
              Get Started
            </Button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Agile Bots. All rights reserved.{" "}
            <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="bg-zinc-900/50 border-white/10 overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
            {project.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </Badge>
          <div className="text-xs text-gray-400">{project.client}</div>
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-400 mb-4">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-zinc-800/50 border-white/10">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="space-y-1">
          {project.results.map((result, index) => (
            <p key={index} className="text-sm text-gray-300 flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              {result}
            </p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="outline"
          className="w-full border-white/10 hover:bg-white/10 flex items-center justify-center gap-2"
        >
          View Project Details <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
