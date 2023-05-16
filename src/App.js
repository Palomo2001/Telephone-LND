import {Route,Routes,BrowserRouter } from "react-router-dom"
import './App.css';
import Home from "./pages/home/Home";
import Tablet from "./pages/tablet/Tablet";
import Computer from "./pages/computer/Computer";
import Extras from "./pages/extras/Extras";
import Product from "./pages/product/Product";
import Noticia from "./components/noticiamobile/NoticiaMobile";
import NoticiaTwo from "./components/noticiaiphone/NoticiaIphone";
import NoticiaThree from "./components/noticiamouse/NoticiaMouse";
import NoticiaFour from "./components/noticiatablet/NoticiaTablet";





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
      <Route path="/One" element={<Noticia/>}/>
      <Route path="/Two" element={<NoticiaTwo/>}/>
      <Route path="/Three" element={<NoticiaThree/>}/>
      <Route path="/Four" element={<NoticiaFour/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
