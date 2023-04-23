import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './js/App';
import 'normalize.css';
import './scss/style.scss';

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
