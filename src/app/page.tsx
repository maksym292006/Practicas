import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function home() {
  return (
    <>
      <h1>funciona</h1>
      {/* / importacion del componente boton  */}
      <Button>hey</Button>
      <Input placeholder="introduce your name "></Input>
      <Card>
        <CardHeader>
          <CardTitle>dd</CardTitle>
          <CardDescription>prueba de funcamiento </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
