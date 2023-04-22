import AllmostNewServices from "../../services/AllmostNew.services";
import { useState, useEffect } from "react";
import "./AllmostnewList.css";

function AllmostnewList() {
    const [Allmostnewmobile, setAllmostnewList] = useState([]);
    const [query, setQuery] = useState("");


    const getAllmostnewList = () => {
        const allMobile = AllmostNewServices.getAllmostnewList();
        setAllmostnewList(allMobile);
    }

    const showMobile = () => {
        return (
            Allmostnewmobile.filter(c =>
                c.brand.toLowerCase().includes(query.toLowerCase()) ||
                c.model.toLowerCase().includes(query.toLowerCase()) ||
                c.price.toLowerCase().includes(query.toLowerCase()) ||
                c.used.toLowerCase().includes(query.toLowerCase()))
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
            getAllmostnewList();
        }, []);

    return (
        <>
            <input type="search" onChange={handleChange} />
            <div className="main-container">
                <div className="mobile-container">
                    {showMobile()}
                </div>
            </div>
        </>
    );
}

export default AllmostnewList;