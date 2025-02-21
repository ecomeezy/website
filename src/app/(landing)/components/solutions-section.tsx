import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Transition from "@/components/transition"
import Image from "next/image"

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-muted/10 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our Apps
        </h2>
        <div className="flex flex-col gap-12">
          {/* Proofeezy */}
          <Transition>
            <div className="flex flex-col gap-8 rounded-lg border bg-card p-8 shadow-sm lg:flex-row">
              <div className="w-full overflow-hidden rounded-lg lg:w-1/2">
                <Image
                  src="/apps/proofeezy.png"
                  alt="Proofeezy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center lg:w-1/2">
                <h3 className="mb-2 text-2xl font-semibold">Proofeezy</h3>
                <p className="mb-6 text-muted-foreground">
                  Eliminate the back-and-forth with customers. Proofeezy streamlines the approval process for custom orders, making proof management effortless for Shopify merchants.
                </p>
                <ul className="mb-8 space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> Simplifies proof review & approval
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> Reduces order errors
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> Enhances customer experience
                  </li>
                </ul>
                <Button>Learn More</Button>
              </div>
            </div>
          </Transition>

          {/* Pic2toon */}
          <Transition>
            <div className="flex flex-col gap-8 rounded-lg border bg-card p-8 shadow-sm lg:flex-row-reverse">
              <div className="w-full overflow-hidden rounded-lg lg:w-1/2">
                <Image
                  src="/apps/pic2toon.png"
                  alt="Pic2toon"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center lg:w-1/2">
                <h3 className="mb-2 text-2xl font-semibold">Pic2toon</h3>
                <p className="mb-6 text-muted-foreground">
                  Turn ordinary photos into artistic cartoons in seconds. Whether for creative projects or fun digital transformations, Pic2toon delivers high-quality results via API and web app.
                </p>
                <ul className="mb-8 space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> Realistic and expressive cartoon styles
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> Fast, high-resolution processing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> API integration for seamless automation
                  </li>
                </ul>
                <Button>Try Pic2toon</Button>
              </div>
            </div>
          </Transition>

          {/* Floweezy */}
          <Transition>
            <div className="flex flex-col gap-8 rounded-lg border bg-card p-8 shadow-sm lg:flex-row">
              <div className="w-full overflow-hidden rounded-lg lg:w-1/2">
                <Image
                  src="/apps/floweezy.png"
                  alt="Floweezy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center lg:w-1/2">
                <h3 className="mb-2 text-2xl font-semibold">Floweezy</h3>
                <p className="mb-6 text-muted-foreground">
                  Take control of your e-commerce operations with a node-based workflow builder. Floweezy helps Shopify merchants automate repetitive tasks and optimize business processes with ease.
                </p>
                <ul className="mb-8 space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> Drag-and-drop workflow builder
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> Automate order processing, inventory, and more
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" /> Save time and reduce manual work
                  </li>
                </ul>
                <Button>Get Started</Button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  )
} 