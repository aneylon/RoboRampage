import "./App.css";
import Version from "./Components/Version/Version";
import VersionModal from "./Components/Modal/VersionModal";
import VersionContextProvider from "./Context/versionContext";
import ThemeContextProvider from "./Context/themeContext";
import AuthContextProvider from "./Context/authContext";
import Header from "./Components/Header/Header";
import Game from "./Components/Game/Game";
import About from "./Components/About/About";
import { Route, Routes } from "react-router";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <VersionContextProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route index element={<Game />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
          <Version />
          <VersionModal />
        </VersionContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
