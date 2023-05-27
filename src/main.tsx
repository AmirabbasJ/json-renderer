import './global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { render } from './app';
import { data } from './data-layer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>{render(data)}</React.StrictMode>,
);
