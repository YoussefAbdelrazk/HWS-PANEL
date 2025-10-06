'use client';

import { useState } from 'react';

interface PlanToggleProps {
  onToggle: (isYearly: boolean) => void;
}

export function PlanToggle({ onToggle }: PlanToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    const newValue = !isYearly;
    setIsYearly(newValue);
    onToggle(newValue);
  };

  return (
    <div className='flex justify-center mb-12'>
      <div className='bg-gray-200 rounded-full p-1 flex'>
        <button
          onClick={handleToggle}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            !isYearly ? 'bg-yellow-400 text-black shadow-sm' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Monthly Plan
        </button>
        <button
          onClick={handleToggle}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            isYearly ? 'bg-yellow-400 text-black shadow-sm' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Yearly Plan
        </button>
      </div>
    </div>
  );
}
