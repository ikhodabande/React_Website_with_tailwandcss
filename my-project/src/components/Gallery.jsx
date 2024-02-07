import React from 'react'

function Gallery() {
  return (
    <div id='Gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>

      <div className='grid sm:grid-cols-5 gap-4' >
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1482356432770-3a99f07aba35?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1527027328672-18f413db15b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1639323491339-eb7d45b3b022?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Gallery 