export type Profile = {
  name: string;
  title: string;
  tagline: string;
  // summary: string;
  location: string;
  currentFocus: string;
  photo: { src: string; alt: string; width: number; height: number };
  resumePdf: string;
};

export type Social = {
  platform: string;
  label: string;
  href: string;
  handle: string;
};

export type Metric = {
  value: string;
  label: string;
  context: string;
};

export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  summary?: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Principle = {
  title: string;
  description: string;
  icon: string;
};

export type GlobalRegion = {
  name: string;
  context: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  role: string;
  company: string;
};
