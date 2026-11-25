<div align="center">

# Sulaiman Warsi — Developer Portfolio

**AI & Full-Stack Software Developer** · B.Tech CSE (2023–2027), Integral University

A fast, responsive, accessible portfolio built with vanilla HTML, CSS and JavaScript — no framework, no build step.

[![Live Site](https://img.shields.io/badge/Live-Portfolio-DC143C?style=for-the-badge)](https://YOUR-PORTFOLIO-URL)
[![Resume](https://img.shields.io/badge/Resume-PDF-C8CDD3?style=for-the-badge&labelColor=090A0C)](assets/resume.pdf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sulaiman-warsi-00279b407)
[![GitHub](https://img.shields.io/badge/GitHub-gitsulaiman-181717?style=for-the-badge&logo=github)](https://github.com/gitsulaiman)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-success)
![Dependencies](https://img.shields.io/badge/Build%20step-None-blue)

</div>

---

## Table of Contents

- [About](#about)
- [Featured Projects](#featured-projects)
- [Technical Skills](#technical-skills)
- [Portfolio Features](#portfolio-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Customization](#customization)
- [Roadmap](#roadmap)
- [Contact](#contact)
- [License](#license)

---

## About

I'm a Computer Science undergraduate who builds practical software across the stack — from REST APIs and MongoDB-backed web apps to machine learning models and blockchain-based verification systems. This portfolio is a single place to see what I've built, how I build it, and how to reach me.

**I'm currently looking for:** Software Developer / Full-Stack / Associate SWE / AI-ML internship and entry-level roles.

**What I bring**

- Full-stack development with the MERN stack, deployed to production (Vercel, Render, MongoDB Atlas)
- Applied machine learning and NLP (TF-IDF, Naive Bayes, scikit-learn)
- Blockchain fundamentals (Solidity, Hardhat, Ethers.js)
- Solid grounding in Data Structures & Algorithms
- Clean, responsive, accessible front-end work

---

## Featured Projects

| Project | What it does | Stack | Links |
| --- | --- | --- | --- |
| **BlockCert** — Blockchain Certificate Verification | Academic certificate issuance, verification and revocation using Ethereum smart contracts and SHA-256 hashing, so tampering is detectable. | HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Solidity, Ethereum, Hardhat, Ethers.js, JWT | [Code](https://github.com/gitsulaiman/BlockCert) · [Live](https://blockcert-one.vercel.app/) |
| **SpamShield AI** | Classifies messages as spam or legitimate using an NLP pipeline, served through an interactive Streamlit app. | Python, Streamlit, scikit-learn, Pandas, NumPy, TF-IDF, Naive Bayes | [Code](https://github.com/gitsulaiman/SpamShield-AI) · [Live](https://spamshield-aii.streamlit.app/) |
| **Job Application Tracker** | Full-stack MERN app to manage job applications with CRUD operations, search, filtering and a summary dashboard. | React.js, Node.js, Express.js, MongoDB, REST API | Code and demo links coming soon |
| **Electrotech India Website** | Responsive business website for an electrical appliance service provider with service and business information. | HTML, CSS, JavaScript, Responsive Design | Code and demo links coming soon |

---

## Technical Skills

| Area | Technologies |
| --- | --- |
| **Languages** | Python, JavaScript |
| **Frontend** | HTML5, CSS3, React.js |
| **Backend** | Node.js, Express.js, REST APIs |
| **Database** | MongoDB, MongoDB Atlas |
| **AI / ML** | scikit-learn, Pandas, NumPy, NLP, TF-IDF, LLM fundamentals |
| **Blockchain** | Solidity, Hardhat, Ethers.js |
| **Tools & Platforms** | Git, GitHub, VS Code, Vercel, Render |
| **Core concepts** | Data Structures & Algorithms, CRUD, API development, authentication (JWT) |

**Certifications:** AI/LLM Internship (SipherWeb Technologies) · Data Structures & Algorithms (Simplilearn)

---

## Portfolio Features

**Experience & design**

- Dark "Obsidian Black / Chrome Silver / Laser Crimson" theme driven by CSS custom properties
- Typed-text hero headline, scroll-reveal animations (AOS), glow-on-hover cards
- Scroll progress bar and section focus effect
- Horizontally scrollable project carousel with arrow buttons and keyboard support
- Certificate gallery with full-size viewing
- One-click resume download

**Engineering quality**

- **Responsive** layout for desktop, tablet and mobile, including a collapsible mobile menu
- **Accessible** — ARIA labels and states, keyboard-operable menu and carousel, `aria-current` on the active nav link
- **Motion-safe** — honours `prefers-reduced-motion` across all animations
- **Performance-minded** — passive scroll listeners, `requestAnimationFrame` throttling, `IntersectionObserver` instead of scroll polling
- **Secure external links** — `rel="noopener noreferrer"` on every `target="_blank"` link
- **SEO basics** — descriptive `<title>`, meta description and theme colour
- **Zero build tooling** — open `index.html` and it works

---

## Tech Stack

- **Markup / Styling:** HTML5, CSS3 (custom properties, Grid, Flexbox, media queries)
- **Scripting:** Vanilla JavaScript (ES6+)
- **Libraries (via CDN):** [Typed.js](https://github.com/mattboldt/typed.js) · [AOS](https://michalsnik.github.io/aos/) · [Font Awesome 6](https://fontawesome.com/) · Google Fonts (Bebas Neue)

---

## Project Structure

```text
PORTFOLIOO/
├── index.html                  # Page markup and project-slider styles
├── style.css                   # Base theme, layout and components
├── portfolio-enhancements.css  # Glow cards, scroll progress, reveal effects
├── script.js                   # Navigation, typing effect, carousel, contact form
├── portfolio-enhancements.js   # Scroll progress, reveal-on-scroll, card glow
└── assets/
    ├── Logo.png
    ├── profile.JPG
    ├── project1.png
    ├── cert11.PNG              # AI internship certificate
    ├── cert2.jpg               # DSA certificate
    └── resume.pdf
```

---

## Getting Started

**Prerequisites:** any modern browser. Git is optional.

```bash
# 1. Clone the repository
git clone https://github.com/gitsulaiman/<your-portfolio-repo>.git
cd <your-portfolio-repo>

# 2. Open directly in a browser…
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# …or serve it locally (recommended)
python -m http.server 5500
# then visit http://localhost:5500
```

An internet connection is needed for the CDN-hosted libraries (Typed.js, AOS, Font Awesome, Google Fonts).

---

## Deployment

It's a static site, so it deploys anywhere:

| Platform | Steps |
| --- | --- |
| **Vercel** | Import the repo → framework preset *Other* → deploy (no build command, output directory `/`) |
| **GitHub Pages** | *Settings → Pages* → deploy from the `main` branch, root folder |
| **Netlify** | Drag-and-drop the folder, or connect the repo with no build command |

> **Note:** these hosts run on case-sensitive file systems. Make sure asset paths in the code match the real filenames exactly (e.g. `Logo.png` vs `logo.png`).

---

## Customization

| What | Where |
| --- | --- |
| Colours and theme | `:root` variables at the top of `style.css` |
| Typing headline text | `strings` array in `script.js` (`new Typed(...)`) |
| Projects | `.project-card` blocks in the `#projects` section of `index.html` |
| Skills | `.skill-card` blocks in the `#skills` section |
| Certificates | `.certificate-card` blocks in the `#certifications` section |
| Resume | Replace `assets/resume.pdf` |
| Contact email | `mailto:` links in `index.html` and the form handler in `script.js` |

---

## Roadmap

- [ ] Add screenshots or short demo clips to each project card
- [ ] Publish code and live links for Job Application Tracker and Electrotech India
- [ ] Add a blog / write-ups section on projects and learning notes
- [ ] Connect the contact form to a backend or form service (it currently opens the visitor's email client)
- [ ] Lighthouse audit pass (target 90+ in all categories)

---

## Contact

I'm open to opportunities and happy to talk about my work.

- **Email:** [er.sulaimank.warsi@gmail.com](mailto:er.sulaimank.warsi@gmail.com)
- **LinkedIn:** [linkedin.com/in/sulaiman-warsi-00279b407](https://www.linkedin.com/in/sulaiman-warsi-00279b407)
- **GitHub:** [github.com/gitsulaiman](https://github.com/gitsulaiman)
- **Resume:** [Download PDF](assets/resume.pdf)

---

## License

Released under the [MIT License](LICENSE). You're welcome to learn from the code structure — please replace the personal content (name, photos, certificates, resume) if you use it as a template.

<div align="center">

Designed and built by **Mohd Sulaiman Warsi** · © 2026

</div>
