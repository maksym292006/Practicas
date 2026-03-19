import Link from "next/link";
import React, { Children } from "react";
// importacion cva -> sirve para crear  clases dinamicas segun  una prop
import { cva } from "class-variance-authority";

const linkVariants = cva("px-2 py-1 rounded", {
  variants: {
    variant: {
      default: "text-white",
      hover: "hover:bg-sidebar-primary hover:font-extrabold",
    },
  },
});
export function NavLink({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "hover";
}) {
  return (
    <Link href={href} className={linkVariants({ variant })}>
      {children}
    </Link>
  );
}
