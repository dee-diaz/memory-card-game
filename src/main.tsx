import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SoundContextProvider from './contexts/soundContext';
import ModeContextProvider from './contexts/modeContext';
import GameContextProvider from './contexts/gameContext';
import './index.css';
import App from './App';

const root = document.getElementById('root');

if (!root) throw new Error('Root element not found');

createRoot(root).render(
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
