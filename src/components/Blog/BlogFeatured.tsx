import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/date';

interface BlogFeaturedProps {
  post: BlogPost;
}

export const BlogFeatured: React.FC<BlogFeaturedProps> = ({ post }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[16/9] md:aspect-auto">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} min read
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            {post.title}
          </h3>
          <p className="text-white/80 line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}