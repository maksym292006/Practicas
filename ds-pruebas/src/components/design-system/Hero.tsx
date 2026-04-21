import { Button } from "./Button";

interface HeroProps {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: HeroProps) => (
  <header className="bg-[#ECD1B4] px-4 py-12 md:py-20 text-center">
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="pt-4">
        <Button variant="primary" size="lg">Ver productos de hoy</Button>
      </div>
    </div>
  </header>
);