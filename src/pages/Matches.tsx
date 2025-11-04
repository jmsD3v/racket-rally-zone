import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Matches = () => {
  // Mock data - will be replaced with real data from Supabase
  const matches = [
    {
      id: "1",
      date: "2024-11-08",
      time: "18:00",
      location: "Club Deportivo Central",
      level: "Intermedio",
      currentPlayers: 2,
      maxPlayers: 4,
      status: "open",
    },
    {
      id: "2",
      date: "2024-11-09",
      time: "10:00",
      location: "Pádel Arena",
      level: "Avanzado",
      currentPlayers: 3,
      maxPlayers: 4,
      status: "open",
    },
    {
      id: "3",
      date: "2024-11-10",
      time: "16:30",
      location: "Club Social",
      level: "Principiante",
      currentPlayers: 1,
      maxPlayers: 4,
      status: "open",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Partidos Disponibles</h1>
          <p className="text-muted-foreground text-lg">
            Encuentra jugadores de tu nivel y únete a un partido
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar por ubicación, nivel..." 
              className="pl-9"
            />
          </div>
          <Button className="gradient-hero border-0 shadow-soft">
            <Plus className="mr-2 h-4 w-4" />
            Crear Partido
          </Button>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <Card key={match.id} className="glass-card shadow-soft hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {match.level}
                  </Badge>
                  <Badge variant="outline">
                    {match.currentPlayers}/{match.maxPlayers}
                    <Users className="ml-1 h-3 w-3" />
                  </Badge>
                </div>
                <CardTitle className="text-xl">{match.location}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{match.date} · {match.time}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Ver ubicación</span>
                </div>
                <Button className="w-full" variant="outline">
                  Unirse al Partido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State Placeholder */}
        {matches.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 rounded-full gradient-hero flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">No hay partidos disponibles</h3>
            <p className="text-muted-foreground mb-6">Sé el primero en crear un partido</p>
            <Button className="gradient-hero border-0">
              <Plus className="mr-2 h-4 w-4" />
              Crear Partido
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
