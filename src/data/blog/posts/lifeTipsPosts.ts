import { BlogPost } from '../../../types/blog';
import { AUTHORS } from '../authors';
import { BLOG_CATEGORIES } from '../categories';

export const lifeTipsPosts: BlogPost[] = [
  {
    id: 'mastering-work-life-balance',
    title: 'Mastering Work-Life Balance in 2024',
    excerpt: 'Practical strategies for maintaining harmony between professional and personal life.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
    date: '2024-03-20',
    readTime: 7,
    author: AUTHORS.sarah,
    category: BLOG_CATEGORIES.LIFE_TIPS,
    tags: ['Work-Life Balance', 'Personal Development', 'Productivity']
  },
  {
    id: 'morning-routines-success',
    title: '5 Morning Routines of Successful People',
    excerpt: 'Start your day right with these proven morning habits of high achievers.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
    date: '2024-03-18',
    readTime: 5,
    author: AUTHORS.michael,
    category: BLOG_CATEGORIES.LIFE_TIPS,
    tags: ['Morning Routine', 'Success Habits', 'Productivity']
  }
];