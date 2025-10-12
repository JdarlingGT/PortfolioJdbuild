# Content Strategy & Management Guide

## Overview

This guide provides a comprehensive strategy for organizing, creating, and maintaining content across the Jacob Darling portfolio site. The goal is to make content management accessible to non-developers while maintaining technical excellence.

---

## Content Architecture

### Current Structure
```
/client/src/
  /data/
    caseStudies.json          # 9 client case studies
  /pages/
    /deep-dives/
      war-room.tsx            # Deep dive: performance optimization
      launchpad.tsx           # Deep dive: automation architecture
      signal.tsx              # Deep dive: analytics overhaul
```

### Proposed Enhanced Structure
```
/content/                     # New content directory
  /deep-dives/
    war-room.mdx             # Markdown/MDX for portability
    launchpad.mdx
    signal.mdx
    the-guardian.mdx         # Future: CEU compliance
    the-debugger.mdx         # Future: error recovery
    
  /case-studies/
    [Keep in /data/ as JSON for now, or migrate to individual files]
    
  /timeline/
    career-timeline.json     # Professional milestones
    
  /community/
    speaking.json            # Speaking engagements
    mentorship.json          # Mentoring activities
    contributions.json       # Industry contributions
    
  /testimonials/
    client-testimonials.json
    colleague-testimonials.json
    
  /skills/
    technical-skills.json
    marketing-skills.json
    certifications.json

/client/src/data/            # Keep for validated data
  caseStudies.json           # Enhanced case study data
  portfolioData.json         # Comprehensive profile data (future)
  metrics.json               # Key achievements
```

---

## Content Types

### 1. Deep Dives (Long-Form Narratives)

**Purpose**: Showcase strategic thinking, technical problem-solving, and project management expertise

**Format**: MDX (Markdown + JSX components)

**Structure**:
```markdown
---
title: "The War Room"
subtitle: "Anatomy of a Full-Stack Performance Overhaul"
slug: "war-room"
icon: "Server"
iconBg: "bg-red-500"
readTime: "12 min"
publishDate: "2024-01-15"
tags: ["Server Administration", "Performance Tuning", "DevOps"]
---

# The War Room

[Content sections as defined in template...]
```

**Content Guidelines**:
- **Length**: 2000-4000 words
- **Sections**: Context → Challenge → Approach → Execution → Results → Takeaways
- **Tone**: Professional but conversational, educational
- **Technical Depth**: Appropriate for hiring managers with some technical background
- **Storytelling**: Use narrative structure with conflict and resolution

**Future Deep Dives** (from attached assets):
- **The Guardian**: Building an Automated CEU Compliance Engine
- **The Debugger**: Navigating High-Stakes Critical Error Recovery
- **The Architect**: Designing Scalable Marketing Infrastructure
- **The Optimizer**: Data-Driven Conversion Rate Optimization

### 2. Case Studies (Client Projects)

**Purpose**: Demonstrate real-world impact across industries

**Format**: JSON with strict schema validation

**Current Schema**:
```json
{
  "slug": "client-name",
  "title": "Client Name",
  "subtitle": "Project Focus",
  "logo": "path/to/logo.png",
  "cover": "path/to/cover.jpg",
  "category": "B2B | Consumer | Healthcare",
  "filterCategories": ["B2B", "Consumer"],
  "bullets": [
    "Key achievement 1",
    "Key achievement 2",
    "Key achievement 3",
    "Key achievement 4"
  ],
  "challenge": "Problem statement",
  "reasoning": "Strategic approach",
  "execution": [
    "Step 1",
    "Step 2",
    "Step 3"
  ],
  "results": "Outcomes achieved",
  "measurement": [
    "Metric 1",
    "Metric 2",
    "Metric 3"
  ],
  "takeaway": "Key lesson learned"
}
```

**Enhanced Schema** (Proposed):
```json
{
  // ... existing fields ...
  "duration": "3 months",
  "year": "2023",
  "technologies": ["WordPress", "Google Ads", "Analytics"],
  "services": ["Web Design", "SEO", "Paid Ads"],
  "website": "https://example.com",
  "images": [
    "path/to/image1.jpg",
    "path/to/image2.jpg"
  ],
  "relatedCaseStudies": ["other-slug-1", "other-slug-2"],
  "featured": true,
  "testimonial": {
    "quote": "Jacob transformed our business...",
    "author": "Client Name",
    "role": "CEO"
  }
}
```

**Content Guidelines**:
- **Length**: 200-400 words for main content
- **Focus**: Problem → Solution → Results
- **Metrics**: Include quantifiable outcomes
- **Tone**: Professional, results-focused
- **Confidentiality**: Use generic descriptions where NDA applies

### 3. Timeline (Career Progression)

**Purpose**: Visualize career journey and key milestones

**Format**: JSON

