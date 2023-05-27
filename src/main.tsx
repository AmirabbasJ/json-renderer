import './global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { JsonRenderer } from './app';
import { getData } from './data-layer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <JsonRenderer schema={getData()} />
    </HelmetProvider>
  </React.StrictMode>,
);
