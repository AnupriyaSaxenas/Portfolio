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

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
};

export const profile: Profile = {
  name: "Anupriya Saxena",
  title: "Engineering Manager",
  tagline:
    "Building and scaling cloud-native products with distributed engineering teams across Canada, the US, and Taiwan.",
  summary:
    "Engineering Manager with 10+ years of experience building and scaling modern, cloud-native products. Proven people leader known for building trust, driving consistent execution in high-stakes environments, and fostering healthy, engaged teams delivering meaningful customer outcomes.",
  location: "Canada",
};

export const metrics: Metric[] = [
  {
    value: "10+",
    label: "Years of experience",
    context: "Across leadership and engineering roles",
  },
  {
    value: "7 → 15",
    label: "Team grown",
    context: "While maintaining delivery quality and pace",
  },
  {
    value: "58%",
    label: "YoY paid customer growth",
    context: "At Trend Micro container security",
  },
  {
    value: "60%",
    label: "Cost-per-node reduction",
    context: "Through platform efficiency work",
  },
  {
    value: "300%+",
    label: "YoY credit allocation increase",
    context: "Driven by enterprise expansion",
  },
  {
    value: "$14M",
    label: "Additional business generated",
    context: "Walmart disaster-recovery solution scaled to Sam's Club & pharmacies",
  },
  {
    value: "26",
    label: "Reusable components shipped",
    context: "As part of a 4-engineer founding team",
  },
  {
    value: "200%",
    label: "Team growth supported",
    context: "Within three months at Deloitte",
  },
];

export const experience: Role[] = [
  {
    company: "Trend Micro",
    title: "Development Manager",
    location: "Canada",
    period: "Aug 2024 – Present",
    summary:
      "Lead a distributed container security engineering team delivering SaaS and on-prem (sovereign / private cloud) offerings across Kubernetes and major cloud platforms.",
    highlights: [
      "Grew a multi-disciplinary team across regions from 7 to 15 engineers while maintaining delivery quality.",
      "Own performance reviews, promotions, compensation, and career development for the team.",
      "Lead quarterly execution planning across sites; secured ~20% allocation for technical debt.",
      "Contributed to ~58% YoY paid-customer growth, ~60% cost-per-node reduction, and 300%+ credit allocation growth.",
      "Led delivery of a major on-prem container security offering, unlocking high-value enterprise opportunities.",
      "Drove ISO and PCI audit readiness with security and compliance teams.",
      "Introduced AI-assisted workflows for documentation, planning, and performance evaluation.",
    ],
  },
  {
    company: "Trend Micro",
    title: "Senior Software Engineer",
    location: "Canada",
    period: "Jan 2022 – Jul 2024",
    highlights: [
      "Led a major multi-team platform migration, supporting multi-million-dollar enterprise deals.",
      "Partnered with Product and UX to define user journeys and onboarding flows, reducing customer friction.",
      "Established development and testing strategies that improved release confidence.",
      "Mentored engineers across teams, accelerating onboarding and consistency.",
    ],
  },
  {
    company: "Trend Micro",
    title: "Software Engineer",
    location: "Canada",
    period: "Feb 2020 – Dec 2021",
    highlights: [
      "Contributed to the organization's inaugural container image security service.",
      "Worked closely with early preview customers to incorporate feedback and productize initial concepts.",
      "Collaborated with backend and security engineers in a fast-evolving, cloud-native environment.",
    ],
  },
  {
    company: "Deloitte USI",
    title: "Frontend Engineer · Technology Consultant",
    location: "USA",
    period: "Jun 2017 – Nov 2019",
    highlights: [
      "Led frontend of a Walmart disaster-recovery solution; expansion to Sam's Club & pharmacies generated $14M additional business.",
      "Built 26 reusable components in a 4-engineer founding team, supporting 200% team growth in three months.",
      "Delivered 52 Salesforce Marketing Cloud templates for Caterpillar campaigns and Visualforce UI for Fidelis Care.",
      "Recognized with Special Citation, Applause Award, and Spot Award for delivery quality and impact.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    title: "Programmer Analyst",
    location: "India",
    period: "Apr 2016 – Jun 2017",
    highlights: [
      "Worked onsite with Fiat Chrysler Automobiles delivering in-vehicle UI prototypes.",
      "Delivered the Asian Paints loyalty program; mentored engineers and supported technical hiring.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Systems Engineer",
    location: "India",
    period: "Feb 2014 – Mar 2016",
    highlights: [
      "Developed pixel-perfect, responsive UI from high-fidelity designs for the Virgin Atlantic website.",
      "Drove WCAG AA accessibility implementation and led training sessions on web technologies.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Leadership & Delivery",
    items: [
      "People management",
      "Hiring & onboarding",
      "Performance reviews",
      "Promotions & compensation",
      "Coaching & career development",
      "Cross-site planning",
      "Roadmap ownership",
      "Product negotiation",
      "Org-level enablement",
      "Agile (Scrum, Kanban)",
    ],
  },
  {
    category: "Technical & Platform",
    items: [
      "Cloud-native platforms",
      "Containers & Kubernetes",
      "Frontend–backend data flows",
      "APIs & integrations",
      "CI/CD",
      "Quality strategy",
      "Technical debt management",
      "Security & compliance (ISO, PCI)",
      "AI-assisted workflows",
    ],
  },
  {
    category: "Education & Certifications",
    items: [
      "B.E. Information Technology — Maharshi Dayanand University",
      "AWS Certified Cloud Practitioner",
      "Professional Scrum Master (Scrum.org)",
    ],
  },
];

export const contact = {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  github: "https://github.com/your-handle",
};
