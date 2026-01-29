import { useState } from 'react';
import SoundControl from './components/SoundControl';
import ModeSelection from './components/ModeSelection';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';
import GameOverDialog from './components/GameOverDialog';

const GAME_RESULT = {
  WIN: 'win',
  LOSE: 'lose',
};

function App() {
  const [mode, setMode] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function restartGame() {
    console.log('Restart game');
  }

  return (
    <div className="bg-[url(/bg-image.webp)] bg-no-repeat bg-center bg-cover min-h-screen flex flex-col justify-between px-4 py-4 before:absolute before:inset-0 before:w-full before:h-full before:bg-(--clr-overlay)">
      {/* <>
        <SoundControl />
        <ModeSelection onClick={(value) => setMode(value)} />
        <Footer />
      </> */}

      <Header />
      <Game />
      <Footer />
      {isGameOver && (
        <GameOverDialog result={GAME_RESULT.WIN} onClose={() => setIsGameOver(false)} />
      )}
    </div>
  );
}

export default App;
