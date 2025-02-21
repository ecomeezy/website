import { Metadata } from "next"
import { SiteHeader } from "../../(landing)/components/site-header"
import { SiteFooter } from "../../(landing)/components/site-footer"

export const metadata: Metadata = {
  title: "Terms of Service | Ecomeezy",
  description: "Read our terms of service to understand the rules and guidelines for using Ecomeezy&apos;s services.",
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col bg-muted/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Terms of Service</h1>
            
            <div className="bg-card rounded-lg shadow-lg p-8 border border-border space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using Ecomeezy&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Use License</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Permission is granted to temporarily access and use our services for personal, non-commercial purposes, subject to the following conditions:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
                    <li>You must not modify or copy our materials</li>
                    <li>You must not use the materials for commercial purposes</li>
                    <li>You must not attempt to decompile or reverse engineer any software</li>
                    <li>You must not remove any copyright or proprietary notations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground">
                  As a user of our services, you are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-2">
                  <li>Maintaining the confidentiality of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your use complies with applicable laws</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                <p className="text-muted-foreground">
                  Our services are provided &quot;as is&quot;. Ecomeezy makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation, implied warranties of merchantability and fitness for a particular purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a 
                    href="mailto:legal@ecomeezy.com" 
                    className="text-primary font-medium hover:underline"
                  >
                    legal@ecomeezy.com
                  </a>
                </p>
              </section>

              <section className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
