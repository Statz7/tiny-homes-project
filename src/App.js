import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import EditIcon from './assets/Vector.png';
import CheckBoxBlank from './assets/Property 1=Check box outline blank.png';
import CheckBox from './assets/Property 1=Check box.png';
import SelectBlank from './assets/Selected=false.png';
import SelectSelected from './assets/Selected=True.png';
import DeleteIcon from './assets/delete.png';
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