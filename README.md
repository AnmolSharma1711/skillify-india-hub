# Skillify — IIIT Delhi × MEIT

A professional, light-themed marketing and enrollment site for the IIIT Delhi
skilling initiative powered by the Ministry of Electronics and Information
Technology (MEIT), Government of India.

The site introduces three free, mentor-led programmes — **Python**,
**Machine Learning** and **Generative AI** — and captures enrollments by
silently submitting a styled in-app form to a Google Form behind the scenes.

---

## Tech stack

| Layer | Tech |
|---|---|
| Framework | **TanStack Start v1** (React 19 + Vite 7, SSR-ready) |
| Styling | **Tailwind CSS v4** (CSS-first, design tokens in `src/styles.css`) |
| 3D Background | **Three.js** — animated particle canvas in the hero section |
| Animations | **GSAP** — entrance / scroll animations |
| UI primitives | **shadcn/ui** (button, input, sonner, …) |
| Validation | **Zod** (client-side form) |
| Toasts | **Sonner** |
| Icons | **lucide-react** |

No backend is required to run the site.

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Design system

### Color palette — professional light / government standard

The site uses a light base with Indian government-inspired brand colors:

| Token | Value | Use |
|---|---|---|
| `--brand-navy` | Deep government navy | Primary text, buttons, headings |
| `--brand-saffron` | Indian saffron / gold | Accent dots, badges, CTA highlights |
| `--brand-teal` | Teal-blue | Section labels, links, icon accents |
| `--gradient-brand` | Navy → teal | CTA buttons, gradient text |
| `--gradient-saffron` | Saffron → amber | Card accent variant |

A tricolor stripe (saffron / white / navy) appears at the very top of the
navbar and in the hero section as a nod to the Indian tricolor.

The footer uses a dark navy background — the only "dark" section on the page —
providing strong contrast and a clear visual close to the page.

All colors are defined in **`src/styles.css`** using `oklch` format and
exposed to Tailwind via `@theme inline`. Never write raw color classes in
components — always use semantic tokens or CSS variables.

### Typography

- **Display / Headings:** Space Grotesk (bold, tight tracking)
- **Body:** Inter (regular weight, relaxed line height)

---

## Three.js hero canvas

`src/components/home/HeroCanvas.tsx` renders a field of wireframe icosahedrons
in navy, teal, and saffron that drift gently across the canvas. Subtle
connection lines are drawn between particles that come within 18 units.

Mouse movement creates a parallax camera drift. Particle count automatically
reduces on low-DPI devices for performance.

The canvas sits `z-index: 0` behind a white gradient wash, so text remains
readable regardless of particle density.

---

## GSAP animations

Two patterns are used:

1. **Entrance (Hero)** — `gsap.fromTo` runs on component mount, staggering each
   `[data-animate]` child upward with `y: 28 → 0, opacity: 0 → 1`.
2. **Scroll reveal (MissionSection)** — `IntersectionObserver` fires the same
   animation when the section enters the viewport. Disconnect after first
   trigger so it doesn't re-play on scroll back.

Add `data-animate` to any element inside `Hero` to include it in the stagger
sequence. For other sections, wrap an `IntersectionObserver` around
`[data-card]` children.

---

## Project structure

```
src/
├─ routes/
│  ├─ __root.tsx          App shell: navbar, footer, toaster
│  ├─ index.tsx           Landing page (/)
│  ├─ courses.tsx         Course grid (/courses)
│  └─ about.tsx           About page (/about)
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx       Sticky white nav with scroll shadow + tricolor bar
│  │  └─ Footer.tsx       Dark navy footer
│  ├─ home/
│  │  ├─ Hero.tsx         Hero with Three.js canvas + GSAP entrance
│  │  ├─ HeroCanvas.tsx   Three.js particle scene
│  │  └─ MissionSection.tsx  Three-pillar section with scroll animations
│  └─ courses/
│     ├─ CoursesGrid.tsx        Manages which card is open
│     ├─ CourseCard.tsx         Hover/tap-triggered course tile with tech badges
│     ├─ CourseDetailPanel.tsx  Slide-in panel (navy header, light body)
│     └─ EnrollmentForm.tsx     Validated form → Google Form POST
├─ config/
│  └─ courses.ts          ⭐ Course catalog, tech stack, Google Form mapping
├─ lib/
│  └─ submitToGoogleForm.ts     Encodes + POSTs with no-cors
└─ styles.css             Tailwind v4 tokens (light government theme)
```

---

## Course icons & badges

Each course has:

1. **Main icon** — displayed in a gradient badge at the top of the card:
   - Python: `Snake` 🐍
   - Machine Learning: `Brain` 🧠
   - Generative AI: `Sparkles` ✨

2. **Tech stack badges** — 3 small tags showing the tools/libraries used (Python, NumPy, PyTorch, etc.)

Both are defined in `src/config/courses.ts`. To customize:

```typescript
{
  id: "python",
  title: "Python Programming",
  icon: "Snake",  // Main course icon (lucide-react name)
  // ...
  techs: [
    { icon: "Code", label: "Python" },
    { icon: "Database", label: "JSON" },
  ],
}
```

Valid icon names are any **lucide-react** icon. Common options:

| Icon | Use |
|---|---|
| `Snake` | Python |
| `Brain` | AI, ML, Thinking |
| `Sparkles` | Generative, Magic, Advanced |
| `Code` | Programming, Coding |
| `Database` | Data, Storage |
| `GitBranch` | Git, Version control |
| `BarChart3` | Data visualization |
| `TrendingUp` | Growth, Statistics |
| `Zap` | Speed, Power, Lightning |
| `Network` | Networking, Connections |
| `Workflow` | Pipelines, Automation |

