'use client';
import { Calendar, Play, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import VideoCard from './video-card';

interface ReleaseDetailsContentProps {
  slug: string;
}

const programData = {
  'advanced-hiit-training': {
    title: 'Advanced HIIT Training',

    subtitle: 'new workouts to challenge your limits',
    description:
      'Take a closer look at the key details behind this Hawssa album. This 4-week program is designed for intermediate athletes who want to take their fitness to the next level. Focus on strength and endurance with structured workouts that challenge your limits.',
    duration: '4 weeks',
    level: 'Intermediate',
    type: 'Strength & Endurance',
    releaseDate: 'January 2024',
    features: [
      { icon: Calendar, text: '3 Weekly Direction' },
      { icon: Play, text: 'HD Video Quality' },
      { icon: Users, text: 'Expert Trainers' },
      { icon: Play, text: '8 Video Class' },
    ],
    videos: [
      {
        id: 1,
        title: 'Advanced HIIT Training',
        title2:
          'Discover what this 4-week program is all about  duration, level, and release highlights in one quick view',
        description:
          'Master high-intensity interval training techniques and protocols for maximum desired results.',
        duration: '49 min',
        image: '/assets/program1.png',
      },
      {
        id: 2,
        title: 'Strength & Power Building',
        title2:
          'Discover what this 4-week program is all about  duration, level, and release highlights in one quick view',
        description:
          'Build explosive strength and power with advanced resistance training techniques.',
        duration: '45 min',
        image: '/assets/program2.png',
      },
      {
        id: 3,
        title: 'Flexibility & Mobility',
        title2:
          'Discover what this 4-week program is all about  duration, level, and release highlights in one quick view',
        description:
          'Improve your range of motion and prevent injuries with targeted mobility work.',
        duration: '35 min',
        image: '/assets/program3.png',
      },
      {
        id: 4,
        title: 'Cardio Blast Workout',
        title2:
          'Discover what this 4-week program is all about  duration, level, and release highlights in one quick view',
        description:
          'High-energy cardio sessions to burn calories and improve cardiovascular health.',
        duration: '40 min',
        image: '/assets/program4.png',
      },
      {
        id: 5,
        title: 'Core Strength Mastery',
        title2:
          'Discover what this 4-week program is all about  duration, level, and release highlights in one quick view',
        description:
          'Target your core with specialized exercises for a stronger, more stable midsection.',
        duration: '38 min',
        image: '/assets/program1.png',
      },
      {
        id: 6,
        title: 'Yoga Flow Sessions',
        title2:
          'Discover what this 4-week program is all about  duration, level, and release highlights in one quick view',
        description: 'Relaxing yoga flows for flexibility, strength, and mental well-being.',
        duration: '42 min',
        image: '/assets/program2.png',
      },
    ],
  },
  // Add more program data as needed
};

export default function ReleaseDetailsContent({ slug }: ReleaseDetailsContentProps) {
  const program =
    programData[slug as keyof typeof programData] || programData['advanced-hiit-training'];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-96 overflow-hidden'>
        <Image
          src='/assets/releas-details.png'
          alt={program.title}
          fill
          className='object-cover object-center'
          priority
        />
        <div className='absolute inset-0 bg-black/70' />

        <div className='relative z-10 flex items-center justify-center h-full'>
          <div className='text-center text-white px-6 max-w-4xl'>
            <h1 className='text-5xl font-bold mb-4'>{program.title}</h1>
            <p className='text-2xl font-semibold mb-4 opacity-90'>{program.subtitle}</p>

            {/* Breadcrumbs */}
            <div className='flex items-center justify-center gap-2 text-lg'>
              <Link href='/hawssa-releases' className='hover:text-yellow-400 transition-colors'>
                Hawssa Releases
              </Link>
              <span className='text-gray-400'>›</span>
              <span className='text-yellow-400'>{program.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Text Content */}
            <div className='space-y-6'>
              <div>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                  About {program.title} Program
                </h2>
                <p className='text-gray-600 text-lg'>{program.subtitle}</p>
              </div>

              <p className='text-gray-700 leading-relaxed before:content-[""]  before:block before:w-2 before:h-full before:bg-[#D7582B] before:rounded-full before:mr-2'>
                {program.description}
              </p>

              {/* Feature Cards */}
              <div className='grid grid-cols-2 gap-4'>
                {program.features.map((feature, index) => (
                  <div
                    key={index}
                    className='bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3'
                  >
                    <div className='w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
                      <feature.icon className='w-4 h-4 text-black' />
                    </div>
                    <span className='font-medium text-gray-800'>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className='relative'>
              <Image
                src='/assets/program2.png'
                alt={program.title}
                width={500}
                height={400}
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Program Videos Section */}
      <div className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>{program.title} Program Video</h2>
            <p className='text-gray-600'>
              Browse all the powerful sessions included in this album, each video is crafted to
              boost your strength
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {program.videos.map(video => (
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

      {/* Related Albums Section */}
      <div className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>
              Releases Album May Be Interest
            </h2>
            <p className='text-gray-600'>Explore our newest fitness video albums</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {programData['advanced-hiit-training'].videos.slice(0, 6).map(video => (
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
    </div>
  );
}
