
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Travaux de menuiserie", path: "/services/menuiserie" },
    { name: "Peinture et rénovation", path: "/services/peinture" },
    { name: "Recouvrement / habillage de sols", path: "/services/recouvrement" },
    { name: "Construction de faux murs", path: "/services/faux-murs" },
    { name: "Aménagement de jardin", path: "/services/jardin" },
    { name: "Travaux sanitaires", path: "/services/sanitaires" },
    { name: "Entretien de toiture", path: "/services/toiture" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-amber-700">
              Bâtex
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-700 transition-colors">
              Accueil
            </Link>
            <Link to="/a-propos" className="text-gray-700 hover:text-amber-700 transition-colors">
              À propos
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-gray-700 hover:text-amber-700 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/galerie" className="text-gray-700 hover:text-amber-700 transition-colors">
              Galerie
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-amber-700"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/a-propos"
                className="block px-3 py-2 text-gray-700 hover:text-amber-700"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              
              <div className="px-3 py-2">
                <span className="text-gray-900 font-medium">Services</span>
                <div className="ml-4 mt-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-1 text-sm text-gray-600 hover:text-amber-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/galerie"
                className="block px-3 py-2 text-gray-700 hover:text-amber-700"
                onClick={() => setIsOpen(false)}
              >
                Galerie
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-amber-700"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
