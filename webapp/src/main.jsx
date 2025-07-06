import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import App from './App';

import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'

import Login from './pages/Login.jsx';
import Products from './pages/Products.jsx';
import Setting from './pages/Settings.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header />
      <Sidebar /> */}
      <Login />
      {/* <Products />
      <Setting /> */}
    </BrowserRouter>
  </React.StrictMode>
);


