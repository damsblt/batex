import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOConfig } from '@/config/seo';

export const useSEO = () => {
  const location = useLocation();
  const seoConfig = getSEOConfig(location.pathname);

  useEffect(() => {
    // Update document title
    document.title = seoConfig.title;

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
    updateMetaTag('description', seoConfig.description);
    updateMetaTag('keywords', seoConfig.keywords);

    // Open Graph meta tags
    updatePropertyMetaTag('og:title', seoConfig.title);
    updatePropertyMetaTag('og:description', seoConfig.description);
    updatePropertyMetaTag('og:image', seoConfig.image);
    updatePropertyMetaTag('og:url', seoConfig.url);
    updatePropertyMetaTag('og:type', seoConfig.type || 'website');

    // Twitter Card meta tags
    updatePropertyMetaTag('twitter:title', seoConfig.title);
    updatePropertyMetaTag('twitter:description', seoConfig.description);
    updatePropertyMetaTag('twitter:image', seoConfig.image);

    // Canonical URL
    const canonicalUrl = seoConfig.url;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

  }, [seoConfig]);

  return seoConfig;
};
