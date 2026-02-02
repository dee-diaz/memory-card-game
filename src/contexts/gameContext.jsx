import { createContext, useState } from 'react';

export const GameContext = createContext(null);

export default function GameContextProvider({ children }) {
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <GameContext.Provider value={{ isGameOver, setIsGameOver }}>
      {children}
    </GameContext.Provider>
  );
}
