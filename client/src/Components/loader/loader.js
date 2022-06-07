import React from "react";
import "./loading.css"

export default function loading() {

    $( document ).ready(function() {
        // Handler for .ready() called.
        setTimeout(function(){
          $('#loader-out').fadeOut();
        }, 3000);
      });
      
  return (
    <div>
      <div id="loader-out">
        <div id="loader-container">
          <p id="loading-text">Cargando</p>
        </div>
      </div>

      <h1>
        Este es el contenido de la página web que se revela al ocultar el loader
      </h1>
    </div>
  );
}
