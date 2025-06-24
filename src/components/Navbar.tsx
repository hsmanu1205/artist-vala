import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  Menu,
  Phone,
  Mail,
  MapPin,
  Music,
  Users,
  Star,
  Camera,
  Mic,
  HeartHandshake,
  Headphones,
} from "lucide-react";
import { categories as allCategories } from "@/constants/categories";

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface CategoryItem extends NavItem {
  description: string;
}

function getCategoryIcon(name: string) {
  const iconMap: Record<string, React.ReactNode> = {
    "Singers": <Mic className="w-4 h-4" />,
    "Music Bands": <Headphones className="w-4 h-4" />,
    "Dancers": <Users className="w-4 h-4" />,
    "Comedians": <Star className="w-4 h-4" />,
    "Photographers": <Camera className="w-4 h-4" />,
    "Emcees": <Mic className="w-4 h-4" />,
    "Instrumentalists": <Music className="w-4 h-4" />,
    "DJs": <Headphones className="w-4 h-4" />,
    "Actors": <Star className="w-4 h-4" />,
    "Models": <Users className="w-4 h-4" />,
    "Chefs": <HeartHandshake className="w-4 h-4" />,
    "Painters": <Camera className="w-4 h-4" />,
    "Poets": <Mic className="w-4 h-4" />,
    "Magicians": <Star className="w-4 h-4" />,
    "Makeup Artists": <HeartHandshake className="w-4 h-4" />,
    "Fashion Designers": <Users className="w-4 h-4" />,
    "Videographers": <Camera className="w-4 h-4" />,
    "Voice Artists": <Mic className="w-4 h-4" />,
    "Circus Performers": <Star className="w-4 h-4" />,
    "Wellness Coaches": <HeartHandshake className="w-4 h-4" />
  };

  return iconMap[name] || <Music className="w-4 h-4" />;
}

const categories: CategoryItem[] = allCategories.map(category => ({
  name: category.name,
  href: category.href,
  icon: getCategoryIcon(category.name),
  description: category.description,
}));

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-gradient-brand text-white py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+91 7375855204

</span>
              <span className="sm:hidden">Call</span>
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">info@artistvaala.com</span>
              <span className="sm:hidden">Email</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="hidden md:inline">Live Entertaining Experience</span>
            <span className="md:hidden">India</span>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-3d border-b border-white/20"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link to="/" className="flex items-center space-x-2 hover-lift">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-brand rounded-lg flex items-center justify-center shadow-3d">
                <Music className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gradient">
                  Artist Vaala
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  by Scom Experience
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`btn-3d px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-3d-hover hover:-translate-y-1 ${
                    isActive(item.href)
                      ? "bg-gradient-brand text-white shadow-3d"
                      : "bg-white/80 text-gray-700 hover:bg-primary hover:text-white shadow-md"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger className="btn-3d px-4 py-2 rounded-lg flex items-center gap-1 font-medium bg-white/80 text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-3d-hover hover:-translate-y-1 shadow-md">
                  Category
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-[600px] p-6 bg-gray-900 shadow-3d border-0 rounded-lg"
                >
                  <div className="grid grid-cols-4 gap-3">
                    <DropdownMenuItem asChild>
                      <Link
                        to="/artists"
                        className="flex flex-col items-center text-white hover:text-primary transition-colors duration-300 text-sm font-medium text-center py-3 px-2 hover:bg-white/10 rounded-md gap-2 border border-primary/20"
                      >
                        <div className="text-primary">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="text-xs leading-tight">
                          All Artists
                        </span>
                      </Link>
                    </DropdownMenuItem>

                    {categories.map((category) => (
                      <DropdownMenuItem key={category.name} asChild>
                        <Link
                          to={category.href}
                          className="flex flex-col items-center text-white hover:text-primary transition-colors duration-300 text-sm font-medium text-center py-3 px-2 hover:bg-white/10 rounded-md gap-2"
                        >
                          <div className="text-primary">{category.icon}</div>
                          <span className="text-xs leading-tight">
                            {category.name}
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <Button
                className="btn-3d bg-gradient-brand hover:shadow-glow text-white font-semibold px-3 md:px-6 text-sm md:text-base"
                asChild
              >
                <Link to="/instant-booking">
                  <span className="hidden sm:inline">Instant Booking</span>
                  <span className="sm:hidden">Book</span>
                </Link>
              </Button>

              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] max-w-[90vw]">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                            isActive(item.href)
                              ? "bg-primary text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 px-4">
                        Categories
                      </h3>
                      <div className="flex flex-col gap-1">
                        {categories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="p-2 bg-primary/10 rounded-md">
                              {category.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">
                                {category.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {category.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}