import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-[#1a1f3a] text-white">
      <div className="max-w-[1400px] mx-auto px-12 py-16 max-lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* ABOUT EMAAR */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">ABOUT EMAAR</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  WHO WE ARE
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  CAREERS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  WHISTLEBLOWER LINE
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  INVESTOR RELATIONS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  PRESS RELEASES
                </a>
              </li>
            </ul>
          </div>

          {/* COMMUNITIES */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">COMMUNITIES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  EXPO LIVING
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  THE OASIS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  THE HEIGHTS COUNTRY CLUB & WELLNESS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  ADDRESS AL MARJAN ISLAND
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  DUBAI HILLS ESTATE
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  DUBAI CREEK HARBOUR
                </a>
              </li>
            </ul>
          </div>

          {/* LATEST LAUNCHES */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">LATEST LAUNCHES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  CREEK HAVEN AT DUBAI CREEK HARBOUR
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  CREEK BAY AT DUBAI CREEK HARBOUR
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  AVELIA AT THE VALLEY
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  OVELLE AT THE VALLEY
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#1D48B5] transition-colors">
                  EQUITERRA 2 AT GRAND POLO CLUB & RESORT
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Sign up for the latest news</p>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-gray-600 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1D48B5]"
              />
              <button className="px-6 py-2 bg-[#1D48B5] text-white rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-[#153a8f] hover:to-[#1D48B5] transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">We do not sell your email or spam</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1D48B5] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1D48B5] transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1D48B5] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1D48B5] transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2025 Emaar. Developed By Zeeshan Gazi</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1D48B5] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#1D48B5] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#1D48B5] transition-colors">
              Language
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
