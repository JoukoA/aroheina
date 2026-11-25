// Single place for site-wide settings. Edit the PLACEHOLDER values.
export const SITE = {
  name: 'Aroheina.Online',
  tagline: 'Information bank for emission monitoring and reporting',
  description:
    'This site is built to share practical, experience- based guidance on methane and flaring emission monitoring, from quantification methodologies to compliance frameworks like OGMP 2.0 and the EU Methane Regulation (EU) 2024/1787. The aim is to support organisations, operators, and professionals who are working to understand, manage, and reduce their emissions with accurate, traceable data.',
  url: 'https://aroheina.online',
  language: 'en',
  locale: 'en_GB',
  defaultOgImage: '/og-default.png',
};

export const AUTHOR = {
  name: 'Jouko Aroheinä',
  url: 'https://aroheina.online/about/',
  // PLACEHOLDER: replace with your own bio (2-4 sentences work best for readers and AI engines)
  bio: 'Jouko Aroheinä is a commercial specialist operating at the intersection of environmental measurement, regulatory compliance, and technology communication. Drawing on extensive international B2B experience in environmental technology and SaaS, he helps energy organizations apply accurate, traceable emission data toward OGMP 2.0 Level 5 compliance and EU Methane Regulation (EU 2024/1787) alignment. An established industry speaker at forums like IMM Europe and a published author with Business Finland and The Energy Community, Jouko translates complex MRV methodologies into clear, actionable strategies that drive measurable emission reductions.',
  jobTitle': 'Independent researcher', // optional, e.g. "Independent researcher"
  // PLACEHOLDER: add real profile links (LinkedIn, ORCID, Google Scholar, GitHub, Mastodon...). Used as JSON-LD sameAs.
  sameAs: ['https://orcid.org/0009-0007-1649-6679'] as string['https://www.linkedin.com/in/aroheina/'],
};

// Methane subtopics. `slug` is what the CMS stores in a post's `topics` field.
// If you add one here, add it to public/admin/config.yml (topics options) too.
export const TOPICS = [
  { slug: 'agriculture-enteric', label: 'Agriculture and enteric methane', description: 'Livestock, enteric fermentation, manure and rice cultivation.' },
  { slug: 'wetlands', label: 'Wetlands and natural sources', description: 'Wetlands, inland waters, permafrost and other natural emitters.' },
  { slug: 'oil-and-gas', label: 'Oil, gas and coal', description: 'Leaks, venting, flaring and coal-mine methane.' },
  { slug: 'waste', label: 'Landfills and waste', description: 'Landfill gas, wastewater and organic waste.' },
  { slug: 'monitoring-satellite', label: 'Monitoring and satellites', description: 'Satellites, aircraft, ground networks and inversion modelling.' },
  { slug: 'policy', label: 'Policy and targets', description: 'Regulation, the Global Methane Pledge, reporting and inventories.' },
  { slug: 'atmospheric-science', label: 'Atmospheric science', description: 'Lifetime, concentrations, warming potentials and the methane sink.' },
  { slug: 'mitigation', label: 'Mitigation', description: 'Abatement options, costs and what has been shown to work.' },
] as const;

export const topicLabel = (slug: string) =>
  TOPICS.find((t) => t.slug === slug)?.label ?? slug.replace(/-/g, ' ');
