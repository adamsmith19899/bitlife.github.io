import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from '../Hero/Hero';
import { GamePage } from '../Game/GamePage';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';
import { Privacy } from '../../pages/Legal/Privacy';
import { Terms } from '../../pages/Legal/Terms';
import { DMCA } from '../../pages/Legal/DMCA';
import { BlogPostPage } from '../../pages/Blog/BlogPostPage';
import { 
  CareersPage, RelationshipsPage, MoneyPage, EducationPage,
  FamePage, SportsPage, ActivitiesPage, ChallengePage, GenerationPage 
} from '../../pages/Categories';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/bitlife" element={<GamePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/dmca" element={<DMCA />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
      
      {/* Category Pages */}
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/relationships" element={<RelationshipsPage />} />
      <Route path="/money" element={<MoneyPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/fame" element={<FamePage />} />
      <Route path="/sports" element={<SportsPage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/challenges" element={<ChallengePage />} />
      <Route path="/generation" element={<GenerationPage />} />
    </Routes>
  );
};
