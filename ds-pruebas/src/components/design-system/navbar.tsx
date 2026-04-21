import React from 'react';
import { Button } from './Button'; // Ajustar según estructura de carpetas
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Componente: Navbar
 * Navegación semántica optimizada para móviles
 */
export const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#A76F22] rounded-full" aria-hidden="true" />
        <span className="text-xl font-bold tracking-tight text-[#A76F22]">SOMONTANO</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-[#A76F22] transition-colors">Catálogo</a>
        <a href="#" className="hover:text-[#A76F22] transition-colors">Horarios</a>
        <a href="#" className="hover:text-[#A76F22] transition-colors">Contacto</a>
      </div>
      <Button variant="primary" size="sm">Mi Pedido</Button>
    </div>
  </nav>
);