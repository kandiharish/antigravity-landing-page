# Antigravity Landing Page Recreation

A production-quality recreation of the Google Antigravity landing page animations using Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run locally**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000)

## 🛠 Tech Stack

-   **Framework**: Next.js 14+ (App Router)
-   **Styling**: Tailwind CSS
-   **Animation**: Framer Motion
-   **Language**: TypeScript

## ✨ Features

-   **Scroll Animations**: Elements gracefully enter the viewport using Intersection Observer.
-   **Parallax Effects**: Floating elements move at different speeds relative to scroll.
-   **Text Reveals**: Staggered character/word animations for impact.
-   **Micro-interactions**: Hover states on interactive elements.
-   **Accessibility**: Fully supports `prefers-reduced-motion` by simplifying or disabling complex animations for users who request it.
-   **Response Design**: Mobile-first layout that scales to large screens.

## ♿ Accessibility Notes

-   **Reduced Motion**: The application checks for the `prefers-reduced-motion` media query. If enabled, parallax effects are disabled, and entrance animations fade in instantly or simply without motion to avoid triggering vestibular disorders.
-   **Semantic HTML**: Uses proper `<main>`, `<section>`, and `<h1>` tags.

## 📦 Live Demo

[Link to Vercel Deployment]

## 📝 License

MIT
"# antigravity-landing-page" 
