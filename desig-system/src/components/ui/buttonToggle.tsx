/* Obliga al componente a ejecutarse por el lado del cliente
 Por defecto se ejecutan por Server Component
 Es necesario en este componente porque usa  useState con click,
pro defecto el servidor no puede manerajr ese tipo de cosas 
 */
"use client";
import { useState } from "react";

function BotonToggle() {
  const [activo, setActivo] = useState(false);

  return (
    <button
      className={
        activo
          ? "bg-green-500 text-white px-4 py-2 rounded"
          : "bg-gray-400 text-white px-4 py-2 rounded"
      }
      /*valor inicial -> false
    1.click->false=true, ahora esta activo
    2.click->true=false, ahora esta inactivo
    */
      onClick={() => setActivo(!activo)}
    >
      {activo ? "Activo" : "Inactivo"}
    </button>
  );
}

export default BotonToggle;
