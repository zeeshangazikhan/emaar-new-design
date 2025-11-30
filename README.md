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
- Eye-catching hero banner
- Call-to-action buttons
- Property search form
- Engaging visuals

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

