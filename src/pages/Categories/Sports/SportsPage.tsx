import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { sportsPosts } from '../../../data/categoryPosts';

export const SportsPage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Sports Career"
        description="Train, compete, and become a sports legend"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsPosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};