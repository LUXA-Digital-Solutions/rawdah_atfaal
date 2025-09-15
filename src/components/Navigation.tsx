import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  BookOpen,
  Users,
  Home,
  Info,
  Phone,
  HelpCircle,
  GraduationCap,
  Bookmark,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.getElementById("mobile-menu");
      if (drawer && !drawer.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/src/assets/rawdah_logo2.jpg"
                alt="Rawdah Logo"
                className="w-10 h-10 rounded-xl shadow-soft"
              />
              <span className="text-2xl font-bold text-primary">Rawdah</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/">
                <Button
                  variant={isActive("/") ? "soft" : "ghost"}
                  className="flex items-center space-x-2 hover:scale-105 transition-all duration-200"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant={isActive("/about") ? "soft" : "ghost"}
                  className="flex items-center space-x-2 hover:scale-105 transition-all duration-200"
                >
                  <Info className="w-4 h-4" />
                  <span>About</span>
                </Button>
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`${
                        isActive("/quran") || isActive("/hadith")
                          ? "bg-primary/10"
                          : ""
                      } hover:scale-105 transition-all duration-200`}
                    >
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Courses
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        <Link
                          to="/quran"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <div className="text-sm font-medium leading-none">
                              Qur'an Program
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn proper Tajweed and Qur'an recitation with
                            expert teachers
                          </p>
                        </Link>
                        <Link
                          to="/hadith"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <div className="text-sm font-medium leading-none">
                              Hadith Program
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Study authentic hadiths and build strong Islamic
                            character
                          </p>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/faq">
                <Button
                  variant={isActive("/faq") ? "soft" : "ghost"}
                  className="flex items-center space-x-2 hover:scale-105 transition-all duration-200"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>FAQ</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant={isActive("/contact") ? "soft" : "ghost"}
                  className="flex items-center space-x-2 hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
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
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 bottom-0 w-[280px] bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="px-4 py-6 space-y-4">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="/src/assets/rawdah_logo2.jpg"
                alt="Rawdah Logo"
                className="w-8 h-8 rounded-xl shadow-soft"
              />
              <span className="text-xl font-bold text-primary">Rawdah</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/") ? "soft" : "ghost"}
                className="w-full justify-start hover:bg-primary/10 transition-all duration-200"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/about") ? "soft" : "ghost"}
                className="w-full justify-start hover:bg-primary/10 transition-all duration-200"
              >
                <Info className="w-4 h-4 mr-2" />
                About
              </Button>
            </Link>

            <div className="space-y-1">
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Courses
                </div>
              </div>
              <Link to="/quran" onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive("/quran") ? "soft" : "ghost"}
                  className="w-full justify-start hover:bg-primary/10 transition-all duration-200 pl-6"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Qur'an Program
                </Button>
              </Link>
              <Link to="/hadith" onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive("/hadith") ? "soft" : "ghost"}
                  className="w-full justify-start hover:bg-primary/10 transition-all duration-200 pl-6"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Hadith Program
                </Button>
              </Link>
            </div>

            <Link to="/faq" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/faq") ? "soft" : "ghost"}
                className="w-full justify-start hover:bg-primary/10 transition-all duration-200"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/contact") ? "soft" : "ghost"}
                className="w-full justify-start hover:bg-primary/10 transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </Link>

            <div className="pt-4">
              <Button
                variant="hero"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
