import ComputerService from "../../services/Computer.service.js";
import { useState, useEffect } from "react";
import "./ComputerList.css";

function ComputerList() {
    const [Computer, setComputer] = useState([]);
    const [query, setQuery] = useState("");


    const getComputer = () => {
        const allComputer = ComputerService.getComputer();
        setComputer(allComputer);
    }

    const showComputer = () => {
        return (
            Computer.filter(c =>
                c.brand.toLowerCase().includes(query.toLowerCase()) ||
                c.model.toLowerCase().includes(query.toLowerCase()) ||
                c.price.toLowerCase().includes(query.toLowerCase()))
                .map(c => {
                    return (
                        <div className="Computer-item">
                            <div className="Computer-img">
                                <img src={`/assets/img/${c.img}`} alt="Computer" />
                                </div>
                            <div className="text-Computer">
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
            getComputer();
        }, []);

    return (
        <>
            <input type="search" onChange={handleChange} />
            <div className="main-container">
                <div className="mobile-container">
                    {showComputer()}
                </div>
            </div>
        </>
    );
}

export default ComputerList;