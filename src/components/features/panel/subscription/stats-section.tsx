import { Award, Star, TrendingUp, Users } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Trainers',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Success Rate',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'User Rating',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Awards Won',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
];

export function StatsSection() {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Trusted by Fitness Professionals Worldwide
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Join a community of successful trainers who have transformed their businesses with our
            platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} ${stat.borderColor} border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 ${stat.color} ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className='w-6 h-6' />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className='text-gray-600 font-medium'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
