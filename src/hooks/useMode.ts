import { useContext } from 'react';
import { ModeContext } from '../contexts/modeContext';

export function useMode() {
  const context = useContext(ModeContext);

  if (!context) {
    throw new Error('useMode must be used inside ModeContextProvider');
  }

  return context;
}