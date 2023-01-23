import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Marquee from "./components/Marquee/Marquee";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.scss';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Marquee />
      <Projects />
      <Marquee />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App