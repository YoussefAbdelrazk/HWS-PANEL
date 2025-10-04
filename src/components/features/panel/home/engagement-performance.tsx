'use client';
import { energyLevelData, profileViewsData } from '@/lib/data/engagement';
import EnergyLevelCard from './energy-level-card';
import ProfileViewsCard from './profile-views-card';

export default function EngagementPerformance() {
  return (
    <div className='space-y-6 bg-white rounded p-6 '>
      {/* Header */}
      <div className='text-center md:text-left'>
        <h2 className='text-3xl font-semibold text-[#344054] mb-2'>Engagement & Performance</h2>
        <p className='text-sm text-[#667085]'>
          Track your influence and impact in the fitness community
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <ProfileViewsCard data={profileViewsData} />
        <EnergyLevelCard data={energyLevelData} />
      </div>
    </div>
  );
}
