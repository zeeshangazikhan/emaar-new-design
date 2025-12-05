"use client"

import { X } from "lucide-react"
import { Logo } from "../atoms/Logo"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { label: "ABOUT US", hasDropdown: false },
  { label: "LATEST LAUNCHES", hasDropdown: false },
  { label: "COMMUNITIES", hasDropdown: false },
  { label: "SUSTAINABILITY", hasDropdown: false },
  { label: "RECENTLY COMPLETED", hasDropdown: false },
]

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[101] transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <div className="text-gray-800">
            <Logo dark />
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#1D48B5] rounded-lg transition-colors"
                >
                  <span className="font-medium">{item.label}</span>
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Add Listing removed for mobile */}
      </div>
    </>
  )
}
