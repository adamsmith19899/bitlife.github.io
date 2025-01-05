import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { educationPosts } from '../../../data/categoryPosts';

export const EducationPage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Education Journey"
        description="Choose your educational path and develop your skills"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationPosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};