import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
// import Products from './pages/Products.jsx';
// import Setting from './pages/Settings.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Login />
      {/* <Products /> */}
      {/* <Setting /> */}
      {/* <App /> */}
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);


