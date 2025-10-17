import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin } from 'lucide-react';

export default function LocationDetailsSection() {
  return (
    <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
      {/* Section Header */}
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
          <MapPin className='w-4 h-4 text-black' />
        </div>
        <h2 className='text-xl font-semibold text-gray-800'>Location Details</h2>
      </div>

      {/* Form Fields */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Country */}
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700'>
            Country <span className='text-red-500'>*</span>
          </label>
          <Select defaultValue='egypt'>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select Country' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='egypt'>Egypt</SelectItem>
              <SelectItem value='saudi'>Saudi Arabia</SelectItem>
              <SelectItem value='uae'>UAE</SelectItem>
              <SelectItem value='kuwait'>Kuwait</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Government */}
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700'>
            Government <span className='text-red-500'>*</span>
          </label>
          <Select defaultValue='cairo'>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select Government' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='cairo'>Cairo</SelectItem>
              <SelectItem value='alexandria'>Alexandria</SelectItem>
              <SelectItem value='giza'>Giza</SelectItem>
              <SelectItem value='sharkia'>Sharkia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* City */}
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700'>
            City <span className='text-red-500'>*</span>
          </label>
          <div className='flex gap-2'>
            <Select defaultValue='naser-city'>
              <SelectTrigger className='flex-1'>
                <SelectValue placeholder='Select City' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='naser-city'>Naser City</SelectItem>
                <SelectItem value='new-cairo'>New Cairo</SelectItem>
                <SelectItem value='maadi'>Maadi</SelectItem>
                <SelectItem value='zamalek'>Zamalek</SelectItem>
              </SelectContent>
            </Select>
            {/* <Button className='bg-yellow-400 text-black border border-black hover:bg-yellow-300 px-4'>
              <MapPin className='w-4 h-4' />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
