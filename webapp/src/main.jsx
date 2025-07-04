import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import App from './App';
import Login from './pages/Login.jsx';
import Products from './pages/Products.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Login /> */}
      <Products />
    </BrowserRouter>
  </React.StrictMode>
);


