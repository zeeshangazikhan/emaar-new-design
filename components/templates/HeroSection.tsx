import Image from "next/image"
import { HeroContent } from "../organisms/HeroContent"
import { PropertySearchForm } from "../organisms/PropertySearchForm"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/findhouses4.jpg"
          alt="Aerial city view at sunset"
          fill
          priority
          quality={75}
          sizes="(max-width: 1024px) 100vw, 1400px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex items-center justify-between max-w-[1400px] mx-auto px-12 min-h-screen pt-30 lg:pt-[180px] pb-20 gap-0 lg:gap-12 max-lg:flex-col max-lg:justify-center max-lg:px-6 max-lg:pb-16">
        <HeroContent />
        <PropertySearchForm />
      </div>
    </section>
  )
}
