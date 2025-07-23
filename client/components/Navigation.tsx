import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Atom } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/timeline", label: "Timeline" },
    { path: "/perception-shifts", label: "Perception Shifts" },
    { path: "/government-vs-public", label: "Government vs Public" },
    { path: "/sources", label: "References" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 font-serif font-semibold text-xl"
          >
            <Atom className="h-6 w-6 text-nuclear-blue" />
            <span>Nuclear Perceptions</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </div>

          {/* Mobile menu button - for now just show first few items */}
          <div className="md:hidden flex items-center space-x-1">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/timeline">Timeline</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
