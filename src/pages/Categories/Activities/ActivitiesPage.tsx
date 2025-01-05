import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { activityPosts } from '../../../data/categoryPosts';

export const ActivitiesPage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Activities"
        description="Discover and engage in various activities and hobbies"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activityPosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};