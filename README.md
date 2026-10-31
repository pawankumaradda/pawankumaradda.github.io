# Pawan Kumar · Portfolio

Personal portfolio site: product leader, B2B SaaS & AI.

Built on the [Alexa responsive portfolio template](https://github.com/bedimcode/responsive-portfolio-website-Alexa) by Bedimcode. Plain HTML, CSS and JavaScript with no build step. Fonts (Poppins) and icons (Unicons) are self-hosted in `assets/`, so the site has no external dependencies.

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
| Hero photo (blob shape) | `assets/img/profile.jpg`, any photo works because it is cropped to fill the blob |
| About photo | `assets/img/about.jpg` (square crop) |
| Resume download | `assets/pdf/Pawan-Kumar-Resume.pdf` |
| Text, roles, links | `index.html` |
| Theme color | `--hue-color` at the top of `assets/css/styles.css` (250 purple, 230 blue, 142 green, 340 pink) |

To update the live site, open the file on GitHub, click the pencil icon (or **Add file → Upload files** to replace an image), then commit. GitHub Pages redeploys automatically within a minute or two.
