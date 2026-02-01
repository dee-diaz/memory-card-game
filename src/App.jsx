import { useState, useContext, useEffect } from 'react';
import { ModeContext } from './contexts/modeContext';
import Layout from './components/Layout';
import SoundButton from './components/SoundControl';
import ModeSelection from './components/ModeSelection';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';
import GameOverDialog from './components/GameOverDialog';

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

  function endRound() {
    setIsGameOver(true);
    if (score > bestScore) setBestScore(score);
  }


  function handleCardClick(cardTitle) {
  if (touchedCards.includes(cardTitle)) {
    setIsWinner(false);
    endRound();
  } else {
    const newTouchedCards = [...touchedCards, cardTitle];
    setTouchedCards(newTouchedCards);
    setScore((prev) => prev + 1);
    
    if (newTouchedCards.length === NUM_OF_CARDS[mode]) {
      setIsWinner(true);
      endRound();
    }
  }
}

  function restart() {
    setIsGameOver(false);
    setIsWinner(null);
    setScore(0);
    setTouchedCards([]);
  }

  return (
    <Layout>
      {mode ? (
        <>
          <Header />
          <Game mode={mode} onCardClick={handleCardClick} />
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
