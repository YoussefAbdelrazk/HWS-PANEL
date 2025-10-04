'use client';
import React from 'react';

export default function Card({
  title,
  description,
  icon,
  color,
  number,
  text,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  number: number;
  text: string;
}) {
  return (
    <div className='relative rounded-lg p-6 bg-white shadow-lg '>
      <div
        className="absolute top-0 left-0 content-[''] w-1 h-full rounded-t-3xl"
        style={{ backgroundColor: color }}
      ></div>
      <div className=''>
        <div className='flex items-center justify-between gap-2'>
          <h2 className='text-lg font-semibold  text-gray-500'>{title}</h2>
          <p className='rounded-full p-2 text-white' style={{ backgroundColor: color }}>
            {React.createElement(icon)}
          </p>
        </div>
        <div>
          <h3 className='text-4xl font-bold capitalize'>
            {number} <span className='text-sm'>{text}</span>
          </h3>
          <p className='text-sm text-gray-500'>{description}</p>
        </div>
      </div>
    </div>
  );
}
