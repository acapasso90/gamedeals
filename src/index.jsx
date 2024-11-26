import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import App from './App';

import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
);