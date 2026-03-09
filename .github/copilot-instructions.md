<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## React + Vite Project Setup

This workspace contains a React application built with Vite, JavaScript, and Tailwind CSS.

- [x] Project Structure - React + JavaScript + Vite
- [x] Tailwind CSS configured
- [x] Dependencies - Installed via npm install
- [x] Development Server - Running on http://localhost:5173/

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── main.jsx        # Application entry point
├── App.jsx         # Root component
├── App.css         # Component styles
├── index.css       # Global styles with Tailwind directives
└── assets/         # Static assets
```

## Tailwind CSS

- Configuration: [../tailwind.config.cjs](../tailwind.config.cjs)
- PostCSS: [../postcss.config.cjs](../postcss.config.cjs)
- CSS: [../src/index.css](../src/index.css)
- Use Tailwind classes in your components for styling

## Quick Start

1. The development server is already running
2. Visit http://localhost:5173/ to see your application
3. Edit files in `src/` to see hot module replacement in action
4. Run `npm run build` to create production build

