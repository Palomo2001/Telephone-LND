import ExtrasService from "../../services/Extras.service";
import { useState, useEffect } from "react";
import "./ExtrasList.css";

function ExtrasList() {
    const [Extras, setExtras] = useState([]);
    const [query, setQuery] = useState("");
  
  
    const getExtras = () => {
      const allExtras = ExtrasService.getExtras();
      setExtras(allExtras);
    }
  
    const showExtras = () => {
      return (
        Extras.filter(c => 
          c.brand.toLowerCase().includes(query.toLowerCase()) || 
          c.model.toLowerCase().includes(query.toLowerCase()) ||
          c.price.toLowerCase().includes(query.toLowerCase()))
          .map(c => {
          return (
            <div className="Extras-item">
              <div className="Extras-img">
                <img src={`/assets/img/${c.img}`} alt="Extras" />
                <img src={`/assets/img/${c.img}`} alt="Extras" />
                <img src={`/assets/img/${c.img}`} alt="Extras" />
              </div>
              <div className="text-Extras">
              <p>{c.brand}</p>
              <p>{c.model}</p>
              <p>{c.price}</p>
              </div>
            </div>
          );
        })
      );
    }
    const handleChange = (event) => {
      const searchValue = event.target.value;
      setQuery(searchValue);
    }
  
  
    useEffect(
      () => {
        getExtras();
      }, []);
  
    return (
      <>
      <input type="search" onChange={handleChange}/>
        <div className="main-container">
          <div className="Extras-container">
            {showExtras()}
          </div>
        </div> 
      </>
    );
  }
  
  export default ExtrasList;