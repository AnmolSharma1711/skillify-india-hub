# Skillify — IIIT Delhi × MEIT

A professional, full-stack marketing and enrollment platform for the IIIT Delhi skilling initiative powered by the Ministry of Electronics and Information Technology (MEIT), Government of India.

The site introduces three free, mentor-led programmes — **Python**, **Machine Learning** and **Generative AI** — and captures enrollments through an in-app form backed by a Django REST API with PostgreSQL.

---

## Tech Stack

### Frontend (Deployed on Vercel)

| Layer | Tech |
|---|---|
| Framework | **React 18** + **React Router v6** |
| Build Tool | **Vite 5** |
| Styling | **Tailwind CSS v3** |
| 3D Background | **Three.js** — animated particle canvas in hero section |
| Animations | **GSAP** — entrance animations |
| UI Primitives | **shadcn/ui** (button, input, sonner, …) |
| Validation | **Zod** (client-side form) |
| Toasts | **Sonner** |
| Icons | **lucide-react** |
| Meta Tags | **react-helmet-async** |

### Backend (Deployed on Render)

| Layer | Tech |
|---|---|
| Framework | **Django 5.2** + **Django REST Framework** |
| Database | **SQLite** (dev) / **PostgreSQL** (production) |
| CORS | **django-cors-headers** |
| DB Config | **dj-database-url** (auto-switch via `DATABASE_URL`) |
| WSGI Server | **Gunicorn** (production) |

---

## How It Works (Architecture)

```
┌─────────────────────────┐         ┌──────────────────────────────┐
│   Vercel (Frontend)     │         │   Render (Backend)           │
│                         │  HTTPS  │                              │
│  React App              │────────▶│  Django REST API             │
│  User fills form ──▶    │  POST   │  ──▶ Validates data          │
│  Calls /api/enrollments │         │  ──▶ Saves to PostgreSQL     │
│                         │         │                              │
│  VITE_API_URL env var   │         │  DATABASE_URL env var        │
│  points to Render URL   │         │  points to Render PostgreSQL │
└─────────────────────────┘         └──────────────────────────────┘
```

**Flow**: User visits your Vercel site → clicks an enrollment button → fills the modal form → frontend sends a `POST` request to your Render backend URL → Django validates and saves it to PostgreSQL → user sees a success message.

---

## Quick Start (Local Development)

### Prerequisites
- **Node 18+** (v20+ recommended)
- **Python 3.10+**
- npm or yarn

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Start React dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
.\venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (for admin access)
python manage.py createsuperuser

