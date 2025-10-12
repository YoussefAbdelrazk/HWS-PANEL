'use client';

import Team from '@/components/shared/team';
import { courseData } from '@/lib/data/courses';
import { CourseModulesSection } from './course-modules-section';
import { HeroBanner } from './hero-banner';
import { ProgressSection } from './progress-section';

export function CourseContent() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Banner */}
      <HeroBanner
        title={courseData.hero.title}
        subtitle={courseData.hero.subtitle}
        description={courseData.hero.description}
      />

      {/* Progress Section */}
      <ProgressSection progress={courseData.progress} />

      {/* Course Modules Section */}
      <CourseModulesSection courses={courseData.courses} />

      {/* Team Section */}
      <Team />
    </div>
  );
}
