import React from 'react';
import "./NoticiaIphone.css";

function NoticiaTwo() {
  const titulo = "Iphone 15 fecha de salida y detalles";
  const fecha = "16 de mayo de 2023";
  const contenido = "Se han comenzado a circular rumores sobre el próximo lanzamiento del iPhone 15, aunque todavía falta todo el verano para su presentación oficial. Hasta ahora, se especula que el diseño del iPhone 15 será similar al del iPhone 14, pero con bordes traseros más redondeados, lo que podría proporcionar un agarre más cómodo sin funda. También se menciona que los marcos serán más delgados, similar al Apple Watch, y se especula que podría estar fabricado en titanio.Mientras esperamos más detalles sobre el diseño, algunos diseñadores han lanzado conceptos del iPhone 15 Ultra que podrían heredar características de los Apple Watch Ultra.Sin embargo, no se espera que el iPhone 15 tenga un diseño plegable, ya que conservará su forma y factor de siempre. Parece que Apple está enfocando sus esfuerzos en mejoras y desarrollo de productos distintos al iPhone en este momento.En cuanto a los colores, se rumorea que el iPhone 15 lucirá un rojo intenso, en contraste con los colores violeta y verde oscuro de generaciones anteriores.";

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{fecha}</p>
      <p>{contenido}</p>
      <div className="TheTwo">
      <img src="/assets/img/descarga2.jpg" alt="Iphone"/>
      </div>
    </div>
  );
}

export default NoticiaTwo;