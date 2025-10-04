import { Eye, Zap } from 'lucide-react';

export interface ProfileViewsData {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  mainMetric: number;
  changePercentage: number;
  changeType: 'increase' | 'decrease';
  breakdown: {
    label: string;
    value: number;
  }[];
}

export interface EnergyLevelData {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  currentLevel: number;
  changePercentage: number;
  changeType: 'increase' | 'decrease';
  weeklyGoal: number;
  aboveTarget: number;
}

export const profileViewsData: ProfileViewsData = {
  id: 1,
  title: 'Monthly Profile Views',
  description: 'Your fitness expertise is gaining attention!',
  icon: Eye,
  iconColor: '#EF4444',
  mainMetric: 23500,
  changePercentage: 12,
  changeType: 'increase',
  breakdown: [
    { label: 'Profile Visits', value: 8565 },
    { label: 'Courses Preview', value: 3245 },
  ],
};

export const energyLevelData: EnergyLevelData = {
  id: 2,
  title: 'Energy Level',
  description: 'Keep your motivation burning bright!',
  icon: Zap,
  iconColor: '#8B5CF6',
  currentLevel: 94,
  changePercentage: 12,
  changeType: 'increase',
  weeklyGoal: 85,
  aboveTarget: 9,
};
