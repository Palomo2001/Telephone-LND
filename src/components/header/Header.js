import "./Header.css"

function Header(){
    return(
        <ul>
            <li><img src="/assets/img/logo.png" alt="logo"/></li>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/new">Nuevo</a></li>
            <li><a href="/allmostnew">Seminuevo</a></li>
        </ul>
    );
}

export default Header;