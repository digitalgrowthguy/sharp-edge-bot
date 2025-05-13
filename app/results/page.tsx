import ResultsPageClient from "./ResultsPageClient"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Winning Results | SharpEdge Bot", // Updated branding
  description: "See real winning betting slips from our users who have found success with our AI predictions.",
}

export default function ResultsPage() {
  return (
    <div>
      <ResultsPageClient />

      {/* Main content area with results data and visualizations */}
      <div className="container mx-auto px-4 py-12">
        {/* Your results content here */}
        {/* Tables, charts, etc. */}
      </div>

      <Toaster />
    </div>
  )
}
