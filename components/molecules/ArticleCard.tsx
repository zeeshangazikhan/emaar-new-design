import Image from "next/image"
import { Calendar, MessageCircle, Eye } from "lucide-react"

interface ArticleCardProps {
  image: string
  title: string
  excerpt: string
  date: string
  comments: number
  views: number
  author?: string
  authorAvatar?: string
}

export const ArticleCard = ({
  image,
  title,
  excerpt,
  date,
  comments,
  views,
  author,
  authorAvatar,
}: ArticleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-[200px]">
        <Image 
          src={image || "/placeholder.svg"} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover" 
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={14} />
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={14} />
            <span>{views}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-[#1D48B5] cursor-pointer transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t">
          <a href="#" className="text-[#1D48B5] text-sm font-medium hover:underline">
            Read more...
          </a>
          <div className="flex items-center gap-2">
            {/* <span className="text-xs text-gray-500">By {author}</span> */}
            <div className="w-6 h-6 rounded-full overflow-hidden relative">
              <Image 
                src={authorAvatar || "/placeholder.svg"} 
                alt={author || "Author"} 
                fill 
                sizes="24px"
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
