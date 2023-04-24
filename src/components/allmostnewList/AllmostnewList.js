import AllmostNewServices from "../../services/AllmostNew.services";
import { useState, useEffect } from "react";
import "./AllmostnewList.css";

function AllmostnewList() {
    const [AllmostNewmobile, setAllmostnewList] = useState([]);
    const [query, setQuery] = useState("");


    const getAllmostNewTelephone = () => {
        const allAllmostnewMobile = AllmostNewServices.getAllmostNewTelephone();
        setAllmostnewList(allAllmostnewMobile);
    }

    const showallAllmostnewMobile = () => {
        return (
            AllmostNewmobile.filter(c =>
                c.brand.toLowerCase().includes(query.toLowerCase()) ||
                c.model.toLowerCase().includes(query.toLowerCase()) ||
                c.price.toLowerCase().includes(query.toLowerCase()) ||
                c.used.toLowerCase().includes(query.toLowerCase()))
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
            getAllmostNewTelephone();
        }, []);

    return (
        <>
            <input type="search" onChange={handleChange} />
            <div className="main-container">
                <div className="mobile-container">
                    {showallAllmostnewMobile()}
                </div>
            </div>
        </>
    );
}

export default AllmostnewList;