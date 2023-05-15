import "./Header.css"
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import RSS from "../../services/RSS.xml";

function Header(){
    const [menuVisible,setMenuVisible]=useState(false);

    const toggleCollapsedMenu = () => {
        setMenuVisible(!menuVisible);
    }
    return(
        <>
        <ul>
            <li><img src="/assets/img/logo.png" alt="logo"/></li>
            <li className="menu-option"><a href="/home">Móviles</a></li>
            <li className="menu-option"><a href="/computer">Portatil</a></li>
            <li className="menu-option"><a href="/Tablet">Tablet</a></li>
            <li className="menu-option"><a href="/Extras">Extras</a></li>
            <li><ion-icon name="logo-rss"><a href={RSS} target="_blank">RSS</a></ion-icon></li>
            <li className="collapsed-menu" onClick={toggleCollapsedMenu}><FaBars /></li>
        </ul>
        {menuVisible ? 
            <div className="collapsed-menu">
                <ul>
                    <li><a href="/home">Móviles</a></li>
                    <li><a href="/computer">Portatil</a></li>
                    <li><a href="/Tablet">Tablet</a></li>
                    <li><a href="/Extras">Extras</a></li>
                </ul>
            </div>
            :
            <></>
        }
        </>
    );
}

export default Header;