import { Button } from '@/components/ui/button'
import Transition from '@/components/transition'

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-32 text-center">
      <div className="container mx-auto max-w-6xl">
        <Transition variant="slideUp">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
            Build Smarter. Automate Faster. Innovate Seamlessly.
          </h1>
        </Transition>
        <Transition variant="fadeIn" delay={0.3}>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Ecomeezy creates cutting-edge web applications that streamline e-commerce workflows, enhance creativity, and simplify proof management.
          </p>
        </Transition>
        <Transition variant="slideUp" delay={0.6}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#apps">Explore Our Apps</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </Transition>
      </div>
    </section>
  )
} 