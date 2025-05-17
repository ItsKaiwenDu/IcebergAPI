import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </Router>
  );
}

export default App;