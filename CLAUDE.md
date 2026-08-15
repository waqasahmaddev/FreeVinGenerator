# CLAUDE.md — FreeVinGenerator.com

Project reference for Claude / future sessions. Read this first.

---

## 1. What this project is

**FreeVinGenerator.com** is a free suite of **VIN (Vehicle Identification Number) tools** plus an educational **blog**. VIN tools: generate random valid VINs, decode a VIN, validate a VIN, bulk-generate, make VIN QR codes, and visualize VIN structure. Audience: used-car buyers, developers/QA needing test data, and people learning how VINs work.

Positioning is **testing / educational** (not producing fake VINs for fraud). This framing matters — see AdSense below.

- **Live domain:** https://freevingenerator.com (custom domain via `CNAME`).
- **Repo:** public GitHub repo, GitHub Pages hosting.
- **Owner is in Pakistan (UTC+5)** — relevant for post-date timezone behavior (see Gotchas).

### The AdSense context (why the blog exists)
Google AdSense **rejected the site for "low value content"** — it read as a thin cluster of near-identical utility tools. The remediation strategy (in progress):
1. A **weekly blog of genuinely useful, original articles** (the real fix).
2. Cleaner information architecture (Tools hub, blog, streamlined nav).
3. Clear educational framing + trust signals.

The technical work is done; **ongoing success depends on publishing real content regularly**, then re-requesting AdSense review and re-indexing in Search Console.

---

## 2. Tech stack & architecture

Static site built with **Jekyll**, hosted on **GitHub Pages** (native build, deploy-from-`main`, no GitHub Actions).

- **Jekyll** builds HTML from `_layouts` / `_includes` / front matter. GitHub Pages runs its own Jekyll on push — so we use **only standard features + GitHub-whitelisted plugins** (`jekyll-sitemap`, `jekyll-feed`). No custom plugins.
- **gulp** minifies CSS/JS separately from Jekyll: `assets/app.css` → `assets/app.min.css`, and JS files concatenated → `assets/app.min.js`. Jekyll just serves those outputs. **Editing `app.css` requires re-running gulp** (`npm run css`).
- **Ruby 3.3** installed at `C:\Ruby33-x64` (on the persisted PATH — works in any *new* terminal). Local Jekyll is 4.4; GitHub's is 3.9-compatible. We avoid 4.x-only features.

### Migration history
The site was **hand-written static HTML**, migrated to Jekyll on **2026-08-14** to stop copy-pasting the header/footer into every page. All original tool pages were preserved byte-for-byte (verified by diff), then normalized for consistency.

---

## 3. Directory structure

```
_config.yml              # site config, post defaults, plugins, excludes
Gemfile                  # local jekyll gems (GitHub ignores this)
package.json             # npm scripts + gulp devDeps
gulpfile.js              # CSS/JS minify pipeline

_layouts/
  default.html           # full page skeleton (head + header + {{content}} + footer + scripts)
  post.html              # blog article wrapper (uses layout: default) + Article/Breadcrumb JSON-LD
_includes/
  head.html              # all <head> meta built from front matter (title, desc, OG, Twitter, canonical, favicon, AdSense, GA)
  header.html            # nav (incl. Tools mega menu)
  footer.html            # footer links + copyright

index.html               # homepage (VIN generator) -> /
tools.html               # tools hub -> /tools/
blog.html                # blog archive -> /blog/
vin-decoder.html         # -> /vin-decoder/   (flat file + permalink)
vin-validator.html       # -> /vin-validator/
bulk-vin-generator.html  # -> /bulk-vin-generator/
vin-qr-code-generator.html    # -> /vin-qr-code-generator/
vin-breakdown-visualizer.html # -> /vin-breakdown-visualizer/
what-is-a-vin.html       # -> /what-is-a-vin/
about.html contact.html privacy-policy.html terms-of-service.html

_posts/
  2026-08-14-how-to-read-a-vin.md            # -> /blog/how-to-read-a-vin/
  2026-08-15-how-to-check-if-a-vin-is-valid.md
  2026-08-13-where-to-find-your-vin.md
  2026-08-12-what-a-vin-tells-you.md
  2026-08-11-vin-model-year-codes-chart.md

assets/
  app.css / app.min.css  # source + minified (gulp)
  app.js + *.js / app.min.js  # per-tool JS, concatenated + minified (gulp)
  blog/<slug>.jpg        # featured images for posts (1200x630)
  logo.png, og-image.jpg, favicon.svg, apple-touch-icon.png, twitter-image.svg

CNAME  ads.txt  robots.txt        # static passthrough (sitemap.xml is auto-generated now)
docs/                             # internal notes, excluded from build
```

**All content pages are FLAT files** (`name.html` with `permalink: /name/`), not folders. URLs unchanged from the old folder structure.

