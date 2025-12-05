"use client"

import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "outline"
  size?: "default" | "large"
  fullWidth?: boolean
  icon?: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
}

export const Button = ({
  children,
  variant = "primary",
  size = "default",
  fullWidth = false,
  icon,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center cursor-pointer border-none outline-none font-medium transition-all duration-300 relative overflow-hidden group will-change-transform"

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#1D48B5] to-[#153A8F] text-white rounded-full shadow-md hover:shadow-2xl hover:scale-105 transform-gpu focus-visible:ring-4 focus-visible:ring-[#153A8F]/30 glow-cta",
    outline:
      "bg-transparent text-[#1D48B5] border-2 border-[#1D48B5] rounded hover:bg-gradient-to-r hover:from-[#153a8f] hover:to-[#1D48B5] hover:text-white",
  }

  const sizeStyles = {
    default: "px-6 py-2 text-sm",
    large: "px-8 py-3 text-base",
  }

  return (
    <button
      type={type}
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : "inline-flex"}
      `}
      onClick={onClick}
    >
      {/* Sheen overlay for primary CTA */}
      {variant === "primary" && (
        <span className="sheen" aria-hidden />
      )}
      {children}
      {icon && <span className="ml-2 w-4 h-4">{icon}</span>}
    </button>
  )
}
