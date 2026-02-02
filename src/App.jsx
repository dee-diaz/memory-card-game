import { useState, useContext, useEffect } from 'react';
import { ModeContext } from './contexts/modeContext';
import Layout from './components/Layout';
import SoundButton from './components/SoundControl';
import ModeSelection from './components/ModeSelection';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';
import GameOverDialog from './components/GameOverDialog';
import Scoreboard from './components/Scoreboard';
import ProgressIndicator from './components/ProgressIndicator';

const NUM_OF_CARDS = {
  Easy: 5,
  Medium: 8,
  Hard: 12,
};

function App() {
  const { mode } = useContext(ModeContext);
  const [touchedCards, setTouchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(null);

  function handleCardClick(cardTitle) {
    if (touchedCards.includes(cardTitle)) {
      setIsWinner(false);
      setIsGameOver(true);
    } else {
      const newTouchedCards = [...touchedCards, cardTitle];
      setTouchedCards(newTouchedCards);
      setScore((prev) => prev + 1);

      if (newTouchedCards.length === NUM_OF_CARDS[mode]) {
        setIsWinner(true);
        setIsGameOver(true);
      }
    }
  }

  function restart() {
    if (score > bestScore) setBestScore(score);
    setIsGameOver(false);
    setIsWinner(null);
    setScore(0);
    setTouchedCards([]);
  }

  return (
    <Layout>
      {mode ? (
        <>
          <Header onClick={restart}>
            <Scoreboard score={score} bestScore={bestScore} />
          </Header>
          <Game mode={mode} onCardClick={handleCardClick}>
            <ProgressIndicator progress={score} numOfCards={NUM_OF_CARDS[mode]} />
          </Game>
          <Footer />
          {isGameOver && (
            <GameOverDialog
              isOpen={isGameOver}
              isWinner={isWinner}
              onClose={restart}
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
