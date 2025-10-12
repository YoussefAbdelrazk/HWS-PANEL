import { CourseProgress } from '@/lib/data/courses';
import { Clock } from 'lucide-react';

interface ProgressSectionProps {
  progress: CourseProgress;
}

export function ProgressSection({ progress }: ProgressSectionProps) {
  return (
    <div className='bg-gradient-to-b from-[#D7582B] to-[#C9633F] py-8 text-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          {/* Left Side - Progress Info */}
          <div className='flex items-center gap-4'>
            <div className='bg-yellow-400 rounded-full p-3'>
              <Clock className='w-6 h-6 ' />
            </div>
            <div>
              <div className='text-lg font-semibold '>
                Your Progress: {progress.completed} / {progress.total} Courses Completed
              </div>
              <div className=''>
                Finish your last courses and unlock your Certified Trainer badge.
              </div>
            </div>
          </div>

          {/* Right Side - Progress Circle */}
          <div className='flex items-center gap-4'>
            <div className='relative'>
              <svg className='w-20 h-20 transform -rotate-90' viewBox='0 0 100 100'>
                {/* Background Circle */}
                <circle
                  cx='50'
                  cy='50'
                  r='40'
                  stroke='currentColor'
                  strokeWidth='8'
                  fill='none'
                  className='text-gray-300'
                />
                {/* Progress Circle */}
                <circle
                  cx='50'
                  cy='50'
                  r='40'
                  stroke='currentColor'
                  strokeWidth='8'
                  fill='none'
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress.percentage / 100)}`}
                  className='text-yellow-500 transition-all duration-300'
                  strokeLinecap='round'
                />
              </svg>
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-lg font-bold '>{progress.percentage}%</span>
              </div>
            </div>
            <div className='text-center'>
              <div className='text-sm '>{progress.message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
