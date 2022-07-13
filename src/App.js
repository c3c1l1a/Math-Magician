/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Calculator from './components/pages/Calculator';
import Quote from './components/pages/Quote';
import './components/css/calculator.css';

const App = () => (
  <Router>
    <div className="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;
