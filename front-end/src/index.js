import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Post } from './components/post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './homepage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/blog/:id' element={<Post />}></Route>
        <Route path='/blog' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);