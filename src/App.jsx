import { useState } from 'react';
import Layout from './components/Layout';
import SoundButton from './components/SoundControl';
import ModeSelection from './components/ModeSelection';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';
import GameOverDialog from './components/GameOverDialog';
import SoundContextProvider from './contexts/soundContext';

const GAME_RESULT = {
  WIN: 'win',
  LOSE: 'lose',
};

function App() {
  const [mode, setMode] = useState(null);
  const [touchedCards, setTouchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function restartGame() {
    // saves the score to bestScore if score > bestScore
    // resets the score
    console.log('Restart game');
  }

  return (
    <SoundContextProvider>
      <Layout>
        {mode ? (
          <>
            <Header onClick={() => setMode(null)} />
            <Game mode={mode} />
            <Footer />
            {isGameOver && (
              <GameOverDialog
                result={GAME_RESULT.WIN}
                onClose={() => setIsGameOver(false)}
              />
            )}
          </>
        ) : (
          <>
            <SoundButton />
            <ModeSelection
              onClick={(value) => setMode(value)}
            />
            <Footer />
          </>
        )}
      </Layout>
    </SoundContextProvider>
  );
}

export default App;
