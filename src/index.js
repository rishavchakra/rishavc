import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Home,
  Code,
  Art,
} from './pages/index.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/code' element={<Code />} />
      <Route path='/art' element={<Art />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
