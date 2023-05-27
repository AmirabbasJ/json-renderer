import './global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { render } from './app';
import { getData } from './data-layer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>{render(getData())}</HelmetProvider>
  </React.StrictMode>,
);
