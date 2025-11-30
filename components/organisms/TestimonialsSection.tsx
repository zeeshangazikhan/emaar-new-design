"use client"

import { useState } from "react"
import { TestimonialCard } from "../molecules/TestimonialCard"
import { SectionTitle } from "../atoms/SectionTitle"

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Jason Murphy",
      role: "Customer",
      avatar: "/diverse-avatars.png",
      rating: 5,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Amy Elsner",
      role: "Manager",
      avatar: "/diverse-avatars.png",
      rating: 5,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Gary Steven",
      role: "Developer",
      avatar: "/diverse-avatars.png",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 px-12 max-lg:px-6 bg-[#1a1f3a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <SectionTitle
          title="PEOPLE"
          highlight="SAYS"
          light
          subtitle="Hear what our customers have to say about their experience with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#1D48B5] w-6" : "bg-white/30"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
