import { Calendar, Play, Users } from 'lucide-react';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className='relative h-96 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/assets/release-banner.png'
          alt='Hawssa Releases Hero'
          fill
          className='object-cover'
          priority
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/70' />
      </div>

      {/* Content */}
      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='text-center text-white px-6 max-w-4xl'>
          <h1 className='text-5xl font-bold mb-4'>Hawssa Releases</h1>
          <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
            Discover our latest fitness video albums designed to elevate your workout experience.
            From high-intensity strength training to relaxing mobility sessions.
          </p>

          {/* Feature Tags */}
          <div className='flex flex-wrap justify-center gap-4'>
            <div className='bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2'>
              <Calendar className='w-4 h-4 text-yellow-400' />
              <span className='text-sm font-medium'>Updated Weekly</span>
            </div>
            <div className='bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2'>
              <Play className='w-4 h-4 text-yellow-400' />
              <span className='text-sm font-medium'>HD Video Quality</span>
            </div>
            <div className='bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2'>
              <Users className='w-4 h-4 text-yellow-400' />
              <span className='text-sm font-medium'>Expert Trainers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
