# Pawan Kumar · Portfolio

Personal portfolio site: product leader, B2B SaaS & AI.

A minimal one-page portfolio in plain HTML, CSS and JavaScript with no build step. Fonts (Poppins) and icons (Unicons subset) are self-hosted in `assets/`, so the site has no external dependencies. Light and dark mode follow the visitor's system setting, with a toggle in the header.

## Publish on GitHub Pages (about 5 minutes)

1. Sign in at github.com and click **New repository**.
   - Name it `YOUR-USERNAME.github.io` to get the address `https://YOUR-USERNAME.github.io`
   - Or use any name, like `portfolio`, to get `https://YOUR-USERNAME.github.io/portfolio/`
   - Set it to **Public** and click **Create repository**.
2. On the empty repo page, click **uploading an existing file**.
3. Unzip the package, open the folder, select **everything inside it** (`index.html`, `assets`, `README.md`) and drag it onto the upload area. The folder structure is kept. Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch** and **Branch: `main` / `(root)`**, then click **Save**.
5. Wait 1–2 minutes and refresh. Your live URL appears at the top of the Pages settings.

## Making changes

| What | Where |
|---|---|
| Hero photo | `assets/img/profile.jpg` (portrait, about 6:7) |
| CV popup | the Google Doc ID in the `cv-modal` block of `index.html` (the doc must be shared as "Anyone with the link can view") |
| Text, products, articles, experience | `index.html`, one section per block |
| Accent colour | `--accent` at the top of `assets/css/styles.css` (light and dark values) |

To update the live site, edit the file on GitHub (pencil icon, or **Add file → Upload files** to replace an image) and commit. GitHub Pages redeploys within a minute or two.

After changing `styles.css` or `main.js`, bump the `?v=` number on their links in `index.html` so visitors' browsers fetch the new file instead of a cached copy.
