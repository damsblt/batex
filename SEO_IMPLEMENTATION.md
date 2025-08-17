# SEO Implementation for Bâtex Website

## Overview
This document describes the comprehensive SEO implementation for the Bâtex website, including meta tags, structured data, and optimization strategies.

## Files Created/Modified

### 1. SEO Components
- `src/components/SEO.tsx` - Dynamic SEO component for managing meta tags
- `src/components/withSEO.tsx` - Higher-order component for automatic SEO application
- `src/hooks/useSEO.ts` - Custom hook for SEO management

### 2. Configuration
- `src/config/seo.ts` - SEO configuration with meta data for all pages

### 3. Static Files
- `public/sitemap.xml` - XML sitemap for search engines
- `public/manifest.json` - PWA manifest for mobile optimization
- `public/robots.txt` - Updated with sitemap reference

### 4. HTML Updates
- `index.html` - Enhanced with additional meta tags, structured data, and PWA support

## Features Implemented

### 1. Dynamic Meta Tags
- Page-specific titles and descriptions
- Open Graph tags for social media sharing
- Twitter Card tags for Twitter sharing
- Canonical URLs for each page
- Keywords meta tags

### 2. Structured Data
- LocalBusiness schema for Google rich snippets
- Company information including services and founder details
- Contact information and business hours

### 3. Technical SEO
- XML sitemap for search engine crawling
- Robots.txt with sitemap reference
- PWA manifest for mobile experience
- Proper meta robots tags

### 4. Social Media Optimization
- Open Graph tags for Facebook/LinkedIn
- Twitter Card tags for Twitter
- Social media profile links in structured data

## Usage

### Automatic SEO (Recommended)
The `withSEO` HOC automatically applies SEO to all pages:

```tsx
// In App.tsx - already implemented
<Route path="/" element={withSEO(Index)()} />
```

### Manual SEO
Use the `useSEO` hook in components:

```tsx
import { useSEO } from '@/hooks/useSEO';

const MyComponent = () => {
  useSEO(); // Automatically applies SEO based on current route
  return <div>...</div>;
};
```

### Custom SEO
Use the `SEO` component directly:

```tsx
import SEO from '@/components/SEO';

const MyComponent = () => {
  return (
    <>
      <SEO
        title="Custom Title"
        description="Custom description"
        keywords="custom, keywords"
        image="/path/to/image.jpg"
        url="https://batex.ch/custom-page"
      />
      <div>...</div>
    </>
  );
};
```

## SEO Configuration

### Page-Specific SEO
Each page has optimized meta data in `src/config/seo.ts`:

- **Home**: Focus on main services and company overview
- **About**: Baris Ozcan's expertise and experience
- **Services**: Specific service descriptions with relevant keywords
- **Gallery**: Portfolio and project showcase
- **Contact**: Contact information and call-to-action

### Keywords Strategy
- Primary: rénovation, menuiserie, peinture, Suisse
- Secondary: Baris Ozcan, Bâtex, aménagement, construction
- Long-tail: rénovation intérieure, menuiserie sur mesure, peinture professionnelle

## Monitoring and Maintenance

### 1. Google Search Console
- Submit sitemap.xml
- Monitor search performance
- Check for indexing issues

### 2. Regular Updates
- Update sitemap.xml dates
- Refresh meta descriptions
- Add new pages to SEO config

### 3. Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check mobile optimization

## Next Steps

1. **Analytics Integration**: Add Google Analytics 4
2. **Schema Markup**: Add more specific schemas (Service, Review, etc.)
3. **Image Optimization**: Implement WebP format and lazy loading
4. **Performance**: Implement code splitting and caching strategies
5. **Local SEO**: Add Google My Business integration

## Testing

### Meta Tags Testing
- Use Facebook Sharing Debugger
- Use Twitter Card Validator
- Use Google Rich Results Test

### Technical Testing
- Validate sitemap.xml
- Check robots.txt
- Test structured data with Google's testing tools

## Notes

- All URLs use HTTPS (https://batex.ch)
- Images are referenced with full URLs for social sharing
- Structured data includes Swiss-specific information
- PWA manifest supports mobile installation
- Canonical URLs prevent duplicate content issues
