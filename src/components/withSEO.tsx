import { useLocation } from 'react-router-dom';
import { getSEOConfig } from '@/config/seo';
import SEO from './SEO';

export const withSEO = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    const location = useLocation();
    const seoConfig = getSEOConfig(location.pathname);

    return (
      <>
        <SEO
          title={seoConfig.title}
          description={seoConfig.description}
          keywords={seoConfig.keywords}
          image={seoConfig.image}
          url={seoConfig.url}
          type={seoConfig.type}
        />
        <Component {...props} />
      </>
    );
  };
};
