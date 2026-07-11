# SnackOverflowGeorge Linktree

## Free guide lead capture

Clicking the free-guide card opens an accessible email popup. The email is
added to the Resend `Free AI Guide` segment. The optional updates checkbox is
the only action that opts the contact into the `Practical AI Workflows` topic;
unchecked guide requests remain globally unsubscribed from broadcasts.

After Resend accepts the contact, the server returns a five-minute GET-only URL
for the free PDF in Vercel Private Blob and sends the same PDF as an attachment
from the verified guide sender. Email delivery is best effort so a temporary
mail failure does not block the immediate download. The free guide is not
served from `public/`.

Resend configuration is managed through the official CLI. The deployed app
requires `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_FREE_GUIDE_SEGMENT_ID`,
`RESEND_AI_WORKFLOWS_TOPIC_ID`, and `FREE_GUIDE_BLOB_PATHNAME`. A verified
sending domain is not required for contact capture, but it is required before
emailing the guide or sending broadcasts.

## Paid playbook delivery

The paid playbook is stored in a private Vercel Blob store and is never copied
into `public/`.

Stripe redirects successful buyers to
`/playbook/thank-you?session_id={CHECKOUT_SESSION_ID}`. The server verifies that
the live Checkout Session is complete, paid, originated from the expected
Payment Link, and contains the exact playbook price. Only then does the download
route issue a five-minute, GET-only signed URL for the configured private Blob.
The page and download route are private/no-store, and web analytics are disabled
on the thank-you page because the Checkout Session ID is a bearer credential.

Required server variables are documented here. Vercel supplies the linked Blob
credentials; `STRIPE_SECRET_KEY`, `BLOB_STORE_ID`, and
`PLAYBOOK_BLOB_PATHNAME` must be configured for each deployment environment.

### Replace the playbook PDF

1. Compute a content hash of the final PDF.
2. Upload it to the private store under a new versioned pathname such as
   `products/seven-day-ai-workflow-pilot/v2-<hash>.pdf`.
3. Change `PLAYBOOK_BLOB_PATHNAME` to the exact uploaded pathname for the target
   Vercel environment.
4. Deploy a new preview and run the entitlement checks before promoting it.

Do not overwrite an existing pathname or place a paid artifact under `public/`.

A fast personal brand hub with a small server-side boundary for secure digital delivery.

## ✨ Features

- 🎨 **Light/Dark Theme** - Auto-detects system preference + manual toggle
- 📱 **Responsive Grid** - Adapts to all screen sizes (3 → 4 → 6 columns)
- 🔐 **Secure Delivery** - Stripe-verified access to private digital products
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
- **Type:** Next.js site with static pages and server-side entitlement routes

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

Keep these values server-only; do not prefix them with `NEXT_PUBLIC_`:

- `STRIPE_SECRET_KEY`
- `BLOB_STORE_ID`
- `BLOB_READ_WRITE_TOKEN`
- `PLAYBOOK_BLOB_PATHNAME`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_REPLY_TO_EMAIL`
- `RESEND_FREE_GUIDE_SEGMENT_ID`
- `RESEND_AI_WORKFLOWS_TOPIC_ID`
- `FREE_GUIDE_BLOB_PATHNAME`
- `FREE_GUIDE_VERSION`

## 🎯 Current Status

✅ **Completed:**
- Project scaffold (T1-T3)
- All UI components (T4-T11)
- Light/dark theme system
- Responsive 2-column layout (mobile stacked)
- Accessibility features
- Auto-discovery system for images/icons
- Real profile photo and social icons
- Updated links (affiliate links for personal items, direct platform links for socials)

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
