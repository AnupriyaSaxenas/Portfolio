import type { Social } from './types';

export const contact = {
  email: 'aspriyamail@gmail.com',
  hiringCta:
    'I\'m open to senior engineering leadership roles where I can build high-performing teams, drive cloud-native product strategy, and create an environment where engineers do their best work.',
};

export const socials: Social[] = [
  {
    platform: 'Email',
    label: 'Email',
    href: `mailto:${contact.email}`,
    handle: contact.email,
  },
  {
    platform: 'LinkedIn',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anupriyasaxena/',
    handle: 'linkedin.com/in/anupriyasaxena',
  },
];
