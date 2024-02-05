import React from 'react';
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BsChatSquareDots} from 'react-icons/bs';

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'  /> 
        <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
      </div>
        <div>
          <AiOutlineClockCircle />
          <p>9AM - 5AM</p>
        </div>
        <div>
          <AiFillPhone/>
          <p>1-888-817-1234</p>
        </div>
        <button>Get a free Quote</button>
    </div>
  )
}

export default Topbar