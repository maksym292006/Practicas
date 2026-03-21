// components/ServiceCard.tsx
import React from "react";

// 1. Definimo los atributos que se pueden usar
interface ServiceCardProps {
  icon?: React.ReactNode; //no es obligatorio
  title: string;
  description: string;
}

// 2. Recibimos los datos como parametros
function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white max-w-xl p-3 border rounded-1 shadow-lg transition-transform duration-200 hover:scale-105 will-change-transform">
      {/* 3. Si hay icono, lo muestra. Si no, no muestra nada */}
      {icon && <div className="mb-3">{icon}</div>}

      <h5 className="mb-3 text-lg font-semibold tracking-tight leading-8">
        {title}
      </h5>

      <p className="text-body">{description}</p>
    </div>
  );
}

export default ServiceCard;
