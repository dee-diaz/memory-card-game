import { createContext, useState } from 'react';
import { Props } from '../types/props';

type Mode = 'Easy' | 'Medium' | 'Hard';

interface ModeContextType {
  mode: Mode | null;
  setMode: React.Dispatch<React.SetStateAction<Mode | null>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ModeContext = createContext<ModeContextType| null>(null);

export default function ModeContextProvider({ children }: Props) {
  const [mode, setMode] = useState<Mode | null>(null);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
