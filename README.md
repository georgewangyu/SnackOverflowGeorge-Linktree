# SnackOverflowGeorge Linktree

A fast, static, blue-themed personal brand hub with light/dark mode and zero backend.

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
│   ├── content.ts          # Single source of truth for all content
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page
│   ├── globals.css          # Global styles & theme variables
│   └── providers/
│       └── ThemeProvider.tsx
├── public/
│   ├── icons/              # App & social icons (PNG)
│   └── images/             # Profile & feature images
└── package.json
```

## ✏️ Adding New Apps

Edit `app/content.ts` and add to the `apps` array:

```ts
apps: [
  {
    title: "Your App Name",
    icon: "/icons/your-icon.png",
    href: "https://your-link.com",
    alt: "Accessible description",
  },
  // ... existing apps
]
```

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

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Focus-visible states
- Reduced motion support
- Semantic HTML

## 📄 License

Private project

