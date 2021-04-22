
import React from 'react';
import './App.css'; 
//import { BrowserRouter as Router, Route, } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from "./components/Navbar";
import Header from "./components/Header" 
import ContactMe from "./components/ContactMe" 
import Resume from "./components/Resume"

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Resume /> 
    <ContactMe /> 
    </>
  );
}

export default App;
