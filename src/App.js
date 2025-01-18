import Home from "./components/Home";
import "./App.css"
import Navbar from "./components/Navbar";
import Free from "./components/Free";
import Client from "./components/client";
import SuperRare from "./components/SuperRare";
import Like from "./components/Like";
import Release from "./components/Release";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <Home/>
      <Free/>
      <Client/>
      <SuperRare/>
      <Release/>
      <Like></Like>
      <Signup/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
