'use client';
import { ProfileViewsData } from '@/lib/data/engagement';
import { TrendingUp } from 'lucide-react';
import React from 'react';

interface ProfileViewsCardProps {
  data: ProfileViewsData;
}

export default function ProfileViewsCard({ data }: ProfileViewsCardProps) {
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      {/* Header */}
      <div className='flex items-start justify-between mb-6'>
        <div className='flex-1'>
          <h3 className='text-lg font-bold text-[#344054] mb-1'>{data.title}</h3>
          <p className='text-sm text-[#667085]'>{data.description}</p>
        </div>
        <div
          className='w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0'
          style={{ backgroundColor: data.iconColor }}
        >
          {React.createElement(data.icon, { size: 24 })}
        </div>
      </div>

      {/* Main Metric */}
      <div className='mb-4'>
        <div className='text-4xl font-bold text-[#344054] mb-2'>
          {formatNumber(data.mainMetric)}
        </div>
        <div className='flex items-center gap-1'>
          <TrendingUp size={16} className='text-green-500' />
          <span className='text-sm text-green-500 font-medium'>
            {data.changePercentage}% vs last month
          </span>
        </div>
      </div>

      {/* Breakdown */}
      <div className='space-y-2'>
        {data.breakdown.map((item, index) => (
          <div key={index} className='flex justify-between items-center'>
            <span className='text-sm text-[#667085]'>{item.label}</span>
            <span className='text-sm font-semibold text-[#344054]'>{formatNumber(item.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
