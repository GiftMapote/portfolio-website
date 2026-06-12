# Portfolio Website - Editing Guide

This guide explains how to update your portfolio content. All content lives in simple arrays inside the component files. You edit the data, push to GitHub, and Vercel auto-deploys.

---

## General Workflow

1. Open the relevant file in `src/components/`
2. Edit the data array
3. Save the file
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Your change description"
   git push
   ```
5. Vercel auto-deploys in ~60 seconds

---

## Add a New Skill

**File:** `src/components/Skills.tsx`

Find the `allSkills` array and add a new entry:

```typescript
{
  name: "Your Skill Name",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/TOOLNAME/TOOLNAME-original.svg",
  // OR if no icon available:
  icon: null,
  customIcon: "ABC",  // Short abbreviation shown in a gradient badge
},
```

**Finding icons:** Browse https://devicon.dev/ or https://www.vectorlogo.zone/ for SVG icon URLs.

---

## Add a New Job / Experience

**File:** `src/components/Experience.tsx`

Find the `experiences` array and add a new entry at the TOP (most recent first):

```typescript
{
  role: "Your Job Title",
  company: "Company Name",
  logo: "/companyLogo.png",  // Add logo to public/ folder first
  period: "Jan 2025 – Present",
  location: "City, Country",
  responsibilities: [
    "First responsibility or achievement",
    "Second responsibility or achievement",
    "Third responsibility or achievement",
  ],
},
```

**For the logo:** Save the company logo image in the `public/` folder, then reference it as `/filename.png`.

---

## Add a New Project

**File:** `src/components/Projects.tsx`

Find the `projects` array and add a new entry:

```typescript
{
  title: "Project Name",
  description: "Brief description of what the project does and your role.",
  tech: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Other Tool", icon: null },  // No icon, just text tag
  ],
  liveUrl: "https://your-live-demo.com",  // or null if no live demo
  githubUrl: "https://github.com/GiftMapote/repo-name",  // or null
  highlight: false,  // set to true for award-winning projects
  award: null,  // or "Award Name" if highlight is true
},
```

---

## Add a New Certification

**File:** `src/components/Certifications.tsx`

Find the `certifications` array and add a new entry:

```typescript
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  inProgress: false,  // true if not yet completed
  verifyUrl: "https://verification-link.com",  // or null if no link
},
```

---

## Add New Education

**File:** `src/components/Education.tsx`

Find the `education` array and add a new entry:

```typescript
{
  degree: "Degree Name",
  institution: "University Name",
  logo: "/universityLogo.png",  // Add logo to public/ folder first
  period: "2023 – 2025",
  description: "Any notable achievements or null",
},
```

---

## Update Your Bio / About Section

**File:** `src/components/About.tsx`

Edit the paragraph text directly in the JSX `<p>` tags.

---

## Update Contact Info

**File:** `src/components/Contact.tsx`

- Update email: search for `giftmappte@gmail.com` and replace
- Update LinkedIn: search for the LinkedIn URL and replace
- Update GitHub: search for the GitHub URL and replace

---

## Update Profile Photo

1. Save your new photo in the `public/` folder
2. Update the filename in two files:
   - `src/components/Hero.tsx` — search for the current image filename
   - (optional) anywhere else the image is referenced

---

## Update the Formspree Contact Form

**File:** `src/components/Contact.tsx`

Find `action="https://formspree.io/f/mdavwgly"` and replace with your new form ID if needed.

---

## File Quick Reference

| What to edit | File |
|---|---|
| Skills | `src/components/Skills.tsx` |
| Projects | `src/components/Projects.tsx` |
| Experience | `src/components/Experience.tsx` |
| Education | `src/components/Education.tsx` |
| Certifications | `src/components/Certifications.tsx` |
| About/Bio | `src/components/About.tsx` |
| Contact info | `src/components/Contact.tsx` |
| Hero section | `src/components/Hero.tsx` |
| Profile photo | `public/` folder + Hero.tsx |
| Company/uni logos | `public/` folder |
| Site metadata (title, description) | `src/app/layout.tsx` |

---

## Tips

- Always put most recent items FIRST in the arrays
- Test locally before pushing: `npm run dev` then open `http://localhost:3000`
- Images in `public/` are served at the root URL (e.g., `public/logo.png` → `/logo.png`)
- After pushing, check your Vercel dashboard to confirm deployment succeeded
