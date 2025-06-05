const Galerie = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
      alt: "Travaux de menuiserie",
      category: "Menuiserie"
    },
    {
      src: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg",
      alt: "Peinture murale",
      category: "Peinture"
    },
    {
      src: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg",
      alt: "Pose de carrelage",
      category: "Revêtements"
    },
    {
      src: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg",
      alt: "Construction de cloison",
      category: "Aménagement"
    },
    {
      src: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
      alt: "Terrasse en bois",
      category: "Jardin"
    },
    {
      src: "https://images.pexels.com/photos/6585742/pexels-photo-6585742.jpeg",
      alt: "Salle de bain moderne",
      category: "Sanitaires"
    },
    {
      src: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
      alt: "Toiture en tuiles",
      category: "Toiture"
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      alt: "Pose de parquet",
      category: "Menuiserie"
    },
    {
      src: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg",
      alt: "Préparation des murs",
      category: "Peinture"
    },
    {
      src: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      alt: "Habillage d'escalier",
      category: "Revêtements"
    },
    {
      src: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg",
      alt: "Faux plafond moderne",
      category: "Aménagement"
    },
    {
      src: "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
      alt: "Clôture de jardin",
      category: "Jardin"
    }
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
          <a
            href="/#/contact"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Démarrer mon projet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Galerie;
