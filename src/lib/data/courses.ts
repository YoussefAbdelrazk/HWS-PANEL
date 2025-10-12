export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  videoCount: number;
  duration: string;
  status: 'completed' | 'in-progress' | 'not-started';
  progress?: number;
  completionDate?: string;
  timeLeft?: string;
  buttonText: string;
  isLocked?: boolean;
}

export interface CourseProgress {
  completed: number;
  total: number;
  percentage: number;
  message: string;
}

export interface CourseData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  progress: CourseProgress;
  courses: Course[];
}

export const courseData: CourseData = {
  hero: {
    title: 'Your Path To Certification',
    subtitle: 'Boost Your Skills Take Certified Housa Courses',
    description:
      'Complete our official training programs to unlock your Certified Trainer Badge and teach worldwide.',
  },
  progress: {
    completed: 2,
    total: 5,
    percentage: 80,
    message: 'Only a few steps',
  },
  courses: [
    {
      id: 1,
      title: 'Strength Training Basics',
      description: 'Master the fundamentals of strength training and proper form techniques.',
      image: '/assets/course1.png',
      videoCount: 8,
      duration: '4.5 Hours',
      status: 'completed',
      progress: 100,
      completionDate: 'Oct 15, 2024',
      buttonText: 'Review Model',
      isLocked: false,
    },
    {
      id: 2,
      title: 'HIIT Fundamentals',
      description: 'Learn high-intensity interval training principles and workout design.',
      image: '/assets/course2.png',
      videoCount: 8,
      duration: '3.2 Hours',
      status: 'in-progress',
      progress: 45,
      timeLeft: '3.2 hours left',
      buttonText: 'Continue Learning',
      isLocked: false,
    },
    {
      id: 3,
      title: 'Advanced Training Techniques',
      description: 'Advanced methods for experienced trainers and fitness professionals.',
      image: '/assets/course3.png',
      videoCount: 8,
      duration: '5 Hours',
      status: 'not-started',
      buttonText: 'Unlock With Progress',
      isLocked: true,
    },
  ],
};

export const courses: Course[] = courseData.courses;
