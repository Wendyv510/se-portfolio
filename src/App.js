
import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route, } from "../react-router-dom"
import "../bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from "./Components/Navbar";
import Header from "./Components/Header" 
import About from "./Components/About"
import ContactMe from "./Components/ContactMe"
import Footer from "./Components/Footer"
import Blog from "./Components/Blog" 
import{ init } from '../emailjs-com';
init("user_A6LvA340P4nCzBwlFdqRG");

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/Header" component={Header} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} /> 
          <Route exact path="/ContactMe" component={ContactMe} />
        </Switch>
      <Header /> 
      <About />
      <Blog />
      <Footer />
      <ContactMe /> 
     
    </Router>
  );
}

export default App;
