import React from 'react';
import { Button } from './Button'; // Asegure la ruta correcta
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Componente: ServiceCard
 * Tarjeta de producto/servicio con tokens de diseño Somontano
 */
interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  price: string;
  variant?: 'default' | 'featured';
}

export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  price, 
  variant = 'default' 
}: ServiceCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <article className={cn(
      "p-6 rounded-lg border transition-shadow",
      isFeatured ? "border-[#A76F22] bg-white shadow-lg" : "border-gray-200 bg-[#ECD1B4]/20"
    )}>
      {icon && <div className="mb-4 text-[#A76F22]">{icon}</div>}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-[#A76F22]">{price}</span>
        <Button 
          variant={isFeatured ? 'primary' : 'outline'} 
          size="sm" 
          aria-label={`Seleccionar ${title}`}
        >
          Añadir
        </Button>
      </div>
    </article>
  );
};