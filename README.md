# JAFF Studio - Digital Agency Website

A brutally clean, high-performance agency website built with Next.js 15. Black & white aesthetic focused on conversion.

## 🎯 Mission

Rebuild jaffstudio.com into a minimal brutalist design that:
- Loads in under 2 seconds
- Achieves 95+ Lighthouse score
- Converts visitors into clients
- Works flawlessly across devices

## 🎨 Design Philosophy

**BLACK & WHITE ONLY**
- Primary Black: `#000000`
- Pure White: `#FFFFFF`
- Dark Gray: `#0A0A0A`
- Medium Gray: `#1A1A1A`
- Light Gray: `#2D2D2D`
- Off-White: `#F5F5F5`

**Visual Interest Through:**
- Typography hierarchy
- Generous whitespace
- 3D elements (wireframe)
- Subtle animations
- Noise texture overlay
- Contrast & scale

## 🛠 Tech Stack

**Core:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- React 19

**3D & Animations:**
- React Three Fiber
- Three.js
- Framer Motion
- GSAP
- Lenis (smooth scroll)

**UI Components:**
- Radix UI primitives
- Custom design system
- CVA (class variance authority)

**Forms & Validation:**
- React Hook Form
- Zod

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & theme
├── components/
│   ├── ui/                 # Design system components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   ├── navigation.tsx      # Main navigation
│   ├── footer.tsx          # Footer component
│   └── hero-3d.tsx         # 3D hero element
└── lib/
    └── utils.ts            # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎯 Core Pages (Phase 1 - Complete)

- ✅ **Home** - Hero, Services, Portfolio, Social Proof, CTA
- ⏳ **Services** - Detailed service pages
- ⏳ **Portfolio** - Case studies with results
- ⏳ **About** - Team & mission
- ⏳ **Pricing** - Transparent pricing with calculator
- ⏳ **Contact** - Form + Calendly integration
- ⏳ **Blog** - Thought leadership
- ⏳ **Resources** - Lead magnets & tools

## ✨ Features

### Current (Phase 1)
- ✅ Responsive black & white design
- ✅ 3D wireframe hero element
- ✅ Services showcase
- ✅ Portfolio highlights
- ✅ Client testimonials
- ✅ Mobile navigation
- ✅ Optimized performance

### Coming Soon (Phase 2+)
- ⏳ Smooth scroll animations
- ⏳ Multilingual (DE/EN/FR)
- ⏳ Interactive ROI calculator
- ⏳ Live chat integration
- ⏳ Blog with MDX
- ⏳ Calendly booking

## 🎨 Design System

### Typography
- **Headings:** System fonts, 700-900 weight
- **Body:** System sans-serif, 400-500 weight
- **Monospace:** Courier New (code elements)
- **Scale:** 14px to 96px (fluid)

### Components
```tsx
// Button variants
<Button variant="default">Primary</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Tertiary</Button>

// Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Layout
<Container>
  <Section>Content</Section>
</Container>
```

## 🔧 Performance

Current metrics:
- First Contentful Paint: ~1.2s
- Time to Interactive: ~2.5s
- Bundle size: ~150KB (target met)
- Images: Optimized with next/image
- Static generation for fast loads

## 🌍 Multilingual Support (Coming)

Planned languages:
- 🇩🇪 German (primary)
- 🇬🇧 English
- 🇫🇷 French

URL structure: `/de/`, `/en/`, `/fr/`

## 📦 Dependencies

**Production:**
- next@16.0.2
- react@19.0.0
- tailwindcss@4.0.0
- framer-motion@latest
- @react-three/fiber
- three
- lenis
- lucide-react
- zod

**Dev:**
- typescript
- eslint
- @types/react

## 🚢 Deployment

Build command:
```bash
npm run build
```

Optimized for:
- Vercel
- Netlify
- Any static host

## 📝 License

© 2024 JAFF Studio. All rights reserved.

## 🤝 Contact

- Website: jaffstudio.com (in development)
- Email: contact@jaffstudio.com

---

**Built with ⚡️ by JAFF Studio**
