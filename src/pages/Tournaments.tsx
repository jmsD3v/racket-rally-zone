import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, MapPin, Users } from "lucide-react";

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Torneos</h1>
          <p className="text-muted-foreground text-lg">
            Próximamente: Sistema completo de torneos con brackets automáticos
          </p>
        </div>

        <Card className="glass-card shadow-soft">
          <CardHeader>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg gradient-hero mb-4">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <CardTitle>Torneos en Desarrollo</CardTitle>
            <CardDescription>
              Estamos trabajando en un sistema completo de gestión de torneos que incluirá:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                Brackets automáticos (eliminación directa, round robin)
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                Gestión de inscripciones y pagos
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                Rankings y estadísticas por torneo
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                Notificaciones en tiempo real
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tournaments;
