import {Route,Routes,BrowserRouter } from "react-router-dom"
import './App.css';
import Home from "./pages/home/Home";
import Allmostnew from "./pages/allmostnew/Allmostnew";
import New from "./pages/new/New";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/new" element={<New />}/>
      <Route path="/allmostnew" element={<Allmostnew />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
