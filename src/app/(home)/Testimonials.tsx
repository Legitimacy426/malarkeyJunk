'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

const testimonialImages = [
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    alt: "Professional in blue suit",
    style: { top: '5%', left: '8%', transform: 'rotate(-5deg)' }
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    alt: "Business professional smiling",
    style: { top: '10%', right: '12%', transform: 'rotate(3deg)' }
  },
  {
    src: "https://images.unsplash.com/photo-1580518337843-f959e992563b?auto=format&fit=crop&w=300&q=80",
    alt: "Professional woman",
    style: { top: '35%', left: '15%', transform: 'rotate(4deg)' }
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    alt: "Business man in office",
    style: { top: '30%', right: '20%', transform: 'rotate(-3deg)' }
  },
  {
    src: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&w=300&q=80",
    alt: "Professional portrait",
    style: { top: '50%', left: '25%', transform: 'rotate(-4deg)' }
  },
  {
    src: "https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&w=300&q=80",
    alt: "Business professional",
    style: { top: '45%', right: '10%', transform: 'rotate(5deg)' }
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    alt: "Corporate professional",
    style: { top: '20%', left: '40%', transform: 'rotate(3deg)' }
  },
  {
    src: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=300&q=80",
    alt: "Professional headshot",
    style: { top: '15%', right: '35%', transform: 'rotate(-2deg)' }
  }
]

export default function TestimonialsScattered() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-50">
      <div className="relative z-20 w-full pt-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-base font-semibold leading-7 text-gray-600">
            Happy Customers
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            We Take Out The Trash
          </h2>
          <p className="mt-4 text-3xl font-light text-gray-500">
            So You Don&apos;t Have To
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our customers are saying about our hassle-free junk removal service.
          </p>
          <div className="mt-10 mb-4">
            <Button className="group gap-2 bg-amber-800 hover:bg-amber-900 text-white">
              See What We Haul
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Images Section - Immediately after content */}
      <div className="relative h-[50vh] w-full">
        {testimonialImages.map((image, index) => (
          <div
            key={index}
            className="absolute w-[180px] transition-all duration-300 hover:z-10 hover:scale-105 sm:w-[220px]"
            style={image.style}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={220}
              height={220}
              className="h-full w-full rounded-2xl object-cover shadow-lg ring-2 ring-white/50"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
