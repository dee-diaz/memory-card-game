import { useState, useEffect } from 'react';
import { MODE } from './ModeSelection';
import Card from './Card';
import { useGame } from '../hooks/useGame';
import type { Mode } from '../contexts/modeContext';
import { Pokemon } from './Game';

interface CardGridProps {
  mode: Mode;
  pokemons: Pokemon[];
  onCardClick: (arg: string) => void;
}

export default function CardGrid({ mode, pokemons, onCardClick }: CardGridProps) {
  const { isGameOver } = useGame();
  const [isRotated, setIsRotated] = useState(false);
  const [cards, setCards] = useState<Pokemon[]>(pokemons);

  let gridColsClass;
  let maxWidth;

  useEffect(() => {
    if (!isRotated) return;

    const timer = setTimeout(() => setIsRotated(false), 1000);
    return () => clearTimeout(timer);
  }, [isRotated]);

  useEffect(() => {
    setCards(pokemons);
  }, [pokemons]);

  function flipAndShuffle(): void {
    setIsRotated(true);
    const shuffledCards = shuffleCards(cards);
    setCards(shuffledCards);
  }

  // Fisher-Yates shuffle
  function shuffleCards(array: Pokemon[]) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  if (mode === MODE.EASY || mode === MODE.MEDIUM) {
    gridColsClass = 'lg:grid-cols-5';
    maxWidth = 'lg:max-w-[65.75rem]';
  } else {
    gridColsClass = 'lg:grid-cols-6';
    maxWidth = 'lg:max-w-[81.25rem]';
  }

  return (
    <div
      className={`${maxWidth} mx-auto grid grid-cols-2 gap-5 ${gridColsClass} my-16 md:grid-cols-3`}
    >
      {cards.map((card, index) => {
        return mode === MODE.MEDIUM && index === 5 ? (
          <Card
            key={index}
            pokemon={card}
            isRotated={isRotated && !isGameOver}
            className="lg:col-start-2"
            onCardClick={() => {
              onCardClick(card.name);
              if (!isGameOver) flipAndShuffle();
            }}
          />
        ) : (
          <Card
            key={index}
            pokemon={card}
            isRotated={isRotated && !isGameOver}
            onCardClick={() => {
              onCardClick(card.name);
              if (!isGameOver) flipAndShuffle();
            }}
          />
        );
      })}
    </div>
  );
}