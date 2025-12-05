"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Logo } from "../atoms/Logo"
import { Navigation } from "../molecules/Navigation"
import { UserMenu } from "../molecules/UserMenu"
import { MobileMenu } from "../molecules/MobileMenu"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`${
          isScrolled
            ? "fixed bg-[#1a1f3a] border-b border-gray-700 shadow-lg"
            : "absolute bg-white/20 border-b border-white/30 backdrop-blur-sm"
        } top-0 left-0 right-0 z-50 px-6 py-2 lg:px-12 lg:py-4 transition-all duration-300`}
      >
        <div className="flex items-center justify-between max-w-[1400px] mx-auto text-white">
          <div className="flex items-center gap-8">
            <Logo />
            <Navigation />
          </div>

          <UserMenu />

          <button
            className="hidden max-lg:block bg-transparent border-none text-white cursor-pointer"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
