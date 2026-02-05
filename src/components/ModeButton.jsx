import { useContext } from 'react';
import { SoundContext } from '../contexts/soundContext';
import { ModeContext } from '../contexts/modeContext';
import { MODE } from './ModeSelection';
import { playSoundEffect } from './SoundControl';

export default function ModeButton({ mode }) {
  const { isSoundOn } = useContext(SoundContext);
  const { setMode } = useContext(ModeContext);

  function handleClick() {
    if (isSoundOn) playSoundEffect('btn');
    setMode(mode);
  }

  const bgColors = {
    [MODE.EASY]: 'bg-[var(--clr-btn-easy)]',
    [MODE.MEDIUM]: 'bg-[var(--clr-btn-medium)]',
    [MODE.HARD]: 'bg-[var(--clr-btn-hard)]',
    default: 'bg-[var(--clr-btn-primary)]',
  };
  const bgClr = bgColors[mode] || bgColors.default;

  return (
    <button
      type="button"
      className={`cursor-pointer ${bgClr} py-4 px-8 rounded-2xl uppercase text-2xl border-3 border-(--clr-border) shadow-(--shadow) transition-[box-shadow,translate,scale] duration-300 ease-out hover:shadow-(--shadow-hover) hover:-translate-y-0.5 active:scale-[0.95]`}
      onClick={handleClick}
    >
      {mode}
    </button>
  );
}
