import { useState, useContext } from 'react';
import { ModeContext } from './contexts/modeContext';
import Layout from './components/Layout';
import SoundButton from './components/SoundControl';
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
  const { mode } = useContext(ModeContext);
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
    <Layout>
      {mode ? (
        <>
          <Header />
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
          <ModeSelection />
          <Footer />
        </>
      )}
    </Layout>
  );
}

export default App;