---

## How the hover panel works

`CourseCard` reports user intent (hover in, hover out, click) to the parent
`CoursesGrid`. The grid owns `openId` (only one panel visible at a time) and
a shared grace-period timer so the cursor can travel from card into panel
without triggering a close.

`CourseDetailPanel` is a `position: fixed` element pinned to the top-right of
the viewport. It animates via Tailwind transitions on `translate-x` and
`opacity`. The panel has a dark navy header and a white scrollable body
containing the enrollment form.

---

## How to wire a real Google Form

### Step 1: Create the Google Form

1. Go to [forms.google.com](https://forms.google.com)
2. Create a new form, title it `[Course Name] - Enrollment Form`
3. Add fields **in this exact order**:
   - **Full name** (short answer)
   - **Email** (short answer)
   - **Phone** (short answer)
   - **College / Institution** (short answer)
   - **Year of study** (short answer)
   - **Designation** (short answer)
   - **Why are you interested?** (paragraph)

4. At the top, add a description: "Free enrollment for [Course Name], taught by IIIT Delhi faculty."
5. Click "Send" button → under "Send responses to email" → copy the Google Form URL (save it, you'll need the ID)

### Step 2: Extract the Form ID

From the form URL:
```
https://forms.gle/abc123XYZ   OR
https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXX/viewform?usp=sf_link
```

The ID is the long string between `/d/e/` and `/viewform`. Example: `1FAIpQLSeXXXXXXXXX`

### Step 3: Get Field Entry IDs

1. Click the 3-dot menu on your form → **"Get pre-filled link"**
2. Fill EVERY field with a test value (e.g., "Test Name", "test@example.com", etc.)
3. Click **"Get link"** button at the bottom
4. Copy the generated URL. It will look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXX/viewform?entry.1111111111=Test+Name&entry.2222222222=test%40example.com&entry.3333333333=1234567890&entry.4444444444=Test+College...
   ```

Extract the `entry.XXXXXXXXX` values for each field (in order):
- `entry.1111111111` = Full name
- `entry.2222222222` = Email
- `entry.3333333333` = Phone
- `entry.4444444444` = Institution
- `entry.5555555555` = Year of study
- `entry.7777777777` = Designation
- `entry.6666666666` = Motivation

### Step 4: Update the Course Config

Edit `src/config/courses.ts` for each course:

```typescript
{
  id: "python",
  title: "Python Programming",
  // ... other fields ...
  googleForm: {
    formId: "1FAIpQLSeXXXXXXXXX",  // Replace with your form ID
    fields: {
      name:        "entry.1111111111",     // Replace with your field ID
      email:       "entry.2222222222",
      phone:       "entry.3333333333",
      institution: "entry.4444444444",
      year:        "entry.5555555555",
      designation: "entry.7777777777",
      motivation:  "entry.6666666666",
    },
  },
}
```

### Step 5: Test the Enrollment

1. Start the dev server: `npm run dev`
2. Go to http://localhost:5173/courses
3. Click a course card
4. Fill the enrollment form **using the exact same test values** you used in Step 3
5. Click "Enroll" button
6. Open your Google Form's "Responses" tab — you should see the submission appear

If it doesn't appear:
- Check the browser console (Inspect → Console) for error messages
- Verify the form ID and entry IDs match exactly
- Ensure no typos in the `googleForm` config
- Test the pre-filled link directly in the browser to confirm it works

### How it works

- The form submission uses `fetch(..., { mode: "no-cors" })` (no CORS headers)
- Browsers cannot read Google Forms' response, so any resolved fetch = success
- After submission, the form shows "You're in!" confirmation
- A toast notification confirms enrollment

---

---

## Accessibility

- Slide-in panel: `role="dialog"`, `aria-label`, `aria-hidden`.
- Escape closes the panel; close button always focusable.
- Course card: `role="button"`, `tabIndex={0}`, opens on focus.
- Tricolor bar and decorative overlays are `aria-hidden`.
- Color contrast passes WCAG AA throughout the light theme.

---

## Plugging in Django (later)

1. **`src/lib/submitToGoogleForm.ts`** — replace the `fetch` body with a call
   to your Django endpoint (e.g. `POST /api/enrollments`). Keep
   `EnrollmentPayload` as the request body shape.
2. **`src/config/courses.ts`** — instead of static data, fetch from
   `GET /api/courses` inside a TanStack route loader.

---

## Logo integration

The IIIT Delhi and MEIT logos are stored as asset JSON files in `src/assets/`:

- `iiitd-logo.png.asset.json` — Bolt-managed asset with CDN URL
- `meit-logo.png.asset.json` — Bolt-managed asset with CDN URL

These are imported in components and rendered via `<img src={logo.url}>`:

```typescript
import iiitdLogo from "@/assets/iiitd-logo.png.asset.json";

<img src={iiitdLogo.url} alt="IIIT Delhi" className="h-10 w-auto" />
```

If logos don't appear:
1. Check browser DevTools → Network tab — are the image URLs returning 200?
2. Verify asset URLs are accessible (not blocked by CORS)
3. Ensure running `npm run dev` (dev server required for asset resolution)
4. Try opening in an incognito window (clears cache)

---

Programme content © IIIT Delhi & MEIT. Codebase is internal — contact the
programme team before reuse.
