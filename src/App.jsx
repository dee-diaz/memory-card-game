import { useState } from 'react';
import { MODE } from './components/ModeSelection';
import SoundControl from './components/SoundControl';
import ModeSelection from './components/ModeSelection';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState(null);

  return (
    <div className="bg-[url(/bg-image.webp)] bg-no-repeat bg-center bg-cover min-h-screen flex flex-col justify-between px-4 py-4 before:absolute before:inset-0 before:w-full before:h-full before:bg-(--clr-overlay)">
      <SoundControl />
      <ModeSelection onClick={(value) => setMode(value)} />
      <Footer />
    </div>
  );
}

export default App;
