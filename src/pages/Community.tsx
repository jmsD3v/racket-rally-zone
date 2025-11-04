import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Comunidad</h1>
          <p className="text-muted-foreground text-lg">
            Conecta con jugadores de pádel de todo el país
          </p>
        </div>

        <Card className="glass-card shadow-soft">
          <CardHeader>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg gradient-hero mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle>Funciones de Comunidad</CardTitle>
            <CardDescription>
              Próximamente disponible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Estamos desarrollando funciones para que puedas conectar con otros jugadores,
              formar equipos, compartir experiencias y mucho más.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;
