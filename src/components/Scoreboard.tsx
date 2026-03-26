interface ScoreboardProps {
  score: number;
  bestScore: number;
}

export default function Scoreboard({ score, bestScore }: ScoreboardProps) {
  return (
    <div className="grid gap-3 justify-self-end text-white text-xl uppercase lg:text-2xl lg:justify-self-center lg:text-center">
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}
