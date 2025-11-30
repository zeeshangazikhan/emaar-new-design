import { Bed, Square, Building } from "lucide-react"

interface PropertyMetaProps {
  beds: number | string
  unitsRemaining?: number
  sqm: number | string
}

export const PropertyMeta = ({ beds, unitsRemaining, sqm }: PropertyMetaProps) => {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
      <div className="flex items-center gap-1">
        <Bed size={16} className="text-[#1D48B5]" />
        <span>{beds} Bedrooms</span>
      </div>
      {typeof unitsRemaining !== "undefined" && (
        <div className="flex items-center gap-1">
          <Building size={16} className="text-[#1D48B5]" />
          <span>{unitsRemaining} Units Remaining</span>
        </div>
      )}
      <div className="flex items-center gap-1">
        <Square size={16} className="text-[#1D48B5]" />
        <span>{sqm} sqm</span>
      </div>
    </div>
  )
}
