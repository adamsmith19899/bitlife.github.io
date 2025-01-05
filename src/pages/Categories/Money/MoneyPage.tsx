import React from 'react';
import { CategoryLayout } from '../../../components/Categories/CategoryLayout';
import { CategoryHeader } from '../../../components/Categories/CategoryHeader';
import { CategoryPost } from '../../../components/Categories/CategoryPost';
import { moneyPosts } from '../../../data/categoryPosts';

export const MoneyPage: React.FC = () => {
  return (
    <CategoryLayout>
      <CategoryHeader 
        title="Financial Decisions"
        description="Make strategic financial choices and build your wealth"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moneyPosts.map(post => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </CategoryLayout>
  );
};