# Ritwik Anand Mishra — Portfolio

A pixel-art themed personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🎮 Tech Stack

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS + Custom Pixel CSS
- **UI Components**: Radix UI + Shadcn/UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages (via GitHub Actions)

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:8080
```

## 🌐 Deploy to GitHub Pages

1. Create a new GitHub repo named `ritwik-portfolio`
2. Push this code to the `main` branch:
   ```bash
   git init
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ritwik-portfolio.git
   git add .
   git commit -m "Initial portfolio"
   git push -u origin main
   ```
3. Go to **Settings → Pages → Build and deployment → Source → GitHub Actions**
4. Your site will be live at `https://YOUR_USERNAME.github.io/ritwik-portfolio/`

> ⚠️ If you use a different repo name, update `base` in `vite.config.ts` and `basename` in `src/App.tsx` to match.

## 📁 Customisation

| What to change | Where |
|---|---|
| Name, tagline, bio | `src/components/Hero.tsx`, `src/components/About.tsx` |
| Projects | `src/components/Projects.tsx` |
| Skills & levels | `src/components/Skills.tsx` |
| Email, LinkedIn, GitHub | `src/components/Contact.tsx` |
| Profile photo | Replace `src/assets/me-white.png` & `src/assets/me-dark.png` |
| Site title / meta | `index.html` |

## 📸 Add Your Profile Photo

Replace both files with your own photo (same filename):
```
src/assets/me-white.png   ← shown in light mode
src/assets/me-dark.png    ← shown in dark mode
```
Recommended: 400×400px, square crop.

---
Built on top of the pixel-art portfolio template by [raaj2045](https://github.com/raaj2045/codewraaj).
