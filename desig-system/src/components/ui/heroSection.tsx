import Link from "next/link";

function Hero() {
  return (
    <section className="flex flex-col text-center ">
      <h1 className="font-extrabold text-5xl pt-3 pb-5">
        Importance about Design System
      </h1>
      <p className="pb-5 ">
        Organize your UI, standardize components, and turn your product into a
        growth machine.
      </p>

      <div
        className="mt-2 border border-black rounded-full px-4 py-1 w-fit mx-auto
          hover:bg-slate-200  hover:scale-103 hover:border-primary hover:underline  
          transition-all duration-310"
      >
        <Link href="/contact">Contact us for personal design {"->"}</Link>
      </div>
    </section>
  );
}
export default Hero;
