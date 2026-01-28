import ModeButton from './ModeButton';

export const LEVEL = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard',
};

export default function ModeSelection() {
  return (
    <div className="grid gap-16 justify-center -translate-y-16">
      <div className="grid gap-8 justify-center">
        <img className="w-xs lg:w-xl" src="/logo.webp" alt="Pokemon logo" />
        <h1 className="text-center text-2xl text-(--clr-text-blue) uppercase lg:text-4xl">
          Memory card game
        </h1>
      </div>
      <div className="grid justify-center gap-6 lg:flex">
        <ModeButton level={LEVEL.EASY} />
        <ModeButton level={LEVEL.MEDIUM} />
        <ModeButton level={LEVEL.HARD} />
      </div>
    </div>
  );
}
