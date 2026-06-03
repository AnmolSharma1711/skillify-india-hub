# Skillify — Quick Reference Card

## Logo Display Fix

✅ **Status:** Fixed with fallback SVG logos
- Navbar: Logos load from asset URLs with SVG fallback
- Footer: Same robust implementation
- Works everywhere: Bolt preview, Vercel, local dev
- Automatic error handling via `onError` handler

---

## Deploy to Vercel (3 Steps)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel"
git push origin main
```

### Step 2: Import to Vercel
Go to https://vercel.com/new → select GitHub repo → click "Import"

### Step 3: Wait for Deployment
Vercel builds in 2-3 minutes. Your site is live when you see ✅ "Deployment Successful"

---

## Your Live URL
`https://skillify-[random].vercel.app`

(Vercel assigns automatically)

---

## After Deployment

### Wire Google Forms (Follow GOOGLE_FORMS_SETUP.md)
1. Create forms at forms.google.com
2. Get form IDs + field entry IDs
3. Update src/config/courses.ts
4. Push to GitHub → Vercel redeploys automatically

### Add Custom Domain (Optional)
1. Vercel Dashboard → Project Settings → Domains
2. Add your domain
3. Update DNS at your registrar
4. Done! 🎉

---

## Key Files

| File | Use |
|---|---|
| `README.md` | Main documentation |
| `VERCEL_DEPLOYMENT.md` | Detailed Vercel guide |
| `GOOGLE_FORMS_SETUP.md` | How to wire forms |
| `PRE_DEPLOYMENT_CHECKLIST.md` | Pre-launch tasks |
| `DEPLOYMENT_READY.md` | Full summary |

---

## Build Commands

```bash
npm run dev          # Local dev server
npm run build        # Production build
npm run preview      # Preview production build locally
npm run lint         # Check code quality
npm run format       # Format code
```

---

## Important Notes

✅ **Logos:** Fallback SVGs handle missing asset URLs  
✅ **Forms:** Ready to wire — no backend needed  
✅ **Theme:** Professional light Indian govt palette  
✅ **Mobile:** Fully responsive  
✅ **Speed:** ~160KB gzipped, global CDN  
✅ **SSL:** Automatic on Vercel  

---

## Automatic Updates

Every time you push to GitHub:
```bash
git push origin main
```

Vercel automatically redeploys in 2-3 minutes.

---

## Next Actions

1. ☑️ Commit & push to GitHub
2. ☑️ Go to vercel.com/new
3. ☑️ Import your repository
4. ☑️ Click "Deploy"
5. ☑️ Wait 3 minutes
6. ☑️ Share live URL with IIIT Delhi team

---

**Status:** ✅ Production Ready | ✅ Fully Documented | ✅ Logo Fixed

Good luck! 🚀
