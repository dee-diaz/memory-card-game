import { useContext } from 'react';
import { SoundContext } from '../contexts/soundContext';

export function useSound() {
  const context = useContext(SoundContext);

  if (!context) {
    throw new Error('useSound must be used inside SoundContextProvider');
  }

  return context;
}