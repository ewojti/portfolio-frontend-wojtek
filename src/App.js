import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Marquee from "./components/Marquee/Marquee";
import Projects from './components/Projects/Projects';
import './App.scss';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Marquee />
      <Projects />
      <About />
    </div>
  );
}

export default App