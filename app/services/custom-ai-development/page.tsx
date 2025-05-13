import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Code, Database, Layers } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Custom AI Development | Agile Bots",
  description: "Bespoke AI solutions tailored to your specific business needs and challenges.",
}

const services = [
  {
    title: "Machine Learning Models",
    description:
      "Custom machine learning models designed to solve your specific business problems, from predictive analytics to recommendation systems.",
    features: [
      "Supervised and unsupervised learning",
      "Deep learning and neural networks",
      "Transfer learning and fine-tuning",
      "Reinforcement learning",
      "Ensemble methods",
    ],
  },
  {
    title: "Natural Language Processing",
    description:
      "Advanced NLP solutions that enable your systems to understand, interpret, and generate human language with remarkable accuracy.",
    features: [
      "Text classification and sentiment analysis",
      "Named entity recognition",
      "Question answering systems",
      "Text summarization",
      "Language generation and chatbots",
    ],
  },
  {
    title: "Computer Vision",
    description:
      "Sophisticated computer vision systems that can analyze, interpret, and extract meaningful information from visual data.",
    features: [
      "Object detection and recognition",
      "Image classification",
      "Facial recognition",
      "Optical character recognition (OCR)",
      "Video analysis and tracking",
    ],
  },
  {
    title: "Recommendation Systems",
    description:
      "Intelligent recommendation engines that deliver personalized suggestions to enhance user experience and drive engagement.",
    features: [
      "Collaborative filtering",
      "Content-based filtering",
      "Hybrid recommendation systems",
      "Real-time personalization",
      "Multi-criteria recommendation",
    ],
  },
]

const developmentProcess = [
  {
    number: "01",
    title: "Requirements Analysis",
    description:
      "We work closely with you to understand your business objectives, technical requirements, and constraints to define the scope of the AI solution.",
  },
  {
    number: "02",
    title: "Data Assessment",
    description:
      "Our team evaluates your data sources, quality, and volume to determine the feasibility of your AI project and identify any data preparation needs.",
  },
  {
    number: "03",
    title: "Solution Design",
    description:
      "We design a custom AI architecture tailored to your specific requirements, selecting the most appropriate algorithms and technologies.",
  },
  {
    number: "04",
    title: "Development & Training",
    description:
      "Our engineers develop and train the AI models using your data, iteratively refining them to achieve optimal performance.",
  },
  {
    number: "05",
    title: "Testing & Validation",
    description:
      "We rigorously test the AI solution against various scenarios to ensure accuracy, reliability, and robustness in real-world conditions.",
  },
  {
    number: "06",
    title: "Deployment & Integration",
    description:
      "We deploy the AI solution in your environment and integrate it with your existing systems and workflows for seamless operation.",
  },
  {
    number: "07",
    title: "Monitoring & Optimization",
    description:
      "Our team continuously monitors the performance of your AI solution and makes necessary adjustments to maintain and improve its effectiveness.",
  },
  {
    number: "08",
    title: "Knowledge Transfer",
    description:
      "We provide comprehensive documentation and training to ensure your team can effectively manage and utilize the AI solution.",
  },
]

const caseStudies = [
  {
    title: "E-commerce Personalization Engine",
    description:
      "Developed a custom recommendation system for an e-commerce platform that increased conversion rates by 35% and average order value by 28%.",
    industry: "Retail",
  },
  {
    title: "Automated Document Processing",
    description:
      "Built an intelligent document processing system for a financial institution that reduced manual processing time by 80% and improved accuracy by 95%.",
    industry: "Finance",
  },
  {
    title: "Predictive Maintenance Solution",
    description:
      "Created a machine learning system for a manufacturing company that predicted equipment failures with 92% accuracy, reducing downtime by 45%.",
    industry: "Manufacturing",
  },
]

export default function CustomAIDevelopmentPage() {
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
              <Code className="h-6 w-6 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Custom AI Development</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Bespoke AI solutions tailored to your specific business needs, challenges, and objectives.
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
                <h2 className="text-3xl font-bold mb-6">Tailored AI Solutions</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Off-the-shelf AI products often fall short of addressing the unique challenges and opportunities of
                  your business. Our custom AI development services deliver solutions precisely engineered to your
                  specific requirements.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  With expertise across machine learning, natural language processing, computer vision, and more, our
                  team builds AI systems that integrate seamlessly with your existing infrastructure and deliver
                  measurable business value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                    Discuss Your Project
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    View Portfolio
                  </Button>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200&text=Custom%20AI%20Development"
                  alt="Custom AI Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Custom AI Services</h2>
            <Tabs defaultValue="machine-learning" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-zinc-900/50 p-1 mb-8">
                <TabsTrigger value="machine-learning">Machine Learning</TabsTrigger>
                <TabsTrigger value="nlp">NLP</TabsTrigger>
                <TabsTrigger value="computer-vision">Computer Vision</TabsTrigger>
                <TabsTrigger value="recommendation">Recommendation</TabsTrigger>
              </TabsList>
              {services.map((service, index) => (
                <TabsContent key={index} value={service.title.toLowerCase().replace(/\s+/g, "-")}>
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

          {/* Development Process Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentProcess.slice(0, 4).map((step, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-black font-bold">
                    {step.number}
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {developmentProcess.slice(4).map((step, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-black font-bold">
                    {step.number}
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                    <Code className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle>AI Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>TensorFlow & Keras</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>PyTorch</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Scikit-learn</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Hugging Face Transformers</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>OpenCV</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-4">
                    <Database className="h-6 w-6 text-cyan-400" />
                  </div>
                  <CardTitle>Data Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Apache Spark</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Apache Kafka</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>MongoDB</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>PostgreSQL</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>AWS/GCP/Azure Data Services</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                    <Layers className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle>Deployment & MLOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Docker & Kubernetes</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>MLflow</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Kubeflow</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>TensorFlow Serving</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>NVIDIA Triton</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
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
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Custom AI Solution?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and discover how our custom AI development services
              can help you achieve your business objectives.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8">
              Start Your Project
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
