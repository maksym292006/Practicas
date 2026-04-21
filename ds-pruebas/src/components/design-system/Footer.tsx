export const Footer = () => (
  <footer className="bg-neutral-50 border-t border-neutral-200 px-4 py-10 text-neutral-600">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <h4 className="font-bold text-neutral-900">Obrador Local</h4>
        <p className="text-sm">Calidad y cercanía en cada producto. Horneamos para ti todos los días.</p>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-neutral-900">Legal</h4>
        <ul className="text-sm space-y-2">
          <li>Aviso Legal</li>
          <li>Política de Privacidad</li>
          <li>Alérgenos y Salud</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-neutral-900">Redes</h4>
        <div className="flex gap-4">
          <span className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">IG</span>
          <span className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">FB</span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-neutral-200 text-center text-xs">
      © 2026 Obrador Local - Todos los derechos reservados.
    </div>
  </footer>
);