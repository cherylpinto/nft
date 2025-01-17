import Home from "./components/Home";
import "./App.css"
import Navbar from "./components/Navbar";
import Free from "./components/Free";
import Client from "./components/client";
import SuperRare from "./components/SuperRare";
import Like from "./components/Like";
import Release from "./components/Release";
function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <Home/>
      <Free/>
      <Client/>
      <SuperRare/>
      <Like></Like>
      <Release/>
    </div>
  );
}

export default App;
