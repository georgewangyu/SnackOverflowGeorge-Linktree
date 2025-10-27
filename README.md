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
│   │   ├── AboutCard.tsx    # Profile photo & bio
│   │   ├── AppIcon.tsx      # App tile component
│   │   ├── AppGrid.tsx      # Responsive app grid (3/4/6 cols)
│   │   ├── FeatureTile.tsx  # Feature banner with confetti
│   │   ├── SocialRow.tsx    # Social links row
│   │   ├── NewsletterCTA.tsx # Newsletter CTA button
│   │   └── Footer.tsx       # Footer
│   ├── providers/
│   │   └── ThemeProvider.tsx # Theme context provider
│   ├── content.ts           # Single source of truth for all content
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page assembling all components
│   └── globals.css          # Global styles & theme variables
├── public/
│   ├── icons/              # App & social icons (PNG)
│   └── images/              # Profile & feature images
├── package.json
└── README.md
```

## ✏️ Adding New Apps

### Quick Add (2 steps):

1. **Add icon:** Drop `your-app.png` in `/public/icons/`
2. **Edit content:** Update `app/content.ts`:
   - Add to `iconMap`: `yourApp: "your-app"`
   - Add to `apps` array:
   ```ts
   {
     title: "Your App Name",
     iconKey: "yourApp" as keyof typeof iconMap,
     href: "https://link.com",
     alt: "Description",
   }
   ```

See [ASSETS.md](./ASSETS.md) for complete guide on managing icons and images.

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
- Responsive grid layout
- Accessibility features
- Placeholder icons & images

⏳ **Remaining (T12):**
- Replace placeholder images with real assets
- Deploy to Vercel
- Run Lighthouse audit
- Performance optimization

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

