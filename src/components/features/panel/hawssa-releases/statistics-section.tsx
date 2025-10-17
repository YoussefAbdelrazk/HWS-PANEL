import { Calendar, Clock, Play, Wifi } from 'lucide-react';

const statistics = [
  {
    icon: Play,
    value: '150+',
    label: 'Video Albums',
  },
  {
    icon: Clock,
    value: '2,500+',
    label: 'Hours of Content',
  },
  {
    icon: Calendar,
    value: '2 months',
    label: 'Updated every 2 months',
  },
  {
    icon: Wifi,
    value: '50K+',
    label: 'video Watching',
  },
];

export default function StatisticsSection() {
  return (
    <div className='bg-gradient-to-r from-[#D7582B] to-[#C9633F] py-12'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {statistics.map((stat, index) => (
            <div key={index} className='text-center text-white'>
              <div className='flex justify-center mb-3'>
                <div className='w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center'>
                  <stat.icon className='w-6 h-6 text-black' />
                </div>
              </div>
              <div className='text-3xl font-bold mb-1'>{stat.value}</div>
              <div className='text-sm opacity-90'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
