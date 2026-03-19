import Link from "next/link";

function Hero() {
  return (
    <section className="flex flex-col text-center ">
      <h1 className="font-extrabold text-2xl pt-3 pb-3">
        Importance about Design System
      </h1>
      <p className="pb-5">
        Organize your UI, standardize components, and turn your product into a
        growth machine.
      </p>

      <p>Contact us for personal design</p>
      <div className="mt-2">
        <Link href="/contact" className="bg-black text-white rounded-sm p-1 ">
          click here
        </Link>
      </div>
    </section>
  );
}
export default Hero;
