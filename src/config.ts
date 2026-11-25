// Single place for site-wide settings. Edit the PLACEHOLDER values.
export const SITE = {
  name: 'Aroheina',
  tagline: 'Notes on methane emissions: sources, measurement and policy',
  description:
    'Plain-language, source-cited analysis of methane emissions: agriculture, wetlands, oil and gas, waste, satellite monitoring and climate policy.',
  url: 'https://aroheina.online',
  language: 'en',
  locale: 'en_GB',
  defaultOgImage: '/og-default.png',
};

export const AUTHOR = {
  name: 'Jouko Aroheinä',
  url: 'https://aroheina.online/about/',
  // PLACEHOLDER: replace with your own bio (2-4 sentences work best for readers and AI engines)
  bio: 'Jouko Aroheinä writes about methane emissions, how they are measured, and what the evidence says about reducing them. [Replace this with your real background and expertise.]',
  jobTitle: '', // optional, e.g. "Independent researcher"
  // PLACEHOLDER: add real profile links (LinkedIn, ORCID, Google Scholar, GitHub, Mastodon...). Used as JSON-LD sameAs.
  sameAs: ['https://github.com/joukoa'] as string[],
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
