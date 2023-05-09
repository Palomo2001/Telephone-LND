import "./Header.css"

function Header(){
    return(
        <ul>
            <li><img src="/assets/img/logo.png" alt="logo"/></li>
            <li><a href="/home">Moviles</a></li>
            <li><a href="/computer">Pc</a></li>
            <li><a href="/Tablet">Tablet</a></li>
        </ul>
    );
}

export default Header;