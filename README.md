# Skillify — IIIT Delhi × MEIT

A professional, full-stack marketing and enrollment platform for the IIIT Delhi skilling initiative powered by the Ministry of Electronics and Information Technology (MEIT), Government of India.

The site introduces three free, mentor-led programmes — **Python**, **Machine Learning** and **Generative AI** — and captures enrollments through an in-app form backed by a Django REST API with PostgreSQL.

---

## Tech Stack

### Frontend

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

### Backend

| Layer | Tech |
|---|---|
| Framework | **Django 5.2** + **Django REST Framework** |
| Database | **SQLite** (dev) / **PostgreSQL** (production) |
| CORS | **django-cors-headers** |
| DB Config | **dj-database-url** (auto-switch via `DATABASE_URL`) |
| WSGI Server | **Gunicorn** (production) |

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
├── src/                         # React Frontend
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Routes definition
│   ├── styles.css               # Tailwind + design tokens
│   ├── pages/
│   │   ├── Index.tsx            # Home page
│   │   ├── Courses.tsx          # Courses listing
│   │   ├── Enroll.tsx           # Enrollment page with flip cards
│   │   ├── About.tsx            # About programme
│   │   └── NotFound.tsx         # 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── PillNav.tsx      # Pill-style navbar
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx         # Hero section with 3D canvas
│   │   │   ├── HeroCanvas.tsx   # Three.js particle animation
│   │   │   ├── AboutSection.tsx # About section
│   │   │   └── MissionSection.tsx
│   │   ├── courses/
│   │   │   ├── CourseCardLight.tsx
│   │   │   ├── CourseDetailOverlay.tsx
│   │   │   └── EnrollmentModal.tsx
│   │   └── ui/
│   │       └── FlipCard.tsx     # Flip card for enrollment page
│   ├── config/
│   │   └── courses.ts           # Course data
│   └── lib/
│       ├── api.ts               # Backend API utility
│       └── utils.ts             # Utilities
│
├── backend/                     # Django Backend
│   ├── core/
│   │   ├── settings.py          # Django settings (env-aware)
│   │   ├── urls.py              # Root URL config
│   │   └── wsgi.py
│   ├── enrollments/
│   │   ├── models.py            # Individual, Institute, Mentor models
│   │   ├── serializers.py       # DRF serializers
│   │   ├── views.py             # API views
│   │   ├── urls.py              # Enrollment endpoints
│   │   └── admin.py             # Admin panel registration
│   ├── requirements.txt
│   ├── Procfile                 # For Render deployment
│   └── manage.py
│
├── vercel.json                  # Vercel SPA config
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

## Deployment

### Backend — Deploy to Render (Free Tier)

[Render](https://render.com) provides free hosting for Django apps with a managed PostgreSQL database.

#### Step 1: Create a PostgreSQL Database on Render

1. Go to [Render Dashboard](https://dashboard.render.com) → **New** → **PostgreSQL**
2. Fill in:
   - **Name**: `skillify-db`
   - **Region**: Choose nearest to your users
   - **Plan**: Free
3. Click **Create Database**
4. Copy the **Internal Database URL** (starts with `postgres://...`)

#### Step 2: Create a Web Service on Render

1. Go to **New** → **Web Service**
2. Connect your GitHub repository (`AnmolSharma1711/skillify-india-hub`)
3. Configure:
   - **Name**: `skillify-backend`
   - **Region**: Same as your database
   - **Root Directory**: `backend`
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
   - **Start Command**: `gunicorn core.wsgi:application`
   - **Plan**: Free

4. Add **Environment Variables**:

   | Key | Value |
   |---|---|
   | `DATABASE_URL` | *(paste the Internal Database URL from Step 1)* |
   | `SECRET_KEY` | *(generate a strong random string)* |
   | `DEBUG` | `False` |
   | `ALLOWED_HOSTS` | `skillify-backend.onrender.com` |

5. Click **Create Web Service**

> **Tip**: Generate a secret key by running:
> ```bash
> python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
> ```

#### Step 3: Create Superuser on Render

After deployment, go to your Web Service → **Shell** tab and run:

```bash
python manage.py createsuperuser
```

### Frontend — Deploy to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Select your GitHub repository
3. Click **Import**
4. Add the **Environment Variable**:

   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://skillify-backend.onrender.com` |

   *(Replace with your actual Render backend URL)*

5. Click **Deploy**

> **Important**: Once your backend is deployed on Render, copy the URL (e.g., `https://skillify-backend.onrender.com`) and set it as the `VITE_API_URL` environment variable in Vercel. This connects your frontend to the production backend.

### Verify Deployment

- ✅ Frontend loads at your Vercel URL
- ✅ All routes work (no 404 errors)
- ✅ Submit an enrollment → check Django Admin for the record
- ✅ Django Admin accessible at `https://your-backend.onrender.com/admin`

---

## Enrollment System

The platform supports three types of enrollments, each stored in its own database table:

| Type | Model | Description |
|---|---|---|
| **Individual** | `IndividualEnrollment` | Self-enrolled students and professionals |
| **Institute** | `InstituteEnrollment` | University/college partnership enrollments |
| **Mentor** | `MentorEnrollment` | Mentor applications |

All enrollment data can be viewed and managed through the Django Admin panel.

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

## Environment Variables

### Frontend (Vercel)

| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `http://localhost:8000` |

### Backend (Render)

| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | SQLite (local) |
| `SECRET_KEY` | Django secret key | Insecure dev key |
| `DEBUG` | Enable debug mode | `True` |
| `ALLOWED_HOSTS` | Comma-separated allowed hosts | `localhost,127.0.0.1` |

---

## Troubleshooting

### Dev Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend Issues
```bash
# Re-run migrations
cd backend
python manage.py migrate

# Check for errors
python manage.py check
```

### CORS Errors in Browser
- Ensure the Django backend is running on port 8000
- Check that `django-cors-headers` is installed and configured in `settings.py`

---

## License

Built for IIIT Delhi × MEIT. All rights reserved.

---

**Status**: ✅ Full-stack, production-ready — Frontend on Vercel, Backend on Render with PostgreSQL
