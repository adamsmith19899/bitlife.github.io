import React from 'react';
import { Calendar } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/date';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
          <Calendar size={14} />
          {formatDate(post.date)}
        </div>
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-white/80 text-sm line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}