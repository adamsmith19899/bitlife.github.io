import { BlogPost } from '../../../types/blog';
import { AUTHORS } from '../authors';
import { BLOG_CATEGORIES } from '../categories';

export const careerPosts: BlogPost[] = [
  {
    id: 'remote-work-success',
    title: 'Thriving in a Remote Work Environment',
    excerpt: 'Essential tips and strategies for succeeding in remote work positions.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80',
    date: '2024-03-19',
    readTime: 8,
    author: AUTHORS.michael,
    category: BLOG_CATEGORIES.CAREER,
    tags: ['Remote Work', 'Career Development', 'Productivity']
  },
  {
    id: 'networking-digital-age',
    title: 'Professional Networking in the Digital Age',
    excerpt: 'Modern approaches to building and maintaining professional relationships online.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
    date: '2024-03-17',
    readTime: 6,
    author: AUTHORS.sarah,
    category: BLOG_CATEGORIES.CAREER,
    tags: ['Networking', 'Professional Development', 'Digital Skills']
  }
];