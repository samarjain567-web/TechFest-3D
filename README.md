# THE AETHER ENGINE — TECHFEST 2026 | IIT BOMBAY
### An Immersive 3D Astrolabe & Science Experience

[![Techfest 2026](https://img.shields.io/badge/TECHFEST-IIT_BOMBAY_2026-dfb15b.svg)](https://techfest.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-38bdf8.svg)](https://threejs.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-green.svg)](https://greensock.com/)

---

## 🌟 Concept Overview
Inspired by the marriage of **Renaissance-era scientific invention** (da Vinci mechanics, armillary spheres, brass astrolabes) and **futuristic computational architecture**, **The Aether Engine** is a production-grade 3D interactive web portal commemorating the 30th Edition of Techfest, IIT Bombay.

Rather than a generic cyberpunk or neon template, the visual identity employs:
- **Primary background**: Midnight navy / near-black (`#06090e`)
- **Secondary palette**: Warm parchment (`#ece5d8`), antique gold (`#dfb15b`), bronze (`#8c5d35`)
- **Accent colors**: Luminous amber core (`#ff9800`) and subtle electric blue (`#38bdf8`)
- **Typography**: Editorial classical serif (`Cinzel`), contemporary sans (`Plus Jakarta Sans`), and technical monospace (`Space Grotesk`).

---

## 🚀 Key Interactive Features

1. **Interactive 3D Aether Engine (`React Three Fiber` / `Three.js`)**:
   - Multiple rotating metallic astrolabe rings with gear teeth and armillary calibrations.
   - Central glowing energy singularity with dynamic breathing and plasma wireframe halo.
   - Multi-tier planetary orbital mechanism revolving along calculated ellipses.
   - Floating celestial particle dust and twinkling starfield.
   - Real-time mouse reaction, hover mesh detection with HUD indicator, and user drag-rotation via OrbitControls.

2. **Scroll-Driven Camera Choreography (`GSAP ScrollTrigger`)**:
   - Smoothly tracks scroll progress across all 6 sections.
   - Transitions from hero composition into an interior engine dive, lateral viewing during cards/timeline, and a grand symmetric reassembly epilogue.

3. **Technological Frontiers (Interactive 3D Cards & Modals)**:
   - 6 Core Pillars: AI, Robotics, Space Tech, Engineering, Innovation, and Coding.
   - Interactive modal specification sheets detailing technical disciplines and verified Techfest initiatives.

4. **The Festival Experience (Editorial Asymmetry)**:
   - Deep dive into International Robowars, Technical Competitions, Technoholix, Technology Summits, Workshops, and TWMUN.
   - Official status badges adhering to verified information standards.

5. **Temporal Timeline (December 16–18, 2026)**:
   - Interactive 3-day switcher highlighting Morning, Midday, and Evening milestone progressions across the IIT Bombay campus.

6. **Accessibility & Responsive Engineering**:
   - Fluid typography using CSS clamp.
   - Mobile camera re-centering and particle throttling for ultra-smooth 60fps performance on all devices.
   - Reduced-motion queries honored.

---

## 🛠️ Project Structure

```
TechFest/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── EvolutionOfIdeas.tsx
│   │   ├── TechnologyFrontiers.tsx
│   │   ├── FestivalExperience.tsx
│   │   ├── Timeline.tsx
│   │   ├── FinalExperience.tsx
│   │   └── Footer.tsx
│   ├── scenes/
│   │   ├── EngineScene.tsx
│   │   ├── AetherEngineCore.tsx
│   │   ├── AstrolabeRing.tsx
│   │   ├── OrbitalSystem.tsx
│   │   └── ParticleField.tsx
│   └── styles/
│       └── global.css
```

---

## ⚡ Setup & Development Instructions

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed on your machine.

### 2. Installation
Open your terminal in the project directory and run:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel` or link your GitHub repository on [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Deploy to Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `dist`

### Push to GitHub
```bash
git init
git add .
git commit -m "feat: complete Aether Engine Techfest 2026 interactive 3D website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

---

## ⚖️ Creative Concept Notice
*This interactive 3D web experience is an independently created creative concept and tribute for Techfest, IIT Bombay 2026. Official festival portals, registrations, and announcements are available at [techfest.org](https://techfest.org/).*
