import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElement from "@/components/FloatingElement";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const About = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              À propos de Bâtex
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Découvrez l'histoire et l'expertise qui font la différence
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.3}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/baris_ozcan.png"
                alt="Baris Ozcan au travail"
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
            <AnimatedSection direction="right" delay={0.5}>
              <div>
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Notre Histoire
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Bâtex est une entreprise spécialisée dans la rénovation, dirigée par 
                  <strong> Baris Ozcan</strong>, un menuisier comptant plus de 15 ans d'expérience. 
                  Réactif, polyvalent et à l'écoute, il met un point d'honneur à livrer des travaux de qualité, 
                  réalisés avec soin et professionnalisme.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Bâtex accompagne ses clients dans tous leurs projets d'aménagement intérieur ou extérieur, 
                  en apportant une expertise technique solide et un sens du service irréprochable.
                </motion.p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Valeurs */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="bg-gray-50 rounded-lg p-8 mb-16 relative overflow-hidden">
            {/* Floating decorative elements */}
            <FloatingElement className="absolute top-4 left-4 opacity-10" delay={0} duration={4}>
              <Star className="h-8 w-8 text-amber-600" />
            </FloatingElement>
            <FloatingElement className="absolute bottom-4 right-4 opacity-10" delay={2} duration={5}>
              <Award className="h-6 w-6 text-amber-600" />
            </FloatingElement>
            
            <motion.h2 
              className="text-3xl font-bold text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Nos Valeurs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { letter: "Q", title: "Qualité", description: "Chaque projet est réalisé avec le plus grand soin et selon les standards suisses.", icon: <Star className="h-6 w-6 text-amber-700" /> },
                { letter: "R", title: "Réactivité", description: "Nous répondons rapidement à vos demandes et respectons les délais convenus.", icon: <Clock className="h-6 w-6 text-amber-700" /> },
                { letter: "P", title: "Professionnalisme", description: "Notre approche méthodique et notre expertise garantissent des résultats exceptionnels.", icon: <Award className="h-6 w-6 text-amber-700" /> }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Expertise */}
        <AnimatedSection direction="right" delay={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.7}>
              <div>
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Plus de 15 ans d'expertise
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Dirigée par Baris Ozcan, menuisier, notre équipe maîtrise tous les aspects 
                  de la rénovation. De la menuiserie traditionnelle aux techniques les plus modernes, 
                  nous adaptons nos compétences à vos besoins spécifiques.
                </motion.p>
                <div className="space-y-4">
                  {[
                    "Menuisier",
                    "Plus de 15 ans d'expérience", 
                    "Polyvalence dans tous les corps de métier",
                    "Entreprise basée en Suisse"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-amber-600 rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/experience.jpg"
                alt="Outils de menuiserie"
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
