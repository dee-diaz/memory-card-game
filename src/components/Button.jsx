import { useContext } from 'react';
import { SoundContext } from '../contexts/soundContext';
import { ModeContext } from '../contexts/modeContext';
import { playSoundEffect } from './SoundControl';

export const BTN_LABELS = {
  CHANGE_MODE: 'Change mode',
  RESTART: 'Restart',
};

export default function Button({ label, onClick }) {
  const { isSoundOn } = useContext(SoundContext);
  const { setMode } = useContext(ModeContext);
  
  function handleClick() {
    if (isSoundOn) playSoundEffect('btn');
    if (label === BTN_LABELS.CHANGE_MODE) setMode(null);
    onClick();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex text-lg w-fit items-center justify-center justify-self-end col-start-2 cursor-pointer bg-white uppercase px-5 py-3 rounded-2xl border-3 border-(--clr-border) shadow-(--shadow) transition-[box-shadow,scale] duration-300 ease-out hover:shadow-(--shadow-hover) active:scale-[0.95] lg:col-start-3 lg:text-xl lg:px-8 lg:py-4"
    >
      {label}
    </button>
  );
}
