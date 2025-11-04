import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    {
      icon: Calendar,
      title: "Organiza Partidos",
      description: "Encuentra jugadores de tu nivel y organiza partidos fácilmente",
    },
    {
      icon: Trophy,
      title: "Torneos Pro",
      description: "Participa en torneos locales con brackets automáticos",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Conecta con miles de jugadores apasionados del pádel",
    },
    {
      icon: TrendingUp,
      title: "Seguimiento ELO",
      description: "Mejora tu nivel con estadísticas detalladas y ranking",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Tu plataforma de{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                pádel definitiva
              </span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Organiza partidos, compite en torneos, mejora tu nivel y conecta con la comunidad
              de pádel más activa. Todo en un solo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-hero border-0 shadow-glow text-lg" asChild>
                <Link to="/matches">
                  <Calendar className="mr-2 h-5 w-5" />
                  Buscar Partidos
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/tournaments">
                  <Trophy className="mr-2 h-5 w-5" />
                  Ver Torneos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-hero mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="glass-card rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10K+", label: "Jugadores Activos" },
                { value: "5K+", label: "Partidos Jugados" },
                { value: "200+", label: "Torneos Organizados" },
                { value: "150+", label: "Clubes Asociados" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
