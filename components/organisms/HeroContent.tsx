import { Button } from "../atoms/Button"

export const HeroContent = () => {
  return (
    <div className="max-w-[550px] max-lg:max-w-full max-lg:text-center lg:mb-8 animate-fade-up">
      <h1 className="text-[42px] font-bold text-white leading-tight mb-6 uppercase tracking-wide max-md:text-3xl max-sm:text-2xl">
        The Best Way to Find
        <br />
        Your Dream Home
      </h1>
      <p className="text-base text-white/70 leading-relaxed mb-8 max-sm:text-sm">
        With over 400,000 active listings, Emaar has the largest inventory of apartments in the United States.
      </p>
      <div className="hidden xl:inline-flex">
        <Button variant="primary" size="large">
          Get Started
        </Button>
      </div>
    </div>
  )
}
