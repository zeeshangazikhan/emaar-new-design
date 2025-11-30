import Image from "next/image"
import { Badge } from "../atoms/Badge"
import { PropertyMeta } from "../atoms/PropertyMeta"
import { Heart, Share2, BarChart2 } from "lucide-react"
import { formatNumber } from "../../lib/utils"

interface PropertyCardProps {
  image: string
  title: string
  address: string
  beds: number | string
  baths?: number
  unitsRemaining?: number
  sqm: number | string
  price: number
  category?: string
  featured?: boolean
  type: "sale" | "rent"
  author?: string
  date?: string
}

export const PropertyCard = ({
  image,
  title,
  address,
  beds,
  baths,
  sqm,
  price,
  featured = false,
  type,
  author,
  date,
  unitsRemaining,
  category,
}: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="relative h-[200px]">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-3 left-3 flex gap-2">
          {featured && <Badge label="Featured" variant="featured" />}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{address}</p>
        <PropertyMeta beds={beds} unitsRemaining={unitsRemaining} sqm={sqm} />
        <div className="border-t mt-4 pt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-gray-500">Starting from</span>
            <span className="text-lg font-medium text-gray-800">AED {formatNumber(price)}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-[#1D48B5] transition-colors">
              <Share2 size={18} />
            </button>
            <button className="text-gray-400 hover:text-[#1D48B5] transition-colors">
              <Heart size={18} />
            </button>
            <button className="text-gray-400 hover:text-[#1D48B5] transition-colors">
              <BarChart2 size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="">Properties</span>
          </div>
          <div>
            <span className="text-sm font-normal text-gray-700">{category ?? "Apartments &amp; Penthouses"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
