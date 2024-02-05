import React, {useState, useEffect} from 'react';
import { BsChatSquareDots } from 'react-icons/bs';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars
} from 'react-icons/fa'



const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#gallary">Gallary</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div>
        <FaFacebookF className='mx-4'/>
        <FaTwitter className='mx-4'/>
        <FaGooglePlusG className='mx-4'/>
        <FaInstagram className='mx-4'/>
      </div>
    </div>
  )
}

export default Navbar