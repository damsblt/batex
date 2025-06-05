const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de Bâtex
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'histoire et l'expertise qui font la différence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/batex/baris_ozcan.png"
              alt="Baris Ozcan au travail"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bâtex est une entreprise spécialisée dans la rénovation, dirigée par 
              <strong> Baris Ozcan</strong>, un menuisier certifié comptant plus de 15 ans d'expérience. 
              Réactif, polyvalent et à l'écoute, il met un point d'honneur à livrer des travaux de qualité, 
              réalisés avec soin et professionnalisme.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bâtex accompagne ses clients dans tous leurs projets d'aménagement intérieur ou extérieur, 
              en apportant une expertise technique solide et un sens du service irréprochable.
            </p>
          </div>
        </div>

        {/* Valeurs */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">Q</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualité</h3>
              <p className="text-gray-600">
                Chaque projet est réalisé avec le plus grand soin et selon les standards les plus élevés.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">R</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Réactivité</h3>
              <p className="text-gray-600">
                Nous répondons rapidement à vos demandes et respectons les délais convenus.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">P</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professionnalisme</h3>
              <p className="text-gray-600">
                Notre approche méthodique et notre expertise garantissent des résultats exceptionnels.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Plus de 15 ans d'expertise
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dirigée par Baris Ozcan, menuisier certifié, notre équipe maîtrise tous les aspects 
              de la rénovation. De la menuiserie traditionnelle aux techniques les plus modernes, 
              nous adaptons nos compétences à vos besoins spécifiques.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Menuisier certifié</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Plus de 15 ans d'expérience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Polyvalence dans tous les corps de métier</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Entreprise basée en Suisse</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/batex/experience.jpg"
              alt="Outils de menuiserie"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
