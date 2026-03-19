// CURSOR
// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans">
//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center justify-center bg-slate-100">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
//             Comercio Local Barbastro
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-8">
//             Servicios profesionales con arraigo en el Somontano. Calidad técnica y proximidad geográfica.
//           </p>
//           <button className="bg-slate-900 text-white px-8 py-4 rounded-none font-semibold uppercase tracking-widest hover:bg-slate-800 transition-colors">
//             Contactar
//           </button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-16 text-center uppercase tracking-tighter">Servicios Especializados</h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             {[
//               { title: "Consultoría Técnica", desc: "Análisis detallado de necesidades específicas para optimización de recursos locales." },
//               { title: "Gestión Operativa", desc: "Ejecución de procesos con estándares de alta fidelidad y tiempos de respuesta mínimos." },
//               { title: "Mantenimiento Integral", desc: "Soporte continuo y preventivo para garantizar la continuidad de la actividad profesional." }
//             ].map((service, i) => (
//               <div key={i} className="border border-slate-200 p-8 hover:border-slate-900 transition-colors">
//                 <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-5xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-16 text-center uppercase tracking-tighter">Evaluación de Resultados</h2>
//           <div className="grid md:grid-cols-2 gap-16">
//             {[
//               { name: "J. Aznar", text: "Eficiencia comprobada en la resolución de incidencias complejas en el sector industrial de Barbastro." },
//               { name: "M. Bielsa", text: "La precisión técnica y el conocimiento del mercado regional han sido determinantes para nuestra expansión." }
//             ].map((testimony, i) => (
//               <div key={i} className="flex flex-col">
//                 <p className="text-lg italic text-slate-700 mb-6 font-serif leading-relaxed">
//                   "{testimony.text}"
//                 </p>
//                 <span className="font-bold uppercase tracking-widest text-sm text-slate-900">— {testimony.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer / Contact */}
//       <footer className="bg-slate-900 text-slate-300 py-16">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-white text-2xl font-bold mb-6 uppercase tracking-tighter">Información de Contacto</h2>
//             <div className="space-y-4">
//               <p>Dirección: Calle General Ricardos, Barbastro, Huesca</p>
//               <p>Teléfono: +34 974 000 000</p>
//               <p>Email: contacto@comerciobarbastro.es</p>
//             </div>
//           </div>
//           <div className="flex flex-col justify-end md:items-end">
//             <p className="mb-4">Horario: Lunes a Viernes, 09:00 - 19:00</p>
//             <p className="text-slate-500 text-sm">© 2026 Comercio Local Barbastro. Registro de actividad profesional.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
// GEMINI
// import React from 'react';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans">
//       {/* Hero Section */}
//       <section className="relative bg-slate-900 py-24 px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl font-bold text-white mb-6">
//             Comercio Local en Barbastro
//           </h1>
//           <p className="text-xl text-slate-300 mb-8">
//             Calidad y proximidad en el corazón del Somontano. Servicio personalizado para cada cliente.
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
//             Contactar ahora
//           </button>
//         </div>
//       </section>

//       {/* Servicios */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition">
//               <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
//                 <Clock size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Servicio Especializado {i}</h3>
//               <p className="text-slate-600">
//                 Descripción técnica del servicio ofrecido en Barbastro, garantizando estándares de calidad local.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonios */}
//       <section className="py-20 bg-slate-50 px-6">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Opiniones de Clientes</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
//               <p className="italic text-slate-700 mb-4">
//                 "Excelente atención. Se nota el compromiso con los vecinos de la zona. Totalmente recomendable."
//               </p>
//               <p className="font-bold text-slate-900">— Cliente Local</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
//               <p className="italic text-slate-700 mb-4">
//                 "Rapidez y profesionalidad en Barbastro. Sin duda volveré a confiar en sus servicios."
//               </p>
//               <p className="font-bold text-slate-900">— Residente Somontano</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer / Contacto */}
//       <footer className="bg-slate-900 text-slate-300 py-12 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
//           <div>
//             <h3 className="text-white text-xl font-bold mb-4">Barbastro Comercio</h3>
//             <p className="text-sm">Impulsando la economía local desde el centro de la ciudad.</p>
//           </div>
//           <div className="space-y-3">
//             <h4 className="text-white font-semibold">Contacto</h4>
//             <div className="flex items-center gap-2">
//               <MapPin size={18} className="text-blue-500" />
//               <span>Calle General Ricardos, Barbastro</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone size={18} className="text-blue-500" />
//               <span>+34 974 XX XX XX</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail size={18} className="text-blue-500" />
//               <span>contacto@comerciobarbastro.com</span>
//             </div>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold mb-4">Horario</h4>
//             <p>Lunes - Viernes: 09:00 - 14:00 | 16:30 - 20:00</p>
//             <p>Sábados: 09:00 - 13:30</p>
//           </div>
//         </div>
//         <div className="max-w-6xl mx-auto border-t border-slate-800 mt-12 pt-6 text-center text-sm">
//           © {new Date().getFullYear()} Comercio Local Barbastro. Todos los derechos reservados.
//         </div>
//       </footer>
//     </div>
//   );
// }
import { 
  Navbar, 
  Footer, 
  Hero, 
  Button, 
  ServiceCard 
} from "@/components/design-system";

