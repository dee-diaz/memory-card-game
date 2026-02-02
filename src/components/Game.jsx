import { useEffect, useState } from 'react';
import CardGrid from './CardGrid';
import { MODE } from './ModeSelection';

const fiveNames = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
];
const eightNames = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
];
const twelveNames = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
];

export const NUM_OF_CARDS = {
  Easy: 5,
  Medium: 8,
  Hard: 12,
};

const namesByMode = {
  [MODE.EASY]: fiveNames,
  [MODE.MEDIUM]: eightNames,
  [MODE.HARD]: twelveNames,
};

export default function Game({ mode, onCardClick, children }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let names = namesByMode[mode];
    
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    
    async function fetchData() {
      try {
        const fetchPromises = names.map((name) => fetch(url + name));
        const responses = await Promise.all(fetchPromises);
        const jsonPromises = responses.map((response) => response.json());
        const pokemonData = await Promise.all(jsonPromises);
        const pokemon = pokemonData.map((item) => ({
          name: item.name,
          image: item.sprites.other.dream_world.front_default,
        }));
        setPokemons(pokemon);
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchData();
  }, [mode]);

  return (
    <div className="relative">
      <CardGrid mode={mode} pokemons={pokemons} onCardClick={onCardClick} />
      {children}
    </div>
  );
}
