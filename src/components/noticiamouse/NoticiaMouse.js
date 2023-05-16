import React from 'react';
import "./NoticiaMouse.css";

function NoticiaThree() {
  const titulo = "Nuevo ratón inalambrico HyperX";
  const fecha = "16 de mayo de 2023";
  const contenido = "Este nuevo ratón de HyperX cuenta con el nuevo sensor capaz de ofrecer hasta 26.000 DPI con un seguimiento preciso y mayor sensibilidad, que ofrece una velocidad de seguimiento de hasta 650 IPS. También tiene los interruptores principales HyperX capaces de resistir hasta 100 millones de clics a la vez que ofrece una respuesta táctil y audible cuando los pulsamos. También incluyen almohadillas PTFE para una menor fricción y mejorar el deslizamiento y la cinta de agarre que permite una mejor sujeción del ratón.";

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{fecha}</p>
      <p>{contenido}</p>
      <div className="TheThree">
      <img src="/assets/img/descarga3.jpg" alt="Iphone"/>
      </div>
    </div>
  );
}

export default NoticiaThree;