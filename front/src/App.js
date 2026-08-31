import logo from "./logo.svg";
import "./App.css";
import Version from "./Components/Version/Version";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Version />
      <Modal show={true} />
    </div>
  );
}

export default App;
