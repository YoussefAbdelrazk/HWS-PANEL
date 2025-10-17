'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function AvailabilityScheduleSection() {
  const [availability, setAvailability] = useState({
    monday: { enabled: true, startTime: '12:00 AM', endTime: '7:00 PM' },
    tuesday: { enabled: true, startTime: '12:00 AM', endTime: '7:00 PM' },
    wednesday: { enabled: true, startTime: '12:00 AM', endTime: '7:00 PM' },
    thursday: { enabled: true, startTime: '12:00 AM', endTime: '7:00 PM' },
    friday: { enabled: true, startTime: '12:00 AM', endTime: '7:00 PM' },
    saturday: { enabled: false, startTime: 'Start Time', endTime: 'End Time' },
    sunday: { enabled: false, startTime: 'Start Time', endTime: 'End Time' },
  });

  const handleDayToggle = (day: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof prev],
        enabled: !prev[day as keyof typeof prev].enabled,
      },
    }));
  };

  const handleTimeChange = (day: string, field: 'startTime' | 'endTime', value: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  return (
    <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
      {/* Section Header */}
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
          <Calendar className='w-4 h-4 text-black' />
        </div>
        <h2 className='text-xl font-semibold text-gray-800'>Availability & Schedule</h2>
      </div>

      {/* Daily Schedule */}
      <div className='space-y-4'>
        {daysOfWeek.map(day => {
          const dayKey = day.toLowerCase() as keyof typeof availability;
          const dayData = availability[dayKey];

          return (
            <div
              key={day}
              className='flex items-center gap-4 p-4 border border-gray-200 rounded-lg'
            >
              {/* Checkbox */}
              <Checkbox
                checked={dayData.enabled}
                onCheckedChange={() => handleDayToggle(dayKey)}
                className='w-5 h-5'
              />

              {/* Day Name */}
              <div className='w-24 text-sm font-medium text-gray-700'>{day}</div>

              {/* Time Inputs */}
              <div className='flex items-center gap-2 flex-1'>
                <div className='relative flex-1'>
                  <Clock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                  <Input
                    value={dayData.startTime}
                    onChange={e => handleTimeChange(dayKey, 'startTime', e.target.value)}
                    className={`pl-10 ${
                      dayData.enabled
                        ? 'bg-yellow-50 border-yellow-300'
                        : 'bg-gray-50 border-gray-300'
                    }`}
                    disabled={!dayData.enabled}
                  />
                </div>

                <span
                  className={`text-lg font-bold ${
                    dayData.enabled ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  -
                </span>

                <div className='relative flex-1'>
                  <Clock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                  <Input
                    value={dayData.endTime}
                    onChange={e => handleTimeChange(dayKey, 'endTime', e.target.value)}
                    className={`pl-10 ${
                      dayData.enabled
                        ? 'bg-yellow-50 border-yellow-300'
                        : 'bg-gray-50 border-gray-300'
                    }`}
                    disabled={!dayData.enabled}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
