import { createContext, useState } from 'react';
import { Props } from '../types/props';

interface GameContextType {
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = createContext<GameContextType | null>(null);

export default function GameContextProvider({ children }: Props) {
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <GameContext.Provider value={{ isGameOver, setIsGameOver }}>
      {children}
    </GameContext.Provider>
  );
}
