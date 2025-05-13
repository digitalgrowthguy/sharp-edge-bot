import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Brain, CheckCircle, ChevronRight, Lightbulb, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "AI Strategy Services | Agile Bots",
  description: "Develop a comprehensive AI strategy to transform your business and drive innovation.",
}

const benefits = [
  {
    title: "Competitive Advantage",
    description: "Identify unique opportunities to leverage AI for differentiation in your market.",
  },
  {
    title: "Operational Efficiency",
    description: "Streamline processes and reduce costs through strategic AI implementation.",
  },
  {
    title: "Innovation Acceleration",
    description: "Fast-track product and service innovation with AI-driven insights and capabilities.",
  },
  {
    title: "Risk Mitigation",
    description: "Develop a responsible AI framework to address ethical, legal, and regulatory concerns.",
  },
  {
    title: "Data Monetization",
    description: "Unlock new revenue streams by extracting value from your existing data assets.",
  },
  {
    title: "Future-Proofing",
    description: "Prepare your organization for evolving AI technologies and market disruptions.",
  },
]

const caseStudies = [
  {
    title: "Retail Giant Transformation",
    description:
      "Developed a comprehensive AI strategy that helped a major retailer improve inventory management, personalize customer experiences, and optimize pricing, resulting in a 15% increase in revenue.",
  },
  {
    title: "Healthcare Provider Modernization",
    description:
      "Created an AI roadmap for a healthcare network that streamlined patient care, improved diagnostic accuracy, and enhanced operational efficiency, reducing costs by 22%.",
  },
  {
    title: "Financial Services Innovation",
    description:
      "Designed an AI strategy for a financial institution that improved fraud detection, automated customer service, and enhanced risk assessment, increasing customer satisfaction by 30%.",
  },
]

export default function AIStrategyPage() {
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
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 p-3 rounded-full">
              <Brain className="h-6 w-6 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI Strategy</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Develop a comprehensive AI strategy to transform your business, drive innovation, and create sustainable
            competitive advantage.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Strategic AI Transformation</h2>
                <p className="text-lg text-gray-300 mb-6">
                  In today's rapidly evolving business landscape, artificial intelligence is no longer optional—it's
                  imperative. Our AI Strategy services help organizations navigate the complex AI landscape and develop
                  a clear roadmap for implementation.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  We work closely with your leadership team to understand your business objectives, assess your current
                  capabilities, and identify high-impact opportunities for AI adoption. The result is a comprehensive
                  strategy that aligns AI initiatives with your business goals and delivers measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200&text=AI%20Strategy"
                  alt="AI Strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Our Approach Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Strategic Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                    <Target className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle>Discovery & Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Business objectives alignment</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Current capabilities assessment</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Data landscape evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Competitive analysis</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Opportunity identification</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-4">
                    <Lightbulb className="h-6 w-6 text-cyan-400" />
                  </div>
                  <CardTitle>Strategy Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>AI vision and mission creation</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Use case prioritization</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Technology stack recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Data strategy alignment</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Ethical AI framework development</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle>Implementation Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Phased implementation plan</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Resource requirements</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Timeline and milestones</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>ROI and success metrics</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Change management strategy</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Strategic AI Planning</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl hover:bg-zinc-900 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-purple-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10">
                  <CardHeader>
                    <CardTitle>{caseStudy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{caseStudy.description}</CardDescription>
                    <Link
                      href="#"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 mt-4 text-sm"
                    >
                      Read full case study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with our AI strategy experts to discuss how we can help you leverage artificial
              intelligence to drive innovation and growth.
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
