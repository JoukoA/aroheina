// Single place for site-wide settings. Edit the PLACEHOLDER values.
export const SITE = {
  name: 'Aroheina.Online',
  tagline: 'Emissions, Energy & Industrial Performance',
  description:
    ' Exploring the connections between environmental responsibility, regulatory developments, technology and business decision-making.',
  url: 'https://aroheina.online',
  language: 'en',
  locale: 'en_GB',
  defaultOgImage: '/og-default.png',
};

export const AUTHOR = {
  name: 'Jouko Aroheinä',
  url: 'https://aroheina.online/about/',
  // Short bio: shown under every post and used in search-engine data.
  bio: `Jouko Aroheinä is a commercial specialist operating at the intersection of environmental measurement, regulatory compliance, and technology communication. Drawing on extensive international B2B experience in environmental technology and SaaS, he helps energy organizations apply accurate, traceable emission data toward OGMP 2.0 Level 5 compliance and EU Methane Regulation (EU) 2024/1787 alignment. An established industry speaker at forums like IMM Europe and a published author with Business Finland and The Energy Community, Jouko translates complex MRV methodologies into clear, actionable strategies that drive measurable emission reductions.`,
  // Long bio: About page only. Separate paragraphs with a blank line.
  bioLong: `Jouko Aroheinä is a commercial professional working at the crossroads of environmental measurement, compliance and technology communication. His work focuses on helping organisations understand and apply accurate, traceable emission data to meet regulatory and sustainability goals.

Since 2021 Jouko has been deeply involved in advancing mobile emission measurement technologies and in supporting companies on their journey toward OGMP 2.0 Level 5 compliance and alignment with the EU Methane Regulation (EU) 2024/1787.

With extensive experience in international B2B sales and marketing across the environmental technology and SaaS sectors, his focus has consistently been on turning complex technical and regulatory topics into clear, actionable insights for industry professionals and decision-makers.

Jouko has spoken at prominent international industry events, including the Industrial Methane Measurement Conference (IMM Europe), and his writing on emissions transparency and MRV frameworks has been published by organisations such as Business Finland and The Energy Community. Through these platforms he contributes to the global dialogue on measurement accuracy, atmospheric data integrity and the evolving regulatory landscape.

Jouko believes that effective emission management begins with a deep understanding of measurement data, and that by making complex methodologies transparent and accessible, the energy sector can achieve real, measurable progress toward emission reduction.`,
    photo: '/images/portrait.jpg',
    photoAlt: 'Portrait of Jouko Aroheinä',
    jobTitle: '', // optional, e.g. "Commercial specialist"
  // Add your real profile links (LinkedIn, ORCID, ...). Each in quotes, separated by commas.
  sameAs: [
    'https://linkedin.com/in/aroheina',
    'https://orcid.org/0009-0007-1649-6679'
  ] as string[],
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
