import React from 'react';
import activitiesImg from '../assetes/activities.avif';

function Activities() {
  return (
    <div className='max-w-[1140px] w-full m-auto md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h2>
        <img
        className='w-full h-full border-4 object-cover relative border-white shadow-lg '
        src={activitiesImg} alt="/" />
      </div>
      <div className='relative p-4 '>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h2>
        <img
        className='w-full h-full border-4 object-cover relative border-white shadow-lg '
        src="https://images.unsplash.com/photo-1496692952400-80a39ee64b09?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
      </div>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h2>
        <img 
        className='w-full h-full border-4 object-cover relative border-white shadow-lg '
        src="https://images.unsplash.com/photo-1503023816554-bee7fc3d8442?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
      </div>
    </div>
  )
}

export default Activities;