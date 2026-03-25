# Portfolio v5 - Kevin Ariza Nuñez

Professional portfolio website built with **Astro** and **TailwindCSS**.

## 🚀 Features

- **Bilingual**: Spanish and English support
- **Dark/Light Mode**: With system preference detection
- **SEO Optimized**: Meta tags, Open Graph, structured data, sitemap
- **Performance**: Islands architecture, minimal JavaScript, optimized assets
- **Responsive**: Mobile-first design
- **Modern UI**: Clean, professional design with subtle animations

## 🛠️ Tech Stack

- **Framework**: Astro
- **Styling**: TailwindCSS
- **Deployment**: Netlify-ready

## 📦 Project Structure

```
portfoliov5/
├── data/              # JSON data files (bilingual content)
├── public/            # Static assets
├── src/
│   ├── components/    # Astro components
│   ├── layouts/       # Layout templates
│   ├── pages/         # Pages (/, /en)
│   ├── styles/        # Global styles
│   └── utils/         # Utilities (i18n)
└── package.json
```

## 🏃 Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 🌐 Internationalization

The site supports two languages:

- **Spanish** (default): `/`
- **English**: `/en`

Content is loaded from JSON files in the `/data` folder.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: { /* ... */ }
}
```

### Content

Update the JSON files in `/data`:

- `profile.json` / `profile_en.json`
- `experience.json` / `experience_en.json`
- `education.json` / `education_en.json`
- `skills.json` / `skills_en.json`
- `projects.json` / `projects_en.json`

## 📊 Performance

- ✅ Minimal JavaScript
- ✅ CSS purging with Tailwind
- ✅ HTML compression
- ✅ Optimized fonts
- ✅ Semantic HTML

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

Or use the included `netlify.toml` for automatic configuration.

## 📄 License

MIT

---

Built with ❤️ by Kevin Ariza Nuñez
