import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Sanitaires = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Travaux Sanitaires
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Installation et rénovation de vos équipements sanitaires
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Installations complètes
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pose ou remplacement de lavabos, robinets, WC ou douches. 
                Des solutions fiables pour vos petites rénovations de plomberie. 
                Nous garantissons des installations conformes aux normes et parfaitement 
                fonctionnelles pour votre confort quotidien.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6585742/pexels-photo-6585742.jpeg"
                alt="Salle de bain moderne"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/sanitaire.jpg"
                alt="Installation sanitaire"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Réparations rapides
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre équipe intervient rapidement pour tous vos problèmes de plomberie. 
                Fuites, blocages, dysfonctionnements : nous apportons des solutions durables 
                et prévenons les récidives grâce à notre expertise technique.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Problème de plomberie ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Intervention rapide pour tous vos travaux sanitaires.
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

export default Sanitaires;
