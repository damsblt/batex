import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElement from "@/components/FloatingElement";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Galerie = () => {
  useScrollToTop();
  
  const images = [
    { src: "/batex/Galerie/batex-renovation-1.jpeg", alt: "batex-renovation-1", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-2.jpeg", alt: "batex-renovation-2", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-6.jpeg", alt: "batex-renovation-6", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-8.jpeg", alt: "batex-renovation-8", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-10.jpeg", alt: "batex-renovation-10", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-11.jpeg", alt: "batex-renovation-11", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-12.jpeg", alt: "batex-renovation-12", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-15.jpeg", alt: "batex-renovation-15", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-17.jpeg", alt: "batex-renovation-17", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-18.jpeg", alt: "batex-renovation-18", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-19.jpeg", alt: "batex-renovation-19", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-20.jpeg", alt: "batex-renovation-20", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-21.jpeg", alt: "batex-renovation-21", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-22.jpeg", alt: "batex-renovation-22", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-23.jpeg", alt: "batex-renovation-23", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-24.jpeg", alt: "batex-renovation-24", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-25.jpeg", alt: "batex-renovation-25", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-26.jpeg", alt: "batex-renovation-26", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-27.jpeg", alt: "batex-renovation-27", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-28.jpeg", alt: "batex-renovation-28", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-29.jpeg", alt: "batex-renovation-29", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-31.jpeg", alt: "batex-renovation-31", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-32.jpeg", alt: "batex-renovation-32", category: "Rénovation" },
    { src: "/batex/Galerie/batex-renovation-33.jpeg", alt: "batex-renovation-33", category: "Rénovation" },
  ];

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
              Notre Galerie
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Découvrez quelques-unes de nos réalisations qui témoignent de notre savoir-faire
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{image.category}</p>
                    <p className="text-xs opacity-90">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection direction="up" delay={0.6}>
          <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center relative overflow-hidden">
            {/* Floating decorative elements */}
            <FloatingElement className="absolute top-4 left-4 opacity-10" delay={0} duration={4}>
              <Camera className="h-8 w-8 text-amber-600" />
            </FloatingElement>
            <FloatingElement className="absolute bottom-4 right-4 opacity-10" delay={2} duration={5}>
              <Sparkles className="h-6 w-6 text-amber-600" />
            </FloatingElement>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Impressionné par nos réalisations ?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Contactez-nous pour discuter de votre projet et voir comment nous pouvons vous aider.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
              >
                <ArrowRight className="h-5 w-5 inline mr-2" />
                Démarrer mon projet
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Galerie;
