const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kf-services.fr/#organization",
  name: "KF Services",
  description: "Maçonnerie, charpente, couverture et rénovation à Voiron et en Auvergne-Rhône-Alpes. Artisans expérimentés, devis gratuit sous 48h.",
  url: "https://kf-services.fr",
  telephone: "+33669209788",
  email: "contact@kf-services.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "58 Rue des Tallifardières",
    addressLocality: "Voiron",
    postalCode: "38500",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.3627,
    longitude: 5.5912,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Auvergne-Rhône-Alpes",
  },
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services BTP",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maçonnerie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charpente & Couverture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plomberie & chauffage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation" } },
    ],
  },
};

const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
  />
);

export default JsonLd;
