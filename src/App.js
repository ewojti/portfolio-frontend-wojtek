import React from 'react'
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import './App.scss';


const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App