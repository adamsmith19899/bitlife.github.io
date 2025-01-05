import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { challengePosts } from '../../../data/categoryPosts';

export const ChallengePage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Challenge Mode"
        description="Test your skills with special challenges and achievements"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challengePosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};