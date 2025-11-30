import { FeatureCard } from "../molecules/FeatureCard"
import { SectionTitle } from "../atoms/SectionTitle"
import { Home, Users, Headphones } from "lucide-react"

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Home size={32} />,
      title: "Creators of Icons",
      description:
        "Developing world-renowned landmarks and architectural marvels that redefine global skylines, including the majestic Burj Khalifa.",
    },
    {
      icon: <Users size={32} />,
      title: "Master-Planned Communities",
      description:
        "Designing fully integrated neighborhoods that blend luxury residences with nature, world-class retail, and leisure for a holistic lifestyle.",
    },
    {
      icon: <Headphones size={32} />,
      title: "Exceptional Lifestyle",
      description:
        "Delivering a seamless living experience with premium facility management, high security, and unmatched community standards.",
    },
  ]

  return (
    <section className="py-16 px-12 max-lg:px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          title="WHY"
          highlight="CHOOSE US"
          subtitle="We provide a complete service for the sale, purchase or rental of real estate."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
