# Suman Krishna — Personal Portfolio 🚀

> **Machine Learning Engineer & Data Science Engineer**  
> **Google Student Ambassador & GDG Member | Final Year B.Tech CSE**  
> GitHub Repository: [github.com/krishnaaidev/New-Portfolio](https://github.com/krishnaaidev/New-Portfolio)

---

## ✨ Multi-Page Architecture

This portfolio is structured across clean, responsive, standalone pages:

- **`index.html`** — **Home**: Hero with interactive neural particle canvas, dynamic role typing, key metric counters, featured project spotlights (AIHire, CTG Faculty App, Multimodal Depression), and quick navigation.
- **`about.html`** — **About Me**: In-depth personal story, engineering philosophy, academic journey (B.Tech CSE with **8.0/10.0 CGPA**), scholastic milestones, and creative pursuits (Chess **750+ rating**, Photography, Anchoring).
- **`projects.html`** — **Projects Showcase**: Interactive categorized filter grid with in-depth **Case Study Modals** for all 12 projects (AIHire, CTG Faculty App, Multimodal Depression Detection, Superstore BI, Plant Disease, Career Guidance, Air Pollution, Robo Car, JARVIS, CT Events, CT E-Pass, AI Document Assistant RAG).
- **`experience.html`** — **Experience & Leadership**: Complete timeline of internships (EduTech Solutions, Averixis Solutions Jun–Sep 2025), Google Student Ambassador, Google Developer Groups (GDG) membership, and event leadership (United Fest 500+ attendees).
- **`certifications.html`** — **Certifications Grid**: Dedicated grid showcasing **7x NASSCOM FutureSkills Prime Gold Certifications** with exact scores, government accreditation IDs, and direct PDF view links.
- **`resume.html`** — **Curriculum Vitae**: Professional, ATS-friendly, interactive and printable resume with detailed breakdowns of **AIHire** and the **CTG Faculty App**, 1-click **"Print / Save as PDF"** button, and PDF download.
- **`contact.html`** — **Contact**: Interactive validated contact form, 1-click email copy button with toast notification, phone, socials, and location details.

---

## 🏆 7x NASSCOM FutureSkills Prime Gold Certifications

All certificates cleared in the **GOLD Category** (aligned with National Competency Standards approved by MeitY, Govt. of India):

1. **AWS Cloud Practitioner Essentials_FSP** — *NASSCOM & AWS* • **100.00% PERFECT SCORE (Gold)** • ID: `FSP/2026/9/10410900`
2. **Gen AI 101** — *NASSCOM FutureSkills Prime* • **100.00% PERFECT SCORE (Gold)** • ID: `FSP/2026/9/10379378`
3. **Adobe Creativity & GenAI** — *NASSCOM & Adobe* • **98.00% Score (Gold)** • ID: `FSP/2026/9/10416339`
4. **Adobe - Essentials of Generative AI Content Creation** — *NASSCOM & Adobe* • **98.00% Score (Gold)** • ID: `FSP/2026/9/10416298`
5. **Prompt Engineering and ChatGPT** — *NASSCOM IT-ITeS SSC* • **96.00% Score (Gold)** • ID: `FSP/2026/9/10407328`
6. **Deep Learning / NLP / Artificial Intelligence** — *NASSCOM IT-ITeS SSC* • **93.00% Score (Gold)** • ID: `FSP/2026/9/10379368`
7. **Fueling Data Intelligence in Modern DataOps** — *NASSCOM FutureSkills Prime* • **91.25% Score (Gold)** • ID: `FSP/2026/9/10407191`

---

## 📁 Directory Structure

```text
Portfolio/
├── index.html                       # Homepage Hub
├── about.html                       # Biography, Education & Hobbies
├── projects.html                    # Projects showcase with interactive modals
├── experience.html                  # Internships & Leadership timeline
├── certifications.html              # 7x NASSCOM Gold Certifications Grid
├── resume.html                      # Printable & ATS-ready web resume
├── contact.html                     # Contact form & details
├── netlify.toml                     # Netlify security headers & cache configuration
├── package.json                     # Local preview scripts
└── assets/
    ├── css/
    │   └── style.css                # Complete AI/ML design system & print styles
    ├── js/
    │   ├── main.js                  # Modals, typing, theme toggle, toast
    │   ├── particles.js             # Interactive neural constellation canvas
    │   └── projects-data.js         # Comprehensive project dataset
    ├── docs/
    │   ├── Suman_Krishna_Resume.pdf # Original resume PDF
    │   └── certificates/            # Verified NASSCOM Gold Certificate PDFs
    │       ├── Nasscom_AWS_Cloud_Practitioner_Gold_Certificate.pdf
    │       ├── Nasscom_Gen_AI_101_Gold_Certificate.pdf
    │       ├── Nasscom_Adobe_Creativity_GenAI_Gold_Certificate.pdf
    │       ├── Nasscom_Adobe_Generative_AI_Gold_Certificate.pdf
    │       ├── Nasscom_Prompt_Engineering_Gold_Certificate.pdf
    │       ├── Nasscom_DeepLearning_NLP_AI_Gold_Certificate.pdf
    │       └── Nasscom_DataOps_Gold_Certificate.pdf
    └── images/
        ├── profile.jpg              # High-resolution profile photo
        ├── favicon.svg              # Custom monogram vector favicon
        ├── favicon-32x32.png        # Raster favicon 32x32
        ├── favicon-16x16.png        # Raster favicon 16x16
        ├── apple-touch-icon.png     # iOS bookmark icon 180x180
        ├── og-image.png             # Open Graph preview card (1200x630)
        ├── og-image.jpg             # Social share JPEG fallback (1200x630)
        └── projects/                # Custom SVGs for all featured projects
            ├── aihire.svg
            ├── kra-app.svg
            ├── multimodal-depression.svg
            ├── superstore-bi.svg
            ├── plant-disease.svg
            ├── career-guidance.svg
            ├── air-pollution.svg
            ├── robo-car.svg
            └── jarvis.svg
```

---

## 🌐 Custom Domain Setup

To point your custom domain (e.g. `sumankrishna.dev` or `sumankrishna.tech`) to this portfolio on Netlify:

1. **In Netlify Dashboard**:
   - Go to **Site Configuration** > **Domain Management**.
   - Click **Add a domain** and enter your custom domain (e.g., `sumankrishna.dev`).
   - Netlify will prompt you to set your primary domain (with automatic HTTPS provisioning).

2. **In Your Domain Registrar DNS (Namecheap, GoDaddy, Cloudflare, Google Domains)**:
   - **Apex / Root (`@`)**: Add an **A Record** pointing to Netlify's load balancer IP:  
     `75.2.60.5`
   - **Subdomain (`www`)**: Add a **CNAME Record** pointing to your Netlify site URL:  
     `sumankrishnaportfolio.netlify.app`

3. **Clean Page Slugs**:
   - Rewrites and 301 canonical redirects are already configured in `netlify.toml`:
     - `/about` -> `about.html`
     - `/experience` -> `experience.html`
     - `/projects` -> `projects.html`
     - `/certifications` -> `certifications.html`
     - `/resume` -> `resume.html`
     - `/contact` -> `contact.html`
     - `/*` -> `404.html` (Custom terminal-themed error page)

---

## 🔍 SEO & Crawlability Architecture

- **`sitemap.xml`**: Clean-slug XML sitemap indexed with priority and change frequencies.
- **`robots.txt`**: Standard search engine crawler directive pointing to `sitemap.xml`.
- **`llms.txt`**: Machine-readable markdown profile following the `/llms.txt` specification for AI agents (ChatGPT, Claude, Gemini, Perplexity).
- **Structured Data (JSON-LD)**:
  - `Person` schema with skills, alma mater, social handles, and job title.
  - `WebSite` schema with search and publisher info.
  - `ProfessionalService` (Local Business) schema with service address in Jalandhar, Punjab and remote coverage.
  - `BreadcrumbList` schema on all secondary pages for enhanced Google search snippets.
- **Social Previews**: 1200x630 `og-image.png` with terminal hacker branding, verified stats, and crisp metadata for WhatsApp, LinkedIn, Twitter/X, and Facebook previews.

---

## 💻 Running Locally

```bash
# In the portfolio root directory
npx serve . -l 3000
# or
python3 -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000).
