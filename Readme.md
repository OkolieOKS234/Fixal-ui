
# Fixal Component Librar

**Fixal** is a powerful component and section based package that tends to make building 3d websites, mobile apps, dashboards, and portfolios easier with beautiful-looking components built using TailwindCSS + React and NPM.

## Project Structure
fixal/
├── src/
│   ├── components/
│   ├── sections/
│   ├── utils/
│   ├── hooks/
│   ├── animations/
│   └── App.js
├── builder/
├── public/
├── docs/
├── package.json
└── tailwind.config.js

## Tools or Tech stack
- Docusaurus
- ReactJS
- Monaco_Editor
- Vitest (for testing)
- Animations: Framer Motion
- Github or Npm



## 🚀 Key Features

1. Animation or 3d features
- Scroll-triggered entrances (via IntersectionObserver)
- Gesture animations (drag, tap, hover)
- Layered parallax and perspective (for hero/landing pages)

2. Self-adaptive Components (e.g form readjusts based on parent component)

3. Fixal Atomic Component Builder: hosted on /builder
- theme customization
- Generate and export JSX markup

4. Soon: Voice commands & AI-generated UI 🚀

## 📦 Install

```bash
npm install fixal
```
## Peer Dependencies
framer-motion: 
```bash
npm install framer-motion
```


## Components
FixalButton
FixalInput: Input with phone number of all countries, Input with icon inside
Cards: Cards Lazy Loading


## Section-Based Components
FixalHero
1. sidebyside: Has a header text with a sub-heading under and CTA below both. Then there is an image by the right on a row(using flex)
2. straightline: All of the above in sidebyside are  displayed in a column down

Animations for each components
Loading Animation
Scroll-based
Data-visualization for graphs and charts
Storytelling Animations:
    More complex animations that guide users through a narrative or process. These include onboarding sequences, animated illustrations that explain concepts, and step-by-step tutorials with visual guidance.






## 🧪 Usage Example

```jsx
import { FixalHero, FixalButton } from 'fixal';

const default function Homepage(){
    return (
        <FixalHero
        headertext={Your custom header text}
        subtitle={Your preferred subtitle}
        ctabutton={<FixalButton text='Get Started' variant='secoundary'>}
        bgImage={Your Image}
        animated={3d}
        >
    )
}


<Button variant="primary">Get Started</Button>
```



Components
- Button
- Cards
- Slider
- Toggle
- Navbar(related to sections)

Sections
-


Explore the [components →](./components/Button.md)
