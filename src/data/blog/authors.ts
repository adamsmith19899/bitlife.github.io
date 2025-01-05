export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export const AUTHORS: Record<string, Author> = {
  sarah: {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Life Coach & Strategy Expert',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Expert in personal development and life strategies with over 10 years of experience.'
  },
  michael: {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    role: 'Career Development Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Helping professionals navigate their career paths and achieve their goals.'
  },
  emily: {
    id: 'emily-wong',
    name: 'Emily Wong',
    role: 'Financial Advisor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'Certified financial planner with expertise in personal wealth management.'
  }
};