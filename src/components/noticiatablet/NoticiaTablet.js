import React from 'react';
import "./NoticiaTablet.css";

function NoticiaFour() {
  const titulo = "Nueva Tablet Samsung";
  const fecha = "16 de mayo de 2023";
  const contenido = "Uno de los siguientes grandes lanzamientos que tiene previsto realizar Samsung es el de su nueva gama de tablets destinados a la gama alta, que podrían hacer su debut junto a los nuevos plegables de la firma. Pues bien, se han filtrado unas imágenes que muestran de forma muy clara cómo será su diseño.El modelo en concreto del que se han publicado las imágenes es del Samsung Galaxy Tab S9+, que apunta a ser uno de los más potentes que ponga en el mercado la firma coreana. Y, lo cierto, es que estéticamente este será un equipo bastante continuista respecto a la opción que hay actualmente en el mercado, pero tiene algunos detalles diferentes que son interesantes y merece la pena destacar.";

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{fecha}</p>
      <p>{contenido}</p>
      <div className="TheFour">
      <img src="/assets/img/descarga4.jpg" alt="Iphone"/>
      </div>
    </div>
  );
}

export default NoticiaFour;