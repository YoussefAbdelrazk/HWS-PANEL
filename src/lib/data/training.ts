import { BookOpen, Dumbbell, Flame } from 'lucide-react';

export interface TrainingCourse {
  id: number;
  title: string;
  module: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'not-started';
  icon: React.ElementType;
  color: string;
  hoursRemaining?: number;
  lastAccessed?: string;
  dueDate?: string;
  certificateEarned?: string;
  description?: string;
}

export const mainTrainingCourse: TrainingCourse = {
  id: 1,
  title: 'Advanced HIIT Training Certification',
  module: 'Module 7 of 12 - High Intensity Interval Protocols',
  progress: 68,
  status: 'in-progress',
  icon: Flame,
  color: '#F7F225',
  hoursRemaining: 8.2,
  lastAccessed: '2 Hours Ago',
  dueDate: 'Nov 30, 2025',
  description: 'Continue where you left off and keep pushing your limits',
};

export const additionalCourses: TrainingCourse[] = [
  {
    id: 2,
    title: 'Strength Training Basics',
    module: 'Complete Course',
    progress: 100,
    status: 'completed',
    icon: Dumbbell,
    color: '#10B981',
    certificateEarned: 'Oct 15, 2024',
  },
  {
    id: 3,
    title: 'Strength Training Basics',
    module: 'Module 3 of 8',
    progress: 45,
    status: 'in-progress',
    icon: Dumbbell,
    color: '#F59E0B',
    hoursRemaining: 3.2,
  },
  {
    id: 4,
    title: 'Strength Training Basics',
    module: 'Not Started',
    progress: 0,
    status: 'not-started',
    icon: BookOpen,
    color: '#6B7280',
    description: 'Available after current course',
  },
];
