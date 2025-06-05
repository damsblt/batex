const Recouvrement = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recouvrement / Habillage de Sols et Marches
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions complètes pour vos revêtements de sol
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Revêtements variés
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pose de revêtements variés : carrelage, vinyle, stratifié, moquette, etc. 
                Les matériaux sont sélectionnés pour leur esthétique et leur durabilité. 
                Nous vous conseillons sur le choix le plus adapté à chaque pièce selon son usage 
                et vos préférences esthétiques.
              </p>
            </div>
            <div>
              <img
                src="/batex/sol.jpg"
                alt="Pose de carrelage"
                className="rounded-lg shadow-lg aspect-square object-cover mx-auto"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/batex/escalier.jpg"
                alt="Habillage d'escalier"
                className="rounded-lg shadow-lg aspect-square object-cover object-bottom mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Habillage de marches
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Spécialistes de l'habillage de marches et escaliers, nous transformons vos escaliers 
                en éléments décoratifs de votre intérieur. Nos solutions allient sécurité, confort 
                et esthétisme pour valoriser ces espaces de passage importants.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Besoin de changer vos sols ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Demandez conseil à nos experts pour le choix du revêtement idéal.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recouvrement;
