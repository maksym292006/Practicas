// IMPORTACIONES
import { Button } from "@/components/ui/button";
import BotonToggle from "@/components/ui/buttonToggle";
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
import { Notebook, Paintbrush, Pen, Rocket, Server } from "lucide-react";
import Link from "next/link";
import { server } from "shadcn/mcp";
import BotonOurs from "@/components/ui/buttonLink";
import Tag from "@/components/tags";
import BotonLink from "@/components/ui/buttonLink";
import TCard from "@/components/transparentCard";

export default function Home() {
  return (
    <>
      {/* Hero section  */}

      <Hero></Hero>
      {/* Service Cards */}
      <div className=" flex flex-col mx-auto max-w-5xl rounded-sm gap-5 p-10 mt-10 items-center">
        {/* 1 */}
        <ServiceCard
          icon={<Rocket />}
          title="Product Launch"
          description="We take your product from zero to live, handling design, development and deployment end to end."
        />
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

      {/* CARD */}
      <div className="max-w-4xl mx-auto p-6 ">
        <Card>
          <Image
            src="/images/img3.png"
            alt="texto alternativo"
            width={700}
            height={550}
            className="object-cover mx-auto mt-10 rounded-4xl mt-15 grayscale contrast-125"
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
              <Tag context="React"></Tag>
              <Tag context="Tailwind"></Tag>
              <Tag context="Next.js"></Tag>
            </div>
          </CardContent>
          {/* Footer*/}
          <CardFooter className="flex gap-3 mt-2 ">
            <BotonLink link="/contact" context="Get in touch ->"></BotonLink>
            <BotonLink
              link="/about"
              context="Learn more"
              variant="overlined"
            ></BotonLink>
          </CardFooter>
        </Card>
      </div>
      {/* HOW IT WORKS */}
      <div className="py-20 px-6">
        {/* Título de la sección */}
        <h2 className="text-5xl font-bold text-center mb-12">How it works</h2>

        {/* Contenedor de los tres pacsos */}
        <div className="flex flex-col gap-8  max-w-4xl mx-auto auto items-center">
          {/* Paso 1 */}
          <TCard
            nStep="01"
            title="Discovery call"
            context=" We start with a 30 minute call to understand your project, goals
              and timeline."
          ></TCard>
          {/* Paso 2 */}
          <TCard
            nStep="02"
            title="Design & build"
            context="We design and develop your product iterating with you every step
              of the way."
          ></TCard>
          {/* Paso 3 */}
          <TCard
            nStep="03"
            title="Launch & grow"
            context=" We deploy your product and stay with you to make sure everything
              runs smoothly."
          ></TCard>
        </div>
      </div>
    </>
  );
}
