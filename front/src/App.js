import logo from "./logo.svg";
import "./App.css";
import Version from "./Components/Version/Version";
import Modal from "./Components/Modal/Modal";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
      <Title text={"Robo Rampage"} />
      <Version />
      <Modal show={true} />
      {/* TODO : come up with something better for the line below... */}
      <h6>some text</h6>
    </div>
  );
}

export default App;
