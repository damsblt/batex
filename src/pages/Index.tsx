import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, PaintRoller, Ruler, House, ShowerHead } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Travaux de menuiserie",
      description: "Création de meubles sur mesure, pose de parquet, habillage de murs ou de plafonds boisés.",
      icon: <Wrench className="h-8 w-8 text-amber-600" />,
      link: "/services/menuiserie"
    },
    {
      title: "Peinture et rénovation",
      description: "Rafraîchissement de peinture, enduit, préparation des murs et finitions propres.",
      icon: <PaintRoller className="h-8 w-8 text-amber-600" />,
      link: "/services/peinture"
    },
    {
      title: "Recouvrement de sols",
      description: "Pose de revêtements variés : carrelage, vinyle, stratifié, moquette, etc.",
      icon: <Ruler className="h-8 w-8 text-amber-600" />,
      link: "/services/recouvrement"
    },
    {
      title: "Construction de faux murs",
      description: "Réalisation en plaques de plâtre pour délimiter des espaces, intégrer des lumières.",
      icon: <House className="h-8 w-8 text-amber-600" />,
      link: "/services/faux-murs"
    },
    {
      title: "Aménagement de jardin",
      description: "Installation de clôtures, terrasses, petits murets ou escaliers extérieurs.",
      icon: <House className="h-8 w-8 text-amber-600" />,
      link: "/services/jardin"
    },
    {
      title: "Travaux sanitaires",
      description: "Pose ou remplacement de lavabos, robinets, WC ou douches.",
      icon: <ShowerHead className="h-8 w-8 text-amber-600" />,
      link: "/services/sanitaires"
    },
    {
      title: "Entretien de toiture",
      description: "Nettoyage, démoussage, petites réparations pour prolonger la durée de vie.",
      icon: <House className="h-8 w-8 text-amber-600" />,
      link: "/services/toiture"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bienvenue chez <span className="text-amber-700">Bâtex</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Votre partenaire de confiance pour tous vos projets de rénovation en Suisse
            </p>
            <Link to="/a-propos">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg">
                Découvrir notre entreprise
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Une expertise de plus de 15 ans à votre service
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Bâtex est dirigée par <strong>Baris Ozcan</strong>, menuisier certifié avec plus de 15 ans d'expérience. 
                Notre entreprise se distingue par sa réactivité, sa polyvalence et la qualité de ses travaux, 
                réalisés avec soin et professionnalisme.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nous accompagnons nos clients dans tous leurs projets d'aménagement intérieur ou extérieur, 
                en apportant notre expertise technique et notre sens du détail à chaque réalisation.
              </p>
              <Link to="/a-propos">
                <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                  En savoir plus sur nous
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/batex/renovation.jpg"
                alt="rénovation"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services de rénovation, 
              adaptés à tous vos besoins d'aménagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <div className="text-center">
                    <Link to={service.link}>
                      <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                        En savoir plus
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
            Notre équipe réactive vous accompagne dans tous vos projets.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 text-lg">
              Demander un devis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
