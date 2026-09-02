import "./App.css";
import Version from "./Components/Version/Version";
import Title from "./Components/Title/Title";
import VersionContextProvider from "./Context/versionContext";
import VersionModal from "./Components/Modal/VersionModal";
import ToDo from "./Components/TodoList/ToDo";
import TestButton from "./Components/Buttons/TestButton";
import WeirdTestButton from "./Components/Buttons/WeirdTestButton";

function App() {
  return (
    <VersionContextProvider>
      <div className="App">
        <Title text={"Robo Rampage"} />
        <WeirdTestButton />
        <TestButton />
        <ToDo />
        <Version />
        <VersionModal />
        {/* TODO : come up with something better for the line below... */}
        <h6>some text</h6>
      </div>
    </VersionContextProvider>
  );
}

export default App;
