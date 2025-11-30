"use client"

import { useState } from "react"
import { SelectInput } from "../atoms/SelectInput"
import { TextInput } from "../atoms/TextInput"
import { RangeSlider } from "../atoms/RangeSlider"
import { Button } from "../atoms/Button"

export const PropertySearchForm = () => {
  const [propertyStatus, setPropertyStatus] = useState("")
  const [location, setLocation] = useState("")
  const [beds, setBeds] = useState("")
  const [baths, setBaths] = useState("")
  const [minArea, setMinArea] = useState("")
  const [maxArea, setMaxArea] = useState("")
  const [priceRange, setPriceRange] = useState({ min: 60000, max: 130000 })

  const statusOptions = [
    { value: "sale", label: "Apartment" },
    { value: "rent", label: "Villa" },
  ]

  const locationOptions = [
    { value: "ny", label: "Expo Living" },
    { value: "la", label: "The Oasis" },
    { value: "ch", label: "Dubai Marina" },
  ]

  const bedsOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4+" },
  ]

  const bathsOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3+" },
  ]

  return (
    <div className="bg-white/25 p-6 rounded-lg shadow-xl w-[500px] max-lg:w-full max-lg:max-w-[400px]">
      <div className="mb-4">
        <SelectInput
          label="Property Type"
          options={statusOptions}
          value={propertyStatus}
          onChange={setPropertyStatus}
          placeholder="Any Type"
        />
      </div>

      <div className="mb-4">
        <SelectInput
          label="Communities"
          options={locationOptions}
          value={location}
          onChange={setLocation}
          placeholder="Any Location"
        />
      </div>

      <div className="mb-4">
        <RangeSlider
          label="Price"
          minValue={priceRange.min}
          maxValue={priceRange.max}
          min={0}
          max={500000}
          onChange={(min, max) => setPriceRange({ min, max })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <SelectInput label="Beds" options={bedsOptions} value={beds} onChange={setBeds} placeholder="Any" />
        <SelectInput label="Baths" options={bathsOptions} value={baths} onChange={setBaths} placeholder="Any" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextInput label="Area" placeholder="Min" value={minArea} onChange={setMinArea} />
        <div className="flex flex-col justify-end">
          <TextInput placeholder="Max" value={maxArea} onChange={setMaxArea} />
        </div>
      </div>

      <div className="mt-4">
        <Button variant="primary" fullWidth>
          SEARCH PROPERTY
        </Button>
      </div>
    </div>
  )
}
