import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

// Variants
const linkVariants = cva("px-2 py-1 rounded", {
  variants: {
    //--variants palabra obligatoria , no se pude personalizar, el resto a gusto propio
    variant: {
      default:
        "inline-block bg-black text-white rounded-full px-6 py-2 hover:bg-neutral-800 transition-all duration-300",
      white:
        "mt-2 border border-black rounded-full px-4 py-1 w-fit mx-auto hover:bg-slate-200  hover:scale-105 hover:underline transition-all duration-310",
      overlined:
        "inline-block border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all duration-300",
    },
  },
});

function BotonLink({
  link,
  context,
  variant = "default",
}: {
  link: string;
  context: string;
  variant?: "default" | "white" | "overlined" | "overlined2";
}) {
  // Variant especial con estructura JSX propia
  if (variant === "overlined2") {
    return (
      <div className="mt-2 border border-black rounded-full p-1 w-fit mx-auto flex items-center hover:bg-slate-200 hover:scale-105 transition-all duration-300 will-change-transform ">
        <Link
          href={link}
          className="inline-block bg-black text-white rounded-full px-6  py-2 hover:bg-neutral-800 transition-all duration-300 will-change-transform"
        >
          {context}
        </Link>
        <span className="px-3 text-black">→</span>
      </div>
    );
  }
  return (
    <div className={linkVariants({ variant })}>
      <Link href={link}>{context}</Link>
    </div>
  );
}

export default BotonLink;
