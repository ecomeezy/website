import { SiteHeader } from './components/site-header'
import { SiteFooter } from './components/site-footer'
import { HeroSection } from './components/hero-section'
import { SolutionsSection } from './components/solutions-section'
import { FeaturesSection } from './components/features-section'
import { CTASection } from './components/cta-section'
import { TestimonialsSection } from './components/testimonials-section'

export const metadata = {
  title: 'Ecomeezy - Modern Software Development Studio',
  description: 'Specializing in creating cutting-edge web applications with expertise in e-commerce solutions.',
}

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <SolutionsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
