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
      className={`relative rounded-lg overflow-hidden group cursor-pointer ${size === "large" ? "h-[280px]" : "h-[180px]"}`}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={city}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" aria-hidden />

      {/* Top right 360 text - visible by default, hidden on hover */}
      <div className="absolute top-3 right-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        <span className="text-white text-xs font-semibold relative inline-block leading-none" aria-hidden>
          <span className="absolute -top-1 right-0 text-[6px]">°</span>
          360
        </span>
      </div>

      {/* Center 360 badge shown on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center text-sm font-semibold"
            aria-hidden
          >
            360°
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold mb-1">{city}</h3>
        {/* Subtitle (optional) */}
        {subtitle ? <p className="text-sm text-white/80 mb-2">{subtitle}</p> : null}
        {typeof rating === 'number' ? <StarRating rating={rating} /> : null}
      </div>
    </div>
  )
}
