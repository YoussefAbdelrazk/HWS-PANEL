import { Button } from '@/components/ui/button';
import { Edit, Eye } from 'lucide-react';

export default function ProfileBanner() {
  return (
    <div className='relative bg-gradient-to-r from-[#D7582B] to-[#C9633F] py-8 px-24'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-4 left-8 w-16 h-16 bg-white rounded-full'></div>
        <div className='absolute top-12 right-12 w-8 h-8 bg-white rounded-full'></div>
        <div className='absolute bottom-8 left-1/4 w-12 h-12 bg-white rounded-full'></div>
        <div className='absolute bottom-4 right-1/3 w-6 h-6 bg-white rounded-full'></div>
      </div>

      <div className='relative z-10 flex items-center gap-6'>
        {/* Profile Picture */}
        <div className='relative'>
          <div className='w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center'>
              <span className='text-2xl font-bold text-gray-800'>MJ</span>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className='text-white '>
          <h1 className='text-3xl font-bold mb-2'>Mike Johnson</h1>
          <p className='text-lg opacity-90'>Certified Personal Trainer</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='relative z-10 flex justify-center gap-4 mt-6'>
        <Button
          variant='outline'
          className='bg-black text-white border-black hover:bg-gray-800 px-6 py-2'
        >
          <Eye className='w-4 h-4 mr-2' />
          Preview Mode
        </Button>
        <Button className='bg-yellow-400 text-black border border-black hover:bg-yellow-300 px-6 py-2'>
          <Edit className='w-4 h-4 mr-2' />
          Change Data
        </Button>
      </div>
    </div>
  );
}
