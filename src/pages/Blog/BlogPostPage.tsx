import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogPostLayout } from '../../components/Blog/BlogPost/BlogPostLayout';
import { findPostById } from '../../utils/blog';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = findPostById(id);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Post Not Found</h1>
          <p className="text-white/70">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <BlogPostLayout post={post} />
    </div>
  );
};