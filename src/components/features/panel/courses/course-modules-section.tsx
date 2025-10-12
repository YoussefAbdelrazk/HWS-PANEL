import { Course } from '@/lib/data/courses';
import { CourseCard } from './course-card';

interface CourseModulesSectionProps {
  courses: Course[];
}

export function CourseModulesSection({ courses }: CourseModulesSectionProps) {
  return (
    <div className='bg-white py-16'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Course Modules</h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Comprehensive training modules designed to take you from beginner to advanced HIIT
            practitioner.
          </p>
        </div>

        {/* Courses Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
