// IMPORTACIONES
import { Button } from "@/components/ui/button";
import BotonToggle from "@/components/ui/button2";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/heroSection";
import ServiceCard from "@/components/ui/servicecard";
import Scard from "@/components/ui/servicecard";
import { Notebook, Paintbrush, Pen, Server } from "lucide-react";
import Link from "next/link";
import { server } from "shadcn/mcp";

export default function Home() {
  return (
    <>
      {/* Hero section  */}
      <Hero></Hero>
      {/* Service Cards */}
      <div className=" flex flex-row gap-4 p-6 justify-center">
        {/* 1 */}
        <ServiceCard
          icon={<Paintbrush />}
          title="UI & Design Systems"
          description="We build scalable design systems
           that keep your product consistent and your team moving fast."
        ></ServiceCard>
        {/* 2 */}
        <ServiceCard
          icon={<Server />}
          title="Web Development"
          description="From landing pages to full applications,
           we turn your ideas into clean and performant code."
        ></ServiceCard>
        {/* 3 */}
        <ServiceCard
          icon={<Notebook />}
          title="Strategy & Consulting"
          description="We help you define the right architecture and tools so 
          your product grows without technical debt."
        ></ServiceCard>
      </div>
      {/* CARD  ejemplo de uso */}

      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <Image
            src="/images/img.webp"
            alt="texto alternativo"
            width={800}
            height={300}
            className="w-full object-cover"
          />
          <CardHeader className="gap-4">
            <Pen size={36} />
            <CardTitle className="text-2xl font-bold">
              UI & Design Systems
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              We build scalable design systems that keep your product consistent
              and your team moving fast. From color tokens to full component
              libraries, we handle everything.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            {/* Fila de detalles */}
            <div className="flex gap-6">
              <div>
                <p className="text-sm font-semibold">Deliverables</p>
                <p className="text-sm text-muted-foreground">
                  Component library, typography rules, color tokens and full
                  documentation ready to use.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold">Timeline</p>
                <p className="text-sm text-muted-foreground">
                  2 to 4 weeks depending on project scope and complexity.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              <span className="border rounded-full px-3 py-1 text-xs">
                React
              </span>
              <span className="border rounded-full px-3 py-1 text-xs">
                Tailwind
              </span>
              <span className="border rounded-full px-3 py-1 text-xs">
                Next.js
              </span>
            </div>
          </CardContent>

          <CardFooter className="flex gap-3 mt-2">
            <Link
              href="/contact"
              className="inline-block bg-black text-white rounded-full px-6 py-2
            hover:bg-neutral-800 transition-all duration-300"
            >
              Get in touch {"->"}
            </Link>
            <Link
              href="/about"
              className="inline-block border border-black rounded-full px-6 py-2
            hover:bg-black hover:text-white transition-all duration-300"
            >
              Learn more
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
