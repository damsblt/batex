import { Link } from "react-router-dom";

const Galerie = () => {
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Galerie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations qui témoignent de notre savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-xs opacity-90">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Impressionné par nos réalisations ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Contactez-nous pour discuter de votre projet et voir comment nous pouvons vous aider.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Démarrer mon projet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Galerie;
