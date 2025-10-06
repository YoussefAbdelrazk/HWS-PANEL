'use client';
import Section from '@/components/layout/header/section';
import { EnergyLevelData } from '@/lib/data/engagement';
import { TrendingUp } from 'lucide-react';
import React from 'react';

interface EnergyLevelCardProps {
  data: EnergyLevelData;
}

export default function EnergyLevelCard({ data }: EnergyLevelCardProps) {
  return (
    <Section>
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
          <div className='text-4xl font-bold text-[#344054] mb-2'>{data.currentLevel}%</div>
          <div className='flex items-center gap-1'>
            <TrendingUp size={16} className='text-green-500' />
            <span className='text-sm text-green-500 font-medium'>
              {data.changePercentage}% high energy
            </span>
          </div>
        </div>

        {/* Progress Section */}
        <div className='space-y-3'>
          <div className='flex justify-between items-center'>
            <span className='text-sm font-medium text-[#344054]'>
              Weekly goal: {data.weeklyGoal}%
            </span>
            <span className='text-sm font-medium' style={{ color: data.iconColor }}>
              +{data.aboveTarget}% above target
            </span>
          </div>

          {/* Progress Bar */}
          <div className='relative'>
            <div className='w-full bg-gray-200 rounded-full h-3'>
              <div
                className='h-3 rounded-full transition-all duration-500'
                style={{
                  width: `${data.currentLevel}%`,
                  backgroundColor: data.iconColor,
                }}
              />
            </div>
            {/* Goal Marker */}
            <div
              className='absolute top-0 h-3 w-0.5 bg-gray-400'
              style={{ left: `${data.weeklyGoal}%` }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
