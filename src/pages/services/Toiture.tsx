const Toiture = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entretien de Toiture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Préservation et maintenance de votre toiture
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Entretien préventif
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nettoyage, démoussage, petites réparations. 
                Un entretien régulier permet de prolonger la durée de vie de votre toiture. 
                Nous effectuons un diagnostic complet et vous conseillons sur les interventions 
                nécessaires pour maintenir votre toiture en parfait état.
              </p>
            </div>
            <div>
              <img
                src="/batex/toiture2.jpg"
                alt="Nettoyage de toiture"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/batex/toiture.jpg"
                alt="Toiture en tuiles"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Réparations ciblées
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous intervenons rapidement sur les petites réparations pour éviter que 
                les problèmes ne s'aggravent. Remplacement de tuiles, étanchéité, gouttières : 
                notre expertise préserve l'intégrité de votre habitation contre les intempéries.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Votre toiture a besoin d'entretien ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Planifiez un contrôle préventif pour éviter les grosses réparations.
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

export default Toiture;
