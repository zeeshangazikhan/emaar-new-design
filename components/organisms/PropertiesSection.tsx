"use client"

import { useState } from "react"
import { PropertyCard } from "../molecules/PropertyCard"
import { SectionTitle } from "../atoms/SectionTitle"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PropertiesSectionProps {
  type: "sale" | "rent"
}

const properties = [
  {
    id: 1,
    image: "/images/prop1.jpeg",
    title: "Dubai Cheek Harbour",
    address: "Al Kheeran First  Dubai - United Arab Emirates",
    beds: "1-3",
    unitsRemaining: 19,
    sqm: "711,399" ,
    category: "Apartments & Penthouses",
    price: 230000,
    featured: true,

  },
  {
    id: 4,
    image: "/images/prod2.jpg",
    title: "Marina View Residences",
    address: "Marina Promenade - Dubai - United Arab Emirates",
    beds: "1-2",
    unitsRemaining: 8,
    sqm: "95,200",
    category: "1,2 &3 bedroom apartments",
    price: 185000,
    featured: true,

  },
  {
    id: 5,
    image: "/images/prod3.jpg",
    title: "Palm Heights Tower",
    address: "Palm Jumeirah - Dubai - United Arab Emirates",
    beds: "3-5",
    unitsRemaining: 2,
    sqm: "240,000",
    category: "Apartments and Sea Front-Homes",
    price: 720000,
    featured: true,

  },
  {
    id: 6,
    image: "/images/prod4.png",
    title: "Greenfield Villas",
    address: "Al Barari - Dubai - United Arab Emirates",
    beds: "4-6",
    unitsRemaining: 6,
    sqm: "420,500",
    category: "Bedroom Villas",
    price: 450000,
    featured: true,

  },
  {
    id: 2,
    image: "/images/prod5.jpg",
    title: "The Heights Country Club",
    address: "Al Yalayis 5 - Dubai - United Arab Emirates",
    beds: "4-6",
    unitsRemaining: 12,
    sqm: "811,756" ,
    category: "Townhouses and Villas",
    price: 230000,
    featured: true,

  },
  {
    id: 3,
    image: "/images/prod6.jpg",
    title: "Downtown Dubai",
    address: "Near Dubai Mall, Old Town & Burj Dubai Lake",
    beds: "2-4",
    unitsRemaining: 5,
    sqm: "546,385" ,
    category: "Sea Front-Homes",
    price: 230000,
    featured: true,
  },
  {
    id: 7,
    image: "/images/prod7.jpg",
    title: "Expo Living",
    address: "Expo City - Dubai - United Arab Emirates",
    beds: "2-3",
    unitsRemaining: 15,
    sqm: "350,000",
    category: "Modern Apartments",
    price: 195000,
    featured: true,
  },
]

export const PropertiesSection = ({ type }: PropertiesSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 px-12 max-lg:px-6 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          title="FEATURED COMMUNITIES"
          subtitle={`Experience our communities and amenities from the comfort of your home.`}
        />

        <div className="relative">
          {/* Show exactly 3 items in view, sliding by index (wraps around) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: Math.min(3, properties.length) }).map((_, i) => {
              const index = (currentIndex + i) % properties.length
              const property = properties[index]
              return <PropertyCard key={property.id} {...property} type={type} />
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1D48B5] hover:text-white transition-colors max-lg:hidden cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1D48B5] hover:text-white transition-colors max-lg:hidden cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {properties.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                index === currentIndex ? "bg-[#1D48B5] w-6" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
