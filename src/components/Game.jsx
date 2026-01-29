import CardGrid from "./CardGrid";
import ProgressIndicator from "./ProgressIndicator";

export default function Game() {
  return (
    <div className="relative">
      <CardGrid mode="Medium" />
      <ProgressIndicator />
    </div>
  )
}