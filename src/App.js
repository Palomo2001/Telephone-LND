import {Route,Routes,BrowserRouter } from "react-router-dom"
import './App.css';
import Home from "./pages/home/Home";
import Tablet from "./pages/tablet/Tablet";
import Computer from "./pages/computer/Computer";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/computer" element={<Computer />}/>
      <Route path="/tablet" element={<Tablet />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
