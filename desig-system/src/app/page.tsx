import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Prueba from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { Ghost } from "lucide-react";

export default function home() {
  return (
    <>
      <Button variant="prueba" size="lg">
        hey
      </Button>
      {/* prueba de componente simple*/}
     <Prueba></Prueba>
    </>
  );
}
