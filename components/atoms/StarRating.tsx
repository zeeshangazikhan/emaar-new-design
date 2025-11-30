import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  size?: number
}

export const StarRating = ({ rating, size = 14 }: StarRatingProps) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= rating ? "fill-[#1D48B5] text-[#1D48B5]" : "fill-gray-300 text-gray-300"}
        />
      ))}
    </div>
  )
}
