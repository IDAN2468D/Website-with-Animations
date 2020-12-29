import React, { useState } from "react";
import Navbar from './components/Header/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './gloobalStyle';
import Dropdown from './components/Header/Dropdown';
import About from './pages/About/About';
import Home from "./pages/Home/Home";
import Homes from './pages/Homes/Homes';
import Rentals from './pages/Rentals/Rentals';


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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/homes" component={Homes} />
        <Route path="/rentals" component={Rentals} />
      </Switch>
    </Router>
  );
}

export default App;
