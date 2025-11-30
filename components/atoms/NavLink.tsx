import { ChevronDown } from "lucide-react"

interface NavLinkProps {
  label: string
  hasDropdown?: boolean
  isActive?: boolean
  href?: string
}

export const NavLink = ({ label, hasDropdown = false, isActive = false, href = "#" }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="flex items-center gap-1 text-white text-sm font-normal px-4 py-2 cursor-pointer transition-opacity duration-300 hover:opacity-80"
    >
      {label}
      {hasDropdown && (
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
      )}
    </a>
  )
}
