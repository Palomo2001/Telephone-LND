import NewTelephoneService from "../../services/NewTelephone.services.js";
import { useState, useEffect } from "react";
import "./NewMobileList.css";

function NewMobileList() {
    const [Newmobile, setNewTelephone] = useState([]);
    const [query, setQuery] = useState("");


    const getNewTelephone = () => {
        const allNewMobile = NewTelephoneService.getNewTelephone();
        setNewTelephone(allNewMobile);
    }

    const showNewMobile = () => {
        return (
            Newmobile.filter(c =>
                c.brand.toLowerCase().includes(query.toLowerCase()) ||
                c.model.toLowerCase().includes(query.toLowerCase()) ||
                c.price.toLowerCase().includes(query.toLowerCase()))
                .map(c => {
                    return (
                        <div className="mobile-item">
                            <div className="mobile-img">
                                <img src={`/assets/img/${c.img}`} alt="mobile" />
                                <img src={`/assets/img/${c.img}`} alt="mobile" />
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
            getNewTelephone();
        }, []);

    return (
        <>
            <input type="search" onChange={handleChange} />
            <div className="main-container">
                <div className="mobile-container">
                    {showNewMobile()}
                </div>
            </div>
        </>
    );
}

export default NewMobileList;