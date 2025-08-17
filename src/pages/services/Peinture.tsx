import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { PaintRoller, Palette, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElement from "@/components/FloatingElement";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Peinture = () => {
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
              Peinture et Rénovation
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Rafraîchissement et transformation de vos espaces intérieurs
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
                    Finitions professionnelles
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Rafraîchissement de peinture, enduit, préparation des murs et finitions propres. 
                    Pour chaque pièce, nous apportons une nouvelle vie grâce à des couleurs choisies avec vous. 
                    Notre expertise garantit un résultat impeccable et durable dans le temps.
                  </motion.p>
                </div>
              </AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg"
                  alt="Peinture murale"
                  className="rounded-lg shadow-lg w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
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
                  src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg"
                  alt="Préparation des murs"
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
                    Conseil en couleurs
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    Nous vous accompagnons dans le choix des couleurs et des finitions pour créer 
                    l'ambiance désirée dans vos espaces. Nos conseillers vous guident vers les solutions 
                    les mieux adaptées à votre style de vie et à l'architecture de votre intérieur.
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
              <PaintRoller className="h-8 w-8 text-amber-600" />
            </FloatingElement>
            <FloatingElement className="absolute bottom-4 right-4 opacity-10" delay={2} duration={5}>
              <Palette className="h-6 w-6 text-amber-600" />
            </FloatingElement>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Envie de rafraîchir vos murs ?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Contactez-nous pour un devis gratuit et des conseils personnalisés.
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

export default Peinture;
