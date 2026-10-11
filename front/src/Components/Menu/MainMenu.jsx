const MainMenu = ({ showSettingsMenu, showSavesMenu }) => {
  return (
    <div>
      <div>
        <button onClick={showSavesMenu}>
          <h3>Resume Game</h3>
        </button>
      </div>
      <div>
        <button>
          <h3>New Game</h3>
        </button>
      </div>
      <div>
        <button onClick={showSettingsMenu}>
          <h3>Settings</h3>
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
