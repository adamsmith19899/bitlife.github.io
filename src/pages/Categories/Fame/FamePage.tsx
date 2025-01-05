import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { famePosts } from '../../../data/categoryPosts';

export const FamePage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Path to Fame"
        description="Build your reputation and rise to stardom"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {famePosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};