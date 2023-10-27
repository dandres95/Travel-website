
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home";
import Services from "./Services";
import Products from "./Products";
import SingUp from "./SingUp";


function App() {
  return (
    <>
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} /> 
        <Route path="/services" Component={Services}/>
        <Route path="/products" Component={Products}/>
        <Route path="/sign-up" Component={SingUp}/>

      </Routes>

    </Router>
    
    </>
  );
}

export default App;
