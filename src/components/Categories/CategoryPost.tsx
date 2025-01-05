import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/date';
import { Clock } from 'lucide-react';

interface CategoryPostProps {
  post: BlogPost;
}

export const CategoryPost: React.FC<CategoryPostProps> = ({ post }) => {
  return (
    <Link 
      to={`/blog/${post.id}`}
      className="block bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
          <Clock size={14} />
          <span>{formatDate(post.date)} · {post.readTime} min read</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-white/80 text-sm line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
};