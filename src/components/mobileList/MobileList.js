import TelephoneService from "../../services/Telephone.service";
import { useState, useEffect } from "react";
import "./MobileList.css";

function MobileList() {
    const [mobile, setTelephone] = useState([]);
    const [query, setQuery] = useState("");
  
  
    const getTelephone = () => {
      const allMobile = TelephoneService.getTelephone();
      setTelephone(allMobile);
    }
  
    const showMobile = () => {
      return (
        mobile.filter(c => 
          c.brand.toLowerCase().includes(query.toLowerCase()) || 
          c.model.toLowerCase().includes(query.toLowerCase()) ||
          c.price.toLowerCase().includes(query.toLowerCase()))
          .map(c => {
          return (
            <div className="mobile-item">
              <div className="mobile-img">
                <img src={`/assets/img/${c.img}`} alt="mobile" />
              </div>
              <div className="text-mobile">
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
        getTelephone();
      }, []);
  
    return (
      <>
      <input type="search" onChange={handleChange}/>
        <div className="main-container">
          <div className="mobile-container">
            {showMobile()}
          </div>
        </div> 
      </>
    );
  }
  
  export default MobileList;