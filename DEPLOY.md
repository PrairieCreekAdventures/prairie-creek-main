# Prairie Creek Adventures — Deployment Guide

A shorter guide this time, because you've done most of this before. I'll call out the few things that differ.

**Total time:** ~30 minutes. (Way faster than round one.)

---

## What you're deploying

A brand-new Astro site living at its own Netlify URL, with its own GitHub repo and its own admin panel. The old `deft-toffee` site stays exactly where it is — don't touch it.

---

## Part 1 — New GitHub repo (5 min)

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `prairie-creek-adventures`
3. Public, "Add a README"
4. Click **Create repository**

### 1.1 — Upload the files

Use **GitHub Desktop** this time. It's much faster and avoids the folder-flattening issue from last round.

1. Open GitHub Desktop
2. **File → Clone repository**
3. Choose `prairie-creek-adventures`, pick a folder on your computer, clone it
4. Unzip the `prairie-creek-adventures.zip` I gave you
5. Inside the unzipped folder you'll see `adventures/` — open it
6. Select all its contents (not the `adventures` folder itself, but what's inside it) and copy them into the cloned repo folder, overwriting the existing README
7. Back in GitHub Desktop, you'll see all the new files. Commit message: `Initial upload`. Click **Commit to main**, then **Push origin**

Refresh your repo on github.com. You should see `src`, `public`, `package.json`, `astro.config.mjs`, `netlify.toml`, and `.gitignore`.

---

## Part 2 — Deploy to Netlify (5 min)

1. In Netlify, click **Add new site** → **Import an existing project** → **Deploy with GitHub**
2. Pick the `prairie-creek-adventures` repo
3. Verify build settings:
   - Branch: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**
5. Wait 1-3 minutes. When it says **Published** in green, visit the generated URL.

You should see the new wildflower-themed site — Parisienne flowing cursive in the logo, poppy accents, the whole new design. If anything looks broken or the site 404s, check the deploy log for errors and tell me what it says.

### 2.1 — Rename the site

1. In your site's Netlify dashboard: **Site configuration → Site details → Change site name**
2. Change it to something like `prairie-creek-adventures`
3. Your Netlify URL becomes `prairie-creek-adventures.netlify.app`

---

## Part 3 — Admin panel via DecapBridge (10 min)

You've done this before. Quick version:

### 3.1 — Add a new site in DecapBridge

1. Log into [decapbridge.com](https://decapbridge.com)
2. Click **Add site**
3. Fill in:
   - **Git provider:** GitHub
   - **GitHub repository:** `PrairieCreekAdventures/prairie-creek-adventures`
   - **GitHub access token:** You'll need a fresh token (see 3.2 below)
   - **Decap CMS login URL:** `https://prairie-creek-adventures.netlify.app/admin/` (use your actual Netlify URL)
   - **Auth type:** PKCE
   - **Site Name:** `Prairie Creek Adventures`
4. Save

### 3.2 — Create a fresh GitHub token

The token you made for the first site only has access to *that* repo. You need a new one for this repo.

1. Go to [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new)
2. Token name: `DecapBridge — Adventures`
3. Expiration: 1 year
4. Resource owner: PrairieCreekAdventures
5. Repository access: **Only select repositories** → select **prairie-creek-adventures**
6. Repository permissions:
   - **Contents:** Read and write
   - **Pull requests:** Read and write
7. Generate token, copy it immediately, paste into DecapBridge.

### 3.3 — Update the config.yml with your DecapBridge site ID

After you save the site in DecapBridge, it'll give you a new config snippet with a new site ID (it'll look like `abc123-def456-...`).

1. Go to `public/admin/config.yml` in GitHub
2. Click the pencil icon to edit
3. Find these two lines:
   ```
   auth_endpoint: /sites/YOUR-DECAPBRIDGE-SITE-ID/pkce
   auth_token_endpoint: /sites/YOUR-DECAPBRIDGE-SITE-ID/token
   ```
4. Replace `YOUR-DECAPBRIDGE-SITE-ID` in both lines with your actual site ID from DecapBridge
5. Commit. Netlify auto-deploys (or you can trigger it manually).

### 3.4 — Log in

Once the deploy finishes: `prairie-creek-adventures.netlify.app/admin/` → log in with whatever method you chose in DecapBridge (Google, email, etc.) → you should see the admin with the "Posts" collection.

---

## Part 4 — Things you'll want to do soon

- **Hero photo.** The homepage hero currently has a placeholder illustration of a sunset field. Swap it for a real photo when you're ready — edit `src/pages/index.astro`, find the `<figure class="hero__image">` block, and replace the entire SVG with `<img src="/images/your-photo.jpg" alt="..." />` (or I'll give you the exact code when you share the photo).
- **About page photo.** Same deal for the About teaser on the homepage and About page itself — currently a wildflower field illustration. Real photos go here when you're ready.
- **Update the Facebook/Instagram links.** In `src/layouts/BaseLayout.astro` I put placeholder links to `facebook.com/prairiecreekadventures` and `instagram.com/prairiecreekadventures` — update if those aren't quite right.
- **Write!** You've got the admin, you've got an empty journal. Tell the stories.
- **Eventually: custom domain.** When you're ready to buy or connect a domain, we'll point it at Netlify (same as the old site's guide, Part 4).

---

## What's in the site

**Pages that render:**
- `/` — Homepage
- `/about` — Your story (drafted, ready to edit)
- `/journal` — All posts archive
- `/journal/[post-slug]` — Individual post pages
- `/recipes` — Posts filtered to Recipe category
- `/category/farm-life`, `/category/recipes`, `/category/hope-faith`, `/category/june-bug`, `/category/garden`, `/category/savvy-bunny` — Category pages

**Design system:**
- Palette: buttercream, cosmos pink, poppy red, honey yellow, meadow green, lilac, olive-sage, stem green
- Typography: Parisienne (script), Fraunces (serif), Inter (sans)
- Hand-drawn SVG wildflower ornaments throughout

**Admin categories:** Farm Life, Recipe, Hope & Faith, June Bug, Garden, Savvy Bunny

---

## Troubleshooting

**404 on deploy:** See the old DEPLOY.md's troubleshooting section. Same tricks apply (check `src` folder is there, check build log for errors, verify Node 20).

**Admin won't load:** Make sure you updated the `YOUR-DECAPBRIDGE-SITE-ID` placeholders in `config.yml`. Also hard-refresh `/admin/` (Cmd+Shift+R).

**Site looks unstyled:** Check `src/styles/global.css` made it into the repo. Hard-refresh.

**Parisienne doesn't load:** It should. If for some reason it doesn't, try a different browser (Chrome or Safari). Google Fonts is loading it with preconnect optimization.

---

## What I didn't build (for future sessions)

- Individual Savvy Bunny showcase page (will design when the book brand is more defined)
- Shop / e-commerce (when you're ready to sell)
- Newsletter integration (form works but currently just collects submissions in Netlify — need to connect Mailchimp/Buttondown/ConvertKit)
- Instagram feed embed (if/when you want it)
- Custom domain setup (when you're ready)

Ping me when you're ready to tackle any of those, or if anything breaks during deploy.

Welcome to the new site. 🌾
