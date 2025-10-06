import { Button } from '@/components/ui/button';
import { SubscriptionPlan } from '@/lib/types/subscription';
import { Check, X } from 'lucide-react';

interface PlanCardProps {
  plan: SubscriptionPlan;
  icon: React.ReactNode;
}

export function PlanCard({ plan, icon }: PlanCardProps) {
  return (
    <div className='bg-white rounded-lg shadow-lg p-6 relative border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
          <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
            Most Popular
          </span>
        </div>
      )}

      {/* Header Icon */}
      <div className={`flex justify-center mb-4 ${plan.iconColor}`}>{icon}</div>

      {/* Plan Title */}
      <h3 className='text-xl font-bold text-gray-900 text-center mb-2'>{plan.title}</h3>

      {/* Price */}
      <div className='text-center mb-2'>
        <span className='text-3xl font-bold text-gray-900'>{plan.price}</span>
      </div>

      {/* Description */}
      <p className='text-gray-600 text-center mb-6 text-sm'>{plan.description}</p>

      {/* Features List */}
      <div className='space-y-3 mb-8'>
        {plan.features.map((feature, index) => (
          <div key={index} className='flex items-center gap-3'>
            {feature.isIncluded ? (
              <Check className='w-5 h-5 text-green-500 flex-shrink-0' />
            ) : (
              <X className='w-5 h-5 text-red-500 flex-shrink-0' />
            )}
            <span className={`text-sm ${feature.isIncluded ? 'text-gray-700' : 'text-gray-400'}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Subscribe Button */}
      <Button
        className={`w-full text-white font-medium py-3 rounded-lg transition-colors ${plan.buttonColor}`}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
}
