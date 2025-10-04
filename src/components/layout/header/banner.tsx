import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function banner() {
  return (
    <div className='bg-gradient-to-b from-[#D7582B] to-[#C9633F] py-10'>
      <div className='max-w-[1240px] mx-auto px-4 w-full'>
        <div className='flex justify-between items-center gap-4'>
          <div className='flex items-center gap-2 text-white'>
            <div className='bg-blur-md rounded-full p-2'>
              <Image src='/assets/medal-star.svg' alt='Hawssa' width={50} height={50} />
            </div>
           <div>
           <h2 className='text-3xl font-bold text-white'>Premium Trainer Plan Active</h2>
            <p className='text-base'>
              Your subscription expires in 23 days. Renew now to continue accessing premium
              features!
            </p>
           </div>
          </div>

          {/* second section */}
          <div className='flex items-center gap-4'>
            <div className='text-white capitalize'>
              <p className='text-[12px]'>next bliling date </p>
              <p className='font-bold text-lg'>November 20, 2025</p>
            </div>
            <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black font-semibold rounded-md py-6 text-lg transition-colors border-yellow-500 border-2 '>
              Renew Subscription
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
