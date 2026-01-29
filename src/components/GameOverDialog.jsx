import { useRef, useEffect } from 'react';
import Button from './Button';

export default function GameOverDialog({ result, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  let bgImg;
  let message;

  if (result === 'win') {
    message = 'You win!';
    bgImg = 'bg-[url(/win.webp)]';
  } else {
    ((message = 'You lose...'), (bgImg = 'bg-[url(/lose.webp)]'));
  }

  function handleClose() {
    dialogRef.current?.close();
    onClose?.();
  }

  return (
    <dialog
      ref={dialogRef}
      className={`${bgImg} bg-no-repeat bg-cover bg-center flex flex-col gap-20 items-center rounded-[2.5rem] w-[94%] p-10 border-2 border-(--clr-border-modal) absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-(--clr-overlay-modal) lg:w-lg lg:gap-28`}
    >
      <h2 className="text-4xl uppercase text-center text-white lg:text-6xl">
        {message}
      </h2>

      <Button label="Restart" onClick={handleClose} />
    </dialog>
  );
}
