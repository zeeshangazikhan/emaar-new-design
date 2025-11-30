import Image from "next/image"
import { StarRating } from "../atoms/StarRating"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  avatar: string
  rating: number
}

export const TestimonialCard = ({ quote, name, role, avatar, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-[#1D48B5] rounded-lg p-6 text-white">
      <p className="text-sm leading-relaxed mb-4 opacity-90">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white">
          <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs opacity-80">{role}</p>
          <StarRating rating={rating} size={12} />
        </div>
      </div>
    </div>
  )
}
