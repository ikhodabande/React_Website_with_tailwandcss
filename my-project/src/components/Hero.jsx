import React from 'react';


function Hero() {
  return (
    <div className='w-full h-[90vh] '>
      <img src="https://images.unsplash.com/photo-1697462248408-25479e5acfb0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" 
      className='w-full h-full object-cover'
      />

    <div className='max-w-[1140px] w-full md:-[50%] max-width-[600px] h-full flex flex-col text-white p-4'>
      <div>

        <h1>Take your special offers</h1>
        <h2>happy trips</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis libero cum ullam,
           rerum praesentium architecto earum aut reprehenderit! Nihil.</p>

      </div>
    </div> 
    </div>
  )
}

export default Hero