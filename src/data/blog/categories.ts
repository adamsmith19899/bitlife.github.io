export const BLOG_CATEGORIES = {
  LIFE_TIPS: 'Life Tips',
  CAREER: 'Career Growth',
  RELATIONSHIPS: 'Relationships',
  FINANCE: 'Personal Finance',
  EDUCATION: 'Education',
  HEALTH: 'Health & Wellness',
  SUCCESS: 'Success Stories',
  LIFESTYLE: 'Lifestyle',
} as const;

export type BlogCategory = typeof BLOG_CATEGORIES[keyof typeof BLOG_CATEGORIES];