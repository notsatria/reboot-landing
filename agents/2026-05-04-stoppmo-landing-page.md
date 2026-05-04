# Reboot: Stop PMO — Landing Page Design

## Context

The Reboot (Stop PMO) Android app is live but has no web presence. This landing page will serve as the primary marketing surface to drive Play Store downloads. It needs to match the app's dark, empathetic brand identity and showcase its key features to the PMO recovery community.

**Primary goal:** Convert visitors to Play Store downloads.
**Audience:** People seeking to overcome pornography/masturbation addiction, likely male, younger demographic.
**Tone:** Empathetic, non-judgmental, motivating, private. Supportive companion, not clinical tool.

## Tech Stack

| Layer     | Technology                                  |
| --------- | ------------------------------------------- |
| Build     | Vite + React + TypeScript                   |
| Styling   | Tailwind CSS v4 + shadcn/ui (dark theme)    |
| Animation | Framer Motion + react-intersection-observer |
| Routing   | React Router v7                             |
| Data      | TanStack Query                              |
| Icons     | Lucide React                                |

## Project Location

Standalone project at `~/Development/stoppmo-landing/` (separate from the Android repo).

## Color Tokens

Extracted from the Android app's theme:

| Token             | Hex       | Usage                            |
| ----------------- | --------- | -------------------------------- |
| Surface Dark      | `#101C22` | Main background                  |
| Surface Deeper    | `#0E191E` | Card background, footer          |
| Card              | `#1C272D` | Feature cards, elevated surfaces |
| Border            | `#253035` | Subtle borders, dividers         |
| Primary Blue      | `#1193D4` | Links, icons, secondary accents  |
| Streak Orange     | `#F48C25` | CTA buttons, fire/streak accents |
| Streak Orange Alt | `#F9771C` | Hover states, highlights         |
| Text Primary      | `#FFFFFF` | Headings, body text              |
| Text Secondary    | `#9CA3AF` | Descriptions, captions           |

## Routes

| Route               | Page             | Description                   |
| ------------------- | ---------------- | ----------------------------- |
| `/`                 | Landing          | Single-page scroll experience |
| `/privacy-policy`   | Privacy Policy   | Full legal page               |
| `/terms-of-service` | Terms of Service | Full legal page               |

Legal pages share the same navbar + footer as the landing page. Content is stored as local TypeScript modules, exposed via TanStack Query mock functions — structured for easy CMS migration later.

## Page Sections (Landing Page `/`)

### 1. Sticky Navbar

- Fixed top, glass-morphism: `bg-[#101C22]/80 backdrop-blur-lg`
- Left: App logo + "Reboot" text
- Right: Nav links (Features, Screenshots, Download) + orange CTA "Download on Play Store"
- Smooth scroll to anchor sections on click
- Slightly reduced padding on scroll

### 2. Hero Section

- Full viewport height, dark gradient (`#101C22` → `#0E191E`)
- **Left:** Headline "Break Free. Start Your Reboot." + subtext "A private, judgment-free companion that tracks your recovery in real time. No account required." + Play Store download button (orange `#F48C25`) + "Available on Android"
- **Right:** Phone mockup showing the Dashboard screen (circular day counter + live timer)
- **Decorative:** Radial gradient glow (blue) behind phone, subtle animated particles
- **Animation:** Framer Motion fade-up on headline, slide-in on phone

### 3. Features Section

- Title: "Everything You Need to Reclaim Your Life"
- 2x3 grid of feature cards (`#1C272D` background, `#253035` border, rounded-2xl)
- Each card: Lucide icon + title + description
- Features:
  1. **Real-Time Streak Counter** — "Watch every second of your progress with a live timer"
  2. **Activity Heatmap** — "Visualize your journey with a GitHub-style contribution grid"
  3. **Streak Analytics** — "Understand your patterns with longest streak, averages, and trend charts"
  4. **Honest Relapse Logging** — "Log setbacks with date, time, and optional notes — no judgment"
  5. **Milestone Celebrations** — "Get notified and share your achievements on Instagram"
  6. **Privacy First** — "No account, no cloud, no tracking. Your data stays on your device."
- **Animation:** Staggered fade-up on scroll (intersection observer)

### 4. Screenshots Gallery

- Title: "See It in Action"
- Horizontal snap-scroll carousel of 5 app screenshots in phone frames
- Screenshots: Dashboard, Analytics/Heatmap, Streak Milestone, History, Onboarding
- Each with a caption below
- Dark background with subtle gradient
- **Animation:** Slide-in from right on scroll

### 5. Social Proof / Testimonials

- Title: "Join Thousands Breaking Free"
- 3 testimonial cards in a row (stack on mobile)
- Each: Quote, user alias, streak count badge
- Stat bar below: "10K+ Downloads" | "500K+ Streak Days Logged" | "4.8 on Play Store" (placeholder values)
- **Animation:** Staggered fade-up

### 6. Footer

- Background: `#0E191E`
- Left: Logo + "Reboot: Stop PMO" + tagline
- Center: Nav links (Features, Screenshots, Download)
- Right: Legal links (Privacy Policy, Terms of Service) + contact email
- Bottom: "2026 Reboot. All rights reserved."
- Top border: `#253035`

## Legal Pages (`/privacy-policy`, `/terms-of-service`)

- Full-page layout with same navbar + footer
- Content rendered from TanStack Query data (local TypeScript modules)
- Markdown-style formatted content with Tailwind Typography (`@tailwindcss/typography`)
- Structured query functions for future CMS migration:
  ```
  usePrivacyPolicy() -> QueryHook fetching privacy content
  useTermsOfService() -> QueryHook fetching terms content
  ```

## Responsive Design

- Mobile-first approach
- Navbar: hamburger menu on mobile
- Hero: stack vertically (text above phone mockup)
- Features: 1 column on mobile, 2 columns on tablet, 3 columns on desktop
- Screenshots: horizontal scroll on all sizes
- Testimonials: stack vertically on mobile

## Animations

All animations use Framer Motion with `react-intersection-observer` for scroll-triggered reveals:

| Element           | Animation                | Trigger                                |
| ----------------- | ------------------------ | -------------------------------------- |
| Hero headline     | Fade up + slide          | Page load (staggered)                  |
| Hero phone mockup | Slide in from right      | Page load (delayed)                    |
| Feature cards     | Fade up                  | Scroll into view (staggered 0.1s each) |
| Screenshots       | Slide in from right      | Scroll into view                       |
| Testimonial cards | Fade up                  | Scroll into view (staggered)           |
| Navbar            | Shrink padding on scroll | Scroll position                        |

## Verification

1. `npm run dev` — landing page loads at localhost with all sections visible
2. Scroll through all sections — animations trigger correctly
3. Click nav links — smooth scroll to correct sections
4. Navigate to `/privacy-policy` and `/terms-of-service` — legal pages render
5. Resize to mobile — responsive layout works, hamburger menu appears
6. Play Store button links to correct store URL (placeholder for now)
