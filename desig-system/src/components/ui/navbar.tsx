/*  React node ->  cualquier cosa que pueda renderizar react 
    children-> elemetbnos que metemos dentro de los componentes  */
export function Navbar({ children }: { children: React.ReactNode }) {
  // Una vez  obtenido el link , lo metemos dentro del nav que aplica tailwind
  return (
    <div className="mx-auto sticky top-0 z-50">
      <nav className="flex gap-4 justify-center w-2xl bg-ring/80 backdrop-blur-[5px]  border border-black/20 text-black m font-thin rounded-[10] p-2 m-2">
        {children}
      </nav>
    </div>
  );
}
