'use client';
import { courses } from '@/lib/data/courses';
import CourseCard from './course-card';

export default function CourseLibrary() {
  return (
    <div className='space-y-6 bg-white rounded shadow-lg mb-8 p-6 '>
      {/* Header */}
      <div className='text-center md:text-left'>
        <h2 className='text-3xl font-semibold text-[#344054] mb-2'>Your Course Library</h2>
        <p className='text-sm text-[#667085]'>Manage and track your fitness training courses.</p>
      </div>

      {/* Course Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
