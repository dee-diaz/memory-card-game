import { useState } from 'react';
import { useMode } from './hooks/useMode';
import { useGame } from './hooks/useGame';
import Layout from './components/Layout';
import SoundButton from './components/SoundControl';
import ModeSelection from './components/ModeSelection';
import Footer from './components/Footer';
import Header from './components/Header';
import Game, { NUM_OF_CARDS } from './components/Game';
import GameOverDialog from './components/GameOverDialog';
import Scoreboard from './components/Scoreboard';
import ProgressIndicator from './components/ProgressIndicator';

function App() {
  const { mode } = useMode();
  const [touchedCards, setTouchedCards] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const { isGameOver, setIsGameOver } = useGame();
  const [isWinner, setIsWinner] = useState<boolean | null>(null);

  function handleCardClick(cardTitle: string): void {
    if (touchedCards.includes(cardTitle)) {
      setIsWinner(false);
      setIsGameOver(true);
    } else {
      const newTouchedCards = [...touchedCards, cardTitle];
      setTouchedCards(newTouchedCards);
      setScore((prev) => prev + 1);
      if (!mode) return;

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
          <Game
            mode={mode}
            onCardClick={handleCardClick}
          >
            <ProgressIndicator
              progress={score}
              numOfCards={NUM_OF_CARDS[mode]}
            />
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
