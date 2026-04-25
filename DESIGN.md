# Design System Document: Hyper-Tech Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Kinetic Core"
This design system moves away from the static, boxy nature of traditional e-commerce. It is built to feel like a high-performance machine in mid-operation—fast, precise, and glowing with raw power. We are not just building a shop; we are building a digital cockpit for the PC enthusiast.

The aesthetic breaks the "template" look by utilizing **intentional asymmetry** and **glassmorphism**. Inspired by high-end hardware internals, the system uses sharp 0px corners to convey industrial precision, while overlapping layers and vibrant neon accents create a sense of depth and energy. The layout should feel editorial—large, aggressive typography scales paired with technical, monospaced metadata.

---

## 2. Colors

The color story is defined by "The Void"—a deep, obsidian base (`background: #0e0e0e`)—interrupted by "Pulse" accents of high-octane neon green and secondary electric purples.

### Palette Application
- **Primary (`#8eff71`)**: Reserved for high-action triggers and critical brand moments. Use it sparingly to maintain its visual "shock."
- **Secondary (`#ac8aff`)**: Used for secondary accents, such as spec icons or subtle glow highlights, creating a "vaporwave-tech" sophistication.
- **Surface Tiers**: Hierarchy is established through the `surface-container` tokens. 
    - `surface-container-lowest`: Background for nested technical specs.
    - `surface-container-highest`: Floating interactive modules.

### The "No-Line" Rule
**Explicit Instruction:** Prohibition of 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. To separate a "Featured Build" section from the hero, transition from `surface` to `surface-container-low`. 

### The "Glass & Gradient" Rule
To achieve the "Hyper Tech" feel, floating elements (like product cards or navigation bars) must use **Glassmorphism**. Apply `surface-variant` with a 60% opacity and a `backdrop-filter: blur(20px)`. 

### Signature Textures
Main CTAs should never be flat. Use a linear gradient transitioning from `primary` (#8eff71) to `primary-container` (#2ff801) at a 135-degree angle. This provides the "visual soul" of a glowing LED strip.

---

## 3. Typography

The typography strategy pairs the aggressive, wide stance of **Space Grotesk** with the utilitarian readability of **Manrope**.

- **Display & Headlines (Space Grotesk)**: These are the "Engine" of the brand. High-contrast sizing (up to `display-lg: 3.5rem`) creates an editorial feel. Use `headline-lg` for product names to command immediate attention.
- **Body & Titles (Manrope)**: The "Operator" font. Used for descriptions and technical details. Its clean, sans-serif nature ensures readability against dark backgrounds.
- **Technical Metadata (Labels)**: For PC specs (RAM, GPU, FPS), utilize `label-md` with uppercase styling and increased letter spacing (0.05em) to mimic a BIOS or terminal interface.

---

## 4. Elevation & Depth

We reject drop shadows in favor of **Tonal Layering** and **Luminescence**.

### The Layering Principle
Depth is achieved by stacking surface tiers. A `surface-container-highest` card sitting on a `surface` background creates a natural, sharp-edged lift.

### Ambient Glows
Traditional shadows are replaced by "Glows." When an element is active or "Powered On," apply a soft outer glow using the `primary` token at 15% opacity with a blur of 40px. This mimics the ambient RGB lighting of a PC case.

### The "Ghost Border" Fallback
If visual separation is needed for accessibility, use the **Ghost Border**: the `outline-variant` (#494847) at 20% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons
- **Primary**: Sharp edges (`0px` radius). Gradient fill (`primary` to `primary-container`). Text in `on-primary` (#0d6100).
- **Tertiary (Ghost)**: No fill. Ghost Border (20% opacity). Text in `primary`. On hover, the background fills with `primary` at 10% opacity.

### Product Cards
Forbid divider lines. Use vertical white space and `surface-container-low` backgrounds to separate the image from the technical specs.
- **Feature**: Include a "Live FPS" chip in the top right corner using `secondary-container` to highlight performance.

### Input Fields
Dark backgrounds (`surface-container-lowest`) with a bottom-only `outline` of `outline-variant`. On focus, the bottom border "lights up" with a `primary` neon green 2px stroke and a subtle 4px glow.

### Chips (Specs)
Small, sharp containers using `surface-variant`. Text in `on-surface-variant`. These should feel like small components on a motherboard.

---

## 6. Do's and Don'ts

### Do:
- **Use Intentional Asymmetry:** Offset product images so they break the bounds of their containers.
- **Embrace Sharpness:** Adhere strictly to the `0px` roundedness scale. The brand is sharp, fast, and aggressive.
- **Layer with Blur:** Use backdrop blurs to create a sense of looking through a tinted tempered-glass PC side panel.

### Don't:
- **No Rounded Corners:** Any radius above 0px dilutes the "Hyper Tech" industrial aesthetic.
- **No Standard Grids:** Avoid the "3-column card row" look. Vary the widths of containers to create a rhythmic, editorial flow.
- **No High-Contrast Borders:** Never use pure white or 100% opaque grey borders. They kill the depth created by tonal shifts.
- **Avoid Flatness:** If a section feels "dead," add a subtle radial gradient of `secondary` (#ac8aff) at 5% opacity in the background to simulate ambient light.