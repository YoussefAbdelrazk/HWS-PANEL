'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoCard from './video-card';

const featuredVideos = [
  {
    id: 1,
    title: 'Advanced HIIT Training',
    description:
      'Master high-intensity interval training techniques and protocols for maximum fitness results.',
    duration: '40 min',
    image: '/assets/program1.png',
  },
  {
    id: 2,
    title: 'Strength & Power Building',
    description: 'Build explosive strength and power with advanced resistance training techniques.',
    duration: '45 min',
    image: '/assets/program2.png',
  },
  {
    id: 3,
    title: 'Flexibility & Mobility',
    description: 'Improve your range of motion and prevent injuries with targeted mobility work.',
    duration: '35 min',
    image: '/assets/program3.png',
  },
];

export default function FeaturedSection() {
  return (
    <div className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Section Header */}
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Featured This Month</h2>
            <p className='text-gray-600'>Hand-picked albums by our fitness experts</p>
          </div>

          {/* Navigation Buttons */}
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='icon'
              className='w-10 h-10 rounded-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
            >
              <ChevronLeft className='w-4 h-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='w-10 h-10 rounded-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
            >
              <ChevronRight className='w-4 h-4' />
            </Button>
          </div>
        </div>

        {/* Video Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuredVideos.map(video => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              duration={video.duration}
              image={video.image}
              onWatch={() => console.log(`Watching ${video.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
