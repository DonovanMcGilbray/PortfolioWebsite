# Donovan McGilbray — Portfolio Website

A personal portfolio website built with React. It showcases my projects,
technical skills, resume, and blog posts, and includes a working contact form
powered by the Resend email API. The site is designed to be **100% free to
host and maintain** on Vercel's Hobby tier and Resend's Free plan.

---

## 1. Project Overview & Features

- **Responsive design** that looks clean on both mobile and desktop.
- **Light / dark mode** with a toggle in the navbar (remembers your choice and
  respects your operating system preference on first visit).
- **Pages:** Home, About, Resume, Portfolio (with per-project detail pages),
  Blog (with per-post detail pages), and Contact.
- **Working contact form** that emails submissions to my inbox via Resend,
  with validation, a loading state, and success/error feedback.
- **Spam protection** via a hidden honeypot field that silently drops bot
  submissions — so spam never uses up the free Resend email quota.
- **Centralized content:** all text, projects, posts, skills, and links live
  in a single file (`src/data/portfolioData.ts`) for easy editing.

---

## 2. Tech Stack

| Area            | Technology                                   |
| --------------- | -------------------------------------------- |
| Framework       | React 19 (Create React App)                  |
| Routing         | React Router 7                               |
| Styling         | Plain CSS with CSS variables (light/dark)    |
| Icons           | react-icons                                  |
| Contact backend | Vercel Serverless Function + Resend API      |
| Hosting         | Vercel (Hobby / free tier)                   |
| Version control | Git + GitHub                                 |

---

## 3. How to Run Locally

**Prerequisites:** [Node.js](https://nodejs.org/) 18 or newer and npm.

```bash
# 1. Clone the repository
git clone https://github.com/DonovanMcGilbray/PortfolioWebsite.git
cd PortfolioWebsite

# 2. Install dependencies
npm install

# 3. (Optional) set up the contact form locally
cp .env.example .env.local
# then open .env.local and fill in your real values

# 4. Start the development server
npm start
```

The site runs at [http://localhost:3000](http://localhost:3000).

> **Note on the contact form in local dev:** `npm start` runs only the React
> frontend, not the `/api/contact` serverless function. To test the contact
> form end-to-end locally, use the [Vercel CLI](https://vercel.com/docs/cli):
> `npm i -g vercel` then run `vercel dev`, which serves both the frontend and
> the API route together.

### Available scripts

- `npm start` — run the app in development mode.
- `npm run build` — build an optimized production bundle into `build/`.
- `npm test` — run the test runner.

---

## 4. Content Editing Guide

**You can update everything on the site by editing one file:**
[`src/data/portfolioData.ts`](src/data/portfolioData.ts).

The UI components only handle layout — they read all of their text from this
file. That means you never have to touch component or CSS files just to change
wording.

| To change...                     | Edit this export in `portfolioData.ts` |
| -------------------------------- | -------------------------------------- |
| Your name, title, bio, email     | `profile`                              |
| Social links (GitHub, LinkedIn)  | `socialLinks`                          |
| Navbar links                     | `navItems`                             |
| Home page intro paragraphs       | `home`                                 |
| About page text, skills          | `about`                                |
| Resume summary, education, jobs  | `resume`                               |
| Contact page heading/intro       | `contact`                              |
| Projects (Portfolio pages)       | `projects`                             |
| Blog posts                       | `posts`                                |

**Tips:**

- Fields like `home.intro`, a project's `description`, and a post's `content`
  are **arrays of strings** — each string becomes its own paragraph. Add or
  remove strings to add or remove paragraphs.
- To add a new project or blog post, copy an existing object in the `projects`
  or `posts` array and change its fields. Keep each `slug` **unique** — it
  becomes the page URL (e.g. `/portfolio/my-project`).
- Images live in the `public/` folder. Reference them by path, e.g.
  `image: "/project4.png"` points to `public/project4.png`.

---

## 5. Deployment Guide (Vercel + Resend, Free)

The site auto-deploys: push to the `main` branch on GitHub and Vercel builds
and publishes the update automatically.

### Step 1 — Get a free Resend API key

1. Create a free account at [resend.com](https://resend.com).
2. Go to **API Keys** and create a new key. Copy it (you'll paste it into
   Vercel in Step 2).
3. The free plan allows sending from `onboarding@resend.dev`, which this
   project uses by default — so no domain setup is required to get started.
   (If you later verify your own domain in Resend, update the `from` address
   in `api/contact.ts`.)

### Step 2 — Add environment variables on Vercel

1. In your [Vercel dashboard](https://vercel.com/dashboard), open the project.
2. Go to **Settings → Environment Variables** and add:

   | Name             | Value                                   |
   | ---------------- | --------------------------------------- |
   | `RESEND_API_KEY` | the key you copied from Resend          |
   | `CONTACT_EMAIL`  | the email that should receive messages  |

3. Save, then **redeploy** (Deployments → latest → Redeploy) so the new
   variables take effect.

### Step 3 — Done

Push to `main` and Vercel deploys automatically. The contact form will send
emails to your `CONTACT_EMAIL` inbox via Resend.

> **Staying at $0:** Vercel's Hobby tier and Resend's Free plan cover a
> personal portfolio comfortably. The honeypot spam filter in `api/contact.ts`
> prevents bot submissions from eating into the free Resend email quota.
