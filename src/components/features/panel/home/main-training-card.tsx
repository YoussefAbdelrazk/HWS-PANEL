'use client';
import { Progress } from '@/components/ui/progress';
import { TrainingCourse } from '@/lib/data/training';
import { Calendar, Clock, Play } from 'lucide-react';
import React from 'react';

interface MainTrainingCardProps {
  course: TrainingCourse;
}

export default function MainTrainingCard({ course }: MainTrainingCardProps) {
  return (
    <div className='bg-white p-6 rounded'>
      {/* Header */}
      <div className='mb-6'>
        <h2 className='text-3xl font-semibold text-[#344054] mb-2'>Your Training Progress</h2>
        <p className='text-sm text-[#667085]'>{course.description}</p>
      </div>

      <div className='border-1 border-[#D0D5DD p-3 rounded-lg'>
        {/* Course Info */}
        <div className='flex items-start justify-between mb-6'>
          <div className='flex items-start gap-4'>
            <div
              className='w-12 h-12 rounded-full flex items-center justify-center text-black'
              style={{ backgroundColor: course.color }}
            >
              {React.createElement(course.icon, { size: 24 })}
            </div>
            <div>
              <h3 className='text-xl font-semibold text-[#344054] mb-1'>{course.title}</h3>
              <p className='text-sm text-[#667085]'>{course.module}</p>
            </div>
          </div>

          <div className='text-right'>
            <div className='text-3xl font-bold' style={{ color: course.color }}>
              {course.progress}%
            </div>
            <p className='text-sm text-[#344054]'>Complete</p>
          </div>
        </div>

        {/* Progress Section */}
        <div className='mb-6'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm font-medium text-[#344054]'>Progress</span>
            <span className='text-sm text-[#667085]'>{course.hoursRemaining} hours remaining</span>
          </div>
          <Progress
            value={course.progress}
            className='h-2'
            style={
              {
                '--progress-color': course.color,
              } as React.CSSProperties
            }
          />
        </div>

        {/* Footer */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <Clock size={16} className='text-[#667085]' />
              <span className='text-sm text-[#667085]'>Last Accessed: {course.lastAccessed}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Calendar size={16} className='text-[#667085]' />
              <span className='text-sm text-[#667085]'>Due: {course.dueDate}</span>
            </div>
          </div>

          <button
            className='px-6 py-3 rounded-lg text-black font-medium flex items-center gap-2'
            style={{ backgroundColor: course.color }}
          >
            <Play size={16} />
            Continue Training
          </button>
        </div>
      </div>
    </div>
  );
}
