# Portfolio Architecture Diagram

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           JACOB DARLING PORTFOLIO                        │
│                    Modern Marketing & Technology Showcase                │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND LAYER                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                         PAGES & ROUTES                            │  │
│  ├──────────────────────────────────────────────────────────────────┤  │
│  │  /                → Home (Hero, Metrics, Featured Work)          │  │
│  │  /about           → About (Timeline, Skills, Resume)             │  │
│  │  /case-studies    → Case Studies Index (9 clients)               │  │
│  │  /case-studies/:id → Case Study Detail                           │  │
│  │  /deep-dives      → Deep Dives Index (3 stories)                 │  │
│  │  /deep-dives/:slug → Deep Dive Detail                            │  │
│  │  /skills          → Skills & Capabilities                        │  │
│  │  /demos           → Interactive Demos                            │  │
│  │  /process         → Process & Methodology                        │  │
│  │  /community       → Community Leadership (NEW)                   │  │
│  │  /contact         → Contact Form                                 │  │
│  │  /creative-design → Creative Work                                │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                    COMPONENT ARCHITECTURE                         │  │
│  ├──────────────────────────────────────────────────────────────────┤  │
│  │                                                                   │  │
│  │  Layout Components                Animation Components           │  │
│  │  ├─ Navigation                   ├─ AnimatedMetric               │  │
│  │  ├─ Footer                       ├─ CardWithHover                │  │
│  │  ├─ SectionHeader (NEW)          ├─ AnimatedSection              │  │
│  │  ├─ ContentGrid (NEW)            ├─ FadeIn                       │  │
│  │  └─ TimelineSection (NEW)        └─ StaggeredList                │  │
│  │                                                                   │  │
│  │  Data Components                 UI Components (shadcn/ui)       │  │
│  │  ├─ CaseStudyCard                ├─ Button                       │  │
│  │  ├─ DeepDiveCard                 ├─ Card                         │  │
│  │  ├─ TestimonialCard (NEW)        ├─ Badge                        │  │
│  │  ├─ MetricCard (NEW)             ├─ Dialog                       │  │
│  │  ├─ SkillBadge (NEW)             ├─ Tabs                         │  │
│  │  └─ SkillProgressBar (NEW)       └─ Form Components              │  │
│  │                                                                   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                      STYLING & THEMING                            │  │
│  ├──────────────────────────────────────────────────────────────────┤  │
│  │  • Tailwind CSS (utility-first)                                  │  │
│  │  • CSS Variables for theming                                     │  │
│  │  • Dark/Light mode support                                       │  │
│  │  • Custom design tokens                                          │  │
│  │  • Responsive breakpoints (mobile-first)                         │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                    ANIMATION LAYER (motion.dev)                   │  │
│  ├──────────────────────────────────────────────────────────────────┤  │
│  │  • Scroll-triggered animations (whileInView)                     │  │
│  │  • Hover effects (whileHover)                                    │  │
│  │  • Page transitions                                              │  │
│  │  • Number counting animations                                    │  │
│  │  • Staggered list animations                                     │  │
│  │  • Respects prefers-reduced-motion                               │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                           CONTENT LAYER                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  /content/ (NEW)                    /client/src/data/                   │
│  ├─ deep-dives/                     ├─ caseStudies.json                 │
│  │  ├─ war-room.mdx                 ├─ metrics.json (NEW)               │
│  │  ├─ launchpad.mdx                └─ portfolioData.json (FUTURE)      │
│  │  └─ signal.mdx                                                       │
│  ├─ timeline/                                                           │
│  │  └─ career-timeline.json (NEW)                                       │
│  ├─ community/                                                          │
│  │  ├─ speaking.json (NEW)                                              │
│  │  └─ mentorship.json (NEW)                                            │
│  └─ testimonials/                                                       │
│     └─ testimonials.json (NEW)                                          │
│                                                                          │
│  Content Schemas (Zod Validation)                                       │
│  ├─ CaseStudySchema                                                     │
│  ├─ DeepDiveSchema                                                      │
│  ├─ TimelineSchema (NEW)                                                │
│  └─ TestimonialSchema (NEW)                                             │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                          BACKEND LAYER                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Express.js Server                                                       │
│  ├─ Static file serving                                                 │
│  ├─ API endpoints (future)                                              │
│  │  ├─ /api/chat (AI assistant - optional)                              │
│  │  ├─ /api/contact (form submission)                                   │
│  │  └─ /api/analytics (custom tracking - optional)                      │
│  └─ Session management (optional)                                       │
│                                                                          │
│  Database (Optional - PostgreSQL + Drizzle ORM)                         │
│  ├─ User sessions                                                        │
│  ├─ Contact form submissions                                            │
│  └─ Analytics data                                                       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                     EXTERNAL INTEGRATIONS                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  SEO & Discovery              Analytics & Tracking                      │
│  ├─ Google Search            ├─ Google Analytics 4                      │
│  ├─ Open Graph Tags          ├─ Custom event tracking                   │
│  ├─ Twitter Cards            ├─ Conversion tracking                     │
│  ├─ JSON-LD Schema           └─ Hotjar (optional)                       │
│  └─ Sitemap.xml                                                          │
│                                                                          │
│  Hosting & Deployment         Monitoring & Performance                  │
│  ├─ Vercel / Netlify         ├─ Lighthouse CI                           │
│  ├─ GitHub Actions CI/CD     ├─ Web Vitals monitoring                   │
│  ├─ Custom domain + SSL      ├─ Error tracking (Sentry - optional)      │
│  └─ CDN for assets           └─ Uptime monitoring                       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                        DEVELOPMENT WORKFLOW                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Local Development                                                       │
│  ├─ npm run dev          → Vite dev server with HMR                     │
│  ├─ npm run check        → TypeScript type checking                     │
│  ├─ npm run build        → Production build                             │
│  └─ npm test             → Run tests (future)                           │
│                                                                          │
│  Quality Assurance                                                       │
│  ├─ TypeScript strict mode                                              │
│  ├─ ESLint for code quality                                             │
│  ├─ Prettier for formatting                                             │
│  ├─ Lighthouse for performance                                          │
│  └─ axe DevTools for accessibility                                      │
│                                                                          │
│  CI/CD Pipeline (GitHub Actions)                                        │
│  ├─ Type check on PR                                                    │
│  ├─ Build verification                                                  │
│  ├─ Accessibility testing                                               │
│  ├─ Performance testing                                                 │
│  └─ Auto-deploy on merge to main                                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
┌─────────────┐
│   Content   │
│   Files     │
│  (MD/JSON)  │
└──────┬──────┘
       │
       │ 1. Build Time: Content loaded into components
       ↓
