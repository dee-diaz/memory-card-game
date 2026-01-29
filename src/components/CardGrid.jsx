import { MODE } from './ModeSelection';
import Card from './Card';

export default function CardGrid({ mode }) {
  let gridColsClass;
  let maxWidth;

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
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      <Card className="col-start-2" />
      <Card />
      <Card />
    </div>
  );
}
