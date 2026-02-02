import { useState, useEffect } from 'react';
import { MODE } from './ModeSelection';
import Card from './Card';

export default function CardGrid({ mode, cards, onCardClick }) {
  const [isRotated, setIsRotated] = useState(false);

  let gridColsClass;
  let maxWidth;

  useEffect(() => {
    if (!isRotated) return;

    const timer = setTimeout(() => setIsRotated(false), 1000);
    return () => clearTimeout(timer);
  }, [isRotated]);

  function handleCardClick(cardName) {
    setIsRotated(true);
    onCardClick(cardName);
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
            key={card}
            pokemonName={card} isRotated={isRotated}
            className="lg:col-start-2"
            onCardClick={handleCardClick}
          />
        ) : (
          <Card key={card} pokemonName={card} isRotated={isRotated} onCardClick={handleCardClick} />
        );
      })}
    </div>
  );
}
