const MainMenu = ({ showSettingsMenu, showSavesMenu }) => {
  return (
    <div>
      <div>
        <button className="game-button" onClick={showSavesMenu}>
          <span>Resume Game</span>
        </button>
      </div>
      <div>
        <button className="game-button">
          <span>New Game</span>
        </button>
      </div>
      <div>
        <button className="game-button" onClick={showSettingsMenu}>
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
