import { Link } from "react-router-dom";

const Jardin = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aménagement de Jardin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Création d'espaces extérieurs sur mesure
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Aménagements extérieurs
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Installation de clôtures, terrasses, petits murets ou escaliers extérieurs. 
                Bâtex donne du caractère à votre extérieur, qu'il soit petit ou spacieux. 
                Nous créons des espaces fonctionnels et esthétiques qui s'harmonisent 
                parfaitement avec l'architecture de votre maison.
              </p>
            </div>
            <div>
              <img
                src="/batex/exterieur.jpg"
                alt="Terrasse en bois"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/batex/cloture.jpg"
                alt="Clôture de jardin"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Solutions durables
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous privilégions des matériaux résistants aux intempéries et adaptés au climat suisse. 
                Nos réalisations sont conçues pour durer et nécessiter un minimum d'entretien, 
                tout en conservant leur beauté au fil des saisons.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Envie d'aménager votre extérieur ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Contactez-nous pour transformer votre jardin en espace de vie.
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

export default Jardin;
