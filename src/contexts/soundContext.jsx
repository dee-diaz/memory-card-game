import { createContext, useState } from 'react';

export const SoundContext = createContext(null);

export default function SoundContextProvider({ children }) {
  const [isSoundOn, setIsSoundOn] = useState(true);

  return (
    <SoundContext.Provider value={{ isSoundOn, setIsSoundOn }}>
      {children}
    </SoundContext.Provider>
  );
}
