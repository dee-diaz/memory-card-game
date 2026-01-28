import { LEVEL } from './ModeSelection';

export default function ModeButton({ level }) {
  const bgColors = {
    [LEVEL.EASY]: 'bg-[var(--clr-btn-easy)]',
    [LEVEL.MEDIUM]: 'bg-[var(--clr-btn-medium)]',
    [LEVEL.HARD]: 'bg-[var(--clr-btn-hard)]',
    default: 'bg-[var(--clr-btn-primary)]',
  };
  const bgClr = bgColors[level] || bgColors.default;

  return (
    <button
      type="button"
      className={`cursor-pointer ${bgClr} py-4 px-8 rounded-2xl uppercase text-2xl border-3 border-(--clr-border) shadow-(--shadow) transition-[box-shadow,translate,scale] duration-300 ease-out hover:shadow-(--shadow-hover) hover:-translate-y-0.5 active:scale-[0.95]`}
    >
      {level}
    </button>
  );
}
