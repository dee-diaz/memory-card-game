import SoundButton from './SoundControl';
import Button, { BTN_LABELS } from './Button';
import { Props } from '../types/props';

interface HeaderProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Header({ children, onClick }: HeaderProps) {
  return (
    <header className="relative grid grid-cols-2 items-center gap-y-8 lg:grid-cols-3">
      <a className="w-fit" href="/">
        <img className="w-32 lg:w-48" src="/logo.webp" alt="Pokemon logo" />
      </a>
      {children}
      <Button label={BTN_LABELS.CHANGE_MODE} onClick={onClick} />
      <SoundButton />
    </header>
  );
}
