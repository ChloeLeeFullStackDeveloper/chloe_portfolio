# 🧑‍💻 Personal Portfolio

<div align="center">
  <h3>Minimalist. Clean. Fast.</h3>
  <p>A developer-focused portfolio inspired by minimal design principles.</p>
</div>

## About

This portfolio is built with a focus on simplicity and performance. Drawing inspiration from sites like [rauno.me](https://rauno.me), it presents my work and skills in a clean, distraction-free interface that puts the focus on what matters most - the code and projects.

## Tech Stack

- **React + TypeScript** - Type-safe component development
- **Tailwind CSS** - Utility-first styling without bloat
- **Vite** - Lightning-fast builds and development

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx     # Minimal navigation
│   ├── Hero.tsx       # Simple introduction
│   ├── About.tsx      # Brief background
│   ├── Projects.tsx   # Work showcase
│   ├── Contact.tsx    # Get in touch
│   └── Footer.tsx     # Site footer
├── App.tsx            # Main component
├── main.tsx           # Entry point
tailwind.config.js     # Styling configuration
postcss.config.js      # CSS processing
vite.config.ts         # Build configuration
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Design Principles

This portfolio follows several key principles:

- **Content First** - No unnecessary animations or distractions
- **Performance Focused** - Fast loading and rendering times
- **Accessibility** - Designed to be usable by everyone
- **Minimalism** - Only what's needed, nothing more

## Customization

The site is designed to be easily customizable through the component structure and Tailwind configuration. Change colors, spacing, and typography by editing the `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom color palette
      },
      typography: {
        // Custom typography settings
      },
    },
  },
};
```

## Deployment

The built site is a static bundle that can be deployed to any hosting service:

- Vercel
- Netlify
- GitHub Pages
- Any static file host

## Contact

Feel free to reach out with questions or suggestions:

- Email: [chloe.lee0436@gmail.com](mailto:chloe.lee0436@gmail.com)
- GitHub: [@ChloeLeeFullStackDeveloper](https://github.com/ChloeLeeFullStackDeveloper)

---

<div align="center">
  <p>Built with simplicity in mind.</p>
</div>
