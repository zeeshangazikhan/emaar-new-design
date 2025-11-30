# Emaar - Real Estate Property Finder

A modern, responsive real estate property finder web application built with Next.js, React, and TypeScript. This project was developed as a technical assessment to demonstrate frontend development skills, including component architecture, modern UI/UX design, and best practices in React development.

## Project Overview

Emaar is a comprehensive real estate platform that allows users to browse properties, explore popular locations, and discover their dream homes. The application features a clean, modern interface with smooth animations, responsive design, and an intuitive user experience.

### Assignment Context

This project was developed as part of a technical assessment to evaluate:
- **Frontend Development Skills**: React, Next.js, TypeScript proficiency
- **Component Architecture**: Atomic design principles and reusable components
- **UI/UX Design**: Modern, responsive, and accessible user interfaces
- **Code Quality**: Clean code, best practices, and maintainability
- **Performance**: Optimized rendering and efficient code structure

## Features

### Core Features

- **Property Listings**: Browse and filter properties for sale with detailed information
- **Popular Places**: Explore trending locations and neighborhoods
- **Property Search**: Advanced search functionality with filters
- **Download App Section**: Promotional section for mobile app download
- **Articles Section**: Real estate news and blog articles
- **Partners Section**: Showcase of trusted partners
- **Why Choose Us**: Highlight key benefits and features
- **Testimonials**: Customer reviews and testimonials (ready for implementation)

### UI/UX Features

- **Responsive Design**: Fully responsive across all device sizes (mobile, tablet, desktop)
- **Modern UI Components**: Built with Radix UI and shadcn/ui components
- **Smooth Animations**: Tailwind CSS animations for enhanced user experience
- **Hero Section Design**: A meticulously crafted hero section that solves a critical UX problem. The design supports both static images and dynamic video backgrounds (currently using optimized images as placeholders). The key innovation is the dual-focus layout that ensures both the engaging background media and the booking engine (property search form) remain prominently visible simultaneously. This addresses a fundamental issue in the original design where the booking engine was not clearly visible, causing users to lose interest and leave without engaging. The new design uses strategic z-index layering, responsive flexbox layouts, and semi-transparent overlays to maintain visual hierarchy while ensuring the primary conversion element (booking engine) is always accessible. The layout adapts seamlessly from side-by-side desktop view to stacked mobile view, ensuring optimal user experience across all devices.
- **Dark Mode Ready**: Theme provider setup for dark mode support
- **Accessibility**: ARIA-compliant components for better accessibility
- **Performance Optimized**: Static export ready for fast loading times

## Tech Stack

### Core Technologies

