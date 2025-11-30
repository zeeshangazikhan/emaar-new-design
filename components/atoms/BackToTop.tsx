"use client"

import { useEffect, useState } from "react"
import { ArrowUp, MessageCircle } from "lucide-react"

export const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "8652344678"
    const message = "Hello, I would like to know more about your properties."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Icon - Always Visible */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Contact on WhatsApp"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5A] transition-colors cursor-pointer"
      >
        <MessageCircle size={20} />
      </button>

      {/* Back to Top Icon - Only visible after scrolling */}
      {visible && (
        <button
          onClick={handleClick}
          aria-label="Back to top"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1D48B5] text-white shadow-lg hover:bg-[#153a8f] transition-colors cursor-pointer"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  )
}
