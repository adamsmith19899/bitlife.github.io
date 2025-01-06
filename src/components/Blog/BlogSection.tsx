import React from 'react';
import { Link } from 'react-router-dom';
import { BlogFeatured } from './BlogFeatured';
import { BlogGrid } from './BlogGrid';
import { 
  careerPosts, relationshipPosts, moneyPosts, educationPosts,
  famePosts, sportsPosts, activityPosts, challengePosts, generationPosts 
} from '../../data/categoryPosts';

export const BlogSection: React.FC = () => {
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
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const [featuredPost, ...gridPosts] = allPosts;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          Latest from our Blog
        </h2>
        <div className="space-y-12">
          <Link to={`/blog/${featuredPost.id}`}>
            <BlogFeatured post={featuredPost} />
          </Link>
          <BlogGrid posts={gridPosts.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
};