- **Framework**: [Next.js 16.0.3](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library**: [React 19.2.0](https://react.dev/) - Modern React with latest features
- **Styling**: [Tailwind CSS 4.1.9](https://tailwindcss.com/) - Utility-first CSS framework
- **Font**: [Poppins](https://fonts.google.com/specimen/Poppins) - Google Fonts

### UI Component Libraries

- **Radix UI**: Headless, accessible component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Navigation Menu, Popover, Select, Tabs, Toast, Tooltip, and more
- **shadcn/ui**: Re-usable components built on Radix UI
- **Lucide React**: Beautiful, customizable icons
- **Embla Carousel**: Modern carousel/slider component

### Form & Validation

- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolver for React Hook Form

### Additional Libraries

- **date-fns**: Modern JavaScript date utility library
- **recharts**: Composable charting library built on React
- **next-themes**: Perfect dark mode support for Next.js
- **sonner**: Beautiful toast notifications
- **class-variance-authority**: For building component variants

## Project Structure

```
emaar-new/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/               # React components
│   ├── atoms/               # Basic building blocks (buttons, inputs)
│   ├── molecules/           # Simple component combinations
│   ├── organisms/           # Complex UI sections
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PropertiesSection.tsx
│   │   ├── PopularPlaces.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ArticlesSection.tsx
│   │   ├── DownloadAppSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── PropertySearchForm.tsx
│   ├── templates/           # Page-level templates
│   │   └── HeroSection.tsx
│   ├── ui/                  # Reusable UI components
│   └── theme-provider.tsx   # Theme context provider
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
├── styles/                  # Additional stylesheets
├── .htaccess               # Apache configuration for cPanel
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

### Component Architecture

The project follows **Atomic Design Principles**:

- **Atoms**: Basic HTML elements (buttons, inputs, labels)
- **Molecules**: Simple groups of UI elements functioning together
- **Organisms**: Complex components that form distinct sections
- **Templates**: Page-level layouts that combine organisms
- **Pages**: Complete pages with real content

## Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**, **yarn**, or **pnpm**: Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd emaar-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Build static export for deployment
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Header
- Responsive navigation menu
- Mobile-friendly hamburger menu
- Logo and branding
- User actions (login, signup)

### Hero Section

The Hero Section is one of the most critical components of the application, designed with careful attention to user engagement and conversion optimization.

#### Design Philosophy

The hero section addresses a fundamental UX challenge: maintaining user interest while ensuring the booking engine (property search form) remains prominently visible and accessible. In the original design, the booking engine was not clearly visible, which led to users losing interest and leaving the page without engaging with the primary call-to-action.

#### Technical Implementation

**Background Media Support:**
- The hero section is architected to support both static images and dynamic video backgrounds
- Currently implemented with high-quality images as placeholders (`/images/findhouses4.jpg`)
- The component structure allows for seamless replacement of the `<Image>` component with a `<video>` element when video assets are available
- Background media is optimized with Next.js Image component for performance (priority loading, quality optimization)
- A semi-transparent dark overlay (`bg-black/60`) is applied to ensure text and form elements remain readable over any background media

**Layout Structure:**
- Full-screen hero section (`min-h-screen`) that creates an immersive first impression
- Responsive flexbox layout that adapts from side-by-side (desktop) to stacked (mobile) design
- Maximum width container (`max-w-[1400px]`) ensures content doesn't stretch too wide on large screens
- Strategic z-index layering: background (z-0), content (z-10) ensures proper visual hierarchy

**Content Distribution:**
- **Left Side (HeroContent)**: 
  - Compelling headline that immediately communicates value proposition
  - Descriptive text highlighting key statistics (400,000+ listings)
  - Primary call-to-action button ("Get Started")
  - Maximum width constraint ensures readability and prevents text from becoming too wide
  
- **Right Side (PropertySearchForm - Booking Engine)**:
  - Prominently positioned booking/search form
  - Always visible and accessible without scrolling
  - Integrated seamlessly with the hero content
  - Maintains visual balance with the content on the left

#### Design Decisions

1. **Dual Focus Strategy**: Unlike traditional hero sections that prioritize either media or content, this design ensures both the engaging background media AND the booking engine receive equal visual weight. This prevents users from getting distracted by beautiful visuals while missing the primary conversion element.

2. **Responsive Behavior**: 
   - Desktop: Side-by-side layout allows users to see both content and booking engine simultaneously
   - Mobile/Tablet: Stacked layout ensures booking engine appears immediately after hero content, maintaining visibility

3. **Visual Hierarchy**: The dark overlay (60% opacity) creates sufficient contrast to make white text and form elements stand out, while still allowing the background media to create an emotional connection with users.

4. **Performance Optimization**: Background images use Next.js Image optimization with priority loading, ensuring the hero section loads quickly and doesn't impact Core Web Vitals.

#### Problem Solved

The original design had a critical flaw: users would see beautiful background imagery but the booking engine was either hidden, too small, or required scrolling to access. This led to:
- High bounce rates
- Low conversion rates
- Users leaving without engaging with the search functionality
- Lost business opportunities

The new design ensures:
- Booking engine is immediately visible on page load
- Users can engage with search functionality without scrolling
- Background media enhances rather than distracts from the primary goal
- Better user engagement and higher conversion potential

#### Future Enhancements

When video assets are available, the implementation can be easily upgraded by replacing the Image component with a video element, maintaining all existing layout and functionality while adding the dynamic, engaging quality of video backgrounds.

### Properties Section
- Property listings grid
- Filter by type (sale, rent)
- Property cards with images
- Detailed property information

### Popular Places
- Trending locations carousel
- Location cards with images
- Quick navigation to location-based listings

### Why Choose Us
- Feature highlights
- Benefits showcase
- Trust indicators

### Articles Section
- Real estate blog posts
- Article cards with previews
- Category filtering

## Deployment

### Static Export (cPanel/Shared Hosting)

This project is configured for static export, making it compatible with traditional hosting:

1. **Build static files**
   ```bash
   npm run export
   ```

2. **Upload to server**
   - Upload contents of `out/` directory to `public_html`
   - Upload `.htaccess` file to `public_html`
   - Ensure proper file permissions (644 for files, 755 for directories)

3. **Verify deployment**
   - Check that all routes work correctly
   - Test responsive design on multiple devices
   - Verify images and assets load properly

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Other Deployment Options

- **Vercel**: One-click deployment (recommended for Next.js)
- **Netlify**: Static site hosting
- **AWS S3 + CloudFront**: Scalable static hosting
- **GitHub Pages**: Free static hosting

## Configuration

### Next.js Configuration

The project is configured with:
- Static export enabled (`output: 'export'`)
- Unoptimized images (for static hosting compatibility)
- Trailing slash enabled (for better cPanel compatibility)
- TypeScript build errors ignored (for faster development)

### TypeScript Configuration

- Strict mode enabled
- Path aliases configured (`@/*` for root imports)
- ES6 target
- React JSX transform

## Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are designed mobile-first and adapt seamlessly across devices.

## Performance Optimizations

- Static export for fast loading
- Optimized images (unoptimized mode for static hosting)
- Code splitting with Next.js
- Lazy loading where applicable
- Efficient component rendering

## Security

- Security headers configured in `.htaccess`
- XSS protection enabled
- Content type sniffing prevention
- Frame options configured

## Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting configured
- **Component-based**: Reusable, maintainable components
- **Clean Code**: Follows React and Next.js best practices
- **Comments**: Well-documented code

## Future Enhancements

Potential improvements for production:
- [ ] Backend API integration
- [ ] User authentication
- [ ] Property favorites/bookmarks
- [ ] Advanced filtering and search
- [ ] Map integration (Google Maps/Mapbox)
- [ ] Property comparison feature
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] SEO optimization
- [ ] Analytics integration

## License

This project was created as part of a technical assessment. All rights reserved.

## Author

Developed as a technical assessment project.

## Acknowledgments

- **Radix UI** for accessible component primitives
- **shadcn** for the component design system
- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework

## Contact

For questions or feedback about this project, please reach out through the appropriate channels.

---

**Note**: This project is a frontend-only application. Backend integration, API endpoints, and database connections would need to be implemented separately for a production-ready application.

