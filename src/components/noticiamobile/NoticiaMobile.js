import React from 'react';

function Noticia() {
  const titulo = "Japón inventa nuevo móvil";
  const fecha = "16 de mayo de 2023";
  const contenido = "El aparato llamado Digno Rafre, saldrá a la venta el 11 de diciembre con un precio de 436 euros y tiene un funcionamiento impermeable es decir que la pantalla  y la carcasa pueden lavarse a mano con jabón.El móvil puede ser limpiado bajo un grifo abierto y permite que si se cae en un recipiente de agua no se estropee. Además su pantalla táctil puede ser utilizada mientras está mojada,su batería permite utilizarlo durante 1.300 minutos sin interrupción y  tiene una cámara de alta calidad.Con todo esto la empresa japonesa permite ayudar a las personas a mantener limpios sus móviles, cuyas pantallas pueden contener hasta 600 bacterias.En mi opinión me parece genial esta noticia ya que la ciencia en los teléfonos móviles va avanzando a mejor y que un simple móvil pueda ser lavado con agua y jabón es muy importante porque los móviles pueden contener muchas bacterias y al lavarlos las podemos eliminar. También nos facilita la vida porque si tenemos un accidente y se nos cae el móvil en algún sitio con agua sabemos que no se va a romper y estamos más seguros y a cualquiera nos gustaría tener un móvil que al mojarlo no se nos rompa.";

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{fecha}</p>
      <p>{contenido}</p>
      <div className="TheOne">
      <img src="/assets/img/descarga.jpg" alt="Japan"/>
      </div>
    </div>
  );
}

export default Noticia;
