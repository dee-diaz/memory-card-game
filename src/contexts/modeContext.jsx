import { createContext, useState } from 'react';

export const ModeContext = createContext(null);

export default function ModeContextProvider({ children }) {
  const [mode, setMode] = useState(null);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
