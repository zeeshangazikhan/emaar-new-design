import Image from "next/image"
import { StarRating } from "../atoms/StarRating"

interface PlaceCardProps {
  image: string
  city: string
  subtitle?: string
  rating?: number
  size?: "large" | "small"
}

export const PlaceCard = ({ image, city, subtitle, rating, size = "small" }: PlaceCardProps) => {
  return (
    <div
      className={`relative overflow-hidden group cursor-pointer rounded-2xl ${size === "large" ? "h-[320px]" : "h-[220px]"} transform transition-all duration-500 hover:scale-105 shadow-md hover:shadow-2xl border border-transparent hover:border-white/10 animate-fade-up hover-tilt`}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={city}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />

      {/* Subtle gradient + hover dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

      {/* Decorative accent circle top-left */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#1D48B5]/20 to-[#153a8f]/10 opacity-40 blur-2xl pointer-events-none" />

      {/* Top-right 360 pill (visible) */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white/10 text-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <span className="text-sm">360°</span>
          <span className="w-2 h-2 bg-gradient-to-r from-[#1D48B5] to-[#153a8f] rounded-full inline-block" />
        </div>
      </div>

      {/* center 360 badge removed to reduce clutter on hover */}

      {/* Bottom info panel (glass) */}
      <div className="absolute left-4 right-4 bottom-4 z-30">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 flex items-start justify-between gap-4">
          <div>
            <h4 className="text-white text-lg font-bold leading-tight">{city}</h4>
            {subtitle ? <p className="text-sm text-white/90 mt-1">{subtitle}</p> : null}
            {typeof rating === "number" ? <div className="mt-2"><StarRating rating={rating} /></div> : null}
          </div>

          <div className="flex items-center">
            <button
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1D48B5] to-[#153a8f] text-white rounded-full text-sm font-medium hover:brightness-110 transition cursor-pointer"
              aria-label={`Start 360 tour of ${city}`}
            >
              Start Tour
            </button>
            {/* Mobile small CTA */}
            <button
              className="md:hidden px-3 py-2 bg-[#1D48B5] text-white rounded-md text-sm font-medium cursor-pointer"
              aria-label={`Explore ${city}`}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
