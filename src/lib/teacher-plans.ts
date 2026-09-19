export type TeacherPlan = {
  slug: 'teacher' | 'teacher_pro';
  name: string;
  priceUzs: string;
  description: string;
  badge?: string;
  features: string[];
};

export const TEACHER_PLANS: TeacherPlan[] = [
  {
    slug: 'teacher',
    name: 'Teacher',
    priceUzs: '49 000',
    description: 'For tutors and small classes that need simple assessment and clear results.',
    features: [
      'Unlimited test creation',
      '750 completed Grammar submissions',
      '50 AI Writing evaluations',
      'Secure student invite links',
      'Individual results and question analytics',
    ],
  },
  {
    slug: 'teacher_pro',
    name: 'Teacher Pro',
    priceUzs: '99 000',
    description: 'For active teachers and learning centres managing more students.',
    badge: 'Best for classes',
    features: [
      'Unlimited test creation',
      '3,500 completed Grammar submissions',
      '250 AI Writing evaluations',
      'AI class performance analysis',
      'Excel results export',
    ],
  },
];
