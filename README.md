# Skillify — IIIT Delhi × MEIT

A professional, light-themed marketing and enrollment site for the IIIT Delhi skilling initiative powered by the Ministry of Electronics and Information Technology (MEIT), Government of India.

The site introduces three free, mentor-led programmes — **Python**, **Machine Learning** and **Generative AI** — and captures enrollments through an in-app form.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | **React 18** + **React Router v6** |
| Build Tool | **Vite 5** |
| Styling | **Tailwind CSS v3** (Node 18+ compatible) |
| 3D Background | **Three.js** — animated particle canvas in hero section |
| Animations | **GSAP** — entrance animations |
| UI Primitives | **shadcn/ui** (button, input, sonner, …) |
| Validation | **Zod** (client-side form) |
| Toasts | **Sonner** |
| Icons | **lucide-react** |
| Meta Tags | **react-helmet-async** |

**No backend required** — SPA deployed to Vercel.

---

## Quick Start

### Prerequisites
- Node 18+ (v20+ recommended for faster builds)
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
npm run preview  # Test production build locally
```

Output: `dist/` folder (ready for Vercel/static hosting)

---

## Project Structure

```
src/
├── main.tsx                 # React entry point with BrowserRouter
├── App.tsx                  # Routes definition
├── styles.css               # Tailwind + design tokens
├── pages/
│   ├── Index.tsx            # Home page
│   ├── Courses.tsx          # Courses listing
│   ├── About.tsx            # About programme
│   └── NotFound.tsx         # 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx         # Hero section with 3D canvas
│   │   ├── HeroCanvas.tsx   # Three.js particle animation
│   │   └── MissionSection.tsx
│   ├── courses/
│   │   ├── CourseCard.tsx
│   │   ├── CourseDetailPanel.tsx
│   │   ├── CoursesGrid.tsx
│   │   └── EnrollmentForm.tsx
│   └── ui/                  # shadcn/ui components
├── config/
│   └── courses.ts           # Course data
└── lib/
    └── utils.ts             # Utilities & form submission
```

---

## Design System

### Color Palette (Government Professional Light Theme)

| Token | Value | Use |
|---|---|---|
| `--brand-navy` | Deep government navy | Primary text, buttons, headings |
| `--brand-saffron` | Indian saffron / gold | Accent highlights, badges |
| `--brand-teal` | Professional teal-blue | Secondary accents, links |
| `--background` | Crisp white (`oklch(0.99...)`) | Page background |
| `--foreground` | Deep charcoal | Body text |

### Spacing & Typography

- **Spacing**: 8px base unit (Tailwind default)
- **Fonts**: 
  - Body: "Inter" (sans-serif)
  - Display/Headings: "Space Grotesk" (sans-serif)
- **Line heights**: 150% for body, 120% for headings

### Dark Mode

Limited dark mode support via `.dark` class for specific sections (footer, detail panels). Not a full system-wide theme.

---

## Features

### Pages

1. **Home** (`/`)
   - Hero section with Three.js particle animation
   - Mission statement
   - Course preview grid
   - India tricolor accent stripe

2. **Courses** (`/courses`)
   - Full course grid with tech badges
   - Course detail panel (hover/tap to reveal)
   - Enrollment form

3. **About** (`/about`)
   - Programme overview
   - Mission statement boxes
   - Programme benefits
   - Link to courses

4. **404** (catch-all)
   - Custom not-found page

### Form Submission

Enrollment form uses `react-hook-form` + `zod` validation. Submissions are processed client-side and can be integrated with backend APIs or webhooks.

---

## Deployment to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Skillify: React + Vite, Tailwind v3, React Router"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Select your GitHub repository
3. Click **"Import"**
4. Vercel auto-detects `vercel.json` configuration ✅
5. Click **"Deploy"**

### 3. Verify

- ✅ Home page loads at your Vercel URL
- ✅ All routes work (no 404 errors)
- ✅ Logos display correctly (embedded SVG)
- ✅ Animations smooth

**Build time**: ~2-3 minutes

---

## Configuration Files

### `vite.config.ts`
Standard Vite config with React plugin and path aliases.

### `tailwind.config.js`
Tailwind v3 content paths and theme extends.

### `postcss.config.js`
PostCSS pipeline for Tailwind v3 processing.

### `vercel.json`
Vercel deployment config with SPA rewrites for React Router client-side navigation.

### `tsconfig.json`
TypeScript v5 config with `@/*` path alias and strict type checking.

---

## Development Notes

### Adding a New Course

Edit `src/config/courses.ts`:

```typescript
{
  id: "new-course",
  title: "New Course",
  icon: Icons.BookOpen,
  description: "Course description",
  tags: ["tag1", "tag2"],
  syllabus: "Syllabus text",
  duration: "8 weeks",
  mentor: "Mentor name",
}
```

### Updating Colors

Edit `:root` variables in `src/styles.css`:

```css
:root {
  --brand-navy: oklch(0.28 0.13 258);  /* Change this */
  --brand-saffron: oklch(0.72 0.17 65);
  --brand-teal: oklch(0.52 0.11 215);
}
```

All Tailwind classes using `var(--color-*)` will update automatically.

### Adding a New Route

1. Create page component in `src/pages/MyPage.tsx`
2. Add route to `src/App.tsx`:

```typescript
<Route path="/my-page" element={<MyPage />} />
```

3. Update navigation in `src/components/layout/Navbar.tsx` if needed

---

## Performance Notes

### Current Bundle Size
- CSS: ~51 kB (gzipped ~9 kB)
- JS: ~1.76 MB (gzipped ~410 kB)

### Optimization Opportunities
- Three.js and GSAP are large libraries. Consider dynamic imports if performance becomes critical.
- Code splitting can be enabled in Vite for individual page routes.

### Best Practices
- Use `npm run preview` to test production builds locally
- Monitor Vercel deployment logs for build warnings
- Lighthouse reports available in Vercel dashboard

---

## Troubleshooting

### Dev Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Fails
```bash
# Check for TypeScript errors
npm run build -- --debug

# Clear Vercel cache and redeploy
# (In Vercel dashboard → Project Settings → Advanced → Clear Build Cache)
```

### Styling Not Applying
- Ensure `src/styles.css` is imported in `src/main.tsx`
- Check Tailwind content paths in `tailwind.config.js`
- Verify CSS class names match Tailwind syntax

---

## License

Built for IIIT Delhi × MEIT. All rights reserved.

---

**Status**: ✅ Production-ready, deployed to Vercel, Node 18+ compatible
