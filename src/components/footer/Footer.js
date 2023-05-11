import "./Footer.css"

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
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            </div>
        </div>
    );
}

export default Footer;