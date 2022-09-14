import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
function App() {
 
  return (
    <>
      <div className="App">
        <Navbar />
        <Timer />
      </div>
    </>
  );
}

export default App;
