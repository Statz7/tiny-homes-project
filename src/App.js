import './App.css';
import React from 'react';
import Create from './pages/Create.js';
import Home from './pages/Home.js';
import Settings from './pages/Settings.js';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  
  return (
      

    <div className='App'>

    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/settings" element={<Settings />} />


        </Routes>
      </div>
    </Router>
    </div>
  )  

};
export default App;