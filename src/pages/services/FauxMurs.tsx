import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const FauxMurs = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Construction de Faux Murs et Faux Plafonds
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aménagement et optimisation de vos espaces intérieurs
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Délimitation d'espaces
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Réalisation en plaques de plâtre pour délimiter des espaces, intégrer des lumières 
                ou améliorer l'acoustique. Idéal pour transformer un espace sans gros travaux. 
                Ces solutions permettent de créer de nouveaux volumes et d'optimiser l'agencement 
                de votre intérieur.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg"
                alt="Construction de cloison"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/batex/faux-plafond.jpg"
                alt="Faux plafond moderne"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Intégration technique
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos faux plafonds permettent l'intégration discrète de l'éclairage, de la ventilation 
                ou des systèmes de son. Ces aménagements modernes offrent des possibilités infinies 
                pour créer des ambiances uniques tout en cachant les éléments techniques.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Projet d'aménagement en vue ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Discutons de vos idées pour optimiser vos espaces intérieurs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FauxMurs;
