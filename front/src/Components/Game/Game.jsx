import { useState } from "react";
import MainMenu from "../Menu/MainMenu";
import SavedGamesMenu from "../Menu/SavedGamesMenu";
import SettingsMenu from "../Menu/SettingsMenu";

const Game = () => {
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showSaves, setShowSaves] = useState(false);

  const goBack = () => {
    console.log("Go Back");
    setShowMainMenu(true);
    setShowSaves(false);
    setShowSettings(false);
  };

  const showSettingsMenu = () => {
    setShowMainMenu(false);
    setShowSettings(true);
  };

  const showSavesMenu = () => {
    setShowMainMenu(false);
    setShowSaves(true);
  };

  return (
    <div>
      {showMainMenu && (
        <MainMenu
          showSettingsMenu={showSettingsMenu}
          showSavesMenu={showSavesMenu}
        />
      )}
      {showSaves && <SavedGamesMenu goBack={goBack} />}
      {showSettings && <SettingsMenu goBack={goBack} />}
    </div>
  );
};

export default Game;
