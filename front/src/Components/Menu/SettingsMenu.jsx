const SettingsMenu = () => {
  return (
    <div>
      <h1>Settings</h1>
      <h2>Sound Effects</h2>
      <input type="checkbox" name="soundEffectsOn" id="soundEffectsOn" />
      <input type="range" name="soundEffectsVolume" id="soundEffectsVolume" />
      <h2>Music</h2>
      <input type="checkbox" name="musicOn" id="musicOn" />
      <input type="range" name="musicVolume" id="musicVolume" />
    </div>
  );
};
export default SettingsMenu;