┌─────────────┐
│   Static    │
│  Generation │
└──────┬──────┘
       │
       │ 2. Build: Vite bundles with code splitting
       ↓
┌─────────────┐
│   CDN       │
│  (Vercel)   │
└──────┬──────┘
       │
       │ 3. Request: User navigates to site
       ↓
┌─────────────┐
│   Browser   │
│   Renders   │
└──────┬──────┘
       │
       │ 4. Interaction: User scrolls, hovers, clicks
       ↓
┌─────────────┐
│  motion.dev │
│  Animations │
└──────┬──────┘
       │
       │ 5. Events: Track in Analytics
       ↓
┌─────────────┐
│  Google     │
│  Analytics  │
└─────────────┘
```

---

## Content Management Flow

```
┌───────────────────────────────────────────────────────────────────┐
│                        CONTENT CREATION                            │
└───────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ↓                     ↓                     ↓
┌──────────────┐      ┌──────────────┐     ┌──────────────┐
│  Deep Dive   │      │ Case Study   │     │  Timeline    │
│   (MDX)      │      │   (JSON)     │     │   (JSON)     │
└──────┬───────┘      └──────┬───────┘     └──────┬───────┘
       │                     │                     │
       │ Validate            │ Validate            │ Validate
       │ with Schema         │ with Schema         │ with Schema
       │                     │                     │
       └─────────────────────┼─────────────────────┘
                             │
                             ↓
                    ┌────────────────┐
                    │  Git Commit    │
                    │  & Push        │
                    └────────┬───────┘
                             │
                             ↓
                    ┌────────────────┐
                    │ GitHub Actions │
                    │   CI/CD        │
                    └────────┬───────┘
                             │
                    ┌────────┴────────┐
                    │                 │
                    ↓                 ↓
            ┌──────────────┐  ┌──────────────┐
            │ Type Check   │  │    Build     │
            │    Tests     │  │   & Deploy   │
            └──────────────┘  └──────┬───────┘
                                     │
                                     ↓
                              ┌─────────────┐
                              │ Production  │
                              │   Live      │
                              └─────────────┘