**Schema**:
```json
{
  "timeline": [
    {
      "id": "graston-lead",
      "year": "2019",
      "month": "09",
      "title": "Marketing & Technology Lead",
      "company": "Graston Technique",
      "type": "employment",
      "description": "Led digital transformation and system architecture",
      "achievements": [
        "Built custom React training dashboard",
        "Implemented AI support system reducing tickets 70%",
        "Created 400+ CRM automation workflows"
      ],
      "icon": "Briefcase"
    },
    {
      "id": "certification-ga",
      "year": "2020",
      "month": "03",
      "title": "Google Analytics Certified",
      "type": "certification",
      "description": "Advanced analytics and attribution",
      "icon": "Award"
    }
  ]
}
```

**Timeline Types**:
- **employment**: Jobs and roles
- **certification**: Professional certifications
- **achievement**: Major accomplishments
- **education**: Degrees and training
- **milestone**: Career milestones

### 4. Community Leadership

**Purpose**: Demonstrate thought leadership and industry engagement

**Format**: JSON

**Schema**:
```json
{
  "speaking": [
    {
      "id": "conf-2024",
      "title": "Marketing Automation at Scale",
      "event": "MarTech Summit 2024",
      "date": "2024-06-15",
      "location": "Indianapolis, IN",
      "type": "conference",
      "slides": "link/to/slides",
      "video": "link/to/video",
      "description": "How to build scalable automation workflows"
    }
  ],
  "mentorship": [
    {
      "program": "Marketing Mentor Program",
      "organization": "Local University",
      "duration": "2023-Present",
      "mentees": 5,
      "description": "Guiding early-career marketers"
    }
  ],
  "contributions": [
    {
      "title": "Open Source Analytics Plugin",
      "type": "open-source",
      "link": "github.com/...",
      "description": "WordPress analytics integration"
    }
  ]
}
```

### 5. Testimonials

**Purpose**: Build credibility through third-party validation

**Format**: JSON

**Schema**:
```json
{
  "testimonials": [
    {
      "id": "testimonial-1",
      "quote": "Jacob's combination of marketing strategy and technical expertise is unmatched. He transformed our entire digital presence.",
      "author": "Jane Smith",
      "role": "Marketing Director",
      "company": "TechCorp",
      "avatar": "path/to/avatar.jpg",
      "featured": true,
      "category": "client"
    }
  ]
}
```

**Categories**:
- **client**: Client testimonials
- **colleague**: Peer recommendations
- **manager**: Supervisor endorsements
- **mentee**: Mentee testimonials

### 6. Skills & Expertise

**Purpose**: Catalog technical and marketing capabilities

**Format**: JSON

**Schema**:
```json
{
  "skillCategories": [
    {
      "category": "Marketing Strategy",
      "skills": [
        {
          "name": "Marketing Automation",
          "proficiency": 95,
          "yearsOfExperience": 6,
          "projects": ["graston-technique", "primarycare-indy"],
          "certifications": ["HubSpot Automation Certified"],
          "description": "Building scalable automation workflows"
        }
      ]
    }
  ]
}
```

**Proficiency Levels**:
- **90-100**: Expert (can teach others, thought leader)
- **75-89**: Advanced (can solve complex problems independently)
- **60-74**: Intermediate (can handle most tasks independently)
- **40-59**: Developing (can complete tasks with guidance)

---

## Content Creation Workflow

### For Deep Dives

1. **Outline**: Create structure with key sections
2. **Draft**: Write full narrative in Google Docs or Notion
3. **Review**: Self-edit for clarity, flow, technical accuracy
4. **Format**: Convert to MDX format
5. **Assets**: Add images, diagrams, code blocks
6. **Metadata**: Add frontmatter (title, tags, read time)
7. **Test**: Preview locally
8. **Publish**: Add to repository, deploy

### For Case Studies

1. **Client Approval**: Confirm what can be shared publicly
2. **Gather Data**: Collect metrics, screenshots, testimonials
3. **Draft**: Fill in template fields
4. **Images**: Optimize and add logo/cover images
5. **Validate**: Check JSON structure with schema
6. **Test**: Preview on dev site
7. **Publish**: Add to caseStudies.json

### For Timeline Entries

1. **Identify**: Determine milestone type
2. **Document**: Gather dates, descriptions, achievements
3. **Format**: Add to timeline JSON
4. **Test**: Verify chronological display
5. **Publish**: Deploy changes

---

## Content Standards

### Writing Style
- **Voice**: Professional but approachable
- **Tone**: Confident without arrogance
- **Person**: First person for deep dives, third person for about page
- **Tense**: Past tense for completed projects
- **Length**: Be thorough but concise

### Technical Content
- **Acronyms**: Define on first use
- **Jargon**: Use industry terms but explain complex concepts
- **Code**: Use syntax highlighting, add comments
- **Diagrams**: Use visual aids where helpful

### Metrics & Data
- **Specificity**: Use real numbers when possible
- **Context**: Explain what metrics mean
- **Honesty**: Don't inflate or misrepresent
- **Privacy**: Respect client confidentiality

### SEO Best Practices
- **Keywords**: Use naturally, don't stuff
- **Headings**: Use H1-H6 hierarchy properly
- **Links**: Internal links to related content
- **Alt Text**: Descriptive alt text for all images
- **Meta**: Unique title and description for each page

