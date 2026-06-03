
## Goal

A lightweight, dark, technology-themed marketing site for the IIIT Delhi × MEIT skilling initiative. Three courses (Python, Machine Learning, Generative AI), each with a hover-triggered details panel that slides in from the top-right and contains an "Enroll" form. Form submissions are styled in our UI but POST silently to a Google Form behind the scenes. A Django backend can be wired in later — no Lovable Cloud for now.

## Pages / Routes

```text
src/routes/
  __root.tsx        navbar + footer shell, dark theme
  index.tsx         landing: hero, MEIT/IIITD intro, courses preview, CTA
  courses.tsx       full course grid with hover-slide detail panels
  about.tsx         about the project, MEIT, IIIT Delhi, mission
```

Each route gets its own `head()` with unique title/description/og tags. Nav links use `<Link to="...">`.

## Visual direction (built-in, no design exploration round)

- Dark base (near-black `#0a0a0f`), elevated surfaces, subtle grid/dot background.
- Accent: electric cyan + violet gradient (tech vibe).
- Typography: Space Grotesk for headings, Inter for body.
- Subtle motion only: fade-up on scroll, gradient glow on hover, panel slide. No heavy libs.
- All colors defined as semantic tokens in `src/styles.css` (oklch). No raw color classes in components.

## Course Card + Hover Panel (the signature interaction)

- Course grid of 3 cards. On desktop hover (and mobile tap), a panel slides in from the top-right of the viewport (fixed position, ~420px wide, full height, glassy dark surface).
- Panel content: course title, duration, level, syllabus bullets, instructor/partner note, and an inline enrollment form.
- Close on: mouse leave card+panel group (desktop), tap close button or backdrop (mobile), Escape key.
- Implemented with React state + Tailwind transitions (`translate-x`, `opacity`). No animation library needed.
- Accessible: focus trap when open on mobile, `aria-expanded`, keyboard close.

## Enrollment flow (custom → Google Form)

- One Google Form per course (you'll supply 3 form URLs + their `entry.XXXX` field IDs).
- Our form collects: Full name, Email, Phone, College/Institution, Year of study, Why interested (optional).
- On submit:
  1. Validate with Zod (length caps, email regex, phone digits).
  2. POST as `application/x-www-form-urlencoded` to `https://docs.google.com/forms/d/e/<FORM_ID>/formResponse` with `mode: "no-cors"` so the browser fires-and-forgets.
  3. Show a success toast + replace form with a "You're enrolled, check your inbox" state.
- Form IDs and entry IDs live in a single config file (`src/config/courses.ts`) so you can edit without touching components.
- Note: `no-cors` means we can't read the response — standard Google Forms pattern. If you later want confirmed receipts, the Django backend can proxy the submission.

## Components to build

```text
src/components/
  layout/Navbar.tsx
  layout/Footer.tsx
  home/Hero.tsx
  home/PartnersStrip.tsx       (MEIT + IIITD badges)
  home/MissionSection.tsx
  courses/CourseCard.tsx
  courses/CourseDetailPanel.tsx (the slide-in)
  courses/EnrollmentForm.tsx
  about/AboutContent.tsx
  ui/GradientButton.tsx
src/config/courses.ts           (course data + Google Form mappings)
src/lib/submitToGoogleForm.ts   (encodes + posts no-cors)
```

Reuse existing shadcn `button`, `input`, `label`, `textarea`, `sonner` (toasts).

## Course data shape

```ts
type Course = {
  id: "python" | "ml" | "genai";
  title: string;
  tagline: string;
  duration: string;
  level: string;
  syllabus: string[];
  googleForm: {
    formId: string;          // from the form URL
    fields: {                // entry IDs from the prefilled link
      name: string;
      email: string;
      phone: string;
      institution: string;
      year: string;
      motivation: string;
    };
  };
};
```

Initial content is placeholder — you can edit `src/config/courses.ts` later or send me the real syllabus.

## README + comments

- Top-level `README.md` covering: project purpose, stack, how to run, file structure, how to add/edit a course, how to get Google Form `entry.XXXX` IDs (step-by-step), how the hover panel works, and where to plug in the Django backend later.
- JSDoc-style comments on every component and helper explaining intent and props.

## Things deferred (not in this plan)

- Django backend integration (will be wired once endpoints exist).
- Auth / user dashboards.
- CMS for courses (config file is enough for 3 courses).
- Actual Google Form IDs — site will work with placeholders and obviously fail submission until you paste real IDs into `src/config/courses.ts`. I'll call this out in the README.

## After you approve

I'll build all four routes, the hover-slide panel, the enrollment form with Google Form POST, the design system tokens, and the README in one pass, then verify the preview renders cleanly.
