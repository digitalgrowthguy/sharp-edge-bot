import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Agile Bots",
  description: "Privacy Policy for Agile Bots website and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900/30 to-black py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: May 10, 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              This Privacy Policy describes how Agile Bots ("we", "us", or "our") collects, uses, and discloses your
              personal information when you visit our website, use our services, or otherwise interact with us.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect several types of information from and about users of our website, including:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> This includes information that can be used to identify you, such
                as your name, email address, postal address, phone number, and other identifiers.
              </li>
              <li>
                <strong>Usage Information:</strong> We collect information about how you interact with our website, such
                as the pages you visit, the time and date of your visits, the time spent on those pages, and other
                diagnostic data.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information about the device you use to access our
                website, including the hardware model, operating system and version, unique device identifiers, and
                mobile network information.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Protect against harmful, unauthorized, or illegal activity</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may disclose your personal information in the following circumstances:</p>
            <ul>
              <li>
                <strong>To Service Providers:</strong> We may share your information with third-party vendors, service
                providers, contractors, or agents who perform services for us.
              </li>
              <li>
                <strong>For Business Transfers:</strong> We may share or transfer your information in connection with,
                or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                portion of our business.
              </li>
              <li>
                <strong>For Legal Purposes:</strong> We may disclose your information if required to do so by law or in
                response to valid requests by public authorities.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
                your consent.
              </li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the
              right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request that we correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to our processing of your personal information</li>
              <li>Request restriction of processing of your personal information</li>
              <li>Request transfer of your personal information</li>
              <li>Withdraw consent where we rely on consent to process your personal information</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from
              unauthorized access, use, alteration, and disclosure. However, the transmission of information via the
              internet is not completely secure. Although we do our best to protect your personal information, we cannot
              guarantee the security of your personal information transmitted to our website.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We have no control over the content, privacy
              policies, or practices of any third-party website. We are not responsible for the privacy policies or
              practices of third-party websites.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
              information from children under 16. If you are a parent or guardian and you are aware that your child has
              provided us with personal information, please contact us.
            </p>

            <h2>Changes to Our Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:info@agilebots.co" className="text-purple-400 hover:text-purple-300">
                info@agilebots.co
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Agile Bots. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
