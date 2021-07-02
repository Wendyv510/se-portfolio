
import React from 'react';
import './App.css'; 
//import { BrowserRouter as Router, Route, } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from "./components/Navbar";
import Header from "./components/Header" 
import Resume from "./components/Resume"
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Navbar />
    <Header /> 
    <About />
    <Resume />
    <ContactMe /> 
    <Footer /> 
    </>
  );
}

export default App;
