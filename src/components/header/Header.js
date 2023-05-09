import "./Header.css"

function Header(){
    return(
        <ul>
            <li><img src="/assets/img/logo.png" alt="logo"/></li>
            <li className="menu"><a href="/home">Móviles</a></li>
            <li className="menu"><a href="/computer">Portatil</a></li>
            <li className="menu"><a href="/Tablet">Tablet</a></li>
            <li className="menu"><a href="/Extras">Extras</a></li>
        </ul>
    );
}

export default Header;