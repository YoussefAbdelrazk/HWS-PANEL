'use client';
import Section from '@/components/layout/header/section';
import { Progress } from '@/components/ui/progress';
import { TrainingCourse } from '@/lib/data/training';
import React from 'react';

interface AdditionalTrainingCardsProps {
  courses: TrainingCourse[];
}

export default function AdditionalTrainingCards({ courses }: AdditionalTrainingCardsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'not-started':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
      default:
        return 'Unknown';
    }
  };

  const getProgressColor = (status: string, color: string) => {
    switch (status) {
      case 'completed':
        return '#10B981';
      case 'in-progress':
        return color;
      case 'not-started':
        return '#E5E7EB';
      default:
        return '#E5E7EB';
    }
  };

  return (
    <Section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>
        {courses.map(course => (
          <div key={course.id} className='bg-white shadow-lg rounded-lg p-4  '>
            {/* Header */}
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-lg font-semibold text-[#344054]'>{course.title}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  course.status,
                )}`}
              >
                {getStatusText(course.status)}
              </span>
            </div>

            {/* Progress Bar */}
            <div className='mb-4'>
              <Progress
                value={course.progress}
                className='h-2'
                style={
                  {
                    '--progress-color': getProgressColor(course.status, course.color),
                  } as React.CSSProperties
                }
              />
            </div>

            {/* Additional Info */}
            <div className='text-sm text-[#667085]'>
              {course.status === 'completed' && course.certificateEarned && (
                <p>Certificate earned on {course.certificateEarned}</p>
              )}
              {course.status === 'in-progress' && course.hoursRemaining && (
                <p>
                  {course.progress}% complete - {course.hoursRemaining} hours left
                </p>
              )}
              {course.status === 'not-started' && course.description && <p>{course.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
