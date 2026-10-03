# Automating Go API Tests with Keploy (DevRel Assignment)

An interactive, single-page developer documentation website built for the **Keploy DevRel Candidate Assignment**. This guide demonstrates zero-code API testing, network mocking, and non-deterministic noise handling for a **Gin + MongoDB URL Shortener** application.

---

## 🌟 Live Demo & Preview

- **Live Documentation:** [keploy-devrel-assignment-three.vercel.app](https://keploy-devrel-assignment-three.vercel.app/)
- **GitHub Repository:** [NishchayVashishtha/keploy-devrel-assignment](https://github.com/NishchayVashishtha/keploy-devrel-assignment)

---

## 🚀 Features & Highlights

- **Authentic Developer Experience:** Written from real hands-on execution of the Keploy Go Quickstart (Gin + Mongo), documenting real debugging journeys (e.g., MongoDB URI scheme fix in `handler.go` and WSL 2 eBPF configuration).
- **Interactive MDX Architecture:** Built with Next.js App Router and MDX (`.mdx`), embedding custom interactive React components alongside technical prose.
- **Interactive Architecture Diagram:** Visual toggle demonstrating **Record Mode** vs. **Replay Mode** at the network interception layer.
- **Real Test Fixture Inspector:** Tabbed viewer displaying the exact YAML test case (`post-url-1.yaml`) and intercepted MongoDB wire protocol mocks (`mocks.yaml`) generated during the run.
- **Noise Filter Deep-Dive:** Explaining how Keploy eliminates flaky test false-positives by automatically muting dynamic fields (`body.ts` timestamp and `header.Date`).
- **Dark & Light Mode:** Seamless theme toggle powered by `next-themes` with tailored Tailwind CSS styling.
- **Sticky Table of Contents:** Smooth scroll tracking and section jumping for enhanced reader UX.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Content:** MDX (`@next/mdx`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/typography`)
- **Theming:** `next-themes`
- **Icons:** `lucide-react`
- **Target Quickstart:** Keploy CLI (v3.8.57), Go 1.22, Gin Gonic, MongoDB 6.0, Docker Compose

---

## 💻 Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/NishchayVashishtha/keploy-devrel-assignment.git
cd keploy-devrel-assignment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📁 Repository Structure

```
├── app/
│   ├── globals.css          # Tailwind CSS v4 styling & dark theme variants
│   ├── layout.tsx           # Root layout with responsive header, TOC, and footer
│   └── page.mdx             # Main tutorial content with embedded interactive components
├── components/
│   ├── ArchitectureDiagram.tsx  # Interactive flow diagram (Record vs. Replay)
│   ├── Callout.tsx              # Rich alert callouts (info, warning, tip, aha, success)
│   ├── CodeBlock.tsx            # Code snippet wrapper with copy-to-clipboard
│   ├── ComparisonTable.tsx      # Traditional vs. Keploy testing comparison
│   ├── TableOfContents.tsx      # Sticky on-page navigation
│   ├── ThemeProvider.tsx        # Next-themes client provider
│   └── ThemeToggle.tsx          # Animated Dark/Light toggle
├── mdx-components.tsx       # Root MDX component definitions & typography mapping
└── package.json
```

---

## 👤 Author

- **Nishchay Vashishtha** — Keploy DevRel Candidate
