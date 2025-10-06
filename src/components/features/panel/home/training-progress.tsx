'use client';
import Section from '@/components/layout/header/section';
import { additionalCourses, mainTrainingCourse } from '@/lib/data/training';
import AdditionalTrainingCards from './additional-training-cards';
import MainTrainingCard from './main-training-card';

export default function TrainingProgress() {
  return (
    <Section>
      <div className='space-y-6 bg-white rounded shadow-lg mb-8 '>
        {/* Main Training Progress Card */}
        <MainTrainingCard course={mainTrainingCourse} />

        {/* Additional Training Cards */}
        <AdditionalTrainingCards courses={additionalCourses} />
      </div>
    </Section>
  );
}
