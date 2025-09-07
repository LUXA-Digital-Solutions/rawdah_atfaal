import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-islamic rounded-xl flex items-center justify-center shadow-soft">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">Rawdah</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant={isActive("/") ? "soft" : "ghost"}
                className="flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Button>
            </Link>
            <Link to="/quran">
              <Button
                variant={isActive("/quran") ? "soft" : "ghost"}
                className="flex items-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Qur'an Program</span>
              </Button>
            </Link>
            <Link to="/hadith">
              <Button
                variant={isActive("/hadith") ? "soft" : "ghost"}
                className="flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Hadith Program</span>
              </Button>
            </Link>
            <Button variant="hero" size="lg" className="ml-4">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-up">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/") ? "soft" : "ghost"}
                className="w-full justify-start"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/quran" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/quran") ? "soft" : "ghost"}
                className="w-full justify-start"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Qur'an Program
              </Button>
            </Link>
            <Link to="/hadith" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/hadith") ? "soft" : "ghost"}
                className="w-full justify-start"
              >
                <Users className="w-4 h-4 mr-2" />
                Hadith Program
              </Button>
            </Link>
            <div className="pt-4">
              <Button variant="hero" className="w-full" onClick={() => setIsOpen(false)}>
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;