import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Wrench, Hammer, Ruler, ArrowRight } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElement from "@/components/FloatingElement";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Menuiserie = () => {
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
              Travaux de Menuiserie
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Création de meubles sur mesure et aménagements boisés personnalisés
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Section 1 */}
          <AnimatedSection direction="left" delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="right" delay={0.5}>
                <div>
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Création sur mesure
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Création de meubles sur mesure, pose de parquet, habillage de murs ou de plafonds boisés. 
                    Bâtex prend en charge vos projets d'aménagement intérieur avec un grand soin du détail. 
                    Chaque pièce est conçue selon vos besoins spécifiques et s'intègre parfaitement dans votre espace.
                  </motion.p>
                </div>
              </AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-lg shadow-lg w-full h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden bg-neutral-100 flex items-center justify-center">
                  <motion.img
                    src="/batex/menuiserie2.avif"
                    alt="Outil en métal noir et gris"
                    className="object-cover object-center w-full h-full scale-130"
                    style={{ objectPosition: '60% 40%' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Section 2 */}
          <AnimatedSection direction="right" delay={0.6}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Pose de parquet"
                  className="rounded-lg shadow-lg w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </motion.div>
              <AnimatedSection direction="left" delay={0.8}>
                <div className="order-1 lg:order-2">
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Expertise traditionnelle
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    Nos techniques de menuiserie allient savoir-faire traditionnel et innovations modernes. 
                    Nous travaillons avec des essences de bois nobles et durables, en respectant les normes 
                    environnementales. Chaque réalisation reflète notre passion pour l'artisanat et notre 
                    engagement envers la qualité.
                  </motion.p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA Section */}
        <AnimatedSection direction="up" delay={0.8}>
          <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center relative overflow-hidden">
            {/* Floating decorative elements */}
            <FloatingElement className="absolute top-4 left-4 opacity-10" delay={0} duration={4}>
              <Wrench className="h-8 w-8 text-amber-600" />
            </FloatingElement>
            <FloatingElement className="absolute bottom-4 right-4 opacity-10" delay={2} duration={5}>
              <Hammer className="h-6 w-6 text-amber-600" />
            </FloatingElement>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Un projet de menuiserie en tête ?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
              >
                <ArrowRight className="h-5 w-5 inline mr-2" />
                Demander un devis
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Menuiserie;
