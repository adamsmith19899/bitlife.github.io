import React from 'react';
import { BlogPost } from '../../../types/blog';
import { formatDate } from '../../../utils/date';
import { Clock, Tag } from 'lucide-react';

interface BlogPostLayoutProps {
  post: BlogPost;
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="relative aspect-[21/9] mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
      </div>

      {/* Content */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-white/70">
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {formatDate(post.date)}
          </span>
          <span>{post.readTime} min read</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-sm text-white"
            >
              <Tag size={14} />
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  );
};