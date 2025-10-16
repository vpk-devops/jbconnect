import React from 'react';
import { createRoot } from 'react-dom/client';
import '@ionic/react/css/core.css';
import App from './App';
import './theme/variables.css'
import { setupIonicReact } from '@ionic/react';

// Add this configuration object
setupIonicReact({
  scrollPadding: false,
  scrollAssist: false,
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);