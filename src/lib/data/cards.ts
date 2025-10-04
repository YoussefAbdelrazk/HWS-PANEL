import { CalendarCheck, ChartBar, Eye, Play } from 'lucide-react';

export interface Card {
  id: number;
  title: string;
  number: number;
  text: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export const cards: Card[] = [
  {
    id: 1,
    title: 'Subscription Day Left',
    number: 23,
    text: 'days',
    description: '77% of subscrpion used',
    icon: CalendarCheck,
    color: '#3B82F6',
  },
  {
    id: 2,
    title: 'Active Courses',
    number: 15,
    text: 'courses',
    description: '3 new in this week',
    icon: Play,
    color: '#22C55E',
  },
  {
    id: 3,
    title: 'Overall Progress',
    number: 80,
    text: '%',
    description: 'average across all courses',
    icon: ChartBar,
    color: '#FF6B35',
  },
  {
    id: 4,
    title: 'Profile View ',
    number: 2.8,
    text: 'K',
    description: '3.8% this weak',
    icon: Eye,
    color: '#9333EA',
  },
];
