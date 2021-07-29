
import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from "./components/Navbar";
import Header from "./components/Header" 
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/Header" component={Header} />
          <Route exact path="/About" component={About} />
          <Route exact path="/ContactMe" component={ContactMe} />
        </Switch>
      <Header /> 
      <About />
      <Footer />
      <ContactMe /> 
     
    </Router>
  );
}

export default App;
