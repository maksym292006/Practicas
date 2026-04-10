import BotonToggle from "@/components/ui/buttonToggle";
import React from "react";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center h-full py-20 px-6">
      {/* Cabecera */}
      <p className="border rounded-full px-4 py-1 w-fit mx-auto mb-4 text-sm">
        Contact us
      </p>
      <h1 className="text-3xl font-bold text-center mb-2">
        Let's work together
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Fill in the form and we'll get back to you within 24 hours.
      </p>

      {/* Formulario */}
      <div className="bg-input rounded-2xl p-10 w-full max-w-xl flex flex-col gap-5">
        {/* Nombre y Apellido en fila */}
        <div className="flex flex-row gap-4">
          {/* Nombre */}
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Jhon"
              className="border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Apellido */}
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-sm font-semibold">Last name</label>
            <input
              type="text"
              placeholder="Smith"
              className="border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="jhonSmith@example.com"
            className="border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Message</label>
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="border rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />
        </div>

        {/* Botón */}
        <button className="inline-block bg-black text-white rounded-full px-6 py-2 hover:bg-neutral-800 transition-all duration-300 w-fit mx-auto">
          Send message →
        </button>
      </div>
    </section>
  );
}
