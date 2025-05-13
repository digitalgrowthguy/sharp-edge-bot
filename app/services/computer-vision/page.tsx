import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Eye, Scan, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Computer Vision Services | Agile Bots",
  description: "Advanced computer vision solutions for image recognition, object detection, and visual data analysis.",
}

const services = [
  {
    title: "Image Recognition & Classification",
    description:
      "Our image recognition systems can identify and categorize objects, scenes, and patterns in images with high accuracy, enabling automated visual data processing.",
    features: [
      "Multi-label classification",
      "Fine-grained recognition",
      "Scene understanding",
      "Visual attribute detection",
      "Custom model training",
    ],
  },
  {
    title: "Object Detection & Tracking",
    description:
      "We develop systems that can detect, locate, and track multiple objects in images and videos, providing spatial awareness for various applications.",
    features: [
      "Real-time object detection",
      "Multi-object tracking",
      "Spatial relationship analysis",
      "Motion prediction",
      "Anomaly detection",
    ],
  },
  {
    title: "Facial Recognition & Analysis",
    description:
      "Our facial recognition technology can identify individuals, verify identity, and analyze facial attributes while maintaining privacy and security.",
    features: [
      "Face detection and recognition",
      "Facial attribute analysis",
      "Expression recognition",
      "Age and gender estimation",
      "Privacy-preserving implementation",
    ],
  },
  {
    title: "Document & OCR Processing",
    description:
      "We build intelligent document processing systems that can extract text, data, and insights from documents, forms, receipts, and more.",
    features: [
      "Optical Character Recognition (OCR)",
      "Document layout analysis",
      "Form data extraction",
      "Handwriting recognition",
      "Document classification",
    ],
  },
]

const industries = [
  {
    name: "Retail",
    applications: [
      "Visual search and product recognition",
      "Shelf monitoring and inventory management",
      "Customer behavior analysis",
      "Cashierless checkout systems",
      "Anti-theft and security",
    ],
  },
  {
    name: "Manufacturing",
    applications: [
      "Quality control and defect detection",
      "Assembly line monitoring",
      "Safety compliance verification",
      "Equipment maintenance prediction",
      "Process optimization",
    ],
  },
  {
    name: "Healthcare",
    applications: [
      "Medical image analysis",
      "Patient monitoring",
      "Surgical assistance",
      "Diagnostic support",
      "Medication adherence verification",
    ],
  },
  {
    name: "Security",
    applications: [
      "Surveillance and monitoring",
      "Access control systems",
      "Anomaly and threat detection",
      "Crowd analysis",
      "Forensic investigation",
    ],
  },
]

const benefits = [
  {
    title: "Automation of Visual Tasks",
    description: "Reduce manual effort and human error by automating visual inspection and analysis processes.",
  },
  {
    title: "Enhanced Decision Making",
    description: "Gain valuable insights from visual data to inform business decisions and strategies.",
  },
  {
    title: "Improved Efficiency",
    description: "Process large volumes of visual data quickly and accurately, saving time and resources.",
  },
  {
    title: "Increased Safety & Security",
    description: "Enhance security systems and safety monitoring with intelligent visual analysis.",
  },
  {
    title: "New Customer Experiences",
    description: "Create innovative, engaging customer experiences through visual interaction technologies.",
  },
  {
    title: "Competitive Advantage",
    description: "Leverage cutting-edge computer vision to differentiate your products and services.",
  },
]

const caseStudies = [
  {
    title: "Retail Inventory Management",
    description:
      "Developed a computer vision system for a retail chain that automatically monitors shelf stock levels, detects misplaced items, and generates restocking alerts, reducing out-of-stock incidents by 35%.",
    industry: "Retail",
  },
  {
    title: "Manufacturing Quality Control",
    description:
      "Created an AI-powered visual inspection system for a manufacturing company that detects defects with 99.7% accuracy, reducing quality control costs by 40% and improving product quality.",
    industry: "Manufacturing",
  },
  {
    title: "Security Surveillance Enhancement",
    description:
      "Implemented an intelligent surveillance system for a corporate campus that identifies potential security threats, unauthorized access, and unusual behavior, improving security response times by 60%.",
    industry: "Security",
  },
]

export default function ComputerVisionPage() {
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
              <Eye className="h-6 w-6 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Computer Vision</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Advanced computer vision solutions that analyze, interpret, and extract meaningful information from visual
            data to drive business value.
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
                <h2 className="text-3xl font-bold mb-6">Unlock the Power of Visual Data</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Computer vision technology enables machines to "see" and interpret the visual world, extracting
                  valuable insights from images and videos that can transform your business operations and customer
                  experiences.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Our computer vision solutions leverage state-of-the-art deep learning models and algorithms to deliver
                  highly accurate, scalable systems that can be deployed across a wide range of industries and
                  applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                    Explore Solutions
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    View Demo
                  </Button>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200&text=Computer%20Vision"
                  alt="Computer Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Computer Vision Services</h2>
            <Tabs defaultValue="image-recognition-classification" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-zinc-900/50 p-1 mb-8">
                <TabsTrigger value="image-recognition-classification">Image Recognition</TabsTrigger>
                <TabsTrigger value="object-detection-tracking">Object Detection</TabsTrigger>
                <TabsTrigger value="facial-recognition-analysis">Facial Analysis</TabsTrigger>
                <TabsTrigger value="document-ocr-processing">Document & OCR</TabsTrigger>
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

          {/* Industries Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10">
                  <CardHeader>
                    <CardTitle>{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.applications.map((application, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-300">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technology Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Computer Vision Technology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                    <Eye className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle>Deep Learning Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <p className="mb-4">
                      We utilize state-of-the-art deep learning architectures to build highly accurate and efficient
                      computer vision models.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Convolutional Neural Networks (CNNs)</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Vision Transformers</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>YOLO and SSD architectures</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Transfer learning and fine-tuning</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-4">
                    <Scan className="h-6 w-6 text-cyan-400" />
                  </div>
                  <CardTitle>Edge & Cloud Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <p className="mb-4">
                      We offer flexible deployment options to meet your performance, latency, and connectivity
                      requirements.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Edge device optimization</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Model quantization and compression</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Scalable cloud processing</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>Hybrid edge-cloud solutions</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10">
                <CardHeader>
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle>Privacy & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    <p className="mb-4">
                      We prioritize privacy and security in all our computer vision solutions, ensuring compliance with
                      regulations and best practices.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Privacy-preserving techniques</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Data anonymization</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Secure data handling</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                        <span>Ethical AI implementation</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Computer Vision</h2>
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
            <h2 className="text-2xl font-bold mb-4">Ready to Harness the Power of Visual Data?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our computer vision solutions can help you automate processes, gain
              insights, and create new opportunities for your business.
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
