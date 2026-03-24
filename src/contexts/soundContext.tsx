import { createContext, useState } from 'react';
import { Props } from '../types/props';

interface SoundContextType {
  isSoundOn: boolean,
  setIsSoundOn: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const SoundContext = createContext<SoundContextType | null>(null);

export default function SoundContextProvider({ children }: Props) {
  const [isSoundOn, setIsSoundOn] = useState(true);

  return (
    <SoundContext.Provider value={{ isSoundOn, setIsSoundOn }}>
      {children}
    </SoundContext.Provider>
  );
}
