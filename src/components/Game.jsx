import CardGrid from './CardGrid';
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

export default function Game({ mode, onCardClick, children }) {
  let cards;

  if (mode === MODE.EASY) {
    cards = fivePokemon;
  } else if (mode === MODE.MEDIUM) {
    cards = eightPokemon;
  } else {
    cards = twelvePokemon;
  }

  return (
    <div className="relative">
      <CardGrid mode={mode} data={cards} onCardClick={onCardClick} />
      {children}
    </div>
  );
}
