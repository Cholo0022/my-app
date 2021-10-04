import logo from "./logo.svg";
import "./App.css";

import Navigation from "./components/Navigation";
import { tareas } from "./bd.json";
console.log(tareas);

function App() {
  return (
    <div className="App">
      <Navigation />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
