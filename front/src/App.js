import "./App.css";
import Version from "./Components/Version/Version";
import VersionModal from "./Components/Modal/VersionModal";
import VersionContextProvider from "./Context/versionContext";
import ThemeContextProvider from "./Context/themeContext";
import AuthContextProvider from "./Context/authContext";
import Header from "./Components/Header/Header";
import Game from "./Components/Game/Game";
import Loading from "./Components/Loading/Loading";
import Grid from "./Components/Game/Grid";
import NewsList from "./Components/News/NewsList";
import About from "./Components/About/About";
import Spinner from "./Components/Loading/Spinner";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <VersionContextProvider>
          <div className="App">
            <Spinner />
            <Header />
            <Loading />
            <Game />
            <About />
            <Version />
            <VersionModal />
            {/* TODO : come up with something better for the line below... */}
            <h6>some text</h6>
            <NewsList />
            <Grid height={3} width={3} />
          </div>
        </VersionContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
