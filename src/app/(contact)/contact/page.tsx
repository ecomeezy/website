import { Metadata } from "next"
import { Mail } from "lucide-react"
import { SiteHeader } from "../../(landing)/components/site-header"
import { SiteFooter } from "../../(landing)/components/site-footer"

export const metadata: Metadata = {
  title: "Contact Us | Ecomeezy",
  description: "Get in touch with the Ecomeezy team for any questions or inquiries.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col bg-muted/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Us</h1>
            
            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <Mail className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Email Us</h2>
                  <p className="text-muted-foreground mb-4">
                    We&apos;d love to hear from you! For any questions, partnership opportunities, or general inquiries, please reach out to us at:
                  </p>
                  <a 
                    href="mailto:hello@ecomeezy.com" 
                    className="text-primary font-medium hover:underline"
                  >
                    hello@ecomeezy.com
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">What to expect</h3>
                <p className="text-muted-foreground mb-3">
                  Our team typically responds within 24-48 business hours. We&apos;re committed to providing you with the best possible assistance and look forward to connecting with you.
                </p>
                <p className="text-muted-foreground">
                  For faster responses, please include relevant details about your inquiry in your email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
