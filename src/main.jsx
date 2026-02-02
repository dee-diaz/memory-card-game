import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SoundContextProvider from './contexts/soundContext';
import ModeContextProvider from './contexts/modeContext';
import GameContextProvider from './contexts/gameContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameContextProvider>
      <SoundContextProvider>
        <ModeContextProvider>
          <App />
        </ModeContextProvider>
      </SoundContextProvider>
    </GameContextProvider>
  </StrictMode>,
);
