"use client"

interface TextInputProps {
  label?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  type?: "text" | "number"
}

export const TextInput = ({ label, placeholder, value, onChange, type = "text" }: TextInputProps) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-white mb-2">{label}</label>}
      <input
        type={type}
        className="w-full px-4 py-2.5 border border-gray-200 rounded bg-white text-sm outline-none focus:border-[#1D48B5] h-[42px]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
