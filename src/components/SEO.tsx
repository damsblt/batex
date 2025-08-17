import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website' 
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph meta tags
    if (title) {
      updatePropertyMetaTag('og:title', title);
    }

    if (description) {
      updatePropertyMetaTag('og:description', description);
    }

    if (image) {
      updatePropertyMetaTag('og:image', image);
    }

    if (url) {
      updatePropertyMetaTag('og:url', url);
    }

    updatePropertyMetaTag('og:type', type);

    // Twitter Card meta tags
    if (title) {
      updatePropertyMetaTag('twitter:title', title);
    }

    if (description) {
      updatePropertyMetaTag('twitter:description', description);
    }

    if (image) {
      updatePropertyMetaTag('twitter:image', image);
    }

    // Canonical URL
    const canonicalUrl = url || `${window.location.origin}${location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

  }, [title, description, keywords, image, url, type, location]);

  return null;
};

export default SEO;
