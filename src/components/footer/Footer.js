import "./Footer.css"
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa';

function Footer(){
    return(
        <div id="container">
            <div className="text">
            <p>Contáctanos al 444-444-444</p> 
            <p>SoporteTecnico@PalomoMobile.com</p>
            <p>Copyright 2023© Todos los derechos reservados</p>
            <p>Para ver el aviso de privacidad, accede a PalomoMobile.com/aviso</p>
            <p>Todos los derechos reservados Política de Privacidad y Cookies|Condiciones de Venta</p>
            <p><a href="/ProductList">Sugerencias para mejorar la página</a></p>
            </div>
            <div className="icon">
            <h1><FaFacebook className="Facebook" /></h1>
            <h1><FaInstagram className="Instagram" /></h1>
            <h1><FaYoutube className="Youtube" /></h1>
            <h1><FaTwitter className="Twitter" /></h1>
            </div>
        </div>
    );
}

export default Footer;