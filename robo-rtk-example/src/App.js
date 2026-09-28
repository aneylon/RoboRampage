import "./App.css";
import { ReduxCounter } from "./Components/redux-counter/ReduxCounter";
import ReduxPokemon from "./Components/redux-counter/redux-pokemon/ReduxPokemon";

function App() {
  return (
    <div className="App">
      <ReduxCounter />
      <ReduxPokemon />
    </div>
  );
}

export default App;
