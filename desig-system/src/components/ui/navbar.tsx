/*  React node ->  cualquier cosa que pueda renderizar react 
    children-> elemetbnos que metemos dentro de los componentes  */
export function Navbar({ children }: { children: React.ReactNode }) {
  // Una vez  obtenido el link , lo metemos dentro del nav que aplica tailwind
  return (
    <nav className="flex gap-4 bg-black p-4 text-white font-thin">
      {children}
    </nav>
  );
}

