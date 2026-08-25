# Editing your website — a practical guide

This site is plain HTML, CSS, and JavaScript — no build step, no framework.
You edit text files and refresh your browser. That's it.

---

## 0. The tools you need (one-time setup)

- **A code editor.** [Visual Studio Code](https://code.visualstudio.com/) is free and
  the easiest. (Notepad works in a pinch, but VS Code colour-codes everything so
  you can see what you're doing.)
  - Optional but lovely: install the **"Live Server"** extension in VS Code, then
    right-click `index.html` → *Open with Live Server*. The page reloads
    automatically every time you save.
- **A web browser** (you already have one). To preview without Live Server, just
  double-click any `.html` file and it opens in your browser. After an edit:
  **save the file, then refresh the browser (F5).**

### The files, and what each is for
| File | What it controls |
|------|------------------|
| `index.html` | Home page (hero + interactive habitat map + tiles) |
| `about.html` | About / bio |
| `research.html` | Research project cards |
| `publications.html` | Publications list + filters |
| `experience.html` | Positions, teaching, honours |
| `activities.html` | Outreach, NPTEL, conferences |
| `gallery.html` | Photo gallery + lightbox |
| `contact.html` | Contact + CV + form |
| **`style.css`** | **All colours, fonts, spacing, layout — the whole look** |
| **`script.js`** | All interactivity (menu, reveals, filters, lightbox) |
| `Brahma_CV.pdf` | Your CV (the download button points here) |

> **Golden rule:** change one thing, save, refresh, look. Small steps are easy to
> undo. Before a big change, copy the file somewhere as a backup.

---

## 1. Editing TEXT

All visible words live inside the `.html` files, between angle-bracket tags like
`<p>` … `</p>` or `<h3>` … `</h3>`. **You only change the words between the
tags — leave the tags themselves alone.**

Example — in `about.html` you might see:

```html
<h2 class="section__title">The short version</h2>
<p>I'm a behavioural ecologist completing my PhD ...</p>
```

To change the heading, edit only the middle part:

```html
<h2 class="section__title">A little about me</h2>
```

**Finding the text fast:** in VS Code press `Ctrl+F` (search this file) or
`Ctrl+Shift+F` (search every file) and type a few words you can see on the page.

**Three special characters** — because `<`, `>`, and `&` mean something in HTML,
type them as:
- `&amp;` for `&`
- curly quotes/apostrophes are written as `&rsquo;` (’), `&ldquo;` `&rdquo;` (“ ”)
  — but a plain `'` and `"` work fine too, so don't worry about these.

---

## 2. Changing the THEME (colours & fonts)

Everything visual is driven from **one place**: the `:root { ... }` block at the
**very top of `style.css`**. Change a value there and it updates everywhere on
every page.

### Colours
Look for these lines near the top of `style.css`:

```css
--accent:      #3b5240;   /* main accent — deep forest green */
--accent-warm: #8c7355;   /* secondary accent — warm field tan */
```

- `--accent` is the **main accent** (links, buttons, highlights, the glowing map
  markers). Change this one hex code to re-skin most of the site.
- `--accent-warm` is the **warm secondary accent** (numerals, the philosophy
  bar, note dates).
- `--bg` (`#f5f1eb`, warm parchment) and `--text` (`#1c1c1a`, near-black) are
  the page background and ink colour.

The deep green backgrounds (used in the dark hero and illustrated scene) come
from these:

```css
--green-900: #10231a;   /* darkest — section backgrounds */
--green-800: #16291c;   /* main page background */
--green-700: #1d3826;   /* cards / surfaces */
```

**How to pick a colour:** Google "colour picker", copy the `#xxxxxx` hex code, and
paste it in place of the existing one. Save, refresh.

> Tip: change `--jewel` first and see how much shifts. That's the fastest way to
> make the site feel different without touching anything else.

### Fonts
Two steps, because fonts are loaded from Google Fonts.

1. Pick a font at [fonts.google.com](https://fonts.google.com), click
   *"Get embed code"*, and copy the `<link ...>` line.
2. In **every** `.html` file, replace the existing Google Fonts `<link>` in the
   `<head>` with your new one. (There's one per page — use `Ctrl+Shift+F`, search
   `fonts.googleapis.com`, to find them all.)
3. In `style.css`, point the font variable at your new font:

```css
--font-display: "Fraunces", Georgia, serif;   /* big headings */
--font-body:    "Inter", system-ui, sans-serif; /* body text */
--font-mono:    "Space Mono", monospace;         /* little labels */
```

Change the name in quotes to match the font you chose. Keep the fallbacks after
the comma.

---

## 3. Adding IMAGES — the easy way (already set up for you)

There is an **`images/`** folder in your project, already split into three
sub-folders. The website is **already pointed at specific filenames** inside
them. You don't touch any code — you just drop a correctly-named photo in, and it
appears. No file = the coloured placeholder stays. Nothing ever breaks.

| Put a photo here | Named exactly | Shows up as |
|------------------|---------------|-------------|
| `images/hero/` | `hero.jpg` | Home-page banner background |
| `images/about/` | `portrait.jpg` | Your About-page portrait |
| `images/gallery/` | `jumping-spider.jpg`, `african-jewelfish.jpg`, … | Gallery frames |

Each folder also contains a small `_PUT-…-HERE.txt` note listing exactly what it
wants (the Gallery one lists all 8 filenames). **Steps:** drop the file in →
save/refresh the browser → done.

**Photo tips:** use `.jpg`, resize to about 1600 px wide and under ~500 KB so the
site stays fast, and use the exact lowercase names (no spaces).

### Captions
Captions live in `gallery.html`. For any frame, edit the words inside
`<span class="shot__cap">…</span>` and the `data-caption="…"` on the same
`<button>` (that text shows in the click-to-enlarge pop-up).

### More than 8 gallery photos
Open `gallery.html`, copy one whole `<button class="shot"> … </button>` block,
paste it, then change the image filename in `src="images/gallery/…"` and the
caption. Drop the matching file into `images/gallery/`.

### PDFs (CV, reprints)
There's also a `documents/` folder with its own note. Your CV button already
works from `Brahma_CV.pdf` in the main folder — replace that file (same name) to
update it.

> Want a different filename or layout? Tell me and I'll adjust the wiring.

---

## 4. Common edits, step by step

**Add a publication** → open `publications.html`, copy one whole
`<li class="pub" ...> … </li>` block, paste it, and edit the title, authors,
year (`data-year`) and topic (`data-topic`). The filters work automatically.

**Add a research project** → open `research.html`, copy one
`<article class="card"> … </article>` block and edit it.

**Fix the CV download** → the button already points to `Brahma_CV.pdf`. To update
your CV, just replace that PDF file with a new one of the **same name**.

**Add the NPTEL / outreach links** → open `activities.html`, find the
`href="#"` inside the `note__btn` links, and replace `#` with your real URL
(e.g. the YouTube link).

---

## 5. Putting it online (when you're ready)

The site is just files, so it can live almost anywhere for free:
- **GitHub Pages** — good if you want a `username.github.io` address (replaces your
  owlstown site nicely).
- **Netlify** or **Cloudflare Pages** — drag-and-drop the whole folder onto their
  website and it's live in seconds; they also give you a free address and let you
  connect a custom domain.

When you publish, upload the **entire folder** (all the `.html`, `style.css`,
`script.js`, your `images/` folder, and `Brahma_CV.pdf`) so the links keep working.

---

### When in doubt
Make a copy of the folder before experimenting, change one thing at a time, and
keep refreshing. If something breaks, undo (`Ctrl+Z`) or restore your backup.
And you can always ask me to make a specific change for you.
