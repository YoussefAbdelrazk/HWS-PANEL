import { Button } from '@/components/ui/button';
import { navbarData } from '@/lib/data/navbar';
import { Bell, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className=' py-4 bg-gray-100 '>
      <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 w-full'>
        <div className='flex items-center gap-2'>
          <Image src='/assets/logo.png' alt='Hawssa' width={100} height={100} />
        </div>
        <div className='hidden lg:flex items-center gap-12 text-md font-semibold text-[#323232CC]'>
          {navbarData.map(item => (
            <Link
              href={item.href}
              key={item.id}
              className='group relative hover:font-bold hover:scale-105 transition-all duration-300'
            >
              {item.name}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F7F225] to-[#E8CE23] transition-all duration-300 group-hover:w-full'></span>
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='sm'>
            <Bell />
          </Button>
          <Button variant='ghost' size='sm'>
            <User />
          </Button>
        </div>
      </div>
    </div>
  );
}
