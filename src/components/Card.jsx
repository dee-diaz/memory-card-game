import { useContext } from 'react';
import { SoundContext } from '../contexts/soundContext';
import { playSoundEffect } from './SoundControl';

export default function Card({
  pokemon,
  className,
  isRotated,
  onCardClick,
}) {
  const { isSoundOn } = useContext(SoundContext);

  function handleClick() {
    onCardClick?.(pokemon.name);
    if (isSoundOn) playSoundEffect();
  }


  return (
    <button
      onClick={handleClick}
      className={`relative h-68 transform-3d perspective-midrange will-change-transform ${className} bg-(--clr-bg-card) cursor-pointer rounded-3xl border-2 border-(--clr-border) shadow-(--shadow-card) hover:bg-(--clr-bg-card-hover) lg:border-3 ${isRotated ? 'rotate-y-360 transition-transform duration-1200 ease-out' : ''}`}
    >
      <div className="front absolute inset-0 w-full h-full backface-hidden">
        <div className="h-32 p-5 lg:h-48 2xl:p-10">
          <img className="w-full h-full" src={pokemon.image} alt={pokemon.name} />
        </div>

        <div className="h-16 border-t-2 flex items-center justify-center lg:border-t-3 lg:min-h-20">
          <p className="text-center uppercase text-xl">{pokemon.name}</p>
        </div>
      </div>

      <div className="flex justify-center items-center absolute inset-0 w-full h-full bg-[url('/card-back.webp')] bg-no-repeat bg-cover backface-hidden rotate-y-180 rounded-3xl">
        <img className="w-40" src="/card-back.webp" alt="" />
      </div>
    </button>
  );
}
