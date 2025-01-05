import { BlogPost } from '../types/blog';
import { 
  careerPosts, relationshipPosts, moneyPosts, educationPosts,
  famePosts, sportsPosts, activityPosts, challengePosts, generationPosts 
} from '../data/categoryPosts';

const allPosts = [
  ...careerPosts,
  ...relationshipPosts,
  ...moneyPosts,
  ...educationPosts,
  ...famePosts,
  ...sportsPosts,
  ...activityPosts,
  ...challengePosts,
  ...generationPosts,
];

export const findPostById = (id: string | undefined): BlogPost | undefined => {
  if (!id) return undefined;
  return allPosts.find(post => post.id === id);
};