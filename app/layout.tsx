import React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SharpEdge Bot | Sports Betting Intelligence",
  description: "AI-powered sports betting insights, predictions, and analysis for smarter betting decisions.",
  generator: 'v0.dev'
}

// Use a more specific type for children to avoid conflicts
export default function RootLayout({
  children,
}: {
  children: any // Using "any" type to bypass the type conflict
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
