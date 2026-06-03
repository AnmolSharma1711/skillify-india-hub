# Vercel Deployment Guide

Complete step-by-step guide to deploy Skillify to Vercel.

---

## Prerequisites

- [Vercel account](https://vercel.com/signup) (free tier works great)
- GitHub/GitLab/Bitbucket account
- Your Skillify project pushed to a git repository

---

## Step 1: Push Your Project to GitHub

If not already done, create a GitHub repository and push your code:

```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial Skillify commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/skillify.git
git push -u origin main
```

---

## Step 2: Create a Vercel Account & Connect Git

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. After signup, you'll see the Vercel Dashboard

---

## Step 3: Import Your Project

### Option A: From Dashboard
1. Click **"Add New..."** → **"Project"**
2. Select **"Import Git Repository"**
3. Paste your GitHub repo URL: `https://github.com/YOUR_USERNAME/skillify.git`
4. Click **"Import"**

### Option B: Direct GitHub Link (Faster)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Select your GitHub repository
3. Click **"Import"**

---

## Step 4: Configure Project Settings

Vercel will auto-detect it's a TanStack Start project. Configure:

**Build Command (should auto-populate):**
```
npm run build
```

**Output Directory:**
```
dist
```

**Root Directory:**
```
./
```

**Environment Variables (optional for now):**
- Leave blank — we don't need any for basic deployment

Click **"Deploy"** and wait 2-3 minutes.

---

## Step 5: Monitor Deployment

You'll see a build log showing:
- `npm install` → installing dependencies
- `npm run build` → building the app
- Deployment to CDN
- Live URL assignment

Once you see ✅ **"Deployment Successful"**, your site is live!

---

## Step 6: Custom Domain (Optional)

To add a custom domain:

1. Go to your Vercel Project Settings
2. Click **"Domains"**
3. Enter your domain: `skillify.example.com`
4. Update your domain registrar's DNS records (Vercel will show instructions)
5. Wait 5-30 minutes for DNS propagation

---

## Step 7: Automatic Deployments

From now on:
- Every `git push` to `main` automatically redeploys
- Preview deployments for pull requests
- Rollback to any previous deployment with one click

---

## Troubleshooting

### Build fails with "Module not found"

**Solution:** Ensure all dependencies are in `package.json`:
```bash
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Logo images don't show on deployment

**Already fixed!** We added fallback SVG logos. If they still don't load:
1. Check Network tab in browser DevTools
2. Verify asset URLs are accessible
3. Clear browser cache (`Ctrl+Shift+Delete`)

### "Cannot find module @/components"

**Solution:** Vercel might have path alias issues. Verify `vite.config.ts` has:
```typescript
resolve: {
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  },
},
```

### Deployment shows stale code

**Solution:** 
1. Verify `git push` worked: `git log --oneline` shows your commits
2. Check Vercel dashboard — redeploy manually if needed
3. Clear browser cache

---

## After Deployment: Testing

1. **Visit your live URL** (e.g., `https://skillify-xyz.vercel.app`)
2. **Check all pages load:**
   - Home (/)
   - Courses (/courses)
   - About (/about)
3. **Test interactions:**
   - Hover course cards (detail panel opens)
   - Fill enrollment form
   - Check console for errors (F12 → Console)
4. **Mobile test:** Use DevTools device emulator (Ctrl+Shift+M)

---

## Monitoring & Logs

### View Build Logs
1. Vercel Dashboard → Your Project
2. Click **"Deployments"** tab
3. Click any deployment to see full logs

### Real-time Analytics
1. Click **"Analytics"** tab
2. View:
   - Page views
   - Performance metrics
   - Error tracking

---

## Updating Your Site

To deploy new changes:

```bash
# Make changes locally
git add .
git commit -m "Update course descriptions"
git push origin main
```

Vercel automatically redeploys in 2-3 minutes.

---

## Environment Variables (For Future Use)

If you add Google Forms or other APIs:

1. Vercel Dashboard → Project Settings → **"Environment Variables"**
2. Add variables (e.g., `VITE_GOOGLE_FORM_ID`)
3. Click **"Save"**
4. Trigger a new deployment: `git commit --allow-empty -m "Trigger rebuild" && git push`

---

## Domain & SSL

- **Free SSL certificate** → Automatically issued by Vercel
- **Custom domain** → $12/month (or use your own registrar)
- **Subdomain** → Free (e.g., `skillify.example.com`)

---

## Performance Optimization

Vercel automatically provides:
- ✅ Edge caching (global CDN)
- ✅ Compression (gzip/brotli)
- ✅ Image optimization
- ✅ Code splitting
- ✅ Automatic sitemap generation

No additional config needed!

---

## Support & Help

- **Vercel Docs:** https://vercel.com/docs
- **TanStack Start Deployment:** https://tanstack.com/start/latest/docs/guide/deployment
- **Common Issues:** https://vercel.com/help

---

## Summary

| Step | Time | Status |
|---|---|---|
| Push to GitHub | 1 min | ✅ |
| Create Vercel account | 2 min | ✅ |
| Import project | 1 min | ✅ |
| Configure & deploy | 3-5 min | ✅ |
| **Total** | **~10 min** | **✅ LIVE** |

Your Skillify site is now live and automatically updated with every git push!

---

**Last updated:** June 2026
