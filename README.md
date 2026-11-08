# Homer E. Conda — Student Portfolio

A responsive student portfolio built with plain HTML, CSS, and JavaScript. No build step or external JavaScript dependencies are required.

## How to Customize My Portfolio

### How to Add Your Pictures

All portfolio pictures are in one easy-to-find folder:

```text
public/
└── images/
    ├── profile/
    │   └── profile.jpg
    ├── certificates/
    │   ├── certificate-1.jpg
    │   ├── certificate-1.pdf
    │   ├── certificate-2.jpg
    │   ├── certificate-2.pdf
    │   ├── certificate-3.jpg
    │   └── certificate-3.pdf
    ├── projects/
    │   ├── listahan-ni-nanay.jpg
    │   └── isda-presyo.jpg
    └── other/
```

1. **Profile picture:** Replace `public/images/profile/profile.jpg` with your own picture. Keep the same filename and you don't need to edit any code.
2. **Certificate pictures and PDFs:** Each card shows a JPG preview and a **View certificate PDF** link. The gallery currently uses the uploaded Sololearn certificates. To update them, replace the files in `public/images/certificates/` and keep the numbered filenames. In `portfolio-data.js`, `image` controls the preview and `pdf` controls the PDF link.
3. **Project screenshots:** The Projects & practice section currently shows `listahan-ni-nanay.jpg` and `isda-presyo.jpg` from `public/images/projects/`. Add or replace images in that folder, then update the matching details and image paths in the `projects` list in `portfolio-data.js`.
4. **Other pictures:** Store extra portfolio images in `public/images/other/`.

The site uses ordinary relative file paths, so the image paths start with `public/images/`. The `public` folder is part of this simple static site's folder structure; no build tool is needed.

### Update Text and Portfolio Details

1. **Name and personal information:** Edit the hero, about, and other page text in `index.html`. The school name and graduation year are placeholders there too.
2. **Skills:** Open `portfolio-data.js` and edit the clearly labeled skills lists. Remove any languages or tools you have not used, and keep skill levels accurate.
3. **Projects:** In `portfolio-data.js`, find `// PROJECT IMAGES`. Update the existing entries or add one with its name, description, category, technologies, image path and alt text, GitHub URL, and demo URL.
4. **Certificates:** In `portfolio-data.js`, find `// CERTIFICATES` and edit the `certificates` list. Change the title, issuing organization, year, alt text, and optional link. Copy an entry to add a certificate or delete one to remove it.
5. **Email and social links:** In `index.html`, update the email address and social profile URLs in the Contact section. Also change the `recipient` address in `script.js` so the contact form opens a message addressed to you.

The comments at the top of `portfolio-data.js` point to each image folder and explain what to replace.

### Run the Portfolio in VS Code

1. Open this project folder in VS Code.
2. Open `index.html` and choose **Open with Live Server** if you have the Live Server extension. Or open `index.html` directly in your browser.
3. After replacing a picture, refresh the browser to see the update.

The contact form opens the visitor's email app using a `mailto:` link. It does not send or save messages on a server. Connect an email service or backend later if you want messages sent directly from the website.
