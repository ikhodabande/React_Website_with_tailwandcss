import React from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/activities';


function App() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activities/>
    </div>
  );
}

export default App;
