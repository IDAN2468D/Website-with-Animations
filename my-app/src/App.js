import React, { useState } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './gloobalStyle';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import { InfoDataTwo } from './data/InfoData';


function App() {


  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </Router>
  );
}

export default App;
