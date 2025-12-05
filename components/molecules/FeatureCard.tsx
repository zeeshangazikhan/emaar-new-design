import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <article
      role="region"
      aria-label={title}
      className="relative overflow-hidden rounded-2xl bg-white/80 border border-gray-100 shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 p-6 animate-fade-up hover-tilt"
    >
      <div className="absolute -top-6 -right-6 w-36 h-36 bg-gradient-to-br from-[#E8F0FF] to-[#F3F8FF] rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1D48B5] to-[#153a8f] text-white shadow-lg ring-4 ring-[#1D48B5]/10">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

        <div className="mt-4 w-12 h-1 bg-gradient-to-r from-transparent via-[#1D48B5] to-transparent rounded-full" />
      </div>
    </article>
  )
}
