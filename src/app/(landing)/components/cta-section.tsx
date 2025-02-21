import { Button } from '@/components/ui/button'
import Transition from "@/components/transition"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <Transition variant="scale">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Transform Your Business?
          </h2>
        </Transition>
        <Transition variant="scale" delay={0.2}>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Let&apos;s discuss how we can help you achieve your business goals with our cutting-edge solutions.
          </p>
        </Transition>
        <Transition variant="scale" delay={0.4}>
          <Button size="lg" asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </Transition>
      </div>
    </section>
  )
} 