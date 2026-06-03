# Pre-Deployment Checklist

Complete this checklist before deploying to Vercel.

---

## Code Quality

- [x] **Build passes:** `npm run build` succeeds with no errors
- [x] **TypeScript:** No type errors
- [x] **Logos:** Fallback SVGs implemented for production
- [x] **Theme:** Professional light theme with navy/saffron/teal
- [x] **3D Canvas:** Three.js hero canvas working
- [x] **Animations:** GSAP entrance & scroll animations
- [x] **Responsive:** Mobile, tablet, desktop layouts tested

---

## Features Implemented

- [x] Home page with hero, mission section, course preview
- [x] Courses page with 3 courses (Python, ML, GenAI)
- [x] Course detail panels (hover/tap to open)
- [x] Course tech badges with icons
- [x] Main course icons (Snake, Brain, Sparkles)
- [x] Enrollment form with validation (Zod)
- [x] Google Forms integration (ready to wire)
- [x] About page
- [x] Navbar with sticky scroll shadow + tricolor bar
- [x] Footer with logos + attribution

---

## Documentation

- [x] README.md — Overview, setup, design system, structure
- [x] GOOGLE_FORMS_SETUP.md — Step-by-step Google Forms wiring
- [x] VERCEL_DEPLOYMENT.md — Complete Vercel deployment guide
- [x] Code comments — Key functions documented

---

## Git & Repository

- [ ] **GitHub repo created** — Push code to GitHub
- [ ] **Remote added:** `git remote add origin https://github.com/YOUR_USERNAME/skillify.git`
- [ ] **Main branch:** Code pushed to `main` branch
- [ ] **No uncommitted changes:** `git status` shows clean working tree

---

## Pre-Launch Tasks

1. **Update course Google Forms**
   - Create forms at forms.google.com
   - Extract form IDs and field entry IDs
   - Update `src/config/courses.ts` with real IDs
   - Test enrollment locally

2. **Test all routes**
   - Visit http://localhost:5173/
   - Click through all courses
   - Fill enrollment form (test submission)
   - Visit /about page
   - Test mobile responsiveness

3. **Browser DevTools checks**
   - Open Console (F12) — no red errors
   - Check Network tab — all assets load
   - Mobile emulation — layout intact on 375px width

---

## Vercel Deployment Steps (Quick Reference)

1. Create GitHub repo: `git init && git remote add origin ...`
2. Push code: `git push -u origin main`
3. Go to vercel.com/new
4. Import your GitHub repository
5. Click **"Deploy"**
6. Wait 2-3 minutes for build to complete
7. Visit live URL when deployment succeeds

---

## Post-Deployment

- [ ] Visit live URL in browser
- [ ] Test all pages load
- [ ] Verify logos display (fallback SVGs active)
- [ ] Test course cards on desktop (hover)
- [ ] Test on mobile (tap to open)
- [ ] Check console for errors (F12)
- [ ] Share with IIIT Delhi team

---

## Rollback Plan

If deployment fails:
1. Check Vercel Dashboard → Deployments
2. Click **"..." → "Redeploy"** on last successful build
3. Or manually trigger: `git commit --allow-empty -m "Trigger rebuild" && git push`

---

## Support Docs

- TanStack Start: https://tanstack.com/start/latest
- Vercel Docs: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com
- Three.js: https://threejs.org/docs
- GSAP: https://greensock.com/docs

---

**Last updated:** June 2026
**Status:** ✅ Ready for deployment
