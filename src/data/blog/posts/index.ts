import { lifeTipsPosts } from './lifeTipsPosts';
import { careerPosts } from './careerPosts';

export const allBlogPosts = [
  ...lifeTipsPosts,
  ...careerPosts,
];

export const getRecentPosts = () => {
  return allBlogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostsByCategory = (category: string) => {
  return allBlogPosts.filter(post => post.category === category);
};

export const getPostById = (id: string) => {
  return allBlogPosts.find(post => post.id === id);
};