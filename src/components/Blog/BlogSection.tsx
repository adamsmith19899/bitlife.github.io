import React from 'react';
import { BlogFeatured } from './BlogFeatured';
import { BlogGrid } from './BlogGrid';
import { blogPosts } from '../../data/blogPosts';

export const BlogSection: React.FC = () => {
  const [featuredPost, ...gridPosts] = blogPosts;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          Latest from our Blog
        </h2>
        <div className="space-y-12">
          <BlogFeatured post={featuredPost} />
          <BlogGrid posts={gridPosts} />
        </div>
      </div>
    </section>
  );
};