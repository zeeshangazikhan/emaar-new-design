interface SectionTitleProps {
  title: string
  highlight?: string
  subtitle?: string
  light?: boolean
}

export const SectionTitle = ({ title, highlight, subtitle, light = false }: SectionTitleProps) => {
  return (
    <div className="text-center mb-10">
      <h2 className={`text-2xl md:text-3xl font-semibold ${light ? "text-white" : "text-gray-800"}`}>
        {title} {highlight ? <span className="text-[#1D48B5]">{highlight}</span> : null}
      </h2>
      {subtitle && <p className={`mt-2 text-sm ${light ? "text-gray-300" : "text-gray-500"}`}>{subtitle}</p>}
    </div>
  )
}
