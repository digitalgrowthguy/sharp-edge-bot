import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Database, LineChart, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Data Engineering Services | Agile Bots",
  description: "Design and implement robust data pipelines and infrastructure to power your AI initiatives.",
}

const services = [
  {
    title: "Data Pipeline Development",
    description:
      "We design and build scalable, reliable data pipelines that automate the collection, processing, and storage of data from various sources.",
    icon: <Server className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "Data Warehouse Implementation",
    description:
      "Our team implements modern data warehouse solutions that consolidate data from disparate sources for efficient analysis and reporting.",
    icon: <Database className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "ETL/ELT Process Design",
    description:
      "We develop efficient Extract, Transform, Load (ETL) or Extract, Load, Transform (ELT) processes tailored to your specific data needs.",
    icon: <ArrowRight className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "Real-time Data Processing",
    description:
      "We implement stream processing solutions that enable real-time data analysis and decision-making for time-sensitive applications.",
    icon: <LineChart className="h-10 w-10 text-purple-400" />,
  },
]

const technologies = [
  {
    category: "Data Processing",
    tools: ["Apache Spark", "Apache Kafka", "Apache Airflow", "AWS Glue", "Google Dataflow", "Azure Data Factory"],
  },
  {
    category: "Data Storage",
    tools: [
      "Amazon S3",
      "Google Cloud Storage",
      "Azure Blob Storage",
      "MongoDB",
      "PostgreSQL",
      "Snowflake",
      "Amazon Redshift",
      "Google BigQuery",
    ],
  },
  {
    category: "Data Orchestration",
    tools: ["Apache Airflow", "Prefect", "Dagster", "AWS Step Functions", "Google Cloud Composer"],
  },
  {
    category: "Stream Processing",
    tools: ["Apache Kafka", "Apache Flink", "AWS Kinesis", "Google Pub/Sub", "Azure Event Hubs"],
  },
]

const benefits = [
  {
    title: "Improved Data Quality",
    description: "Ensure your AI models are trained on clean, consistent, and reliable data.",
  },
  {
    title: "Increased Efficiency",
    description: "Automate data workflows to reduce manual effort and accelerate time-to-insight.",
  },
  {
    title: "Enhanced Scalability",
    description: "Build data infrastructure that can grow with your business and handle increasing data volumes.",
  },
  {
    title: "Real-time Capabilities",
    description: "Enable real-time data processing for time-sensitive applications and immediate insights.",
  },
  {
    title: "Cost Optimization",
    description: "Design efficient data architectures that minimize storage and processing costs.",
  },
  {
    title: "Future-Proof Solutions",
    description: "Implement flexible data systems that can adapt to evolving business needs and technologies.",
  },
]

const caseStudies = [
  {
    title: "Retail Data Transformation",
    description:
      "Designed and implemented a comprehensive data pipeline for a retail chain, consolidating data from 500+ stores and enabling real-time inventory management and sales analytics.",
  },
  {
    title: "Healthcare Data Integration",
    description:
      "Built a secure, HIPAA-compliant data infrastructure for a healthcare provider, integrating patient records, medical imaging, and IoT device data for improved patient care.",
  },
  {
    title: "Financial Services Data Platform",
    description:
      "Developed a scalable data platform for a financial institution that processes millions of transactions daily, enabling fraud detection and personalized customer insights.",
  },
]

export default function DataEngineeringPage() {
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
              <Database className="h-6 w-6 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Data Engineering</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Design and implement robust data pipelines and infrastructure to power your AI initiatives and drive
            data-informed decision making.
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
                <h2 className="text-3xl font-bold mb-6">Building the Foundation for AI Success</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Effective data engineering is the foundation of successful AI initiatives. Without reliable, clean,
                  and accessible data, even the most sophisticated AI models will fail to deliver value.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Our data engineering services focus on designing and implementing the infrastructure, pipelines, and
                  processes needed to collect, store, process, and deliver data for your AI applications and analytics
                  needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                    Discuss Your Data Needs
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200&text=Data%20Engineering"
                  alt="Data Engineering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Data Engineering Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10">
                  <CardHeader>
                    <CardTitle>{tech.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tech.tools.map((tool, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-300">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Data Engineering</h2>
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

          {/* Process Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Data Engineering Process</h2>
            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 transform -translate-x-1/2 hidden md:block"></div>

              {/* Process Steps */}
              <div className="space-y-16 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">1. Assessment & Discovery</h3>
                      <p className="text-gray-400">
                        We analyze your current data landscape, identify sources, understand business requirements, and
                        assess existing infrastructure.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block"></div>
                  <div>
                    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">2. Architecture Design</h3>
                      <p className="text-gray-400">
                        We design a scalable, efficient data architecture tailored to your specific needs, selecting
                        appropriate technologies and tools.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">3. Pipeline Development</h3>
                      <p className="text-gray-400">
                        We build robust data pipelines that automate the extraction, transformation, and loading of data
                        from various sources.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block"></div>
                  <div>
                    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">4. Data Quality & Governance</h3>
                      <p className="text-gray-400">
                        We implement data quality checks, validation processes, and governance frameworks to ensure data
                        integrity and compliance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">5. Deployment & Integration</h3>
                      <p className="text-gray-400">
                        We deploy the data infrastructure and integrate it with your existing systems, ensuring seamless
                        data flow across your organization.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block"></div>
                  <div>
                    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">6. Monitoring & Optimization</h3>
                      <p className="text-gray-400">
                        We set up monitoring systems to track performance and continuously optimize your data
                        infrastructure for efficiency and reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Data Foundation?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our data engineering services can help you build the robust data
              infrastructure needed to power your AI and analytics initiatives.
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
