import Image from "next/image"
import { SectionTitle } from "../atoms/SectionTitle"

export const DownloadAppSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image (download-bg) */}
      <div className="absolute inset-0 -z-20 opacity-30">
        <Image src="/images/download-bg.jpg" alt="download background" fill className="object-cover" priority />
      </div>

      {/* Gradient overlay above the background image (more opaque for vivid color) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#b07bff] via-[#3027bf] to-[#4fc3f7] opacity-80" />

      {/* subtle blurred phone image on the right (optional image if available) */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 top-12 opacity-30 blur-[14px]">
          <Image src="/images/phone-mockup.png" alt="phone" width={900} height={600} />
        </div>
      </div>

      {/* decorative dotted divider elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 left-12 w-48 h-48 rounded-full border border-white/20" />
      </div> */}

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h3 className="text-white tracking-widest text-2xl md:text-4xl lg:text-3xl uppercase font-bold">
            DOWNLOAD EMAAR ONE APP
          </h3>

        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-40 border-t border-dashed border-white/40" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M12 2l2.6 6.6L21 11l-5 3.6L17.2 21 12 17.8 6.8 21 8 14.6 3 11l6.4-2.4L12 2z" fill="white" />
          </svg>
          <div className="w-40 border-t border-dashed border-white/40" />
        </div>

          <p className="text-white/90 max-w-2xl mx-auto mt-6 mb-10">
            Manage bookings and maintenance access exclusive Emaar offers in one app.
          </p>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {/* App Store */}
          <a
            href="#"
            className="w-[340px] h-24 border border-white/60 rounded-md flex items-center gap-5 px-6 text-white hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <Image src="/images/apple-logo.png" alt="Apple" width={36} height={36} />
            </div>
            <div className="text-left">
              <div className="text-sm md:text-base text-white/80">Available on the</div>
              <div className="text-xl md:text-2xl font-semibold">App Store</div>
            </div>
          </a>

          {/* Play Store */}
          <a
            href="#"
            className="w-[340px] h-24 border border-white/60 rounded-md flex items-center gap-5 px-6 text-white hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <Image src="/images/playstore.png" alt="Play Store" width={36} height={36} />
            </div>
            <div className="text-left">
              <div className="text-sm md:text-base text-white/80">Available on the</div>
              <div className="text-xl md:text-2xl font-semibold">Play Store</div>
            </div>
          </a>

          {/* Windows Store */}
          <a
            href="#"
            className="w-[340px] h-24 border border-white/60 rounded-md flex items-center gap-5 px-6 text-white hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <Image src="/images/windows-store.svg" alt="Windows Store" width={36} height={36} />
            </div>
            <div className="text-left">
              <div className="text-sm md:text-base text-white/80">Available on the</div>
              <div className="text-xl md:text-2xl font-semibold">Windows Store</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