---

## Image Guidelines

### File Naming
```
case-studies/
  tuohy-bailey-moore-logo.png
  tuohy-bailey-moore-cover.jpg
  tuohy-bailey-moore-gallery-1.jpg

deep-dives/
  war-room-hero.jpg
  war-room-dashboard-screenshot.png
```

### Optimization
- **Format**: 
  - JPG for photos
  - PNG for logos/graphics with transparency
  - WebP for modern browsers (with fallback)
  - SVG for icons
- **Size**: 
  - Logos: max 200KB
  - Covers: max 500KB
  - Gallery images: max 300KB
- **Dimensions**:
  - Logos: 400x400px
  - Covers: 1200x630px (OG image ratio)
  - Gallery: 1920x1080px max
- **Compression**: Use tools like TinyPNG, Squoosh

### Accessibility
- **Alt Text**: Descriptive, concise (max 125 characters)
- **Contrast**: Ensure text overlays have sufficient contrast
- **Context**: Images should add value, not just decoration

---

## Content Maintenance

### Regular Reviews
- **Quarterly**: Review all case studies for outdated info
- **Annually**: Update skills and proficiencies
- **As Needed**: Add new deep dives, case studies, timeline entries

### Content Audits
- Check for broken links (internal and external)
- Update metrics with latest data
- Refresh outdated screenshots
- Remove or archive obsolete content
- Update copyright year in footer

### Performance Monitoring
- Track page views per content type
- Monitor time on page for deep dives
- Analyze which case studies get most engagement
- A/B test headlines and descriptions

---

## Non-Developer Content Management

### Adding a New Case Study

1. **Copy Template**:
```json
{
  "slug": "new-client",
  "title": "Client Name",
  "subtitle": "Brief project description",
  "logo": "@assets/case-studies/new-client-logo.png",
  "cover": "@assets/case-studies/new-client-cover.jpg",
  "category": "B2B",
  "filterCategories": ["B2B"],
  "bullets": [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3",
    "Achievement 4"
  ],
  "challenge": "What problem did the client have?",
  "reasoning": "Why did you choose this approach?",
  "execution": [
    "What you did step 1",
    "What you did step 2",
    "What you did step 3"
  ],
  "results": "What was the outcome?",
  "measurement": [
    "Metric 1 increased by X%",
    "Metric 2 improved by Y%"
  ],
  "takeaway": "One key lesson learned"
}
```

2. **Fill in all fields** with your content
3. **Add images** to `client/public/assets/case-studies/`
4. **Test locally** with `npm run dev`
5. **Commit and push** to repository

### Updating Skills

1. Open `/client/src/data/skills.json` (when created)
2. Find the skill category
3. Update proficiency level (0-100)
4. Update years of experience
5. Save and test

### Adding a Timeline Entry

1. Open `/content/timeline/career-timeline.json` (when created)
2. Add new entry in chronological order
3. Fill in all required fields
4. Choose appropriate icon
5. Save and test

---

## Content Inspiration

### Deep Dive Topics (Future)
- The Guardian: Automated CEU compliance system
- The Debugger: Critical error recovery story
- The Architect: Building scalable infrastructure
- The Optimizer: Conversion rate optimization project
- The Integrator: Third-party API integration challenges
- The Analyst: Building custom analytics dashboards

### Case Study Opportunities
- Any client project with measurable results
- Pro bono or volunteer work
- Personal projects with real users
- Consulting engagements
- Freelance work

### Community Content
- Conference talks
- Workshop facilitation
- Mentorship programs
- Industry articles/blog posts
- Podcast interviews
- Open source contributions

---

## Tools & Resources

### Content Creation
- **Writing**: Google Docs, Notion, VS Code
- **Image Editing**: Figma, Canva, Photoshop
- **Screenshots**: CleanShot X, Greenshot
- **Diagrams**: Excalidraw, draw.io, Lucidchart
- **Video**: Loom, ScreenFlow

### Optimization
- **Images**: TinyPNG, Squoosh, ImageOptim
- **SEO**: Yoast, SEMrush, Ahrefs
- **Analytics**: Google Analytics, Plausible
- **Grammar**: Grammarly, Hemingway Editor

### Development
- **Local Testing**: `npm run dev`
- **Build**: `npm run build`
- **Type Check**: `npm run check`

---

## Quick Reference

### JSON Validation
```bash
# Check if JSON is valid
cat data/caseStudies.json | jq .
```

### Common Tasks
- **Add case study**: Edit `caseStudies.json`, add images, test
- **Add deep dive**: Create new MDX file, add to listing
- **Update about**: Edit `about.tsx` (or future JSON)
- **Add testimonial**: Edit `testimonials.json` (when created)

### File Paths
- Case studies: `/client/src/data/caseStudies.json`
- Deep dives: `/client/src/pages/deep-dives/[slug].tsx`
- Images: `/client/public/assets/`
- Icons: Import from `lucide-react`

---

**Last Updated**: 2025-10-12
**Version**: 1.0
**Owner**: Jacob Darling
