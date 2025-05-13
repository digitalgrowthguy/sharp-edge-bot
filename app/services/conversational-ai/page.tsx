import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, MessageSquare, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Conversational AI Services | Agile Bots",
  description: "Create intelligent chatbots and virtual assistants that provide exceptional customer experiences.",
}

const services = [
  {
    title: "Customer Service Chatbots",
    description:
      "Intelligent virtual assistants that handle customer inquiries, provide support, and resolve issues 24/7, reducing wait times and improving satisfaction.",
    features: [
      "Natural language understanding",
      "Multi-channel deployment",
      "Seamless human handoff",
      "Knowledge base integration",
      "Continuous learning and improvement",
    ],
  },
  {
    title: "Sales & Marketing Assistants",
    description:
      "Conversational agents that engage prospects, qualify leads, recommend products, and guide customers through the purchase journey.",
    features: [
      "Personalized product recommendations",
      "Lead qualification and scoring",
      "Appointment scheduling",
      "Promotional campaign management",
      "Purchase assistance and upselling",
    ],
  },
  {
    title: "Internal Support Bots",
    description:
      "AI assistants that help employees access information, complete tasks, and navigate internal systems, improving productivity and reducing support costs.",
    features: [
      "IT helpdesk automation",
      "HR policy and benefits assistance",
      "Knowledge management",
      "Process guidance and automation",
      "Employee onboarding support",
    ],
  },
  {
    title: "Voice Assistants",
    description:
      "Voice-enabled AI systems that provide hands-free interaction for applications in various industries, from healthcare to automotive.",
    features: [
      "Speech recognition and synthesis",
      "Voice biometrics and authentication",
      "Multi-language support",
      "Ambient computing integration",
      "Accessibility features",
    ],
  },
]

const benefits = [
  {
    title: "24/7 Availability",
    description: "Provide round-the-clock service to customers without increasing staffing costs.",
  },
  {
    title: "Reduced Wait Times",
    description: "Handle multiple conversations simultaneously, eliminating customer queues.",
  },
  {
    title: "Consistent Experience",
    description: "Deliver uniform responses and service quality across all customer interactions.",
  },
  {
    title: "Scalable Support",
    description: "Easily scale to handle volume spikes without additional resources.",
  },
  {
    title: "Cost Efficiency",
    description: "Reduce operational costs while maintaining or improving service quality.",
  },
  {
    title: "Data-Driven Insights",
    description: "Gain valuable insights from conversation analytics to improve products and services.",
  },
]

const caseStudies = [
  {
    title: "Retail Customer Service Transformation",
    description:
      "Implemented an omnichannel customer service chatbot for a major retailer, handling 75% of inquiries without human intervention and reducing response times by 90%.",
    industry: "Retail",
  },
  {
    title: "Banking Virtual Assistant",
    description:
      "Developed a secure banking assistant that helps customers check balances, transfer funds, and resolve issues, resulting in a 35% reduction in call center volume.",
    industry: "Financial Services",
  },
  {
    title: "Healthcare Patient Support",
    description:
      "Created a HIPAA-compliant conversational AI system that assists patients with appointment scheduling, medication reminders, and basic health questions.",
    industry: "Healthcare",
  },
]

export default function ConversationalAIPage() {
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
              <MessageSquare className="h-6 w-6 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Conversational AI</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Create intelligent chatbots and virtual assistants that provide exceptional customer experiences and
            streamline business operations.
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
                <h2 className="text-3xl font-bold mb-6">Transform Customer Interactions</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Conversational AI is revolutionizing how businesses interact with customers and employees. Our
                  advanced chatbots and virtual assistants go beyond simple rule-based responses to deliver natural,
                  engaging conversations that solve real problems.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  We leverage the latest advancements in natural language processing, machine learning, and dialogue
                  management to create intelligent conversational agents that understand context, learn from
                  interactions, and continuously improve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                    Schedule a Demo
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    Explore Use Cases
                  </Button>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200&text=Conversational%20AI"
                  alt="Conversational AI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Conversational AI Services</h2>
            <Tabs defaultValue="customer-service-chatbots" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-zinc-900/50 p-1 mb-8">
                <TabsTrigger value="customer-service-chatbots">Customer Service</TabsTrigger>
                <TabsTrigger value="sales-marketing-assistants">Sales & Marketing</TabsTrigger>
                <TabsTrigger value="internal-support-bots">Internal Support</TabsTrigger>
                <TabsTrigger value="voice-assistants">Voice Assistants</TabsTrigger>
              </TabsList>
              {services.map((service, index) => (
                <TabsContent key={index} value={service.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=600&width=800&text=${encodeURIComponent(service.title)}`}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* Technologies Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Conversational AI Technology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                    <MessageSquare className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle>Natural Language Understanding</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <p className="mb-4">
                      Our conversational AI systems use advanced NLU to accurately interpret user intent, extract
                      entities, and understand context, even in complex conversations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Intent recognition</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Entity extraction</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Sentiment analysis</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Contextual understanding</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-4">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <CardTitle>Dialogue Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <p className="mb-4">
                      Our dialogue management systems maintain conversation state, handle multi-turn interactions, and
                      guide users toward their goals efficiently.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>State tracking</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Dynamic conversation flows</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Contextual responses</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Fallback handling</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle>Integration & Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <p className="mb-4">
                      We seamlessly integrate conversational AI with your existing systems and deploy across multiple
                      channels to provide a consistent experience.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>CRM integration</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Multi-channel deployment</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>API connectivity</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Analytics and reporting</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Conversational AI</h2>
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
                    <div className="text-sm text-purple-400 mb-2">{caseStudy.industry}</div>
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
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Customer Experience?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our conversational AI solutions can help you improve customer
              satisfaction, reduce costs, and drive business growth.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8">
              Schedule a Consultation
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
