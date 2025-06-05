const Peinture = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Peinture et Rénovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rafraîchissement et transformation de vos espaces intérieurs
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Finitions professionnelles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rafraîchissement de peinture, enduit, préparation des murs et finitions propres. 
                Pour chaque pièce, nous apportons une nouvelle vie grâce à des couleurs choisies avec vous. 
                Notre expertise garantit un résultat impeccable et durable dans le temps.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg"
                alt="Peinture murale"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg"
                alt="Préparation des murs"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Conseil en couleurs
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous vous accompagnons dans le choix des couleurs et des finitions pour créer 
                l'ambiance désirée dans vos espaces. Nos conseillers vous guident vers les solutions 
                les mieux adaptées à votre style de vie et à l'architecture de votre intérieur.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Envie de rafraîchir vos murs ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Contactez-nous pour un devis gratuit et des conseils personnalisés.
          </p>
          <a
            href="/#/contact"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  );
};

export default Peinture;
