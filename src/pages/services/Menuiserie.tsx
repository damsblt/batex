import { Link } from "react-router-dom";

const Menuiserie = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Travaux de Menuiserie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Création de meubles sur mesure et aménagements boisés personnalisés
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Création sur mesure
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Création de meubles sur mesure, pose de parquet, habillage de murs ou de plafonds boisés. 
                Bâtex prend en charge vos projets d'aménagement intérieur avec un grand soin du détail. 
                Chaque pièce est conçue selon vos besoins spécifiques et s'intègre parfaitement dans votre espace.
              </p>
            </div>
            <div>
              <div className="rounded-lg shadow-lg w-full h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden bg-neutral-100 flex items-center justify-center">
                <img
                  src="/batex/menuiserie2.avif"
                  alt="Outil en métal noir et gris"
                  className="object-cover object-center w-full h-full scale-130"
                  style={{ objectPosition: '60% 40%' }}
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Pose de parquet"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expertise traditionnelle
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos techniques de menuiserie allient savoir-faire traditionnel et innovations modernes. 
                Nous travaillons avec des essences de bois nobles et durables, en respectant les normes 
                environnementales. Chaque réalisation reflète notre passion pour l'artisanat et notre 
                engagement envers la qualité.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Un projet de menuiserie en tête ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
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

export default Menuiserie;
