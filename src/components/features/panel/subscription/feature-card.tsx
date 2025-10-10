import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor,
  bgColor,
  borderColor,
}: FeatureCardProps) {
  return (
    <div
      className={`${bgColor} ${borderColor} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
    >
      {/* Icon Container */}
      <div
        className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className='w-6 h-6' />
      </div>

      {/* Content */}
      <div>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
        <p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
      </div>
    </div>
  );
}
