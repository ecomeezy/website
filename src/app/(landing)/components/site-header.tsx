'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'

export function SiteHeader() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    
    // Check if we're on the landing page
    const isLandingPage = window.location.pathname === '/'
    
    if (!isLandingPage) {
      // If not on landing page, redirect to landing page with hash
      window.location.href = `/#${id}`
      return
    }
    
    // If we are on landing page, smooth scroll
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Ecomeezy Logo"
              width={220}
              height={80}
              quality={100}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="#solutions" 
              onClick={(e) => handleScroll(e, 'solutions')} 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              Solutions
            </Link>
            <Link 
              href="#features" 
              onClick={(e) => handleScroll(e, 'features')} 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              Features
            </Link>
            <Link 
              href="#testimonials" 
              onClick={(e) => handleScroll(e, 'testimonials')} 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex flex-1 justify-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle className="text-left">Navigation Menu</SheetTitle>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link 
                    href="#solutions" 
                    onClick={(e) => handleScroll(e, 'solutions')} 
                    className="text-sm font-medium transition-colors hover:text-foreground/80"
                  >
                    Solutions
                  </Link>
                  <Link 
                    href="#features" 
                    onClick={(e) => handleScroll(e, 'features')} 
                    className="text-sm font-medium transition-colors hover:text-foreground/80"
                  >
                    Features
                  </Link>
                  <Link href="/contact" className="text-sm font-medium transition-colors hover:text-foreground/80">
                    Contact
                  </Link>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
} 