import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Apex Movement",
  description = "Apex Movement: The world's leading parkour coaching collective. Physics-based training protocols and biomechanical analysis.",
  image = "https://images.unsplash.com/photo-1574100511599-2777174db926?q=80&w=1200&h=630&fit=crop",
  url = "https://apexmovement.com",
}: SEOProps) {
  const fullTitle = title === "Apex Movement" ? title : `${title} | Apex Movement`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Apex Movement",
    "url": url,
    "description": description,
    "logo": "https://apexmovement.com/logo.png",
    "sameAs": []
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Apex Movement Parkour Coaching",
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Apex Movement",
      "sameAs": url
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
    </Helmet>
  );
}
