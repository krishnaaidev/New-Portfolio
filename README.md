# Suman Krishna — Personal Portfolio 🚀

> **Machine Learning Engineer & Data Science Engineer**  
> **Google Student Ambassador | Final Year B.Tech CSE**  
> Live at: [sumankrishnaportfolio.netlify.app](https://sumankrishnaportfolio.netlify.app)

---

## ✨ Highlights & Key Features

- **Futuristic AI/ML Design System**: Dark theme with cyan/indigo/purple neon accents, glassmorphic cards, and custom radial glows. Full light/dark mode switch with local storage persistence.
- **Interactive Neural Constellation Canvas**: Hero background particle network that connects dynamically, reacts to mouse hover, and adapts to active theme.
- **Dynamic Role Typing**: Cycles through Machine Learning Engineer, Data Science Engineer, Google Student Ambassador, Deep Learning Specialist, and Computer Vision Builder.
- **Curated Project Showcase**: Filterable portfolio grid (Deep Learning, Computer Vision, Data Analytics & BI, Robotics) with interactive **Case Study Modals**, metric callouts, and GitHub/Demo links.
- **Experience & Campus Leadership**: Chronological timeline detailing roles at EduTech Solutions, Averixis Solutions, Google Ambassador leadership, and event direction (United Fest 500+ attendees).
- **Embedded Resume Viewer & 1-Click Download**: Recruiters can review the resume directly in a sleek built-in modal or download the latest PDF with one click.
- **Interactive Contact Suite**: Instant 1-click email copy button with toast feedback, direct links to LinkedIn & GitHub, and client-validated message sender.
- **Scholastic Achievements & Written Insights**: Showcases photography 1st prize, chess championship runner-up (1600+ rating), debugging prizes, and articles on technical blogs.

---

## 📁 Directory Structure

```text
Portfolio/
├── index.html                       # Semantic, SEO-optimized portfolio markup
├── netlify.toml                     # Netlify security headers, caching, & redirects
├── package.json                     # Local preview configuration
├── README.md                        # Documentation
└── assets/
    ├── css/
    │   └── style.css                # Complete custom CSS design system
    ├── js/
    │   ├── main.js                  # Modals, typing, filters, navigation, theme
    │   ├── particles.js             # Interactive canvas particle network
    │   └── projects-data.js         # Structured project metadata and case studies
    ├── docs/
    │   └── Suman_Krishna_Resume.pdf # Suman's latest resume
    └── images/
        ├── profile.jpg              # High-resolution profile photo
        ├── favicon.svg              # Custom monogram favicon
        └── projects/                # Custom SVG project illustrations
            ├── multimodal-depression.svg
            ├── superstore-bi.svg
            ├── plant-disease.svg
            ├── career-guidance.svg
            ├── air-pollution.svg
            ├── robo-car.svg
            └── jarvis.svg
```

---

## 💻 Running Locally

You can open `index.html` directly in any web browser, or start a local server:

```bash
# Using Python
python3 -m http.server 3000

# OR using Node.js
npx serve . -l 3000
```

Then visit [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deploying to Netlify / Vercel / GitHub Pages

### Option 1: Netlify (Recommended)
1. Commit and push this directory to your GitHub repository (`krishnaaidev/Portfolio`).
2. Log into [Netlify](https://app.netlify.com) and click **"Add new site" -> "Import an existing project"**.
3. Select your repository. Netlify will auto-detect `netlify.toml` and deploy instantly!
   *(Or drag and drop the `Portfolio` folder directly onto the Netlify dashboard for instant zero-config publish).*

### Option 2: GitHub Pages
1. Go to repository **Settings** -> **Pages**.
2. Under **Build and deployment**, select `Deploy from a branch` -> `main` branch -> `/ (root)`.
3. Save and your site will be live at `https://krishnaaidev.github.io/Portfolio`.
