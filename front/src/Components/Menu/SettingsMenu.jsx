import { useState } from "react";

const SettingsMenu = () => {
  const [soundEffectVolume, setSoundEffectVolume] = useState(5);
  const [sfxOn, setSfxOn] = useState(true);
  const [musicVolume, setMusicVolume] = useState(5);
  const [musicOn, setMusicOn] = useState(true);

  const toggleMusic = () => {
    setMusicOn(!musicOn);
  };

  const toggleSfx = () => {
    setSfxOn(!sfxOn);
  };

  const changeSfxVolume = (e) => {
    setSoundEffectVolume(e.target.value);
  };

  const changeMusicVolume = (e) => {
    setMusicVolume(e.target.value);
  };

  return (
    <div>
      <h1>Settings</h1>
      <h2>Sound Effects</h2>
      <input
        type="checkbox"
        name="soundEffectsOn"
        id="soundEffectsOn"
        value={sfxOn}
        checked={sfxOn}
        onClick={toggleSfx}
      />

      <input
        type="range"
        name="soundEffectsVolume"
        id="soundEffectsVolume"
        value={soundEffectVolume}
        disabled={!sfxOn}
        onChange={changeSfxVolume}
      />

      <h2>Music</h2>
      <input
        type="checkbox"
        name="musicOn"
        id="musicOn"
        value={musicOn}
        checked={musicOn}
        onClick={toggleMusic}
      />
      <input
        type="range"
        name="musicVolume"
        id="musicVolume"
        value={musicVolume}
        onChange={changeMusicVolume}
        disabled={!musicOn}
      />
    </div>
  );
};
export default SettingsMenu;