# Start Django dev server
python manage.py runserver
```

Django API runs at [http://localhost:8000](http://localhost:8000).
Admin panel at [http://localhost:8000/admin](http://localhost:8000/admin).

---

## Project Structure

```
skillify-india-hub/
├── src/                              # React Frontend
│   ├── main.tsx                      # React entry point
│   ├── App.tsx                       # Routes definition
│   ├── styles.css                    # Tailwind + design tokens
│   ├── pages/
│   │   ├── Index.tsx                 # Home page
│   │   ├── Courses.tsx               # Courses listing
│   │   ├── Enroll.tsx                # Enrollment page with flip cards
│   │   ├── About.tsx                 # About programme
│   │   └── NotFound.tsx              # 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── PillNav.tsx           # Pill-style navbar
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx              # Hero section with 3D canvas
│   │   │   ├── HeroCanvas.tsx        # Three.js particle animation
│   │   │   ├── AboutSection.tsx      # About section
│   │   │   └── MissionSection.tsx
│   │   ├── courses/
│   │   │   ├── CourseCardLight.tsx
│   │   │   ├── CourseDetailOverlay.tsx
│   │   │   └── EnrollmentModal.tsx
│   │   └── ui/
│   │       └── FlipCard.tsx          # Flip card for enrollment page
│   ├── config/
│   │   └── courses.ts                # Course data
│   └── lib/
│       ├── api.ts                    # Backend API utility
│       └── utils.ts                  # Utilities
│
├── backend/                          # Django Backend
│   ├── core/
│   │   ├── settings.py               # Django settings (env-aware)
│   │   ├── urls.py                   # Root URL config
│   │   └── wsgi.py
│   ├── enrollments/
│   │   ├── models.py                 # Individual, Institute, Mentor models
│   │   ├── serializers.py            # DRF serializers
│   │   ├── views.py                  # API views
│   │   ├── urls.py                   # Enrollment endpoints
│   │   ├── admin.py                  # Admin panel registration
│   │   └── management/commands/
│   │       └── create_superuser_from_env.py  # Auto superuser creation
│   ├── requirements.txt
│   ├── Procfile                      # For Render deployment
│   └── manage.py
│
├── vercel.json                       # Vercel SPA config
└── package.json
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/enrollments/individual/` | Submit individual enrollment |
| `POST` | `/api/enrollments/institute/` | Submit institute/university enrollment |
| `POST` | `/api/enrollments/mentor/` | Submit mentor enrollment |

**Payload** (all endpoints):

```json
{
  "course_name": "Python Programming",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "institution": "IIIT Delhi",
  "designation": "Student",
  "motivation": "Interested in learning Python"
}
```

---

## 🚀 Production Deployment

### Step 1: Deploy Backend on Render

#### 1a. Create a PostgreSQL Database

1. Go to [Render Dashboard](https://dashboard.render.com) → **New +** → **PostgreSQL**
2. Fill in:
   - **Name**: `skillify-db`
   - **Region**: Choose nearest to your users (e.g. Singapore)
   - **Plan**: Free
3. Click **Create Database**
4. Once created, go to the database page and copy the **Internal Database URL** (starts with `postgres://...`). You'll need this in the next step.

#### 1b. Create a Web Service

1. Go to **New +** → **Web Service**
2. Connect your GitHub repository: `AnmolSharma1711/skillify-india-hub`
3. Configure the service:

   | Setting | Value |
   |---|---|
   | **Name** | `skillify-backend` |
   | **Region** | Same as your database |
   | **Root Directory** | `backend` |
   | **Runtime** | Python 3 |
   | **Build Command** | `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate && python manage.py create_superuser_from_env` |
   | **Start Command** | `gunicorn core.wsgi:application` |
   | **Plan** | Free |

4. Add **Environment Variables** (Settings → Environment):

   | Key | Value |
   |---|---|
   | `DATABASE_URL` | *(paste the Internal Database URL from Step 1a)* |
   | `SECRET_KEY` | *(a strong random string — see below)* |
   | `DEBUG` | `False` |
   | `ALLOWED_HOSTS` | `skillify-backend.onrender.com` |
   | `DJANGO_SU_NAME` | `anmol` |
   | `DJANGO_SU_EMAIL` | `anmolsha4521@gmail.com` |
   | `DJANGO_SU_PASSWORD` | *(your admin password)* |

   > **How to generate a SECRET_KEY**: Run this locally in your terminal:
   > ```bash
   > python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
   > ```
   > Copy the output and paste it as the value.

   > ⚠️ **Security**: The superuser password is stored as an environment variable on Render, which is encrypted and not visible in logs. This is a safe approach — you can delete the `DJANGO_SU_*` variables after the first deploy if you prefer.

5. Click **Create Web Service**

Render will automatically:
- Install dependencies
- Run database migrations (create tables)
- Create the superuser from env variables
- Start the Django server with Gunicorn

**Your backend URL will be**: `https://skillify-backend.onrender.com`

#### 1c. Verify Backend

- Visit `https://skillify-backend.onrender.com/admin` → Login with your superuser credentials
- You should see the Django Admin dashboard with **Individual Enrollments**, **Institute Enrollments**, and **Mentor Enrollments**

---

### Step 2: Deploy Frontend on Render

Render is excellent for hosting React/Vite applications via their "Static Site" service. Since we already configured the frontend code to automatically connect to the Render backend in production, no environment variables are needed!

