import Scoreboard from './Scoreboard';
import SoundButton from './SoundControl';
import Button from './Button';

export default function Header({ onSoundToggle, isSoundOn }) {
  return (
    <header className="relative grid grid-cols-2 items-center gap-y-8 lg:grid-cols-3">
      <a className="w-fit" href="/">
        <img className="w-32 lg:w-48" src="/logo.webp" alt="Pokemon logo" />
      </a>

      <Scoreboard />
      <Button
        label="Change mode"
        onClick={() => console.log('Change mode button clicked')}
        isSoundOn={isSoundOn}
      />
      <SoundButton onClick={onSoundToggle} isSoundOn={isSoundOn} />
    </header>
  );
}
