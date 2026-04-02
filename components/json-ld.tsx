export default function JsonLd() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HK Feat In Technology",
    alternateName: "飛英科技",
    url: "https://www.852featin.com",
    logo: "https://www.852featin.com/logo.webp",
    description:
      "Hong Kong-based surgical instruments supplier specializing in ophthalmic, hair transplant, ENT, and plastic surgery instruments with over 20 years of experience.",
    foundingDate: "2000",
    foundingLocation: "Hong Kong",
    areaServed: "Worldwide",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Chinese", "Cantonese"],
    },
    sameAs: [
      "https://www.facebook.com/hkfeatin",
      "https://www.linkedin.com/company/hkfeatin",
    ],
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.852featin.com",
    name: "HK Feat In Technology",
    image: "https://www.852featin.com/logo.webp",
    url: "https://www.852featin.com",
    telephone: "+85253469889",
    address: {
      "@type": "PostalAddress",
      addressCountry: "HK",
      addressRegion: "Hong Kong",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3193",
      longitude: "114.1694",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HK Feat In Technology",
    url: "https://www.852featin.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.852featin.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of surgical instruments do you supply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We supply a wide range of surgical instruments including ophthalmic instruments, hair transplant tools, ENT instruments, and plastic surgery instruments. All instruments are manufactured to meet international quality standards.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer international shipping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer worldwide shipping to surgeons and medical institutions globally. Contact us for shipping quotes and delivery timelines.",
        },
      },
      {
        "@type": "Question",
        name: "Can I request a product catalogue?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can download our PDF catalogues from our website or contact us directly to request physical copies. We have catalogues for ophthalmic, hair transplant, plastic surgery, and general surgical instruments.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide after-sales support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide comprehensive after-sales support including product consultation, repair services, and customization options for your surgical instruments.",
        },
      },
      {
        "@type": "Question",
        name: "What is your minimum order quantity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accommodate orders of all sizes, from individual instruments to bulk orders. Contact us to discuss your specific requirements and we will find a solution that works for you.",
        },
      },
    ],
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.852featin.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.852featin.com/products",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.852featin.com/services",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.852featin.com/about-us",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.852featin.com/contact",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "PDF Catalogues",
        item: "https://www.852featin.com/pdf-catalogue",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
    </>
  )
}
