import Link from 'next/link'
import { Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ecomeezy</h3>
            <p className="text-sm text-muted-foreground">
              Modern software development studio specializing in cutting-edge web applications.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#solutions" className="text-muted-foreground hover:text-foreground">
                  Proofeezy
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-muted-foreground hover:text-foreground">
                  Pic2toon
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-muted-foreground hover:text-foreground">
                  Floweezy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="mailto:hello@ecomeezy.com" 
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
                >
                  <Mail size={16} />
                  contact@ecomeezy.com
                </Link>
              </li>
              <li>
                <Link 
                  href="tel:+1234567890" 
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
                >
                  <Phone size={16} />
                  (575) 378-3955
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/ecomeezy" 
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ecomeezy, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 