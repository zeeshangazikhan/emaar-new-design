"use client"

interface SelectInputProps {
  label: string
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export const SelectInput = ({ label, options, value, onChange, placeholder }: SelectInputProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      <select
        className="w-full px-4 py-2.5 border border-gray-200 rounded bg-white text-sm outline-none focus:border-[#1D48B5] appearance-none bg-no-repeat cursor-pointer h-[42px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundPosition: "right 16px center",
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
