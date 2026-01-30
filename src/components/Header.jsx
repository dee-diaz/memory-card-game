import Scoreboard from './Scoreboard';
import SoundButton from './SoundControl';
import Button, { BTN_LABELS } from './Button';

export default function Header({ onSoundToggle, isSoundOn, onClick }) {
  return (
    <header className="relative grid grid-cols-2 items-center gap-y-8 lg:grid-cols-3">
      <a className="w-fit" href="/">
        <img className="w-32 lg:w-48" src="/logo.webp" alt="Pokemon logo" />
      </a>

      <Scoreboard />
      <Button
        label={BTN_LABELS.CHANGE_MODE}
        onClick={onClick}
        isSoundOn={isSoundOn}
      />
      <SoundButton onClick={onSoundToggle} isSoundOn={isSoundOn} />
    </header>
  );
}
