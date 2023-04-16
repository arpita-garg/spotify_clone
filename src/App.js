import Navbar from "./MyComponents/Navbar"; 
import Premium from "./Pages/Premium";
import Support from "./Pages/Support";
import Download from "./Pages/Download";
import Signup from "./Autho/Signup";
import Login from "./Autho/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path="/" element={<Premium/>} />
    <Route path="/support" element={<Support/>} />
    <Route path="/download" element={<Download/>} />
    {/* <Route path="/signup" element={<Signup/>} /> */}
    {/* <Route path="/login" element={<Login/>} /> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