`_site/`, `.jekyll-cache/`, `Gemfile.lock`, `node_modules/` are gitignored (build output / deps).

---

## 4. Local development

Ruby is on PATH in a **new** terminal. From the project root:

```bash
npm start        # gulp (build css/js) + jekyll serve --livereload  -> http://localhost:4000
npm run serve    # jekyll serve only (no livereload, no spinner)
npm run css      # rebuild app.min.css / app.min.js via gulp (needed after editing app.css/js)
npm run build    # gulp + jekyll build (production build into _site/)
```

First time on a machine: `npm install` once (node_modules is gitignored).
If `jekyll` isn't found, open a fresh terminal (PATH from the Ruby install).

The in-app Browser pane blocks `localhost`/`127.0.0.1`; use your own browser, or `.claude/launch.json` (config name `jekyll`) + preview_start.

---

## 5. Deployment

- **Host:** GitHub Pages, **deploy from the `main` branch**, native Jekyll build (no Actions).
- **Trigger:** every push to `main`. GitHub builds and publishes automatically; a failed build keeps the last good version live and emails the owner.
- **Domain:** `CNAME` = `freevingenerator.com`.
- **Verify a deploy:** repo → Actions (or Settings → Pages) shows "pages build and deployment" green, then load the site.
- Commit/push only when the user asks. The repo is public — see repo-privacy note: the served frontend is public regardless; only source/history would be hidden by going private, which requires GitHub Pro for Pages.

---

## 6. Templating & front matter

`_layouts/default.html` renders `head.html` + `header.html` + `{{ content }}` + optional ad-sidebar / scroll-to-top + `footer.html` + per-page `libs` + `app.min.js` + optional notification. Structural pieces are driven by front-matter flags so pages stay heterogeneous without extra layouts.

**Common front-matter keys:**

| Key | Purpose |
|---|---|
| `layout` | `default` (tools/home/hub) or `post` (articles) |
| `permalink` | clean URL, e.g. `/vin-decoder/` (posts get `/blog/:title/` from `_config.yml`) |
| `title`, `description`, `keywords` | `<head>` meta (keep description **110–160 chars**) |
| `active` | nav highlight key: `home` / `tools` / `blog` / `whatisvin` (tool pages use `tools`) |
| `og_title`, `og_description`, `og_image`, `og_type`, `twitter_*` | social meta (fall back to title/description/image) |
| `ad_sidebar`, `scroll_top` | booleans — render the vertical ad + scroll-to-top button |
| `notification` | text for the hidden toast div (tool pages) |
| `libs` | list of external `<script>` URLs loaded before app.min.js (QR page = qrcodejs, Visualizer = d3) |
| `dns_prefetch`, `robots` | optional perf/robots hints |
| `body_class` | e.g. `bg-plain` for the white blog/article background |
| `image`, `category`, `author` | blog posts (image also becomes OG/social image) |
| `breadcrumb` | label used in some inline JSON-LD |

**Structured data (JSON-LD)** lives **inline in each page's body** (not auto-generated in head, except meta). Types in use: Organization + WebApplication + FAQ (home), BreadcrumbList + WebApplication + FAQ (tool pages), Article + BreadcrumbList (posts, from `post.html`), Blog + BreadcrumbList (blog), CollectionPage + BreadcrumbList (tools), BreadcrumbList (privacy/terms).

---

## 7. Navigation

Top nav: **VIN Generator** (`/`) · **Tools** (`/tools/`, a **mega menu** on desktop) · **Blog** (`/blog/`) · **What is a VIN?** (`/what-is-a-vin/`).

- **Tools mega menu** (`.has-mega` / `.mega-menu` in `header.html`, CSS at end of `app.css`): pure CSS, no JS. Desktop (≥769px) = hover panel with intro + 6 tool links. Mobile (≤768px) = static expanded list inside the slide-in menu.
- Footer: Tools · Blog · About · Contact · Privacy Policy · Terms of Service · Sitemap.

---

## 8. Blog system & writing rules

**Add an article:** create `_posts/YYYY-MM-DD-slug.md`:

```markdown
---
title: "Article Title (50-60 chars ideal)"
date: 2026-08-15
category: "VIN Guide"          # drives the card label
description: "110-160 char meta description with the focus phrase."
image: /assets/blog/slug.jpg   # 1200x630 featured image
author: "FreeVinGenerator Team"
---

Body in Markdown...

## Keep Reading
- links to the other posts + a tools line
```

It auto-publishes at `/blog/slug/` via `post.html` (renders Article + Breadcrumb JSON-LD, shows date only — no author byline). Appears on `/blog/` as an editorial card (thumbnail, title, excerpt, date).

