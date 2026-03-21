// app/about/page.tsx
import React from "react";
import { Rocket, Pen, Server } from "lucide-react";
import BotonLink from "@/components/ui/buttonLink";

export default function AboutPage() {
  return (
    <section className="flex flex-col h-full py-20 px-6 max-w-4xl mx-auto">
      {/* Cabecera */}
      <p className="border rounded-full px-4 py-1 w-fit mb-4 text-sm">
        About us
      </p>
      <h1 className="text-3xl font-bold mb-4">We are GoatyDesigners</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-16 max-w-xl">
        A small studio based in Somontano focused on building clean, scalable
        and well designed digital products for businesses that care about
        quality.
      </p>

      {/* Quiénes somos */}
      <div className="flex flex-row gap-10 mb-16">
        {/* Nestor */}
        <div className="flex flex-col gap-3 flex-1 bg-input rounded-2xl p-8">
          <span className="text-4xl font-bold">N</span>
          <h3 className="text-lg font-semibold">Nestor</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Frontend developer focused on React and Next.js. Obsessed with clean
            code and good user experiences.
          </p>
        </div>

        {/* Maksym */}
        <div className="flex flex-col gap-3 flex-1 bg-input rounded-2xl p-8">
          <span className="text-4xl font-bold">M</span>
          <h3 className="text-lg font-semibold">Maksym</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            UI designer with a strong eye for detail. Turns complex problems
            into simple and elegant interfaces.
          </p>
        </div>
      </div>

      {/* Nuestros valores */}
      <h2 className="text-2xl font-bold mb-8">What we believe in</h2>
      <div className="flex flex-row gap-6 mb-16">
        <div className="flex flex-col gap-2 flex-1">
          <Rocket size={24} />
          <h3 className="font-semibold">Ship fast</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            We move quickly without cutting corners. Good products are built
            iteratively, not perfectly from day one.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <Pen size={24} />
          <h3 className="font-semibold">Design first</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Every decision starts with the user. We design before we build so we
            never waste time on the wrong thing.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <Server size={24} />
          <h3 className="font-semibold">Built to last</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            We write clean, maintainable code that your team can work with long
            after we are gone.
          </p>
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-black text-white rounded-2xl p-10 flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl font-bold">Ready to build something?</h2>
        <p className="text-sm text-gray-400 max-w-md leading-relaxed">
          We are always open to new projects. Drop us a message and let's see if
          we are a good fit.
        </p>
        <BotonLink link="/contact" context="Get in touch" variant="white" />
      </div>
    </section>
  );
}
