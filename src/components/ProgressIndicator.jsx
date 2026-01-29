export default function ProgressIndicator({ progress, cardsTotal }) {
  const str = progress && cardsTotal ? `${progress} / ${cardsTotal}` : '0 / 8';
  return <div className="text-white text-4xl text-center mb-40">{str}</div>;
}
