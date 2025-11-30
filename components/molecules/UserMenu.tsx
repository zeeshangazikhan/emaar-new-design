import { ChevronDown, Video, Globe } from "lucide-react"

export const UserMenu = () => {
  return (
    <div className="flex items-center gap-4 max-lg:hidden">
      {/* Language Selector */}
      <div className="flex items-center gap-1 text-white text-sm cursor-pointer hover:opacity-80 transition-opacity">
        <Globe className="w-4 h-4" />
        <span>ENG</span>
        <ChevronDown className="w-3 h-3" />
      </div>

      {/* Instant Call */}
      <a href="#" className="flex items-center gap-2 text-white text-sm hover:opacity-80 transition-opacity">
        <Video className="w-4 h-4" />
        <span>INSTANT CALL</span>
      </a>



      {/* Get In Touch Button */}
      <button className="bg-white text-gray-900 px-6 py-2 text-sm font-medium cursor-pointer transition-opacity duration-300 hover:opacity-90">
        GET IN TOUCH
      </button>
    </div>
  )
}
