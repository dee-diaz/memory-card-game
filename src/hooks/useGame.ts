import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used inside GameContextProvider');
  }

  return context;
}
