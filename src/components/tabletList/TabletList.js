import TabletServices from "../../services/Tablet.services";
import { useState, useEffect } from "react";
import "./TabletList.css";

function TabletList() {
    const [Tablet, setTabletList] = useState([]);
    const [query, setQuery] = useState("");


    const getTablet = () => {
        const allTablet = TabletServices.getTablet();
        setTabletList(allTablet);
    }

    const showallTablet = () => {
        return (
            Tablet.filter(c =>
                c.brand.toLowerCase().includes(query.toLowerCase()) ||
                c.model.toLowerCase().includes(query.toLowerCase()) ||
                c.price.toLowerCase().includes(query.toLowerCase()) ||
                c.used.toLowerCase().includes(query.toLowerCase()))
                .map(c => {
                    return (
                        <div className="Tablet-item">
                            <div className="Tablet-img">
                                <img src={`/assets/img/${c.img}`} alt="Tablet" />
                            </div>
                            <div className="text-Tablet">
                                <p>{c.brand}</p>
                                <p>{c.model}</p>
                                <p>{c.price}</p>
                                <p>{c.used}</p>
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
            getTablet();
        }, []);

    return (
        <>
            <input type="search" onChange={handleChange} />
            <div className="main-container">
                <div className="Tablet-container">
                    {showallTablet()}
                </div>
            </div>
        </>
    );
}

export default TabletList;