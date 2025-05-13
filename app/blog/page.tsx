import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, Clock, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog | Agile Bots - AI Technology Insights & News",
  description:
    "Explore the latest insights, trends, and innovations in artificial intelligence, machine learning, and data science.",
  openGraph: {
    title: "Agile Bots Blog - AI Technology Insights & News",
    description:
      "Explore the latest insights, trends, and innovations in artificial intelligence, machine learning, and data science.",
    type: "website",
  },
}

const featuredPost = {
  title: "The Future of Conversational AI: Beyond Simple Chatbots",
  excerpt:
    "Explore how advanced language models are transforming customer service, sales, and user experiences across industries.",
  date: "May 8, 2025",
  readTime: "8 min read",
  author: "J.D. Chiles",
  category: "AI Trends",
  slug: "future-of-conversational-ai",
}

const recentPosts = [
  {
    title: "How Businesses Are Leveraging Computer Vision in 2025",
    excerpt:
      "From retail analytics to manufacturing quality control, computer vision is revolutionizing how businesses operate.",
    date: "May 5, 2025",
    readTime: "6 min read",
    author: "Sophia Chen",
    category: "Computer Vision",
    slug: "businesses-leveraging-computer-vision-2025",
  },
  {
    title: "Building Ethical AI Systems: A Practical Guide",
    excerpt:
      "Learn the key principles and practices for developing AI systems that are fair, transparent, and accountable.",
    date: "April 28, 2025",
    readTime: "10 min read",
    author: "Marcus Johnson",
    category: "AI Ethics",
    slug: "building-ethical-ai-systems",
  },
  {
    title: "Data Engineering Best Practices for AI Projects",
    excerpt:
      "Effective data engineering is the foundation of successful AI initiatives. Discover key practices to implement.",
    date: "April 22, 2025",
    readTime: "7 min read",
    author: "Olivia Rodriguez",
    category: "Data Engineering",
    slug: "data-engineering-best-practices",
  },
  {
    title: "The Rise of Multimodal AI Models: Combining Vision and Language",
    excerpt:
      "Explore how the latest AI models are integrating multiple forms of data to create more powerful and versatile systems.",
    date: "April 15, 2025",
    readTime: "9 min read",
    author: "J.D. Chiles",
    category: "AI Research",
    slug: "rise-of-multimodal-ai-models",
  },
  {
    title: "Implementing AI in Healthcare: Case Studies and Lessons",
    excerpt: "Real-world examples of how AI is transforming patient care, diagnosis, and medical research.",
    date: "April 8, 2025",
    readTime: "11 min read",
    author: "Sophia Chen",
    category: "AI Applications",
    slug: "ai-in-healthcare-case-studies",
  },
  {
    title: "The Business Case for AI: Measuring ROI and Impact",
    excerpt: "How to evaluate the financial and operational impact of AI investments in your organization.",
    date: "April 1, 2025",
    readTime: "8 min read",
    author: "Marcus Johnson",
    category: "Business Strategy",
    slug: "business-case-for-ai-roi",
  },
]

const categories = [
  "AI Trends",
  "Computer Vision",
  "Natural Language Processing",
  "Data Engineering",
  "AI Ethics",
  "Machine Learning",
  "Business Strategy",
  "AI Applications",
  "AI Research",
]

export default function BlogPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Agile Bots Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Insights, trends, and innovations in artificial intelligence, machine learning, and data science.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Categories */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-zinc-900/50 border-white/10 focus:border-purple-500 w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-zinc-900/50 hover:bg-zinc-800 border-white/10 text-gray-300 hover:text-white cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
              <Badge
                variant="outline"
                className="bg-zinc-900/50 hover:bg-zinc-800 border-white/10 text-gray-300 hover:text-white cursor-pointer"
              >
                More...
              </Badge>
            </div>
          </div>

          {/* Featured Post */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="grid md:grid-cols-5 gap-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-xl p-6 border border-white/10">
              <div className="md:col-span-2 relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-3">
                <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <User className="mr-1 h-4 w-4" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="mr-1 h-4 w-4" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                  Read Article
                </Button>
              </div>
            </div>
          </section>

          {/* Recent Posts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <Card key={index} className="bg-zinc-900/50 border-white/10 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(post.title)}`}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">{post.category}</Badge>
                      <div className="text-xs text-gray-400">{post.date}</div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="text-xs text-gray-400 flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      {post.author}
                      <span className="mx-2">•</span>
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
                    >
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 border border-white/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated on AI Trends</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive the latest insights and articles on AI, machine learning, and
                data science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Your email address"
                  className="bg-zinc-900/50 border-white/10 focus:border-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
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
