import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { relationshipPosts } from '../../../data/categoryPosts';

export const RelationshipsPage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Relationships"
        description="Navigate personal connections and build meaningful relationships"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relationshipPosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};