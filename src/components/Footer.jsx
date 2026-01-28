export default function Footer() {
  return (
    <footer className="relative w-full flex justify-center">
      <p className="uppercase font-normal text-white text-base">
        Created by {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Diana Diaz (opens in a new tab)"
          href="https://github.com/dee-diaz"
          className="transition-colors hover:text-amber-300"
        >
          Diana Diaz
        </a>
      </p>
    </footer>
  );
}
