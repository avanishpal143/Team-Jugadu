export interface PricingPlan {
  id: string;
  number: string;
  name: string;
  audience: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  deliverables: string[];
  ctaText: string;
  inquirySubject: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-idea-to-launch",
    number: "01",
    name: "Idea to Launch",
    audience: "For Early-Stage Founders",
    price: "₹35,000–₹50,000",
    period: "fixed milestone scope",
    description: "A focused starting point for founders who need a credible website and a clear brand foundation.",
    deliverables: [
      "5–8 agreed website pages",
      "Basic brand identity",
      "Responsive website",
      "Lead form and analytics setup",
      "Technical SEO foundation",
      "Defined handover"
    ],
    ctaText: "Discuss Your Launch →",
    inquirySubject: "Idea to Launch Package Inquiry (₹35,000–₹50,000)"
  },
  {
    id: "plan-growth-launch",
    number: "02",
    name: "Startup Growth Launch",
    audience: "For Growing Startups",
    price: "₹60,000–₹1,00,000",
    period: "fixed milestone scope",
    popular: true,
    description: "A more developed digital experience for startups with clearer positioning and broader content needs.",
    deliverables: [
      "10–15 agreed website pages",
      "Custom UI/UX",
      "Brand identity system",
      "Conversion-focused landing pages",
      "On-page SEO and analytics",
      "Launch QA"
    ],
    ctaText: "Plan Your Website →",
    inquirySubject: "Startup Growth Launch Package Inquiry (₹60,000–₹1,00,000)"
  },
  {
    id: "plan-startup-scale",
    number: "03",
    name: "Startup Scale",
    audience: "For Complex Requirements",
    price: "₹1,25,000–₹2,50,000+",
    period: "tailored scope",
    description: "A tailored digital experience for more complex product, brand and integration requirements.",
    deliverables: [
      "Custom architecture",
      "Advanced brand/product presentation",
      "Multiple solution pages",
      "Selected integrations",
      "Advanced SEO planning",
      "Extended QA and handover"
    ],
    ctaText: "Discuss a Custom Build →",
    inquirySubject: "Startup Scale Custom Build Inquiry (₹1,25,000–₹2,50,000+)"
  }
];

export const pricingNotes = [
  "Starting prices vary with agreed project scope and custom technical requirements.",
  "Hosting, domain registration, third-party subscriptions and applicable taxes are clarified in the formal proposal.",
  "Custom dashboards, user accounts, complex APIs and dedicated software features may require separate estimates.",
  "Project timeline depends on scope, content readiness, third-party integrations and client approval cycles.",
  "Final quotation documents all deliverables, revision limits, milestone stages and transparent payment terms."
];
