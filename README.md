# The Dispatch — starter website

A simple 4-page website styled like a magazine feature: Home, Photo Essay
(with individual photo pages, laid out as alternating full-bleed spreads),
About, and Research Paper. No coding knowledge required to edit — just text
editing and swapping image files.

A few new things to know in this version:
- **Pull quotes**: the `<blockquote class="pullquote">` blocks on the About
  and Research Paper pages are meant for a striking quote — replace the
  quote text and the `<cite>` attribution line
- **Drop caps**: the first paragraph in each prose section automatically
  gets an oversized first letter (the `class="dropcap"` on that `<p>` does
  this) — no need to do anything extra
- **Masthead**: the small "Vol. 1, No. 1" line and "Field Report · Social
  Science" label at the top of every page can be edited to say whatever fits
  your project

## What's in this folder

```
index.html          → Home page
photo-essay.html     → Grid of photos, links to individual pages
about.html            → Project scope + team
research.html         → Your paper
photos/
  photo-1.html        → Full page for one photograph
  photo-2.html
  photo-3.html
images/               → Photo placeholders — replace these
css/style.css         → All the styling (colors, fonts, layout)
```

## Step 1 — Edit the text

Every file with editable content has a comment like:
`<!-- EDIT: ... -->` right above the text you should change. Open any
`.html` file in a plain text editor (Notepad, TextEdit, or VS Code) and:

- Find the `<!-- EDIT: -->` comments
- Change the text right after them to your real project content
- Don't touch anything that looks like `<div class="...">` — just the
  words between the tags

## Step 2 — Replace the photos

The `images/` folder has placeholder graphics (`hero.svg`, `photo-1.svg`,
etc.) so nothing looks broken before you add real photos. To swap one in:

1. Rename your photo file to match exactly, e.g. `hero.jpg`
2. Drop it into the `images/` folder
3. Open the HTML file that uses it and change the `src`, e.g.
   `src="images/hero.svg"` → `src="images/hero.jpg"`

To add a 4th, 5th, etc. photo to the essay:
1. Copy `photos/photo-3.html`, rename it `photo-4.html`
2. Edit its text and image as above, and fix the "previous/next" links
   at the bottom to point to your new page
3. Open `photo-essay.html` and copy one `<a class="photo-card">` block,
   pointing it at your new photo and page

## Step 3 — Put it on GitHub Pages

1. **Create a GitHub account** at github.com if you don't have one
2. **Create a new repository**: click the `+` in the top right → "New
   repository" → name it (e.g. `my-research-site`) → make sure it's
   **Public** → click "Create repository"
3. **Upload the files**: on the new repo's page, click "uploading an
   existing file" → drag in *everything* in this folder (keep the
   `photos/`, `images/`, and `css/` folders intact) → scroll down and
   click "Commit changes"
4. **Turn on Pages**: go to the repo's **Settings** tab → **Pages** in
   the left sidebar → under "Branch" choose `main` and `/ (root)` →
   click **Save**
5. Wait about a minute, then refresh that Pages settings page — it will
   show your live URL, something like:
   `https://your-username.github.io/my-research-site/`

Any time you edit a file directly on GitHub (click the file → pencil
icon → edit → "Commit changes"), the live site updates automatically
within a minute or two.

## Optional — custom domain

Buy a domain (e.g. from Namecheap, ~$12/year), then in the same
Settings → Pages screen enter it under "Custom domain." GitHub will show
you a couple of DNS records to add at your domain registrar.
