import { NavLink } from "../atoms/NavLink"

const navItems = [
  { label: "ABOUT US", hasDropdown: false },
  { label: "LATEST LAUNCHES", hasDropdown: false },
  { label: "COMMUNITIES", hasDropdown: false },
  { label: "SUSTAINABILITY", hasDropdown: false },
  { label: "RECENTLY COMPLETED", hasDropdown: false },
]

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-2 max-lg:hidden">
      {navItems.map((item) => (
        <NavLink key={item.label} label={item.label} hasDropdown={item.hasDropdown} />
      ))}
    </nav>
  )
}
