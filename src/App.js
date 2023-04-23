import Navbar from "./MyComponents/Navbar"; 
import Premium from "./Pages/Premium";
import Support from "./Pages/Support";
import Download from "./Pages/Download";
import Signup from "./Autho/Signup";
import Login from "./Autho/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesSpotify from "./Routes/RoutesSpotify"
import './App.css';

function App() {
  return (
   <>
   <RoutesSpotify></RoutesSpotify>
   </>
  );
}

export default App;
