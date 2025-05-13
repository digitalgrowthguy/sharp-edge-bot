import Link from "next/link"
import { ArrowLeft, Building, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Careers | Agile Bots",
  description: "Join our team of AI experts and help shape the future of artificial intelligence.",
}

const jobOpenings = [
  {
    title: "Senior AI Engineer",
    location: "Los Angeles, CA (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description:
      "We're looking for a Senior AI Engineer to join our team and help build cutting-edge AI solutions for our clients.",
  },
  {
    title: "Machine Learning Researcher",
    location: "Remote",
    type: "Full-time",
    department: "Research",
    description:
      "Join our research team to explore and implement the latest advancements in machine learning and deep learning.",
  },
  {
    title: "Data Scientist",
    location: "Dubai, UAE",
    type: "Full-time",
    department: "Data Science",
    description:
      "Help our clients extract valuable insights from their data and build predictive models to drive business decisions.",
  },
  {
    title: "AI Product Manager",
    location: "Los Angeles, CA",
    type: "Full-time",
    department: "Product",
    description:
      "Lead the development of AI products from conception to launch, working closely with engineering and design teams.",
  },
  {
    title: "UX/UI Designer for AI Interfaces",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    description: "Design intuitive and engaging user interfaces for AI-powered applications and conversational agents.",
  },
]

const benefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and equity packages to attract and retain top talent.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
  },
  {
    title: "Flexible Work",
    description: "Remote-friendly culture with flexible hours and work-from-home options.",
  },
  {
    title: "Professional Development",
    description: "Budget for conferences, courses, and learning resources to help you grow.",
  },
  {
    title: "Paid Time Off",
    description: "Generous vacation policy, sick leave, and paid holidays to ensure work-life balance.",
  },
  {
    title: "Cutting-Edge Projects",
    description: "Work on innovative AI projects that push the boundaries of what's possible.",
  },
]

export default function CareersPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We're building a team of exceptional individuals who are passionate about AI and its potential to transform
            businesses and industries.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Our Culture Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Our Culture</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  At Agile Bots, we foster a culture of innovation, collaboration, and continuous learning. We believe
                  that the best ideas come from diverse perspectives and open communication.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Our team members are encouraged to experiment, take calculated risks, and learn from both successes
                  and failures. We celebrate achievements together and support each other through challenges.
                </p>
                <p className="text-lg text-gray-300">
                  If you're passionate about AI, eager to learn, and want to work on meaningful projects that make a
                  real impact, we'd love to hear from you.
                </p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-purple-500/20 p-2 rounded-full mr-4 mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Innovation</h4>
                      <p className="text-gray-400">
                        We push the boundaries of what's possible with AI and are not afraid to explore new approaches.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500/20 p-2 rounded-full mr-4 mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Excellence</h4>
                      <p className="text-gray-400">
                        We strive for excellence in everything we do, from code quality to client interactions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500/20 p-2 rounded-full mr-4 mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Collaboration</h4>
                      <p className="text-gray-400">
                        We believe that diverse perspectives lead to better solutions and foster a collaborative
                        environment.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500/20 p-2 rounded-full mr-4 mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Integrity</h4>
                      <p className="text-gray-400">
                        We are honest, transparent, and ethical in all our dealings with clients and each other.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500/20 p-2 rounded-full mr-4 mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Impact</h4>
                      <p className="text-gray-400">
                        We focus on creating solutions that deliver real value and make a positive impact on businesses
                        and society.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10">
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Open Positions Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:bg-zinc-900 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="mr-1 h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Building className="mr-1 h-4 w-4" />
                      {job.department}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* No Open Positions Section */}
          <section className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see a position that fits?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how
              you can contribute to Agile Bots.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
              Send Open Application
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
