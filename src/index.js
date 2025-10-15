import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ButtonProvider } from './ButtonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ButtonProvider>
    <App />
  </ButtonProvider>
);