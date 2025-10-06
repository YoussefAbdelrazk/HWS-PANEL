'use client';

import { subscriptionData } from '@/lib/data/subscription';
import { Award, Calendar, Flame, Star } from 'lucide-react';
import { useState } from 'react';
import { HeroBanner } from './hero-banner';
import { NotificationBanner } from './notification-banner';
import { PlanCard } from './plan-card';
import { PlanToggle } from './plan-toggle';

const planIcons = {
  bronze: <Award className='w-8 h-8' />,
  gold: <Flame className='w-8 h-8' />,
  '3-month': <Calendar className='w-8 h-8' />,
  '1-year': <Star className='w-8 h-8' />,
};

export function SubscriptionContent() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    // Here you would update the pricing based on yearly/monthly
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Banner */}
      <HeroBanner
        title={subscriptionData.hero.title}
        subtitle={subscriptionData.hero.subtitle}
        benefits={subscriptionData.hero.benefits}
      />

      {/* Notification Banner */}
      {subscriptionData.notification && (
        <NotificationBanner
          title={subscriptionData.notification.title}
          description={subscriptionData.notification.description}
          paymentDate={subscriptionData.notification.paymentDate}
        />
      )}

      {/* Main Content */}
      <div className='bg-white py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Choose Your Plan</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Select the subscription that best fits your training business needs. All plans include
              our core features with varying levels of advanced functionality.
            </p>
          </div>

          {/* Plan Toggle */}
          <PlanToggle onToggle={handleToggle} />

          {/* Plans Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {subscriptionData.plans.map(plan => (
              <PlanCard
                key={plan.id}
                plan={plan}
                icon={planIcons[plan.id as keyof typeof planIcons]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
