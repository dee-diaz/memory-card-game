import CardGrid from './CardGrid';
import ProgressIndicator from './ProgressIndicator';
import { MODE } from './ModeSelection';

const fivePokemon = ['Luxray', 'Gardevoir', 'Tyrantrum', 'Milotic', 'Haxorus'];

const eightPokemon = [
  'Greninja',
  'Metagross',
  'Togekiss',
  'Infernape',
  'Dragapult',
  'Scizor',
  'Lucario',
  'Hydreigon',
];

const twelvePokemon = [
  'Blaziken',
  'Umbreon',
  'Salamence',
  'Garchomp',
  'Sylveon',
  'Zoroark',
  'Noivern',
  'Aegislash',
  'Volcarona',
  'Decidueye',
  'Mimikyu',
  'Toxtricity',
];

export default function Game({ mode }) {
  let cardsArr;

  if (mode === MODE.EASY) {
    cardsArr = fivePokemon;
  } else if (mode === MODE.MEDIUM) {
    cardsArr = eightPokemon;
  } else {
    cardsArr = twelvePokemon;
  }

  return (
    <div className="relative">
      <CardGrid mode={mode} cards={cardsArr} />
      <ProgressIndicator numOfCards={cardsArr.length} />
    </div>
  );
}
