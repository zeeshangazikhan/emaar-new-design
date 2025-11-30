import Image from "next/image"

interface AvatarProps {
  src: string
  alt: string
  showStatus?: boolean
}

export const Avatar = ({ src, alt, showStatus = false }: AvatarProps) => {
  return (
    <div className="relative">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={36}
        height={36}
        className="w-9 h-9 rounded-full object-cover border-2 border-white"
      />
      {showStatus && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
      )}
    </div>
  )
}
