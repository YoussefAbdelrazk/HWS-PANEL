import { Award, BarChart3, Clock, Headphones, Shield, Smartphone, Users, Zap } from 'lucide-react';
import { FeatureCard } from './feature-card';

const benefitsData = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Bank-level security with 99.9% uptime guarantee. Your data and payments are always protected.',
    iconColor: 'text-blue-600 bg-blue-50',
    bgColor: 'bg-white',
    borderColor: 'border-blue-200',
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description:
      'Get started immediately after subscription. No waiting periods or complex setup processes.',
    iconColor: 'text-yellow-600 bg-yellow-50',
    bgColor: 'bg-white',
    borderColor: 'border-yellow-200',
  },
  {
    icon: Users,
    title: 'Unlimited Clients',
    description:
      'Manage as many clients as you want. Scale your business without any restrictions.',
    iconColor: 'text-green-600 bg-green-50',
    bgColor: 'bg-white',
    borderColor: 'border-green-200',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track your performance with detailed insights and reports to grow your business.',
    iconColor: 'text-purple-600 bg-purple-50',
    bgColor: 'bg-white',
    borderColor: 'border-purple-200',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Access',
    description: 'Manage your business on-the-go with our intuitive mobile application.',
    iconColor: 'text-indigo-600 bg-indigo-50',
    bgColor: 'bg-white',
    borderColor: 'border-indigo-200',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Get help whenever you need it with our round-the-clock customer support team.',
    iconColor: 'text-pink-600 bg-pink-50',
    bgColor: 'bg-white',
    borderColor: 'border-pink-200',
  },
  {
    icon: Award,
    title: 'Premium Features',
    description: 'Access exclusive tools and features designed for professional fitness trainers.',
    iconColor: 'text-orange-600 bg-orange-50',
    bgColor: 'bg-white',
    borderColor: 'border-orange-200',
  },
  {
    icon: Clock,
    title: 'Time Saving Tools',
    description: 'Automate routine tasks and focus on what matters most - training your clients.',
    iconColor: 'text-teal-600 bg-teal-50',
    bgColor: 'bg-white',
    borderColor: 'border-teal-200',
  },
];

export function BenefitsSection() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Why Choose Our Platform?
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Discover the powerful features and benefits that make our platform the perfect choice
            for professional fitness trainers looking to grow their business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {benefitsData.map((benefit, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconColor={benefit.iconColor}
              bgColor={benefit.bgColor}
              borderColor={benefit.borderColor}
            />
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className='text-center mt-12'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>Ready to Transform Your Training Business?</h3>
            <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
              Join thousands of successful trainers who have already elevated their careers with our
              platform.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                Start Free Trial
              </button>
              <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'>
                View Pricing Plans
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
