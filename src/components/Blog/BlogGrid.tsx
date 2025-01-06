import React from 'react';
import { Link } from 'react-router-dom';
import { BlogCard } from './BlogCard';
import { BlogPost } from '../../types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <BlogCard post={post} />
        </Link>
      ))}
    </div>
  );
};
