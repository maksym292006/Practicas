import { Button } from "@/components/ui/button";
import BotonToggle from "@/components/ui/button2";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
// IMPORTACIONES
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/heroSection";
import ServiceCard from "@/components/ui/servicecard";
import Scard from "@/components/ui/servicecard";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className=" flex flex-row gap-4 p-6 justify-center">
        <ServiceCard title="hola" description="description"></ServiceCard>
        <ServiceCard title="maks" description="description"></ServiceCard>
        <ServiceCard title="nestor" description="description"></ServiceCard>
      </div>
    </>
  );
}
