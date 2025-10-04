export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  duration: string;
  students: number;
  status: 'free' | 'premium';
  buttonText: string;
  isLocked?: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Advanced HIIT Training',
    description:
      'Master high-intensity interval training techniques and protocols for maximum fitness results.',
    image: '/assets/course1.png',
    rating: 4.4,
    duration: '12 Hours',
    students: 847,
    status: 'free',
    buttonText: 'Start Training',
    isLocked: false,
  },
  {
    id: 2,
    title: 'Advanced HIIT Training',
    description:
      'Master high-intensity interval training techniques and protocols for maximum fitness results.',
    image: '/assets/course2.png',
    rating: 4.4,
    duration: '12 Hours',
    students: 847,
    status: 'free',
    buttonText: 'Start Training',
    isLocked: false,
  },
  {
    id: 3,
    title: 'Advanced HIIT Training',
    description:
      'Master high-intensity interval training techniques and protocols for maximum fitness results.',
    image: '/assets/course3.png',
    rating: 4.4,
    duration: '12 Hours',
    students: 847,
    status: 'premium',
    buttonText: 'Unlock With Payment',
    isLocked: true,
  },
];
