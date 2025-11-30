import { PlaceCard } from "../molecules/PlaceCard"
import { SectionTitle } from "../atoms/SectionTitle"

export const PopularPlaces = () => {
  const places = [
    { image: "/nyc-skyline.png", city: "Dubai Hills Estate", subtitle: "The Green Heart of Dubai", size: "large" as const },
    { image: "/dubai-burj-al-arab-hotel.jpg", city: "THE OASIS", subtitle: "Immerse in Pure Luxury", size: "large" as const },
    { image: "/tokyo-skyline-modern-city.jpg", city: "DUBAI MARINA", subtitle: "Marina views & promenades", size: "large" as const },
    { image: "/london-big-ben-tower.jpg", city: "London", subtitle: "Historic neighborhoods", size: "small" as const },
    { image: "/singapore-marina-bay-modern.jpg", city: "Singapore", subtitle: "City center living", size: "small" as const },
    { image: "/los-angeles-cityscape-sunset.jpg", city: "Los Angeles", subtitle: "Coastal and urban homes", size: "small" as const },
  ]

  return (
    <section className="py-16 px-12 max-lg:px-6 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          title="COMMUNITIES 360° "
          highlight="TOUR"
          subtitle="Experience our communities and amenities from the comfort of your home."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:row-span-2">
            <PlaceCard {...places[0]} />
          </div>
          <div className="lg:row-span-2">
            <PlaceCard {...places[1]} />
          </div>
          <div className="lg:row-span-2">
            <PlaceCard {...places[2]} />
          </div>
          {/* <PlaceCard {...places[3]} />
          <PlaceCard {...places[4]} />
          <PlaceCard {...places[5]} /> */}
        </div>
      </div>
    </section>
  )
}
