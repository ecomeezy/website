import Link from 'next/link'

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
                <Link href="https://github.com/ecomeezy" className="text-muted-foreground hover:text-foreground">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/ecomeezy" className="text-muted-foreground hover:text-foreground">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/company/ecomeezy" className="text-muted-foreground hover:text-foreground">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ecomeezy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 