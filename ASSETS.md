# 📦 Asset Management Guide

## 🎯 How to Add Icons & Images

No code editing required! Just drop files and they'll automatically load.

---

## 🖼️ Icons (App Tiles)

### Location: `/public/icons/`
### Format: PNG files only

### Add a New Icon:
1. Drop your PNG file into `/public/icons/`
2. Name it using the key format: `iconname.png`

**Example:**
- File: `/public/icons/producthunt.png`
- Auto-loads as: `/icons/producthunt.png`

### Current Icon Keys:
- `youtube.png` - YouTube
- `github.png` - GitHub  
- `tiktok.png` - TikTok
- `blog.png` - Blog
- `x.png` - X (Twitter)
- `discord.png` - Discord

### Supported Platforms (can add icons for):
- `twitch.png` - Twitch
- `instagram.png` - Instagram
- `linkedin.png` - LinkedIn
- `substack.png` - Substack
- `newsletter.png` - Newsletter
- Any other platform!

---

## 📷 Images (Profile & Feature)

### Location: `/public/images/`
### Format: JPG or PNG

### Required Files:

#### 1. Profile Photo
- **File:** `profile.jpg` or `profile.png`
- **Path:** `/images/profile.jpg`
- **Usage:** About section portrait
- **Recommended size:** 224x224px or larger

#### 2. Feature Banner (Optional)
- **File:** `feature.jpg` or `feature.png`
- **Path:** `/images/feature.jpg`
- **Usage:** Large feature tile
- **Recommended:** 1200x630px or similar

---

## ✏️ Adding a New App to the Grid

### Step 1: Add the icon
```bash
# Copy your icon file
cp my-icon.png public/icons/appname.png
```

### Step 2: Edit `app/content.ts`
Add to the `iconMap`:
```ts
const iconMap = {
  youtube: "youtube",
  github: "github",
  appname: "appname",  // ← Add this
} as const;
```

Then add to `apps` array:
```ts
apps: [
  {
    title: "My App Name",
    iconKey: "appname" as keyof typeof iconMap,
    href: "https://link.com",
    alt: "My App",
  },
  // ... existing apps
]
```

---

## 🎨 Image Guidelines

### Icon Specifications:
- **Size:** 48x48px minimum (will scale up)
- **Format:** PNG with transparency
- **Background:** Transparent preferred
- **Colors:** Match brand colors

### Profile Photo Specifications:
- **Size:** 224x224px or larger (square)
- **Format:** JPG or PNG
- **Quality:** High (at least 800x800px source)

### Feature Banner Specifications:
- **Size:** 1200x630px (or 2:1 ratio)
- **Format:** JPG or PNG
- **Quality:** High resolution

---

## 🚀 Quick Reference

| What You Want | File Path | Image Key |
|--------------|-----------|-----------|
| App icon | `/public/icons/appname.png` | Auto-mapped |
| Profile photo | `/public/images/profile.jpg` | `profile` |
| Feature banner | `/public/images/feature.jpg` | `feature` |

---

## 💡 Tips

1. **Always use PNG for icons** - Transparent backgrounds work best
2. **Optimize before uploading** - Use [TinyPNG](https://tinypng.com/)
3. **Keep filenames simple** - Lowercase, no spaces: `myapp.png`
4. **Test after adding** - Refresh browser to see new icons
5. **Git commit your assets** - Keep the repo complete

---

## 🔍 Troubleshooting

**Icon not showing?**
- Check file is in `/public/icons/`
- Verify filename matches iconKey in `iconMap`
- Ensure file is PNG format
- Refresh browser (hard refresh: Cmd+Shift+R)

**Image not loading?**
- Check file is in `/public/images/`
- Verify filename is exactly `profile.jpg` or `feature.jpg`
- Check file format (JPG or PNG)

**Build errors?**
- Run `npm run build` to check for TypeScript errors
- Ensure iconKey exists in `iconMap`

