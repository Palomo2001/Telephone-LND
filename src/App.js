import {Route,Routes,BrowserRouter } from "react-router-dom"
import './App.css';
import Home from "./pages/home/Home";
import Tablet from "./pages/tablet/Tablet";
import Computer from "./pages/computer/Computer";
import Extras from "./pages/extras/Extras";
import Product from "./pages/product/Product";
import RSSCompnets from "./components/rsscomponents/RSSComponets";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/computer" element={<Computer />}/>
      <Route path="/tablet" element={<Tablet />}/>
      <Route path="/extras" element={<Extras />}/>
      <Route path="/productList" element={<Product />}/>
      <Route path="/rsscomponts" element={<RSSCompnets />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
