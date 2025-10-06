import { Clock } from 'lucide-react';

interface NotificationBannerProps {
  title: string;
  description: string;
  paymentDate: string;
}

export function NotificationBanner({ title, description, paymentDate }: NotificationBannerProps) {
  return (
    <div className='bg-gradient-to-b from-[#D7582B] to-[#C9633F] text-white py-4 px-6'>
      <div className='max-w-[1240px] mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center'>
            <Clock className='w-5 h-5 text-white' />
          </div>
          <div>
            <h3 className='font-bold text-lg'>{title}</h3>
            <p className='text-sm text-orange-100'>{description}</p>
          </div>
        </div>
        <div className='text-right'>
          <p className='text-xs text-orange-100'>payment date</p>
          <p className='font-semibold'>{paymentDate}</p>
        </div>
      </div>
    </div>
  );
}
