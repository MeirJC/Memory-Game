import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cards />
      </header>
    </div>
  );
}

export default App;
