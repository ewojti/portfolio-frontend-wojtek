import React from 'react'
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Marquee from "./components/Marquee/Marquee";
import './App.scss';


const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Marquee />
    </div>
  );
}

export default App