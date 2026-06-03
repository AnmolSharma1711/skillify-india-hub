# Google Forms Integration Setup Guide

## Quick Start: Wiring up Enrollment Forms

This guide walks you through connecting your Skillify enrollment system to Google Forms.

---

## What You Need

- A Google Account
- Access to create Google Forms
- The Skillify codebase running locally or deployed

---

## Step-by-Step Setup

### 1. Create a Google Form

Visit [forms.google.com](https://forms.google.com) and create a new form.

**Form Title:** e.g. "Python Programming - Skillify Enrollment"

**Add these fields in order:**
1. Full name (Short answer)
2. Email (Short answer)
3. Phone (Short answer)
4. College / Institution (Short answer)
5. Year of study (Short answer)
6. Designation (Short answer)
7. Why are you interested? (Paragraph)

**Form Description (optional):**
```
Free enrollment for [Course Name], taught by IIIT Delhi faculty
powered by the Ministry of Electronics and Information Technology.
```

---

### 2. Find Your Form ID

From your Google Form, click **Send** at the top right. Copy the link and extract the ID:

From: `https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXXXXXX/viewform?usp=sf_link`

Your Form ID is: `1FAIpQLSeXXXXXXXXXXXXX` (between `/d/e/` and `/viewform`)

---

### 3. Get Field Entry IDs

These are the codes Google assigns to each form field. To find them:

1. Click the **3-dot menu** (⋮) on your form
2. Select **"Get pre-filled link"**
3. Fill every field with a test value:
   - Full name: `Test Student`
   - Email: `test@example.com`
   - Phone: `9876543210`
   - Institution: `Test College`
   - Year: `2nd Year B.Tech`
   - Designation: `Student`
   - Why interested: `To learn new skills`

4. Click **"Get link"** button at the bottom
5. Copy the generated pre-filled URL

It will look like:
```
https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXX/viewform?entry.111111=Test+Student&entry.222222=test%40example.com&entry.333333=9876543210&...
```

**Extract the entry numbers:**
- `entry.111111` = Full name
- `entry.222222` = Email
- `entry.333333` = Phone
- `entry.444444` = Institution
- `entry.555555` = Year
- `entry.666666` = Designation
- `entry.777777` = Why interested

---

### 4. Update Your Codebase

Edit `src/config/courses.ts` and replace the placeholder Google Form info for each course:

**For Python Programming course:**
```typescript
{
  id: "python",
  title: "Python Programming",
  // ... other fields remain the same ...
  googleForm: {
    formId: "1FAIpQLSeXXXXXXXXXXXXX",    // <-- Your form ID from Step 2
    fields: {
      name:        "entry.111111",       // <-- Your extracted IDs from Step 3
      email:       "entry.222222",
      phone:       "entry.333333",
      institution: "entry.444444",
      year:        "entry.555555",
      designation: "entry.666666",
      motivation:  "entry.777777",
    },
  },
}
```

**Repeat for each course** (Machine Learning and Generative AI).

---

### 5. Test the Integration

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:5173/courses

3. Click on a course card to open the enrollment panel

4. **Fill the form with the exact same test values you used in Step 3:**
   - Full name: `Test Student`
   - Email: `test@example.com`
   - Phone: `9876543210`
   - etc.

5. Click **"Enroll in [Course Name]"**

6. You should see a success message: **"You're in!"**

7. Go back to your Google Form → **"Responses"** tab

8. You should see your test submission as a new row

---

## Troubleshooting

### Form didn't receive the submission

- **Check Form ID:** Is it exactly as shown in your Google Form URL?
- **Check Entry IDs:** Re-copy them from the pre-filled link. Double-check for typos.
- **Test the pre-filled link directly:** Go to the URL from Step 3 in a browser. Does it auto-fill correctly? If not, the entry IDs are wrong.
- **Check browser console:** Open DevTools (F12) → Console tab. Are there any error messages?

### Form shows "You're in!" but submission doesn't appear in Google Form

This is usually a field ID mismatch:
1. Edit your test values (use different emails each time)
2. Try again
3. If still not appearing, re-extract the entry IDs carefully

### "Something went wrong. Please try again."

This error usually means:
- The form ID doesn't exist
- The form is no longer accepting responses (check the form settings)
- Your form has required fields not in the enrollment form

---

## Advanced: Multiple Forms Per Course (Optional)

If you want different forms for different regions or cohorts, simply create multiple Google Forms and swap the `formId` in `src/config/courses.ts` depending on the user's region or time.

---

## How It Works (Technical)

The enrollment flow:

1. User fills the form in the CourseDetailPanel
2. `EnrollmentForm.tsx` validates with Zod
3. `submitToGoogleForm()` function encodes the data and POSTs to Google Forms
4. We use `mode: "no-cors"` so the browser doesn't reject Google's response
5. Any successful fetch = enrollment confirmed (toast + success state)

The Google Form endpoint is:
```
https://docs.google.com/forms/d/e/{formId}/formResponse
```

With POST body:
```
entry.111111=Full Name&entry.222222=Email&...
```

---

## Support

If something doesn't work:
1. Check the browser console for error messages
2. Verify Form ID and entry IDs exactly match
3. Test the pre-filled link in a new browser tab
4. Try a different email address (Gmail sometimes caches form responses)

---

**Last updated:** June 2026
**Framework:** TanStack Start + Tailwind CSS v4 + Three.js + GSAP
