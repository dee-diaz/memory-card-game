export default function Card({ pokemonImg, pokemonName, className }) {
  return (
    <button
      onClick={() => console.log('Card clicked')}
      className={`relative h-68 transform-3d will-change-transform ${className} bg-(--clr-bg-card) cursor-pointer rounded-3xl border-2 border-(--clr-border) shadow-(--shadow-card) transition-all duration-500 ease-out hover:bg-(--clr-bg-card-hover) lg:border-3 hover:rotate-y-180`}
    >
      <div className="front absolute inset-0 w-full h-full backface-hidden">
        <div className="h-32 p-5 lg:h-48 2xl:p-10">
          <img className="w-full h-full" src="/ditto.svg" alt="Ditto" />
        </div>

        <div className="h-16 border-t-2 flex items-center justify-center lg:border-t-3 lg:min-h-20">
          <p className="text-center uppercase text-xl">
            {pokemonName || 'Crabominable'}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center absolute inset-0 w-full h-full bg-[url('/card-back.webp')] bg-no-repeat bg-cover backface-hidden rotate-y-180 rounded-3xl">
        <img className="w-40" src="/logo.webp" alt="Pokemon logo" />
      </div>
    </button>
  );
}
