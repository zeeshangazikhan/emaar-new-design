interface BadgeProps {
  label: string
  variant: "featured" | "sale" | "rent"
}

export const Badge = ({ label, variant }: BadgeProps) => {
  const variants = {
    featured: "bg-[#1D48B5] text-white",
    sale: "bg-green-500 text-white",
    rent: "bg-[#1D48B5] text-white",
  }

  return <span className={`px-3 py-1 text-xs font-medium rounded ${variants[variant]}`}>{label}</span>
}
