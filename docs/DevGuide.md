# Developer Guide

## Project Overview

This project is a modern SaaS portfolio frontend built with React, Vite, TypeScript, TailwindCSS, and Radix UI components.

- **Live Demo:** [https://lahirukavishkayt.github.io/saas_portfolio/](https://lahirukavishkayt.github.io/saas_portfolio/)
- **Source Code:** [https://github.com/LahiruKavishkaYT/saas_portfolio](https://github.com/LahiruKavishkaYT/saas_portfolio)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or bun

### Installation
```bash
# Clone the repository
$ git clone https://github.com/LahiruKavishkaYT/saas_portfolio.git
$ cd saas_portfolio

# Install dependencies
$ npm install
# or
$ bun install
```

### Development
```bash
# Start the development server
$ npm run dev
```

### Build
```bash
# Build for production
$ npm run build
```

### Linting
```bash
$ npm run lint
```

## Project Structure

- `src/` - Main source code
  - `components/` - UI components (Navigation, HeroSection, AboutSection, ui/)
  - `pages/` - Main pages (Index, NotFound)
  - `lib/`, `hooks/` - Utilities and custom hooks
- `public/` - Static assets
- `index.html` - Main HTML entry
- `package.json` - Project metadata and scripts
- `tailwind.config.ts` - TailwindCSS configuration
- `vite.config.ts` - Vite configuration

## Main Dependencies
- **React** (UI library)
- **Vite** (build tool)
- **TypeScript** (type safety)
- **TailwindCSS** (utility-first CSS)
- **Radix UI** (accessible UI primitives)
- **React Router DOM** (routing)
- **@tanstack/react-query** (data fetching)

## Contribution

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

## License

This project is licensed under the MIT License. 