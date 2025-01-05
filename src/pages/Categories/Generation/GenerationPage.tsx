import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { generationPosts } from '../../../data/categoryPosts';

export const GenerationPage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Generation"
        description="Create and manage your family legacy across generations"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {generationPosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};