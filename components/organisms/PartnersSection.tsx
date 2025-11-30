import Image from "next/image"

export const PartnersSection = () => {
  const partners = [
    { name: "Partner 1", logo: "/real-estate-company-logo-1.jpg" },
    { name: "Partner 2", logo: "/real-estate-company-logo-2.jpg" },
    { name: "Partner 3", logo: "/real-estate-company-logo-3.jpg" },
    { name: "Partner 4", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 5", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 6", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-12 px-12 max-lg:px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