1. Go to [Render Dashboard](https://dashboard.render.com) → **New +** → **Static Site**
2. Connect your GitHub repository: `AnmolSharma1711/skillify-india-hub`
3. Configure the service:
   - **Name**: `skillify-frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Click **Create Static Site**

#### Important: Configure SPA Routing
Because React is a Single Page Application (SPA), you must tell Render to route all traffic to `index.html`.
1. Once your static site is created, go to the **Redirects/Rewrites** tab on the left menu.
2. Add a new rule:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
3. Click **Save Changes**.

Your frontend will now be live at `https://skillify-frontend.onrender.com`!

---

### Step 3: Verify the Full Integration

1. ✅ Open your Render frontend URL (`https://skillify-frontend.onrender.com`)
2. ✅ Go to Courses → Click on any course → Click **Individual Enrollment** (or University/Mentor)
3. ✅ Fill the form and submit
4. ✅ You should see a **"Thank You"** success message
5. ✅ Go to `https://skillify-backend.onrender.com/admin`
6. ✅ Log in and check the Enrollments section
7. ✅ Your submission should appear in the database table!
---

## Enrollment System

The platform supports three types of enrollments, each stored in its own database table:

| Type | Model | Endpoint | Description |
|---|---|---|---|
| **Individual** | `IndividualEnrollment` | `/api/enrollments/individual/` | Self-enrolled students and professionals |
| **Institute** | `InstituteEnrollment` | `/api/enrollments/institute/` | University/college partnership enrollments |
| **Mentor** | `MentorEnrollment` | `/api/enrollments/mentor/` | Mentor applications |

All enrollment data can be viewed and managed through the Django Admin panel.

---

## All Environment Variables Reference

### Frontend — Vercel

| Variable | Description | Default (local dev) |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `http://localhost:8000` |

### Backend — Render

| Variable | Description | Default (local dev) |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | SQLite (local file) |
| `SECRET_KEY` | Django secret key for security | Insecure dev key |
| `DEBUG` | Enable debug mode (`True`/`False`) | `True` |
| `ALLOWED_HOSTS` | Comma-separated allowed hostnames | `localhost,127.0.0.1` |
| `DJANGO_SU_NAME` | Superuser username (for build command) | *(none — skips creation)* |
| `DJANGO_SU_EMAIL` | Superuser email | *(none)* |
| `DJANGO_SU_PASSWORD` | Superuser password | *(none — skips creation)* |

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

### Typography
- **Body**: "Inter" (sans-serif)
- **Display/Headings**: "Space Grotesk" (sans-serif)

---

## Troubleshooting

### Frontend won't connect to backend
- Check that `VITE_API_URL` is set correctly in Vercel (no trailing slash)
- Make sure you **redeployed** after adding the env variable
- Open browser DevTools → Network tab → check that requests go to your Render URL

### CORS errors in browser console
- The backend has `CORS_ALLOW_ALL_ORIGINS = True` by default
- If you want to restrict it, set `CORS_ALLOWED_ORIGINS` in `settings.py`

### Render deploy fails
- Check that **Root Directory** is set to `backend`
- Ensure `requirements.txt` is inside the `backend/` folder
- Check Render deploy logs for specific error messages

### Superuser not created
- Verify that `DJANGO_SU_NAME` and `DJANGO_SU_PASSWORD` are set in Render environment variables
- The command skips silently if the user already exists (safe to re-run)

### Dev server won't start
```bash
# Frontend
rm -rf node_modules package-lock.json
npm install
npm run dev

# Backend
cd backend
python manage.py migrate
python manage.py runserver
```

---

## License

Built for IIIT Delhi × MEIT. All rights reserved.

---

**Status**: ✅ Full-stack, production-ready — Frontend on Vercel, Backend on Render with PostgreSQL

*Last updated: June 8, 2026 - Triggered Vercel redeploy after configuring environment variables*

