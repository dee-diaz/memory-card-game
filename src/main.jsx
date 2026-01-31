import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SoundContextProvider from './contexts/soundContext';
import ModeContextProvider from './contexts/modeContext';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SoundContextProvider>
      <ModeContextProvider>
        <App />
      </ModeContextProvider>
    </SoundContextProvider>
  </StrictMode>,
);
