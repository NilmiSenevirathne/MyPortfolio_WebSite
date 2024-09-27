import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
   <Router>
          <Navbar/>

          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>

   </Router>
  );
}

export default App;
