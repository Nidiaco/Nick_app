# Simple Web App Demo

This is a tiny mobile-friendly web app you can open from your phone.

## What it does

- lets you type and save a note in the browser
- supports a light/dark UI toggle
- works as a static website so you can deploy it for free

## Run locally

1. Open `index.html` in a browser.
2. Or use a simple static server, for example with Python:

```powershell
cd C:\Users\nidia\Nick_app
python -m http.server 8000
```

Then open `http://localhost:8000` on your computer.

## Deploy for free

### Vercel

1. Create a free account at https://vercel.com
2. Install the Vercel CLI or connect your GitHub repo
3. Deploy the folder as a static site

### Netlify

1. Create a free account at https://netlify.com
2. Drag the project folder into Netlify Drop
3. Or connect a GitHub repo and deploy

## Access from your phone

Once deployed, Netlify or Vercel will give you a public URL. Open that URL in your phone browser.

## Notes

- This app is static and does not require a backend server.
- It will work on any phone browser as long as the site is reachable online.
