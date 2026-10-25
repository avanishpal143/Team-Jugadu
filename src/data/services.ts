export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  outcome: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  deliverables: string[];
  visualType: 'startup' | 'brand' | 'ecommerce' | 'mvp' | 'growth';
}

export const servicesData: ServiceItem[] = [
  {
    id: "startup-website",
    number: "01",
    title: "Startup Website Development",
    outcome: "Market-Ready Web Presence",
    description: "Turn your business idea into a clear, credible online presence built around your audience, offer and next step.",
    ctaText: "Explore Startup Websites",
    ctaHref: "#pricing",
    deliverables: [
      "Audience-first information hierarchy",
      "Tailored conversion landing experiences",
      "High-speed modern tech stack (React / Next)",
      "Technical SEO & analytics instrumentation"
    ],
    visualType: "startup"
  },
  {
    id: "brand-identity",
    number: "02",
    title: "Brand Identity & Visual Design",
    outcome: "Cohesive Visual Trust",
    description: "Create a consistent identity that helps your business communicate with clarity across its website and digital touchpoints.",
    ctaText: "Explore Brand Identity",
    ctaHref: "#pricing",
    deliverables: [
      "Logo system, typography & color guidelines",
      "Component library & UI design patterns",
      "Visual assets tailored for founder pitch & web",
      "Complete design handoff in Figma"
    ],
    visualType: "brand"
  },
  {
    id: "ecommerce-launch",
    number: "03",
    title: "E-commerce Launch",
    outcome: "Frictionless Storefront & Sales",
    description: "Bring your products online with a structured storefront, clear product information and a customer-friendly buying journey.",
    ctaText: "Explore E-commerce",
    ctaHref: "#pricing",
    deliverables: [
      "Structured product merchandising & catalog layout",
      "High-converting checkout & payment flows",
      "WooCommerce or bespoke commerce architecture",
      "Inventory & order notifications integration"
    ],
    visualType: "ecommerce"
  },
  {
    id: "mvp-websites",
    number: "04",
    title: "MVP & Investor-Facing Websites",
    outcome: "Clear Narrative for Stakeholders",
    description: "Explain your product, showcase its value and give customers, partners or potential investors a clearer understanding of what you're building.",
    ctaText: "Discuss Your Product",
    ctaHref: "#contact",
    deliverables: [
      "Interactive product walkthrough previews",
      "Investor deck alignment & pitch storytelling",
      "Early waitlist & founder validation capture",
      "Clean product architecture diagrams"
    ],
    visualType: "mvp"
  },
  {
    id: "seo-growth",
    number: "05",
    title: "SEO & Digital Growth",
    outcome: "Sustainable Inbound Search",
    description: "Establish a strong technical and on-page SEO foundation, then build an ongoing strategy around relevant search demand and business goals.",
    ctaText: "Explore Growth Support",
    ctaHref: "#contact",
    deliverables: [
      "Technical crawlability, speed & schema markup",
      "Search intent & founder topic mapping",
      "Content structure & conversion path audit",
      "Targeted on-page optimization"
    ],
    visualType: "growth"
  }
];
