import { useEffect, useState } from "react"

interface RangeSliderProps {
  label: string
  minValue: number
  maxValue: number
  min: number
  max: number
  onChange: (min: number, max: number) => void
}

export const RangeSlider = ({ label, minValue, maxValue, min, max, onChange }: RangeSliderProps) => {
  const [active, setActive] = useState<"min" | "max" | null>(null)

  useEffect(() => {
    const clear = () => setActive(null)
    window.addEventListener("mouseup", clear)
    window.addEventListener("touchend", clear)
    return () => {
      window.removeEventListener("mouseup", clear)
      window.removeEventListener("touchend", clear)
    }
  }, [])

  const minPercent = ((minValue - min) / (max - min)) * 100
  const maxPercent = ((maxValue - min) / (max - min)) * 100

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      <div className="w-full px-4 py-2.5 border border-gray-200 rounded bg-white text-sm mb-4 h-[42px] flex items-center text-gray-900">
        Price Range: {formatPrice(minValue)} - {formatPrice(maxValue)}
      </div>
      <div className="relative w-full h-1.5 bg-gray-200 rounded mt-2">
        <div
          className="absolute h-full bg-[#1D48B5] rounded"
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        />
        <div className="absolute top-0 left-0 right-0 h-full">
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-[3px] border-[#1D48B5] rounded-full cursor-pointer transition-transform duration-200 hover:scale-110 pointer-events-none"
            style={{ left: `${minPercent}%`, zIndex: 40 }}
          />
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-[3px] border-[#1D48B5] rounded-full cursor-pointer transition-transform duration-200 hover:scale-110 pointer-events-none"
            style={{ left: `${maxPercent}%`, zIndex: 40 }}
          />
          {/* Invisible range inputs to handle user interaction */}
          <div className="absolute inset-0">
            <input
              type="range"
              min={min}
              max={max}
              step={1000}
              value={minValue}
              onChange={(e) => {
                const v = Number(e.target.value)
                if (v <= maxValue) {
                  onChange(v, maxValue)
                }
              }}
              onMouseDown={() => setActive("min")}
              onTouchStart={() => setActive("min")}
              aria-label={`${label} minimum`}
              style={{ 
                zIndex: active === "min" ? 50 : 25,
                clipPath: `inset(0 ${100 - maxPercent}% 0 0)`
              }}
              className="absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-auto opacity-0 cursor-pointer"
            />

            <input
              type="range"
              min={min}
              max={max}
              step={1000}
              value={maxValue}
              onChange={(e) => {
                const v = Number(e.target.value)
                if (v >= minValue) {
                  onChange(minValue, v)
                }
              }}
              onMouseDown={() => setActive("max")}
              onTouchStart={() => setActive("max")}
              aria-label={`${label} maximum`}
              style={{ 
                zIndex: active === "max" ? 50 : 25,
                clipPath: `inset(0 0 0 ${minPercent}%)`
              }}
              className="absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-auto opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
