export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type?: string;
}

const baseUrl = 'https://batex.ch';

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: 'Bâtex - Rénovation & Menuiserie Suisse | Baris Ozcan | Devis Gratuit',
    description: 'Bâtex Suisse : rénovation complète, menuiserie sur mesure, peinture professionnelle. Baris Ozcan, menuisier certifié 15+ ans expérience. Devis gratuit, travaux soignés, Genève, Vaud, Suisse romande.',
    keywords: 'rénovation suisse, menuiserie suisse, peinture suisse, rénovation genève, rénovation vaud, menuisier genève, peintre suisse, aménagement intérieur, rénovation complète, devis gratuit rénovation, Baris Ozcan, Bâtex, construction suisse, rénovation appartement, rénovation maison, travaux rénovation',
    image: `${baseUrl}/accueil.jpeg`,
    url: baseUrl,
    type: 'website'
  },
  about: {
    title: 'Baris Ozcan - Menuisier Certifié Suisse | 15+ Ans Expérience | Bâtex',
    description: 'Baris Ozcan, menuisier certifié avec 15+ ans d\'expérience en rénovation Suisse. Fondateur de Bâtex, spécialiste menuiserie, peinture, aménagement. Travaux soignés, devis gratuit, Genève, Vaud.',
    keywords: 'Baris Ozcan, menuisier certifié suisse, menuisier genève, menuisier vaud, expérience rénovation, Bâtex fondateur, expertise construction suisse, menuisier professionnel, rénovation expert, travaux qualité',
    image: `${baseUrl}/baris_ozcan.png`,
    url: `${baseUrl}/a-propos`,
    type: 'profile'
  },
  menuiserie: {
    title: 'Menuiserie sur Mesure Suisse | Portes, Fenêtres, Escaliers | Bâtex',
    description: 'Menuiserie sur mesure en Suisse : portes, fenêtres, escaliers, placards, cuisine. Fabrication et installation par Baris Ozcan, menuisier certifié. Devis gratuit, travaux soignés, Genève, Vaud.',
    keywords: 'menuiserie sur mesure suisse, menuiserie genève, menuiserie vaud, portes sur mesure, fenêtres sur mesure, escaliers bois, placards sur mesure, cuisine sur mesure, menuisier professionnel, fabrication menuiserie, installation menuiserie, Baris Ozcan',
    image: `${baseUrl}/menuiserie2.avif`,
    url: `${baseUrl}/services/menuiserie`,
    type: 'website'
  },
  peinture: {
    title: 'Peinture Professionnelle Suisse | Intérieur & Extérieur | Bâtex',
    description: 'Peinture professionnelle en Suisse : intérieur et extérieur. Préparation murs, enduisage, application, finitions soignées. Travail durable, devis gratuit, Genève, Vaud, Suisse romande.',
    keywords: 'peinture professionnelle suisse, peinture genève, peinture vaud, peinture intérieure, peinture extérieure, préparation murs, enduisage, finitions peinture, peintre professionnel, rénovation peinture, travaux peinture',
    image: `${baseUrl}/renovation.jpg`,
    url: `${baseUrl}/services/peinture`,
    type: 'website'
  },
  recouvrement: {
    title: 'Recouvrement Sols Suisse | Parquet, Carrelage, Moquette | Bâtex',
    description: 'Recouvrement de sols en Suisse : parquet massif, stratifié, carrelage, moquette, vinyle. Installation et rénovation professionnelle, pose soignée, devis gratuit, Genève, Vaud.',
    keywords: 'recouvrement sols suisse, parquet suisse, carrelage suisse, moquette suisse, stratifié suisse, pose parquet, pose carrelage, rénovation sols, installation sols, sols genève, sols vaud, revêtements sols',
    image: `${baseUrl}/sol.jpg`,
    url: `${baseUrl}/services/recouvrement`,
    type: 'website'
  },
  fauxMurs: {
    title: 'Faux Murs & Cloisons Suisse | Aménagement Intérieur | Bâtex',
    description: 'Construction de faux murs, cloisons et aménagement intérieur en Suisse. Solutions sur mesure pour optimiser votre espace. Travaux soignés, devis gratuit, Genève, Vaud.',
    keywords: 'faux murs suisse, cloisons suisse, aménagement intérieur, construction cloisons, optimisation espace, faux plafonds, aménagement genève, aménagement vaud, rénovation intérieure, travaux aménagement',
    image: `${baseUrl}/faux-plafond.jpg`,
    url: `${baseUrl}/services/faux-murs`,
    type: 'website'
  },
  jardin: {
    title: 'Aménagement Jardin Suisse | Terrasses & Espaces Extérieurs | Bâtex',
    description: 'Aménagement de jardins, terrasses et espaces extérieurs en Suisse. Construction terrasses bois, clôtures, cabanes jardin. Travaux soignés, devis gratuit, Genève, Vaud.',
    keywords: 'aménagement jardin suisse, terrasses bois suisse, espaces extérieurs, paysagisme suisse, construction terrasses, clôtures jardin, cabanes jardin, aménagement extérieur, jardin genève, jardin vaud',
    image: `${baseUrl}/exterieur.jpg`,
    url: `${baseUrl}/services/jardin`,
    type: 'website'
  },
  sanitaires: {
    title: 'Rénovation Sanitaires Suisse | Salles de Bain & WC | Bâtex',
    description: 'Rénovation complète de salles de bain et WC en Suisse. Installation sanitaire, carrelage, plomberie. Travail soigné et fonctionnel, devis gratuit, Genève, Vaud.',
    keywords: 'rénovation salle de bain suisse, WC suisse, sanitaires suisse, carrelage salle de bain, plomberie suisse, installation sanitaire, rénovation bain genève, rénovation bain vaud, travaux sanitaires',
    image: `${baseUrl}/sanitaire.jpg`,
    url: `${baseUrl}/services/sanitaires`,
    type: 'website'
  },
  toiture: {
    title: 'Rénovation Toiture Suisse | Réparation & Isolation | Bâtex',
    description: 'Réparation et rénovation de toitures en Suisse. Entretien, réparation fuites, isolation toiture. Service complet, devis gratuit, Genève, Vaud, Suisse romande.',
    keywords: 'rénovation toiture suisse, réparation toit suisse, isolation toiture, fuites toiture, entretien toiture, toiture genève, toiture vaud, travaux toiture, couvreur suisse',
    image: `${baseUrl}/toiture.jpg`,
    url: `${baseUrl}/services/toiture`,
    type: 'website'
  },
  galerie: {
    title: 'Galerie Projets Bâtex | Réalisations Rénovation Suisse | Portfolio',
    description: 'Découvrez nos réalisations en rénovation, menuiserie et aménagement en Suisse. Galerie de projets Bâtex : avant/après, travaux soignés, Genève, Vaud.',
    keywords: 'galerie projets batex, réalisations rénovation suisse, portfolio menuiserie, aménagement suisse, travaux rénovation, avant après rénovation, projets genève, projets vaud, portfolio batex',
    image: `${baseUrl}/Galerie/batex-renovation-1.jpeg`,
    url: `${baseUrl}/galerie`,
    type: 'website'
  },
  contact: {
    title: 'Contact Bâtex | Devis Gratuit Rénovation Suisse | Baris Ozcan',
    description: 'Contactez Bâtex pour un devis gratuit de rénovation en Suisse. Baris Ozcan, menuisier certifié, à votre service. Genève, Vaud, Suisse romande. Réponse rapide garantie.',
    keywords: 'contact batex, devis gratuit rénovation, contact baris ozcan, menuisier suisse, devis gratuit genève, devis gratuit vaud, contact rénovation, estimation travaux, devis menuiserie',
    image: `${baseUrl}/accueil.jpeg`,
    url: `${baseUrl}/contact`,
    type: 'website'
  },
  notFound: {
    title: 'Page Non Trouvée - Bâtex | Rénovation Suisse',
    description: 'La page que vous recherchez n\'existe pas. Retournez à l\'accueil de Bâtex pour découvrir nos services de rénovation en Suisse.',
    keywords: 'page non trouvée, erreur 404, batex, rénovation suisse, menuiserie suisse',
    image: `${baseUrl}/accueil.jpeg`,
    url: `${baseUrl}/404`,
    type: 'website'
  }
};

export const getSEOConfig = (path: string): SEOConfig => {
  const pathMap: Record<string, string> = {
    '/': 'home',
    '/a-propos': 'about',
    '/services/menuiserie': 'menuiserie',
    '/services/peinture': 'peinture',
    '/services/recouvrement': 'recouvrement',
    '/services/faux-murs': 'fauxMurs',
    '/services/jardin': 'jardin',
    '/services/sanitaires': 'sanitaires',
    '/services/toiture': 'toiture',
    '/galerie': 'galerie',
    '/contact': 'contact'
  };

  const key = pathMap[path] || 'notFound';
  return seoConfig[key];
};
