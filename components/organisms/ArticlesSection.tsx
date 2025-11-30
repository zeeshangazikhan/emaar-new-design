import Link from "next/link"
import { ArticleCard } from "../molecules/ArticleCard"
import { SectionTitle } from "../atoms/SectionTitle"

export const ArticlesSection = () => {
  const articles = [
    {
      image: "/modern-luxury-house-exterior-architecture.jpg",
      title: "Wy Emaar Remains The Top Brand",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Nov 15, 2023",
      comments: 23,
      views: 345,
      // author: "Jonathan",
      authorAvatar: "/placeholder.svg?key=author1",
    },
    {
      image: "/beautiful-green-house-garden-yard.jpg",
      title: "Dubai Fountain Reopens",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Nov 12, 2023",
      comments: 15,
      views: 287,
      // author: "Sarah",
      authorAvatar: "/placeholder.svg?key=author2",
    },
    {
      image: "/texas-modern-family-home.jpg",
      title: "A Weekend To Dubai Marina",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Nov 10, 2023",
      comments: 32,
      views: 412,
      // author: "Michael",
      authorAvatar: "/placeholder.svg?key=author3",
    },
  ]

  return (
    <section className="py-16 px-12 max-lg:px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          title="DISCOVER OUR"
          highlight="BLOGS"
          subtitle="Read expert tips on property management, investor guides, market insights, and more."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

            <div className="mt-6 flex justify-center">
              <Link href="/blogs" className="text-base text-[#1D48B5] hover:underline font-medium">
                View All
              </Link>
            </div>
      </div>
    </section>
  )
}
