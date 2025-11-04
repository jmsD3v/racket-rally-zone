import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center px-6 py-12 max-w-2xl">
        {/* Broken Paddle Animation */}
        <div className="relative mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-4">
            {/* Left part of broken paddle */}
            <div className="relative">
              <div className="w-24 h-32 bg-primary/20 rounded-tl-full rounded-bl-full border-4 border-primary rotate-12 transform transition-transform hover:rotate-6">
                <div className="absolute inset-2 bg-background/50 rounded-tl-full rounded-bl-full"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-16 bg-primary/30 rounded"></div>
            </div>
            
            {/* 404 in the middle */}
            <div className="relative z-10">
              <h1 className="text-8xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                404
              </h1>
              {/* Padel ball */}
              <div className="absolute -top-8 -right-8 w-12 h-12 rounded-full bg-accent animate-bounce shadow-glow"></div>
            </div>
            
            {/* Right part of broken paddle */}
            <div className="relative">
              <div className="w-24 h-32 bg-primary/20 rounded-tr-full rounded-br-full border-4 border-primary -rotate-12 transform transition-transform hover:-rotate-6">
                <div className="absolute inset-2 bg-background/50 rounded-tr-full rounded-br-full"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-16 bg-primary/30 rounded"></div>
            </div>
          </div>
          
          {/* Crack effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-destructive/50 rotate-12 blur-sm"></div>
        </div>

        {/* Text content */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold">¡Paleta rota!</h2>
          <p className="text-xl text-muted-foreground">
            Parece que esta página se fue fuera de la cancha
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            La ruta <code className="px-2 py-1 bg-muted rounded text-primary">{location.pathname}</code> no existe en nuestro sistema
          </p>
        </div>

        {/* Action button */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Volver a la cancha
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
