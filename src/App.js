import {Route,Routes,BrowserRouter } from "react-router-dom"
import './App.css';
import Home from "./pages/home/Home";
import Almostnew from "./pages/almostnew/Almostnew";
import New from "./pages/new/New";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/new" element={<New />}/>
      <Route path="/almostnew" element={<Almostnew />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
