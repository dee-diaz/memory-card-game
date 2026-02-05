import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = createContext(null);

export default function GameContextProvider({ children }) {
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <GameContext.Provider value={{ isGameOver, setIsGameOver }}>
      {children}
    </GameContext.Provider>
  );
}
