// IMPORTACIONES
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      {/* Links arriba a la izquierda */}
      <div className="pl-5 text-ring flex flex-col gap-3">
        <div>Group GoatyDesigners</div>
        <div>Help</div>
        <div>Donations</div>
      </div>

      {/* Copyright  */}
      <div className="text-center mt-4 font-semibold >">
        Somontano Designs ©2026 by Nestor & Maksym
      </div>
    </footer>
  );
}

//etiqueta obligatoria, permite el uso universal
export default Footer;
