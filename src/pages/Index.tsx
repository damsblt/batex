import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, PaintRoller, Ruler, House, ShowerHead, Sparkles, Award, Users, Clock } from "lucide-react";
import { motion } from 'framer-motion';
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import FloatingElement from "@/components/FloatingElement";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEO from "@/components/SEO";

const Index = () => {
  const services = [
    {
      title: "Recouvrement de sol et escaliers",
      description: "Pose de revêtements variés: parquet massif/stratifié, carrelage, vinyle, moquette, etc.",
      icon: <Ruler className="h-8 w-8 text-amber-600" />,
      link: "/services/recouvrement"
    },
    {
      title: "Peinture et rénovation",
      description: "Préparation des murs, enduisage, peinture et finition propre.",
      icon: <PaintRoller className="h-8 w-8 text-amber-600" />,
      link: "/services/peinture"
    },
    {
      title: "Travaux de menuiserie",
      description: "Installation portes et fenêtres, pose de cuisine, et réparation diverse de boiserie.",
      icon: <Wrench className="h-8 w-8 text-amber-600" />,
      link: "/services/menuiserie"
    },
    {
      title: "Construction de murs",
      description: "Cloisons, faux plafonds, parois et ouverture de murs et fenêtres.",
      icon: <House className="h-8 w-8 text-amber-600" />,
      link: "/services/faux-murs"
    },
    {
      title: "Travaux sanitaires",
      description: "Pose ou remplacement de lavabos, robinets, WC, baignoires et douches.",
      icon: <ShowerHead className="h-8 w-8 text-amber-600" />,
      link: "/services/sanitaires"
    },
    {
      title: "Aménagement de jardin",
      description: "Installation de clôtures, terrasses, verandas, cabanes de jardin, etc.",
      icon: <House className="h-8 w-8 text-amber-600" />,
      link: "/services/jardin"
    },
    {
      title: "Entretien de toiture",
      description: "Nettoyage, démoussage, remplacement de tuiles et pare-pluie et pose d'isolation en sous-toiture.",
      icon: <House className="h-8 w-8 text-amber-600" />,
      link: "/services/toiture"
    }
  ];

  return (
    <>
      <SEO
        title="Bâtex - Entreprise de Rénovation en Suisse | Baris Ozcan"
        description="Bâtex, dirigée par Baris Ozcan, menuisier certifié avec plus de 15 ans d'expérience. Rénovation, menuiserie, peinture, aménagement intérieur et extérieur en Suisse. Devis gratuit et service de qualité."
        keywords="rénovation suisse, menuiserie, peinture, aménagement, Baris Ozcan, Bâtex, construction, rénovation intérieure, rénovation extérieure"
        image="https://batex.ch/accueil.jpeg"
        url="https://batex.ch"
        type="website"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 to-orange-100 py-20 overflow-hidden">
        {/* Floating decorative elements */}
        <FloatingElement className="absolute top-20 left-10 opacity-20" delay={0} duration={4}>
          <Sparkles className="h-12 w-12 text-amber-600" />
        </FloatingElement>
        <FloatingElement className="absolute top-32 right-20 opacity-20" delay={1} duration={5}>
          <Award className="h-10 w-10 text-amber-600" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-32 left-20 opacity-20" delay={2} duration={3.5}>
          <Users className="h-8 w-8 text-amber-600" />
        </FloatingElement>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} direction="up">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Bienvenue chez <span className="text-amber-700">Bâtex</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Votre partenaire de confiance pour tous vos projets de rénovation en Suisse
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/a-propos">
                  <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg shadow-lg">
                    Découvrir notre entreprise
                  </Button>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Une expertise de plus de 15 ans à votre service
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Bâtex est dirigée par <strong>Baris Ozcan</strong>, menuisier certifié avec plus de 15 ans d'expérience. 
                  Notre entreprise se distingue par sa réactivité, sa polyvalence et la qualité de ses travaux, 
                  réalisés avec soin et professionnalisme.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Nous accompagnons nos clients dans tous leurs projets d'aménagement intérieur ou extérieur, 
                  en apportant notre expertise technique et notre sens du détail à chaque réalisation.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/a-propos">
                    <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                      En savoir plus sur nous
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.4}>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/accueil.jpeg"
                  alt="accueil"
                  className="rounded-lg shadow-lg w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Nos Services
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Découvrez notre gamme complète de services de rénovation, 
                adaptés à tous vos besoins d'aménagement
              </motion.p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-700 relative overflow-hidden">
        {/* Floating decorative elements */}
        <FloatingElement className="absolute top-10 left-10 opacity-10" delay={0} duration={4}>
          <Clock className="h-16 w-16 text-white" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-10 right-10 opacity-10" delay={2} duration={5}>
          <Award className="h-12 w-12 text-white" />
        </FloatingElement>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Prêt à démarrer votre projet ?
            </motion.h2>
            <motion.p 
              className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
              Notre équipe réactive vous accompagne dans tous vos projets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg">
                  Demander un devis
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Nos Chiffres Clés
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Plus de 15 ans d'expérience au service de nos clients
              </motion.p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: 15, suffix: '+', label: 'Années d\'expérience', icon: <Clock className="h-8 w-8 text-amber-600" /> },
              { number: 500, suffix: '+', label: 'Projets réalisés', icon: <Award className="h-8 w-8 text-amber-600" /> },
              { number: 98, suffix: '%', label: 'Clients satisfaits', icon: <Users className="h-8 w-8 text-amber-600" /> },
              { number: 24, suffix: 'h', label: 'Délai de réponse', icon: <Sparkles className="h-8 w-8 text-amber-600" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">
                  <AnimatedCounter 
                    value={stat.number} 
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;
