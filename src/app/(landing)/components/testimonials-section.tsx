import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Transition from "@/components/transition"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: "Samuel Johnson",
    role: "E-commerce Manager",
    company: "StyleBoutique",
    content: "Ecomeezy's solutions have transformed how we manage our online store. The proof management system is incredibly intuitive and has saved us countless hours.",
    rating: 5,
    avatar: "/testimonials/avatar1.png",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    company: "DesignLab",
    content: "Pic2toon has become an essential part of our creative workflow. The quality of the cartoons and the API's reliability are outstanding.",
    rating: 5,
    avatar: "/testimonials/avatar2.png",
    initials: "MC"
  },
  {
    name: "Emma Davis",
    role: "Operations Director",
    company: "TrendMart",
    content: "Floweezy has streamlined our entire e-commerce operation. The node-based system is powerful yet easy to use. Highly recommended!",
    rating: 5,
    avatar: "/testimonials/avatar3.png",
    initials: "ED"
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/10 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <Transition>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-5xl"
          >
            <CarouselContent className="h-full">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col rounded-lg border bg-card p-6 shadow-sm">
                    <div className="mb-6 flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="flex-grow text-muted-foreground">
                      &quot;{testimonial.content}&quot;
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious 
                variant="secondary"
                size="default"
                className="relative static h-10 w-10 rounded-full border-2 border-primary/50 bg-background hover:bg-accent hover:border-primary"
              />
              <CarouselNext 
                variant="secondary"
                size="default"
                className="relative static h-10 w-10 rounded-full border-2 border-primary/50 bg-background hover:bg-accent hover:border-primary"
              />
            </div>
          </Carousel>
        </Transition>
      </div>
    </section>
  )
} 