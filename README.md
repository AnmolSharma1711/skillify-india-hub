# Skillify — IIIT Delhi × MEIT

A dark, technology-themed marketing site for the IIIT Delhi skilling initiative
powered by the Ministry of Electronics and Information Technology (MEIT).

The site introduces three free, mentor-led programmes — **Python**,
**Machine Learning** and **Generative AI** — and captures enrollments by
silently submitting a styled in-app form to a Google Form behind the scenes.

---

## Tech stack

- **TanStack Start v1** (React 19 + Vite 7, SSR-ready)
- **Tailwind CSS v4** (CSS-first, design tokens in `src/styles.css`)
- **shadcn/ui** primitives (button, input, sonner, …)
- **Zod** for client-side form validation
- **Sonner** for toast notifications
- **lucide-react** for icons

No backend is required to run the site. A Django backend can be added later
(see _Plugging in Django_ at the bottom of this file).

---

## Running locally

```bash
bun install
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the URL printed by Vite).

---

## Project structure

```
src/
├─ routes/                       # File-based routes (TanStack Router)
│  ├─ __root.tsx                 # App shell: navbar, footer, toaster
│  ├─ index.tsx                  # Landing page (/)
│  ├─ courses.tsx                # Course grid (/courses)
│  └─ about.tsx                  # About the project (/about)
├─ components/
│  ├─ layout/                    # Navbar, Footer
│  ├─ home/                      # Hero, MissionSection
│  └─ courses/
│     ├─ CourseCard.tsx          # Hover-to-open course tile
│     ├─ CourseDetailPanel.tsx   # The slide-in panel anchored top-right
│     └─ EnrollmentForm.tsx      # Validated form → Google Form POST
├─ config/
│  └─ courses.ts                 # ⭐ Course catalog + Google Form mapping
├─ lib/
│  └─ submitToGoogleForm.ts      # Helper that POSTs to Google Forms
└─ styles.css                    # Tailwind v4 design tokens (dark theme)
```

---

## How the hover panel works

`CourseCard` owns an `open` boolean state. It opens on `mouseenter` (desktop)
or `click` (mobile/keyboard) and closes on `mouseleave` / Escape / backdrop tap.

`CourseDetailPanel` is a `position: fixed` element pinned to the top-right of
the viewport. It animates in/out using Tailwind transitions on `translate-x`
and `opacity` — no animation library. The panel embeds the `EnrollmentForm`.

The panel form is unmounted while closed so its state resets between opens.

---

## How to edit a course

All course content lives in **`src/config/courses.ts`**. Update the fields:

```ts
{
  id: "python",
  title: "Python Programming",
  tagline: "...",
  duration: "6 weeks · 3 hrs/week",
  level: "Beginner friendly",
  highlights: [ ... ],
  syllabus: [ ... ],
  googleForm: { formId: "...", fields: { ... } },
}
```

No component code needs to change.

---

## How to wire a real Google Form (per course)

The site ships with placeholder `formId`s and `entry.XXX` field IDs.
**Submissions will fail silently until you replace them.** Steps:

1. **Create the form.** In Google Forms, create fields in this order:
   - Full name (Short answer)
   - Email (Short answer)
   - Phone (Short answer)
   - College / Institution (Short answer)
   - Year of study (Short answer)
   - Why interested (Paragraph)

2. **Grab the `formId`.** Click **Send → link icon**. The link looks like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe...Xyz/viewform
   ```
   The chunk between `/e/` and `/viewform` is the `formId`.

3. **Get the `entry.XXXX` field IDs.**
   - Open the form's 3-dot menu (top right of the editor) →
     **"Get pre-filled link"**.
   - Fill every field with a dummy value, then click **"Get link"**.
   - The resulting URL contains `entry.1234567890=...&entry.0987654321=...`.
     Each numeric chunk is the field ID for the answer you typed.

4. **Paste into `src/config/courses.ts`:**
   ```ts
   googleForm: {
     formId: "1FAIpQLSe...Xyz",
     fields: {
       name: "entry.1234567890",
       email: "entry.2345678901",
       phone: "entry.3456789012",
       institution: "entry.4567890123",
       year: "entry.5678901234",
       motivation: "entry.6789012345",
     },
   },
   ```

5. **Test.** Submit the in-app form once and confirm a response shows up in
   the Google Form's "Responses" tab.

> Submissions use `fetch(..., { mode: "no-cors" })`. The browser can't read
> the response (Google Forms returns no CORS headers), so the code assumes a
> resolved fetch means success. This is the standard pattern.

---

## Design system

All colors, fonts and gradients are tokens in `src/styles.css` under the
`:root` block, exposed to Tailwind via `@theme inline`. Notable tokens:

- `--background`, `--foreground`, `--card`, `--muted`, `--border`
- `--brand-cyan`, `--brand-violet`
- `--gradient-brand` — primary CTA / headline gradient
- `--shadow-glow`, `--shadow-glow-violet`

Custom utilities: `bg-grid`, `text-gradient-brand`.

**Rule:** never write raw color classes (`bg-black`, `text-white`) in
components — always use semantic tokens.

---

## Plugging in Django (later)

Two integration points are designed to be swap-friendly:

1. **`src/lib/submitToGoogleForm.ts`** — replace the body with a `fetch` to
   your Django endpoint (e.g. `POST /api/enrollments`). Keep the
   `EnrollmentPayload` type as the request body shape.
2. **`src/config/courses.ts`** — instead of hard-coding courses, fetch them
   from `GET /api/courses` inside a route loader and remove the static array.

Authentication, payments and admin views can be layered on top once the
Django side is live.

---

## Accessibility notes

- The slide-in panel uses `role="dialog"`, `aria-label`, `aria-hidden`.
- Escape closes the panel; a focusable close button is always available.
- The course card is `role="button"`, fully keyboard reachable and opens on
  focus.
- Color contrast passes WCAG AA in the dark theme.

---

## License

Programme content © IIIT Delhi & MEIT. Codebase is internal — contact the
programme team before reuse.