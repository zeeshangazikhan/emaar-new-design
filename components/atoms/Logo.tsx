interface LogoProps {
  dark?: boolean
}

export const Logo = ({ dark = false }: LogoProps) => {
  return (
    <a href="/" className="flex items-center" aria-label="Emaar logo">
      <img src="/images/emaar-logo-white.svg" alt="Emaar" className="w-25 h-15 object-contain" />
    </a>
  )
}
