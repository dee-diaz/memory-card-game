import { useSound } from '../hooks/useSound';
import { useMode } from '../hooks/useMode';
import { playSoundEffect } from './SoundControl';

export const BTN_LABELS = {
  CHANGE_MODE: 'Change mode',
  RESTART: 'Restart',
};

type ButtonLabel = (typeof BTN_LABELS)[keyof typeof BTN_LABELS];

interface ButtonProps {
  label: ButtonLabel,
  onClick: () => void;
}


export default function Button({ label, onClick } : ButtonProps) {
  const { isSoundOn } = useSound();
  const { setMode } = useMode();

  function handleClick(): void {
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