```

---

## Technology Stack Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                       FRONTEND STACK                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Core Framework          UI Components         Styling          │
│  ├─ React 18            ├─ shadcn/ui          ├─ Tailwind CSS   │
│  ├─ TypeScript          ├─ Radix UI           ├─ CSS Variables  │
│  ├─ Vite                └─ Lucide React       └─ Dark/Light     │
│  └─ Wouter (routing)                                            │
│                                                                  │
│  Animation              Forms                  Data             │
│  ├─ motion.dev          ├─ React Hook Form    ├─ React Query    │
│  ├─ Framer Motion       └─ Zod validation     └─ Date-fns       │
│  └─ react-countup                                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       BACKEND STACK                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Server                 Database (Optional)    Authentication   │
│  ├─ Express.js          ├─ PostgreSQL          ├─ Passport.js   │
│  ├─ Node.js             ├─ Drizzle ORM         └─ Sessions      │
│  └─ TypeScript          └─ Neon Serverless                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      BUILD & DEPLOY                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Build Tools            Deployment              CI/CD           │
│  ├─ Vite                ├─ Vercel/Netlify      ├─ GitHub Actions│
│  ├─ esbuild             ├─ Custom Domain       ├─ Auto Deploy   │
│  ├─ PostCSS             └─ SSL/CDN             └─ Quality Checks│
│  └─ TypeScript                                                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    ANALYTICS & SEO                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Analytics              SEO                    Performance       │
│  ├─ Google Analytics 4  ├─ Open Graph         ├─ Lighthouse     │
│  ├─ Custom Events       ├─ Twitter Cards      ├─ Web Vitals     │
│  └─ Conversion Tracking ├─ JSON-LD Schema     └─ Bundle Analysis│
│                         └─ Sitemap.xml                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
PortfolioJdbuild/
├── client/                          # Frontend application
│   ├── public/
│   │   └── assets/                  # Images, logos, media
│   │       ├── case-studies/
│   │       └── deep-dives/
│   └── src/
│       ├── components/              # Reusable components
│       │   ├── layout/             # Navigation, Footer
│       │   ├── sections/           # Page sections
│       │   └── ui/                 # shadcn/ui components
│       ├── data/                   # JSON data files
│       │   └── caseStudies.json
│       ├── hooks/                  # Custom React hooks
│       │   └── use-seo.ts
│       ├── lib/                    # Utilities
│       ├── pages/                  # Page components
│       │   ├── deep-dives/
│       │   └── *.tsx
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│
├── content/ (NEW)                   # Content directory
│   ├── deep-dives/                 # MDX deep dive content
│   ├── timeline/                   # Career timeline
│   ├── community/                  # Leadership activities
│   └── testimonials/               # Client testimonials
│
├── server/                          # Backend (Express)
│   └── index.ts
│
├── shared/                          # Shared types/schemas
│   └── schema.ts
│
├── ROADMAP.md                       # Complete roadmap
├── IMPLEMENTATION_CHECKLIST.md      # Task checklist
├── CONTENT_STRATEGY.md              # Content guide
├── QUICK_START.md                   # Quick start guide
├── EXECUTIVE_SUMMARY.md             # Executive summary
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

**Last Updated**: 2025-10-12  
**Version**: 1.0