export default function PanaderiaSomontano() {
  return (
    <div className="min-h-screen bg-white font-sans text-base text-gray-900">
      <Navbar />

      <main>
        {/* Inicio y Propuesta de Valor */}
        <Hero 
          title="Pan Artesano y Especialidades del Somontano"
          description="Horneado diario con procesos lentos y materia prima local."
        />

        {/* Catálogo de Especialidades */}
        <section className="p-4 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#A76F22]">Especialidades de Hoy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ServiceCard 
              title="Pan de Hogaza Tradicional"
              description="Corteza crujiente y miga alveolada. Masa madre de 24h."
              price="3.50€"
              variant="featured"
              aria-label="Información sobre Pan de Hogaza"
            />
            <ServiceCard 
              title="Trenza de Almudévar"
              description="Bollería artesana con frutos secos y glaseado natural."
              price="12.00€"
              variant="default"
              aria-label="Información sobre Trenza de Almudévar"
            />
            <ServiceCard 
              title="Empanada de Estación"
              description="Relleno de productos locales según temporada."
              price="15.00€"
              variant="default"
              aria-label="Información sobre Empanada"
            />
          </div>
        </section>

        {/* Reservas y Pedidos */}
        <section className="bg-[#ECD1B4] p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#A76F22]">Pedidos y Reservas</h2>
          <p className="max-w-prose">Asegure sus productos antes del agotamiento de existencias diarias.</p>
          <div className="flex flex-col space-y-3">
            <Button 
              variant="primary" 
              size="lg"
              className="w-full md:w-max focus-visible:ring-2 focus-visible:ring-[#A76F22] focus-visible:ring-offset-2"
            >
              Realizar Pedido Online
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full md:w-max focus-visible:ring-2 focus-visible:ring-[#A76F22] focus-visible:ring-offset-2"
            >
              Reservar Mesa para Desayuno
            </Button>
          </div>
        </section>

        {/* Cronograma de Horneado y Horarios */}
        <section className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-[#A76F22] pb-2">Horarios de Apertura</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Lunes a Viernes</span> <span>07:00 - 20:00</span></li>
              <li className="flex justify-between font-bold"><span>Sábados y Domingos</span> <span>08:00 - 14:00</span></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-[#A76F22] pb-2">Salida del Horno</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Pan Blanco</span> <span>07:30</span></li>
              <li className="flex justify-between"><span>Integrales y Semillas</span> <span>09:00</span></li>
              <li className="flex justify-between"><span>Bollería</span> <span>08:15</span></li>
            </ul>
          </div>
        </section>

        {/* Alérgenos e Ingredientes */}
        <section className="p-4 md:p-8 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Transparencia Alimentaria</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 px-1">Producto</th>
                  <th className="py-2 px-1">Ingredientes Base</th>
                  <th className="py-2 px-1 text-red-600">Alérgenos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-1 font-medium">Hogaza</td>
                  <td className="py-3 px-1 text-sm">Harina de trigo, agua, sal, masa madre.</td>
                  <td className="py-3 px-1 text-sm">Gluten</td>
                </tr>
                <tr>
                  <td className="py-3 px-1 font-medium">Trenza</td>
                  <td className="py-3 px-1 text-sm">Harina, mantequilla, huevo, nueces, azúcar.</td>
                  <td className="py-3 px-1 text-sm">Gluten, Huevo, Lácteos, Frutos de cáscara</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Eventos Personalizados */}
        <section className="p-6 text-center space-y-4 border-y border-[#ECD1B4]">
          <h2 className="text-2xl font-bold">Encargos para Eventos</h2>
          <p>Servicio de catering artesano para celebraciones y reuniones profesionales.</p>
          <Button variant="secondary" size="md">Solicitar Presupuesto</Button>
        </section>

        {/* Contacto y Ubicación */}
        <section className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#A76F22]">Ubicación Directa</h2>
            <p>Calle Mayor, 12. Barbastro, Huesca.</p>
            <p className="font-bold">Teléfono: +34 974 000 000</p>
            <p>Email: contacto@panaderiasomontano.es</p>
          </div>
          <div className="bg-gray-200 h-64 w-full flex items-center justify-center rounded-md" role="img" aria-label="Mapa de ubicación de la panadería">
            <span className="text-gray-500 italic">[Mapa de Ubicación]</span>
          </div>
        </section>

        {/* Acceso Administrativo (Simulado) */}
        <aside className="p-4 bg-gray-900 text-white flex justify-between items-center">
          <span className="text-sm opacity-80">Panel de Gestión de Stock</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Actualizar Existencias
          </Button>
        </aside>
      </main>

      <Footer />
    </div>
  );
}