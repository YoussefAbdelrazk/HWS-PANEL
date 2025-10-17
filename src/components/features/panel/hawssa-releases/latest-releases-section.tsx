import AlbumCard from './album-card';

const latestAlbums = [
  {
    id: 1,
    title: 'Advanced HIIT Training',
    description:
      'Master high-intensity interval training techniques and protocols for maximum desired results.',
    videoCount: '8 Video Class',
    image: '/assets/program1.png',
    href: '/hawssa-releases/advanced-hiit-training',
  },
  {
    id: 2,
    title: 'Strength & Power Building',
    description: 'Build explosive strength and power with advanced resistance training techniques.',
    videoCount: '6 Video Class',
    image: '/assets/program2.png',
    href: '/hawssa-releases/strength-power-building',
  },
  {
    id: 3,
    title: 'Flexibility & Mobility',
    description: 'Improve your range of motion and prevent injuries with targeted mobility work.',
    videoCount: '5 Video Class',
    image: '/assets/program3.png',
    href: '/hawssa-releases/flexibility-mobility',
  },
  {
    id: 4,
    title: 'Cardio Blast Workout',
    description: 'High-energy cardio sessions to burn calories and improve cardiovascular health.',
    videoCount: '7 Video Class',
    image: '/assets/program4.png',
    href: '/hawssa-releases/cardio-blast-workout',
  },
  {
    id: 5,
    title: 'Yoga Flow Sessions',
    description: 'Relaxing yoga flows for flexibility, strength, and mental well-being.',
    videoCount: '4 Video Class',
    image: '/assets/program1.png',
    href: '/hawssa-releases/yoga-flow-sessions',
  },
  {
    id: 6,
    title: 'Core Strength Mastery',
    description:
      'Target your core with specialized exercises for a stronger, more stable midsection.',
    videoCount: '6 Video Class',
    image: '/assets/program2.png',
    href: '/hawssa-releases/core-strength-mastery',
  },
];

export default function LatestReleasesSection() {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Section Header */}
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>Latest Releases Album</h2>
          <p className='text-gray-600'>Explore our newest fitness video albums</p>
        </div>

        {/* Album Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {latestAlbums.map(album => (
            <AlbumCard
              key={album.id}
              title={album.title}
              description={album.description}
              videoCount={album.videoCount}
              image={album.image}
              href={album.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
