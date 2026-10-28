/**
 * TeamJugadu Central Configuration
 * Source of truth for brand positioning, official URLs, verified contact details,
 * and discovery booking destinations.
 */
export const siteConfig = {
  brandName: "TEAMJUGADU",
  legalEntity: "TeamJugadu (Devlofox Technologies)",
  tagline: "Big Ideas Deserve Better Execution.",
  heroSupport: "From MVP to market-ready digital presence, we help founders build the brand, website and digital foundation their next stage demands.",
  
  // Official verified contact information retrieved from devlofox.com / teamjugadu.com
  // Easily configurable in one central place
  contactEmail: "info@devlofox.com",
  secondaryEmail: "connect@devlofox.com",
  
  // Discovery call calendar URL (configurable; falls back to mailto if external calendar is not attached)
  discoveryBookingUrl: "mailto:info@devlofox.com?subject=Book%20a%20Free%20Discovery%20Call%20-%20TeamJugadu&body=Hi%20TeamJugadu%2C%0A%0AI%20would%20like%20to%20schedule%20a%2030-minute%20free%20discovery%20call%20to%20discuss%20my%20project.%0A%0AProject%20Stage%3A%20%0ABudget%20Range%3A%20%0ABrief%20Overview%3A%20%0A%0AThanks!",
  
  officialSiteUrl: "https://teamjugadu.com/",
  parentCompanyUrl: "https://devlofox.com/",
  
  // Primary & secondary CTAs
  primaryCTA: "Book a Free Discovery Call",
  secondaryCTA: "Explore Our Work",

  navLinks: [
    { label: "Approach", href: "#approach" },
    { label: "Services", href: "#services" },
    { label: "Selected Work", href: "#work" },
    { label: "The Sprint", href: "#sprint" },
    { label: "Stack", href: "#technologies" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ]
};
