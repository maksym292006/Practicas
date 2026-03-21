import Link from "next/link";
import BotonLink from "./buttonLink";

function Hero() {
  return (
    <section className="flex flex-col text-center ">
      <h1 className="font-extrabold text-5xl pt-3 pb-5">
        Importance of Design System
      </h1>
      <p className="pb-5 ">
        Organize your UI, standardize components, and turn your product into a
        growth machine.
      </p>

      {/* BOTON   OVERLINED 2  */}
      <BotonLink
        link="/contact"
        context="Contact for personal design"
        variant="overlined2"
      />
    </section>
  );
}
export default Hero;
