# 🇩🇪 AWO Digital Helper (Senior Mode)

![Status: Work in Progress](https://img.shields.io/badge/Status-Work--in--Progress-orange)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

An inclusive web application designed for Berlin's senior community. This project focuses on **Accessibility (A11y)** by providing a "Senior Mode" that transforms the complex digital interface into a simplified, high-contrast experience.

### ⌨️ Keyboard & Tab Navigation
I optimized the "vibe" for users who don't use a mouse:
- **Custom Focus States:** Replaced the default browser outline with a custom `yellow-400` highlighter glow.
- **A11y Tab-Index:** Every card is keyboard-accessible using `tabIndex`, allowing seniors to navigate using simplified input devices or assistive switches.

---

## 🚀 Concept
Many digital tools are overwhelming for elderly users. This app bridges the gap by offering:
- **High Contrast UI:** A specialized "Senior Mode" (Yellow on Black) for better visibility.
- **Large Touch Targets:** Buttons designed for motor-control accessibility.
- **Simplified Navigation:** A focused layout to reduce cognitive load.

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Custom PostCSS Configuration)
- **State Management:** React Context API (Global Theme Management)
- **Routing:** React Router v6
- **Language:** TypeScript

## 📂 Current Progress
- [x] **Global Context API:** Theme switching logic implemented.
- [x] **Responsive Layout:** Fixed header with scrollable main content.
- [x] **Routing:** Dashboard and "About Me" pages connected.
- [x] **Senior Mode Styles:** Dynamic Tailwind classes based on user settings.
- [ ] **Medicine Tracker:** (In Development)
- [ ] **One-Tap Emergency SOS:** (Planned)

## 💡 Technical Highlight: The Context Pattern
The app uses a **Single Source of Truth** pattern. By wrapping the application in a `SettingsProvider`, the accessibility state is accessible from any component without "Prop Drilling."

```tsx
// Example of the clean usage in components
const { isSeniorMode } = useSettings();
<div className={isSeniorMode ? 'bg-black text-yellow-400' : 'bg-white'}>

🚀 Development Approach: Vibe Coding
This project was built using a Vibe Coding workflow. Instead of getting bogged down in repetitive syntax, I focused on:

High-Level Architecture: Designing a scalable Context API for global accessibility.

Iterative Prompting: Collaborating with AI to rapidly prototype the "Senior Mode" logic.

User-Centric Refinement: Fine-tuning the "vibe" of the UI—ensuring the transitions, contrast, and spacing feel right for the target audience.

🏃 How to Run
Clone the repo: git clone 

Install: npm install

Start dev server: npm run dev