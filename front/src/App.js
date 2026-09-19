import "./App.css";
import Version from "./Components/Version/Version";
import Title from "./Components/Title/Title";
import VersionContextProvider from "./Context/versionContext";
import VersionModal from "./Components/Modal/VersionModal";
import ToDo from "./Components/TodoList/ToDo";
import TestButton from "./Components/Buttons/TestButton";
import WeirdTestButton from "./Components/Buttons/WeirdTestButton";
import Button from "./Components/Buttons/Button";
import Menu from "./Components/Menu/Menu";
import MainMenu from "./Components/Menu/MainMenu";
import SettingsMenu from "./Components/Menu/SettingsMenu";
import ThemeContextProvider, { ThemeContext } from "./Context/themeContext";
import { useContext } from "react";
import ThemeToggle from "./Components/Buttons/ThemeToggle";

function App() {
  return (
    <ThemeContextProvider>
      <VersionContextProvider>
        <div className="App">
          <ThemeToggle />
          <MainMenu />
          <SettingsMenu />
          <Menu />
          <Title text={"Robo Rampage"} />
          <Button
            text={"Start New Game"}
            action={() => {
              console.log("start a new game");
            }}
          />
          <WeirdTestButton />
          <TestButton />
          <ToDo />
          <Version />
          <VersionModal />
          {/* TODO : come up with something better for the line below... */}
          <h6>some text</h6>
        </div>
      </VersionContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
