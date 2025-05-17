import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/results" element={<ResultScreen />} />
      </Routes>
    </Router>
  );
}

export default App;