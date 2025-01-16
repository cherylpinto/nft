import Home from "./components/Home";
import "./App.css"
import Navbar from "./components/Navbar";
import Free from "./components/Free";
import Client from "./components/client";
import SuperRare from "./components/SuperRare";
function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <Home/>
      <Free/>
      <Client/>
      <SuperRare/>
    </div>
  );
}

export default App;
