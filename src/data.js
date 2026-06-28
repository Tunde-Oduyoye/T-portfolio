export const NAV_LINKS = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact']

export const PROJECTS = [
  {
    id: 1,
    num: '01',
    name: 'Meridian Education Group',
    type: 'Multi-page Web App',
    desc: 'Higher-education platform for 5 global institutions. Full admissions portal with multi-step forms, filterable programme grids, event listings, animated stats counter, and a comprehensive contact system.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    live: 'https://meridian-education.vercel.app/',
    github: 'https://github.com/Tunde-Oduyoye',
    accent: '#1a3a5c',
  },
  {
    id: 2,
    num: '02',
    name: 'FreshDrop',
    type: 'Business Landing Page',
    desc: 'Conversion-focused landing page for a Lagos-based laundry service. Service cards, 4-step booking flow, customer testimonials, and WhatsApp CTA integration with a strong local brand identity.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp API'],
    live: 'https://fresh-drops-chi.vercel.app/',
    github: 'https://github.com/Tunde-Oduyoye',
    accent: '#0a4a35',
  },
  {
    id: 3,
    num: '03',
    // FIX 5: clearly labelled as spec/concept project
    name: 'Noir & Ember',
    type: 'Spec / Concept Project',
    desc: 'Self-initiated concept for a luxury fine dining restaurant. Dark aesthetic, gold accents, animated hero sections, interactive menu, and table reservation flow — built to practise high-end UI design.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Animations'],
    live: 'https://noir-ember-two.vercel.app/',
    github: 'https://github.com/Tunde-Oduyoye',
    accent: '#3a1a00',
  },
]

export const EXPERIENCE = [
  {
    title: 'Freelance Frontend Engineer',
    company: 'Self-employed / Contract',
    period: '2024 – Present',
    active: true,
    bullets: [
      'Designed and built multiple projects across education, hospitality, and e-commerce verticals.',
      'Consistently achieved high Lighthouse performance scores across all projects.',
      'Translated Figma designs into pixel-perfect, fully responsive production interfaces.',
      'Built complex UI features including WhatsApp booking flows, multi-step forms, and animated marketing sections.',
      'Established clean, reusable component patterns and structured codebases for maintainability.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Personal Projects / Learning',
    period: '2024 – 2026',
    active: false,
    bullets: [
      'Built landing pages and marketing sites while developing core frontend skills.',
      'Delivered mobile-first, cross-browser compatible UIs with a focus on performance and accessibility.',
      'Completed structured learning via freeCodeCamp and Frontend Mentor challenges.',
    ],
  },
]

export const SKILLS = [
  { label: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'] },
  { label: 'Frameworks', items: ['React', 'Tailwind CSS'] },
  { label: 'UI & Design', items: ['Figma', 'Responsive Design', 'Accessibility', 'UI/UX Implementation'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Vite', 'Vercel'] },
  { label: 'Performance', items: ['Core Web Vitals', 'Lighthouse Audits', 'Bundle Optimisation', 'SEO'] },
]

export const CONTACT_INFO = [
  { label: 'Email', value: 'babatundeoduyoye53@gmail.com', href: 'mailto:babatundeoduyoye53@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/babatunde-oduyoye-587548393', href: 'https://www.linkedin.com/in/babatunde-oduyoye-587548393' },
  { label: 'GitHub', value: 'github.com/Tunde-Oduyoye', href: 'https://github.com/Tunde-Oduyoye' },
]
