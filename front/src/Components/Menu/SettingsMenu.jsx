import { useEffect, useState } from "react";

const SettingsMenu = ({ goBack }) => {
  const [soundEffectVolume, setSoundEffectVolume] = useState(0);
  const [sfxOn, setSfxOn] = useState(true);
  const [musicVolume, setMusicVolume] = useState(0);

  const [musicOn, setMusicOn] = useState(true);

  const toggleMusic = () => {
    setMusicOn(!musicOn);
  };

  const toggleSfx = () => {
    setSfxOn(!sfxOn);
  };

  const changeSfxVolume = (e) => {
    const val = e.target.value;
    setSoundEffectVolume(val);
    sessionStorage.setItem("sfxVol", val);
  };

  const changeMusicVolume = (e) => {
    const val = e.target.value;
    setMusicVolume(val);
    sessionStorage.setItem("musicVol", val);
  };

  useEffect(() => {
    // TODO : Get saved vol settings
    const sfxVol = sessionStorage.getItem("sfxVol");
    const musicVol = sessionStorage.getItem("musicVol");

    if (sfxVol) setSoundEffectVolume(sfxVol);
    if (musicVol) setMusicVolume(musicVol);
  }, []);

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
      <div>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  );
};
export default SettingsMenu;
