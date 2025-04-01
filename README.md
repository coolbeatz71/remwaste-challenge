# REMWaste Challenge 🚀

## Project Summary

Have you ever tried to book a garden waste skip and thought, "Wow, this could look way better"? No? Well, we did. This project is a redesign of the garden waste skip page, giving it a fresh, modern UI while keeping its functionality intact. Our goal? A smoother user experience, fewer headaches, and a little extra visual flair.

You can test the project live at this [link](https://remwaste-vincent.vercel.app/) 😉.

## DevTools 🛠️

This project is powered by some of the best modern web technologies:

- [Next.js](https://nextjs.org/) - A powerful React framework that supports SSR, SSG, and ISR for optimized performance.
- [TypeScript](https://www.typescriptlang.org/) - A statically typed language that helps catch errors early and improve maintainability.
- [TailwindCSS 4](https://tailwindcss.com/) - A utility-first CSS framework that simplifies styling and enhances design consistency.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for handling API requests efficiently.
- [SWR](https://swr.vercel.app/) - A data-fetching library that enables caching, auto-revalidation, and better state management.
- [Vitest](https://vitest.dev/) - A fast and modern testing framework designed for Vite-based projects.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - A tool for testing React components with a focus on user interactions.
- [BiomeJS](https://biomejs.dev/) - A modern alternative to ESLint and Prettier, offering improved performance and code consistency.
- [Framer Motion](https://www.framer.com/motion/) - A React library for creating smooth animations and transitions.
- [Yarn](https://yarnpkg.com/) - A package manager that improves dependency management and performance.

## Getting Started ⚡

### Setup

Clone the repository:

```sh
 git clone https://github.com/coolbeatz71/remwaste-challenge.git
```

### Installation

Navigate to the project folder and install dependencies using:

```sh
# Using npm
npm install

# OR using yarn
yarn
```

### Running the Project

To run the development server:

```sh
# Using npm
npm run dev

# OR using yarn
yarn dev
```

### Building and Starting the Production Version

```sh
# Using npm
npm run build
npm start

# OR using yarn
yarn build
yarn start
```

## My Approach 🤔

### Current Issues 😬

- **The top stepper is scrolling horizontally on Mobile**: Users might not realize they need to scroll, making navigation frustrating. Fix: Make it responsive so steps fit properly on all screens.

- **Card image distortion**: Images are stretched due to incorrect aspect ratio handling. Fix: Use object-fit: cover or adjust width-to-height scaling.

- **No unselect option for skips**: Users can select a skip but can't unselect it. Fix: Implement a toggle feature for better UX.

- **Duplicate yard size information**: Yard size appears both as a badge and as a title. Fix: Remove redundancy and keep the most relevant display.

- **Check button hidden behind image**: Layout issue causes the check button to be blocked. Fix: Adjust positioning with z-index or padding.

- **Bottom drawer lacks useful info**: The drawer doesn't provide enough details on the selected skip. Fix: Include hire period, waste type, price, VAT, etc.

- **Selected skip disappears when scrolling**: Users lose track of their choice when scrolling down. Fix: Keep selection info visible in a sticky or floating UI element.

### Key Improvements 🚀

- Redesigned the stepper layout to avoid unnecessary horizontal scrolling (yes, even on mobile!).
- Improved card images so they actually *look* like icons.
- Added a toggle feature—now you can select *and* unselect skips like a pro.
- Made the entire card clickable, not just the tiny button.
- Implemented a dark/light theme switcher (I challenged myself to implement it using tailwind v4: I already did it in the past with tailwind v3 on my [portfolio](https://mutombo.dev)).
- Provided actual useful information on skip cards (hire period, road allowance, heavy waste allowance, price per week, and VAT percentage).
- Ensured selected skips stay visible, even if you scroll too far.
- Used better typography, icons, hover effects, and shadows for an upgraded UI.
- Replaced spinners with skeleton loaders—because no one likes sudden layout shifts 😊.

### Project Strengths 💪

- **Unit Testing:** I implemented unit tests for key features to prevent bugs when making changes (Surprises are great for birthdays, not for production code 😂). While I usually use Jest for React projects, I decided to try out Vitest after hearing it's a faster alternative, and this tech challenge was the perfect opportunity to put it to the test.
- **BiomeJS:** I used BiomeJS, a speedier alternative to ESLint and Prettier, to maintain consistent coding styles and prevent formatting/linting errors without slowing down development.
- **DTOs & Mappers:** Keeps data structured and maintainable.
  - *Advantage:* Reduces coupling between layers and makes future updates easier.
- **Centralized API Handling:** Skip Service ensures all API calls stay organized.
- **Better Error Handling:** Axios interceptors make sure errors don’t ruin the party.
- **SWR for Data Fetching:** Handles caching, state management, and auto-revalidation.
  - *Advantage:* Reduces redundant requests and keeps the UI fast.
- **next/image for Performance:** Lazy loads images and optimizes them on the fly.
  - *Advantage:* Faster load times and better user experience.
- **Component-Based Architecture:** Everything is modular, reusable, and easy to test.
- **Git Commit Convention:** Following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for cleaner commit history.
- **Feature-Specific Branches:** Every task lives in its own branch for better organization and collaboration.

## Author ✍️

👤 **Mutombo Jean-Vincent**  
GitHub: [coolbeatz71](https://github.com/coolbeatz71/)

---
*Built with love, frustration, and way too much caffeine.* ☕
