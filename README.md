# RU Hearbs — Handmade Soap Landing Page

A modern, responsive landing page for **RU Hearbs**, a small-batch handmade soap brand. Built to showcase the product catalog and route customers straight into a WhatsApp conversation for ordering — no cart, no checkout, just a clean catalog-to-chat flow suited for a home-based business.

## 🌿 Live Demo

[Add your deployed link here]

## Features

- **Responsive design** — fully adapted for mobile, tablet, laptop, and large desktop screens
- **Hero section** — brand introduction with product photography and subtle hover animations
- **Our Story** — brand narrative, milestones timeline, and ingredient highlights
- **Shop grid** — product catalog with hover effects and per-product WhatsApp ordering
- **WhatsApp integration** — every product links straight to a pre-filled WhatsApp message, so customers can order in one tap
- **Reusable component system** — shared `Logo`, `Social`, `NavLink`, `Card`, and `WhatsApp` components used across the site
- **Custom design tokens** — a warm, natural color palette defined as CSS variables for consistent theming

## Tech Stack

- [React](https://react.dev/) (Vite)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Plain CSS custom properties for theming (no CSS-in-JS)

## Project Structure

```
src/
├── assets/
│   ├── images/          # Hero and section imagery
│   ├── products/        # Product photography
│   └── story/            # Our Story section photography
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AboutPure.jsx
│   ├── OurStory.jsx
│   └── Shop.jsx
├── shared/
│   ├── logo.jsx
│   ├── socialicons.jsx
│   ├── NavLink.jsx
│   ├── card.jsx
│   └── whatsapp.jsx
├── index.css             # Design tokens (CSS variables) + base styles
└── App.jsx
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <repo-folder>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

## Customization

- **Colors & theming** — edit the CSS variables in `src/index.css` under `:root`
- **Products** — update the `PRODUCTS` array in `src/components/Shop.jsx`
- **Navigation links** — update the `NAV_LINKS` array in `src/components/Navbar.jsx`
- **WhatsApp number & message** — update `whatsappMessage` and the phone number in `src/shared/whatsapp.jsx`

## License

This project was built as a freelance commission for RU Hearbs. All brand assets, product photography, and content belong to RU Hearbs.