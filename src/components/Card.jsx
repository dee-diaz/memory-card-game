export default function Card({ pokemonImg, pokemonName, className }) {
  return (
    <button
      onClick={() => console.log('Card clicked')}
      className={`${className} bg-(--clr-bg-card) cursor-pointer rounded-3xl border-2 border-(--clr-border) shadow-(--shadow-card) transition-[shadow, colors] duration-500 ease-out hover:bg-(--clr-bg-card-hover)   hover:shadow-(--shadow-hover) lg:border-3`}
    >
      <div className="h-32 p-5 lg:h-48 2xl:p-10">
        <img className="w-full h-full" src="/ditto.svg" alt="Ditto" />
      </div>

      <div className="min-h-16 border-t-2 flex items-center justify-center lg:border-t-3 lg:min-h-20">
        <p className="text-center uppercase text-xl lg:text-2xl">
          {pokemonName || 'Ditto'}
        </p>
      </div>
    </button>
  );
}
