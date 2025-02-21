import { Rocket, Link, LineChart } from "lucide-react"
import Transition from "@/components/transition"

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <Transition variant="slideUp">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Ecomeezy
          </h2>
        </Transition>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Transition variant="slideLeft" delay={0.2}>
            <div className="flex flex-col items-center text-center">
              <Rocket className="h-12 w-12 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                We blend technology with creativity to build cutting-edge apps
              </p>
            </div>
          </Transition>
          <Transition variant="slideUp" delay={0.4}>
            <div className="flex flex-col items-center text-center">
              <Link className="h-12 w-12 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Seamless Integrations</h3>
              <p className="text-muted-foreground">
                Our products work effortlessly with Shopify and other platforms
              </p>
            </div>
          </Transition>
          <Transition variant="slideRight" delay={0.6}>
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-12 w-12 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Business-Driven Approach</h3>
              <p className="text-muted-foreground">
                Designed to help merchants scale, optimize, and automate
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  )
} 