/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Calculator from './components/Calculator';

const App = () => (
  <BrowserRouter>
    <Calculator />
  </BrowserRouter>
);

export default App;
