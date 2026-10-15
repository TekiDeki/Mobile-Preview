<div align="center">

# 📱 Mobile Preview

### See how any page looks on iPhone, iPad, Android & desktop - in seconds

A zero-dependency, single-file web app that renders any HTML file or URL inside real device frames.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square)](LICENSE)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)](#)
[![PWA](https://img.shields.io/badge/PWA-offline-success?style=flat-square)](#)
[![Languages](https://img.shields.io/badge/languages-4%20(RO·EN·SR·СР)-purple?style=flat-square)](#-supported-languages)
[![Made with](https://img.shields.io/badge/made%20with-vanilla%20JS-yellow?style=flat-square)](#)

### 🚀 **[Try it live →](https://tekideki.github.io/Mobile-Preview/)**

</div>

---

## 🌐 Live Demo

**👉 [https://tekideki.github.io/Mobile-Preview/](https://tekideki.github.io/Mobile-Preview/)**

No installation, no sign-up. Works offline once loaded.

---

## 📖 About

**Mobile Preview** is a browser-based device simulator. Load a local `.html` file or paste any URL, and instantly see it rendered inside accurate frames for **phones, tablets and desktops** - with the real viewport dimensions of each device.

Perfect for:

- 🧑‍💻 **Developers** checking responsive layouts without opening DevTools
- 🎨 **Designers** presenting mockups in realistic device frames
- ✍️ **Bloggers & marketers** grabbing screenshots at exact device sizes
- 🧪 **QA testers** comparing how a page behaves across device widths

Everything runs **100% client-side**. Nothing is uploaded, tracked, or sent anywhere.

---

## ✨ Features

- 📱 **12 real devices** - iPhone SE/12/14 Pro/15 Pro Max, Pixel 7, Galaxy S23, iPad Mini/Air/Pro 11"/12.9", Galaxy Tab S8, Desktop
- 📐 **13 aspect ratios** - 1:1, 4:3, 3:2, 16:10, 5:3, 16:9, 18:9, 18.5:9, 19:9, 19.5:9, 20:9, 21:9, 9:16 (Stories/Reels)
- ⚙️ **Custom mode** - any width × height up to 4000px, with phone / tablet / no-frame rendering and scale control
- 📁 **Load local HTML files** - drag in a file, preview it instantly (rendered in a sandboxed iframe)
- 🔗 **Load any URL** - paste a link and preview it live
- 🔄 **Orientation toggle** - portrait ↔ landscape, dimensions swap automatically
- 🔍 **Zoom control** - 25% to 200%, plus auto-fit so the frame always fits the viewport
- 🌍 **4 languages** - Română, English, Srpski (latinica), Српски (ћирилица)
- 🌗 **Dark & light theme** - follows your system, remembers your choice; URL override with `?theme=light`
- 🔗 **Shareable state via URL** - `?lang=en`, `?theme=dark`
- 📦 **Installable PWA** - works fully offline thanks to a service worker
- 🪶 **Zero dependencies** - one HTML file, no frameworks, no build step, no CDN, no analytics
- 🔍 **SEO-ready** - JSON-LD (WebApplication), Open Graph, Twitter cards, canonical, `hreflang` alternates, sitemap
- ♿ **Accessible** - keyboard focus rings, `aria-label`s, respects `prefers-reduced-motion`
- 🛡️ **Safe previews** - iframes are sandboxed, so previewed pages can't touch the app

---

## 🚀 Quick Start

### Option 1 - Use the Live Demo (Simplest)

**👉 [https://tekideki.github.io/Mobile-Preview/](https://tekideki.github.io/Mobile-Preview/)**

### Option 2 - Run Locally

```bash
git clone https://github.com/TekiDeki/Mobile-Preview.git
cd Mobile-Preview

# any static server works
python -m http.server 8000
```

Then open **http://localhost:8000**

> 💡 For PWA features (install prompt, offline mode) serve over **HTTPS** or `localhost`.

### Option 3 - Fork & Deploy to Your Own GitHub Pages

1. **Fork** this repository
2. **Settings → Pages**
3. Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`
4. Save → live at `https://YOUR-USERNAME.github.io/Mobile-Preview/`

---

## 📱 Install as an App (PWA)

| Platform | Steps |
|---|---|
| **Android** (Chrome) | ⋮ menu → **Install app** |
| **iPhone / iPad** (Safari) | Share button → **Add to Home Screen** |
| **Desktop** (Chrome / Edge) | Click the **install icon** (⊕) in the address bar |

Once installed it launches full-screen and works without a connection.

---

## 🎮 Usage

1. **Load content** - click **📁 Load file** to pick a local `.html`, or paste a URL and hit **🌐 Load URL**
2. **Pick a mode**:
   - **📱 Devices** - choose one of 12 real device presets
   - **📐 Aspect ratio** - pick a ratio, set the base width and display scale
   - **⚙️ Custom** - enter any width × height, choose frame type and scale
3. **Fine-tune** - toggle orientation, adjust zoom, reload, or open the preview in a new tab
4. **Reset** - returns to iPhone 12, portrait, 100% zoom

---

## 🌍 Supported Languages

| Code | Language | Default |
|------|----------|:-------:|
| `ro` | Română | ✅ (fallback) |
| `en` | English | - (auto-detected from browser) |
| `sr-Latn` | Srpski (latinica) | - |
| `sr-Cyrl` | Српски (ћирилица) | - |

Language priority: **URL parameter** (`?lang=…`) → saved choice → browser language → Romanian.

---

## 🛠️ Tech Stack

- **HTML5** - one file, semantic markup
- **CSS3** - custom properties for theming (dark + light token sets)
- **Vanilla JavaScript** - ~600 lines, no frameworks, no bundler
- **Service Worker** - cache-first shell, never intercepts your preview URLs
- **Web App Manifest** - installable, standalone, custom icon set
- **JSON-LD** - structured data (`WebApplication`)

No external CDNs. No analytics. No fonts to download. No tracking.

---

## 📁 Project Structure

```
Mobile-Preview/
├── index.html        # Standalone app (HTML + CSS + JS)
├── manifest.json     # PWA manifest
├── sw.js             # Service worker (offline shell)
├── icon-192.png      # App icon
├── icon-512.png      # App icon (large / maskable)
├── apple-touch-icon.png
├── og-image.png      # Social share image (1200×630)
├── robots.txt
├── sitemap.xml       # with hreflang alternates
├── LICENSE           # Apache License 2.0
├── NOTICE
└── README.md
```

---

## 🔒 Privacy

- No backend, no accounts, no cookies, no analytics
- Previewed URLs are loaded directly by your browser into a sandboxed iframe - the app never sees them
- Language and theme preferences are stored in `localStorage` only

---

## 📄 License

Distributed under the **Apache License 2.0**. See [LICENSE](LICENSE) and [NOTICE](NOTICE) for details.

---

<div align="center">

**Built with ❤️ and vanilla JavaScript**

[⬆ Back to Top](#-mobile-preview)

</div>


## Install app

Use the **Install app** button near the footer. On supported browsers it opens the native installation prompt when available. Otherwise it shows localized instructions for Safari on iPhone/iPad, Android, and desktop browsers. Installation is controlled by the browser; no installation is claimed without its confirmation. The button is hidden in a standalone/minimal-ui app window and after an `appinstalled` event in the current session. A normal browser tab cannot always detect a previous installation.

Installation needs HTTPS or trustworthy localhost. The controls add no dependencies, tracking, network calls or storage keys; existing application data is not modified. On an existing cached version, revisit online and refresh after the service worker has updated to see the button. No automatic reload is forced.
