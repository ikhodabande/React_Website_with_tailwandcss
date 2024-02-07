import React from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/activities';
import Booking from './components/Booking';
import Gallery from './components/Gallery';


function App() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Booking/>
      <Gallery/>
    </div>
  );
}

export default App;
