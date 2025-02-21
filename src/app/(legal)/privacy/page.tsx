import { Metadata } from "next"
import { SiteHeader } from "../../(landing)/components/site-header"
import { SiteFooter } from "../../(landing)/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Ecomeezy",
  description: "Learn about how we collect, use, and protect your personal information at Ecomeezy.",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col bg-muted/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
            
            <div className="bg-card rounded-lg shadow-lg p-8 border border-border space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  At Ecomeezy, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We collect information that you provide directly to us when you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
                    <li>Create an account</li>
                    <li>Use our services</li>
                    <li>Contact our support team</li>
                    <li>Subscribe to our newsletter</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Improve and personalize your experience</li>
                  <li>Communicate with you about updates and offers</li>
                  <li>Protect against fraud and unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a 
                    href="mailto:privacy@ecomeezy.com" 
                    className="text-primary font-medium hover:underline"
                  >
                    privacy@ecomeezy.com
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
