export default function ProgressIndicator({ progress = 0, numOfCards }) {
  const str = `${progress} / ${numOfCards}`;
  return <div className="text-white text-4xl text-center mb-40">{str}</div>;
}
