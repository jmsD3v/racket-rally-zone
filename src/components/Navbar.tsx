import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Inicio", icon: Home },
    { path: "/matches", label: "Partidos", icon: Calendar },
    { path: "/tournaments", label: "Torneos", icon: Trophy },
    { path: "/community", label: "Comunidad", icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-hero">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PadelMatch
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="transition-smooth"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/auth">Acceder</Link>
          </Button>
          <Button className="gradient-hero border-0" asChild>
            <Link to="/auth">Registro</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
