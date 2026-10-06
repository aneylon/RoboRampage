import "./App.css";
import Version from "./Components/Version/Version";
import Title from "./Components/Title/Title";
import VersionModal from "./Components/Modal/VersionModal";
import ToDo from "./Components/TodoList/ToDo";
import TestButton from "./Components/Buttons/TestButton";
import WeirdTestButton from "./Components/Buttons/WeirdTestButton";
import Button from "./Components/Buttons/Button";
import Menu from "./Components/Menu/Menu";
import MainMenu from "./Components/Menu/MainMenu";
import SettingsMenu from "./Components/Menu/SettingsMenu";
import ThemeToggle from "./Components/Buttons/ThemeToggle";
import ShowOnlineStatus from "./Components/Utilities/ShowOnlineStatus";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import SignOut from "./Components/Auth/SignOut";
import VersionContextProvider from "./Context/versionContext";
import ThemeContextProvider from "./Context/themeContext";
import AuthContextProvider from "./Context/authContext";
import Header from "./Components/Header/Header";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <VersionContextProvider>
          <div className="App">
            <Header />
            <SignIn />
            <SignUp />
            <ThemeToggle />
            <ShowOnlineStatus />
            <MainMenu />
            <SettingsMenu />
            <Menu />
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
    </AuthContextProvider>
  );
}

export default App;
