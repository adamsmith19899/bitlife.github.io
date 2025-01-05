import { Author } from '../data/blog/authors';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: number;
  author: Author;
  category: string;
  tags: string[];
}