**Featured image:** one **1200×630** JPG at `assets/blog/<slug>.jpg` serves the card thumb + article hero + OG/social image.

**Writing style (follow the `saganote-content-writer` skill's WRITING RULES only — not its CMS/branding):**
- Human voice, like a knowledgeable person explaining — not AI.
- **No em dashes (—). Use hyphens `-`, commas, or periods.** (verified with `grep -c "—"`)
- **No AI filler words:** crucial, delve, leverage, comprehensive, robust, seamless, notable, significant, moreover, furthermore, underscore, revolutionary, etc.
- Vary sentence length (short punches + longer sentences). Active voice. Specific facts.
- ~800–1000 words, real tables/examples, 2–4 inline internal links + a "Keep Reading" section (max internal linking).

**Markdown table gotcha:** don't use empty spacer columns (`| Code | Year | | Code |`) — they render as blank columns. Use real multi-column headers (`| Code | Year | Code | Year |`).

---

## 9. Styling (assets/app.css → gulp → app.min.css)

- Brand gradient: `#667eea → #764ba2`. Body background is that gradient by default; blog/article pages use `body.bg-plain` (white in light mode, `#0f1419` in dark).
- **Dark mode** via `.dark-mode` class on `html`/`body` (toggle persists in localStorage). CSS variables defined on `:root` and `.dark-mode`.
- **Accessibility:** link color is `--link-color: #4f57cc` (5.9:1 on white — passes WCAG AA; the brand `#667eea` failed at 3.7:1). Body/footer text uses `--text-secondary #4a5568`. Keep new text ≥4.5:1 on its background.
- Card grids use `.post-grid` (3 columns desktop → 2 → 1). Cards: `.post-card` (thumb + title + excerpt + date).
- Mobile menu breakpoint: **≤768px** (hamburger + slide-in sidebar). `body { padding-top: 85px }` clears the fixed header.

---

## 10. SEO

- **Every page passes an audit** (script at `scratchpad/seo_audit.py` when present): `<title>` ≤64 chars, meta description 110–160, canonical, OG + Twitter, single `<h1>`, image alt, JSON-LD.
- `sitemap.xml` (jekyll-sitemap) and `feed.xml` (jekyll-feed) auto-generate and include every page + post. `robots.txt` points to the sitemap. The old hand-written sitemap.xml was deleted.
- Internal linking is dense: posts cross-link each other + tools; tools hub + homepage link to blog.
- After deploying content: in **Google Search Console**, resubmit the sitemap and **Request Indexing** for key URLs. "Crawled/Discovered - currently not indexed" is normal for new/small sites and resolves with more content + re-crawls.

---

## 11. Gotchas / lessons

- **Future-dated posts hidden on GitHub:** GitHub builds in **UTC**; a post dated "today" in Pakistan (UTC+5) is future-dated in UTC and hidden until UTC catches up (a few hours). Fixes: date posts a day earlier, or just wait for the next build after UTC rolls over. (`future: true` would force-publish but the owner chose NOT to use it. `timezone:` needs the `tzinfo-data` gem on Windows and broke the local build — avoid it.)
- CDN libs (qrcodejs, d3) load via the `libs:` front-matter list, **before** `app.min.js`. Don't drop them.
- The two tables in `how-to-read-a-vin` and `vin-model-year-codes-chart` were fixed to remove empty spacer columns.
- `_config.yml` changes require a Jekyll **serve restart** (not picked up by --watch).

---

## 12. Current status (as of 2026-08-15)

- ✅ Jekyll migration, Tools hub, Blog, mega menu, flat pages, auto-sitemap/feed — done and deployed.
- ✅ **8 blog articles** written (human voice, no em-dashes, internal-linked), all SEO-clean. First 5 published + indexed; 3 newer (cloning scams, stolen-by-VIN, VIN vs plate) pending push.
- ✅ Contrast (WCAG) fixes, editorial cards, white blog theme.
- ✅ **About page** rewritten for E-E-A-T (origin story, editorial standards, honest trust signals) — owner can add a real name/bio to strengthen further.
- ⚠️ **TODO — owner:** add 3 featured images at `assets/blog/{how-vin-cloning-scams-work, how-to-check-if-a-car-is-stolen-by-vin, vin-vs-license-plate-vs-registration}.jpg` (1200×630). First 5 post images already added.
- ⚠️ **Uncommitted** at session end: 3 new articles, rewritten About, CSS/contrast, SEO tweaks, CLAUDE.md, README. Commit + push when ready.
- **AdSense plan:** see `docs/adsense-review-plan.md`. Build to 10-15 indexed pages, strengthen About, wait for re-crawl/indexing, THEN request review. Do not request early.

Session memory (machine-specific setup, cross-session): `~/.claude/projects/D--Code-FreeVinGenerator/memory/`.
