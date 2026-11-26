// Single place for site-wide settings. Edit the PLACEHOLDER values.
export const SITE = {
  name: 'Aroheina.Online',
  tagline: 'Information bank on all things emissions',
  description:
    'This site is built to share practical, experience- based guidance on emissions, from quantification methodologies to compliance frameworks like OGMP 2.0 and the EU Methane Regulation (EU) 2024/1787. The aim is to support organisations, operators, and professionals who are working to understand, manage, and reduce their emissions with accurate, traceable data.',
  url: 'https://aroheina.online',
  language: 'en',
  locale: 'en_GB',
  defaultOgImage: '/og-default.png',
};


export const AUTHOR = {
  name: 'Jouko Aroheinä',
  url: 'https://aroheina.online/about/',
  bio: 'Jouko Aroheinä is a commercial specialist operating at the intersection of environmental measurement, regulatory compliance, and technology communication. Drawing on extensive international B2B experience in environmental technology and SaaS, he helps energy organizations apply accurate, traceable emission data toward OGMP 2.0 Level 5 compliance and EU Methane Regulation (EU 2024/1787) alignment. An established industry speaker at forums like IMM Europe and a published author with Business Finland and The Energy Council, Jouko translates complex MRV methodologies into clear, actionable strategies that drive measurable emission reductions.',
  jobTitle: 'Independent Professional', // optional
  sameAs: ['https://github.com/joukoa', 'https://www.linkedin.com/in/aroheina/'] as string[],
};

// Methane subtopics. `slug` is what the CMS stores in a post's `topics` field.
// If you add one here, add it to public/admin/config.yml (topics options) too.
export const TOPICS = [
  { slug: 'regulation-compliance', label: 'Regulation & Compliance', description: 'Understanding regulatory obligations, technical standards and compliance implementation.' },
  { slug: 'methane-management-monitoring', label: 'Methane Management & Monitoring', description: 'Technical measurement, monitoring and management of methane emissions in the oil and gas industry.' },
  { slug: 'esg-carbon-accounting', label: 'ESG & Carbon Accounting', description: 'Corporate greenhouse gas accounting, sustainability reporting and climate-related performance.' },
  { slug: 'analytics-optimisation', label: 'Analytics & Asset Optimisation', description: 'Turning emissions and operational measurements into actionable business intelligence.' },
  { slug: 'industry-insights-guides', label: 'Industry Insights & Practical Guides', description: 'Industry knowledge, technical explanations and practical applications for energy professionals.' },
] as const;

export const topicLabel = (slug: string) =>
  TOPICS.find((t) => t.slug === slug)?.label ?? slug.replace(/-/g, ' ');
