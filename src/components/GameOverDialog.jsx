import { useRef, useEffect } from 'react';
import Button, { BTN_LABELS } from './Button';

export const GAME_RESULT = {
  WIN: 'win',
  LOSE: 'lose',
};

export default function GameOverDialog({ isOpen, isWinner, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    isOpen ? dialog.showModal() : dialog.close();
  }, [isOpen]);

  const message = isWinner ? 'You win!' : 'You lose...';
  const bgImg = isWinner ? 'bg-[url(/win.webp)]' : 'bg-[url(/lose.webp)]';

  return (
    <dialog
      ref={dialogRef}
      className={`${bgImg} bg-no-repeat bg-cover bg-center flex flex-col gap-20 items-center rounded-[2.5rem] w-[94%] p-10 border-2 border-(--clr-border-modal) absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-(--clr-overlay-modal) lg:w-lg lg:gap-28`}
    >
      <h2 className="text-4xl uppercase text-center text-white lg:text-6xl">
        {message}
      </h2>

      <Button label={BTN_LABELS.RESTART} onClick={onClose} />
    </dialog>
  );
}
