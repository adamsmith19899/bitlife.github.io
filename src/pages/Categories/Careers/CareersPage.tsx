import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { careerPosts } from '../../../data/categoryPosts';

export const CareersPage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Career Paths"
        description="Explore various career paths and build your professional journey"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerPosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};