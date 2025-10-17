import { Input } from '@/components/ui/input';
import { Building2 } from 'lucide-react';

export default function GymDetailsSection() {
  return (
    <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
      {/* Section Header */}
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
          <Building2 className='w-4 h-4 text-black' />
        </div>
        <h2 className='text-xl font-semibold text-gray-800'>Gym Details</h2>
      </div>

      {/* Form Fields */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Gym Name */}
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700'>
            Gym Name <span className='text-red-500'>*</span>
          </label>
          <Input defaultValue='Elite Fitness Center' className='w-full' />
        </div>

        {/* Mobile Number */}
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700'>
            Mobile Number <span className='text-red-500'>*</span>
          </label>
          <Input defaultValue='0123456900' className='w-full' />
        </div>

        {/* WhatsApp Number */}
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700'>
            WhatsApp Number <span className='text-red-500'>*</span>
          </label>
          <Input defaultValue='0123456000' className='w-full' />
        </div>
      </div>
    </div>
  );
}
