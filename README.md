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
│     ├─ CourseCard.tsx         Hover/tap-triggered course tile
│     ├─ CourseDetailPanel.tsx  Slide-in panel (navy header, light body)
│     └─ EnrollmentForm.tsx     Validated form → Google Form POST
├─ config/
│  └─ courses.ts          ⭐ Course catalog + Google Form mapping
├─ lib/
│  └─ submitToGoogleForm.ts     Encodes + POSTs with no-cors
└─ styles.css             Tailwind v4 tokens (light government theme)
```

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

1. Create a Google Form with these fields (in order):
   Full name · Email · Phone · College / Institution · Year of study ·
   Designation · Why interested
2. From the form's Send dialog, copy the link. The ID between
   `/forms/d/e/<FORM_ID>/viewform` is your `formId`.
3. Open the 3-dot menu → "Get pre-filled link". Fill every field with a dummy
   value, click "Get link". The URL contains `entry.123=Dummy` pairs — the
   numbers are your field IDs.
4. Paste into `src/config/courses.ts`:
   ```ts
   googleForm: {
     formId: "1FAIpQLSe...Xyz",
     fields: {
       name:        "entry.1234567890",
       email:       "entry.2345678901",
       phone:       "entry.3456789012",
       institution: "entry.4567890123",
       year:        "entry.5678901234",
       designation: "entry.6789012345",
       motivation:  "entry.7890123456",
     },
   },
   ```
5. Test: submit once and confirm the response in the Google Form "Responses" tab.

> Submissions use `fetch(..., { mode: "no-cors" })`. The browser cannot read
> the response (Google Forms returns no CORS headers), so the code treats a
> resolved fetch as success. This is the standard pattern.

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

## License

Programme content © IIIT Delhi & MEIT. Codebase is internal — contact the
programme team before reuse.
