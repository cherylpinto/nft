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
import {useEffect} from "react"
import scrollreveal from "scrollreveal"
function App() {
  useEffect(() => {
    const registerAnimations=()=>{
      const sr=scrollreveal({
        origin:"bottom",
        distance:"80px",
        duration:1500,
        reset:false,
      })
      sr.reveal(`nav, .home, .free, .client, .super-rare,.releases, .like, .signup,footer`,{interval:500})
    }
  
    registerAnimations();
  }, [])
  window.setTimeout(()=>{
    const home=document.getElementsByClassName("home");
    home[0].style.transform="none";
    const nav=document.getElementsByTagName("nav");
    nav[0].style.transform="none";
  },1000);
  
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
