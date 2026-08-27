import type { Profile } from './types';

export const profile: Profile = {
  name: 'Anupriya Saxena',
  title: 'Engineering Manager',
  tagline:
    'Building high-performing teams, cultures that stick, and people that thrive.',
  summary:
    'Engineering Manager with 10+ years of experience building and scaling modern, cloud-native products. Proven people leader known for building trust, driving consistent execution in high-stakes environments, and fostering healthy, engaged teams delivering meaningful customer outcomes.',
  location: 'Canada',
  currentFocus: 'Container Security + AI Risk Insights',
  photo: { src: `${import.meta.env.BASE_URL}headshot.png`, alt: 'Anupriya Saxena', width: 400, height: 400 },
  resumePdf: '/resume.pdf',
};
