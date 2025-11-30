import { Header } from "@/components/organisms/Header"
import { HeroSection } from "@/components/templates/HeroSection"
import { PropertiesSection } from "@/components/organisms/PropertiesSection"
import { WhyChooseUs } from "@/components/organisms/WhyChooseUs"
import { PopularPlaces } from "@/components/organisms/PopularPlaces"
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection"
import { ArticlesSection } from "@/components/organisms/ArticlesSection"
import { DownloadAppSection } from "@/components/organisms/DownloadAppSection"
import { PartnersSection } from "@/components/organisms/PartnersSection"
import { Footer } from "@/components/organisms/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PopularPlaces />
      <WhyChooseUs />
       <DownloadAppSection />
      <PropertiesSection type="sale" />
      
      {/* <TestimonialsSection /> */}
      <ArticlesSection />
     
      <Footer />
    </main>
  )
}
