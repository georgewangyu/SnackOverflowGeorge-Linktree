# SnackOverflowGeorge Linktree

A fast, static, blue-themed personal brand hub with light/dark mode and zero backend.

## ✨ Features

- 🎨 **Light/Dark Theme** - Auto-detects system preference + manual toggle
- 📱 **Responsive Grid** - Adapts to all screen sizes (3 → 4 → 6 columns)
- ⚡ **Zero Backend** - Static site, instant load, CDN-ready
- ♿ **Accessible** - WCAG 2.1 AA compliant, keyboard navigable
- 🎭 **Confetti Easter Egg** - Fun interactive element (respects reduced motion)
- 🧩 **Easy Content Updates** - Single `content.ts` file to manage everything
- 🎯 **Future-Proof** - Newsletter placeholder ready for Beehiiv/ConvertKit

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (specified in `.nvmrc`)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel:
```bash
vercel
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS
- **Theme:** next-themes
- **Type:** Static Site

## 📁 Project Structure

```
.
├── app/
│   ├── components/          # UI components
│   │   ├── HeroHeader.tsx   # Header with title, tagline, theme toggle
│   │   ├── AboutCard.tsx    # Large square profile photo tile
│   │   ├── AppIcon.tsx      # App/social tile component (rounded square images)
│   │   ├── FeatureTile.tsx  # Large feature banner tile
│   │   └── MainGrid.tsx     # 2-column layout orchestrator
│   ├── providers/
│   │   └── ThemeProvider.tsx # Theme context provider
│   ├── utils/
│   │   └── imageDiscovery.ts # Auto-discovery helpers for icons/images
│   ├── content.ts           # Single source of truth for all content
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page assembling all components
│   └── globals.css          # Global styles & theme variables
├── public/
│   ├── icons/              # App & social icons (PNG)
│   └── images/             # Profile & feature images (JPG/PNG)
├── package.json
└── README.md
```

## ✏️ Adding New Apps or Images

### Adding Icons (Easy!):
1. **Drop your PNG file** in `/public/icons/` (e.g., `your-app.png`)
2. **Update `app/content.ts`**:
   - Add to `iconMap` at the top: `yourApp: "your-app"`
   - Add the icon key type to `app/utils/imageDiscovery.ts` `IconKey` type
   - Add your item to either `personalItems` or `socials` array with the new `iconKey`

### Adding Images:
1. **Drop your JPG/PNG file** in `/public/images/`
   - Profile photo: `profile.jpg` or `profile.png`
   - Feature tile: `feature.jpg` or `feature.png`
2. **Update if needed:** If using a different name, update the `ImageKey` type in `app/utils/imageDiscovery.ts`

The system automatically discovers your assets - no manual path management!

## 🎨 Theming

- Light mode: `#E6E1DC` bg, `#111111` text, `#7CB3FF` primary
- Dark mode: `#0C0C14` bg, `#FAFAFA` text, `#4A8BFF` primary
- System preference detection enabled
- Manual toggle via `useTheme` hook

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
PLAUSIBLE_DOMAIN=your-domain.com
```

## 🎯 Current Status

✅ **Completed:**
- Project scaffold (T1-T3)
- All UI components (T4-T11)
- Light/dark theme system
- Responsive 2-column layout (mobile stacked)
- Accessibility features
- Auto-discovery system for images/icons
- Real profile photo and social icons
- Updated links (affiliate links for personal items, bit.ly for socials)

✅ **Completed (T12):**
- ✅ Theme system fixed (light/dark mode working)
- ✅ Deployed to Vercel: https://linktree.snackoverflowgeorge.com
- ✅ Production build successful
- ✅ Static generation enabled
- ✅ All pages working: /, /about, /playground

## 🧪 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Test production build
npm start
```

## ♿ Accessibility

- **WCAG 2.1 AA compliant**
- Full keyboard navigation with visible focus states
- Respects `prefers-reduced-motion`
- Semantic HTML throughout
- All images have alt text
- Color contrast ≥ 4.5:1 for body text

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Auto-deploy on push

```bash
# Or use CLI
npm i -g vercel
vercel
```

## 📄 License

Private project
