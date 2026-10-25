export interface SprintStage {
  step: string;
  name: string;
  headline: string;
  description: string;
  deliverable: string;
  details: string[];
}

export const sprintStages: SprintStage[] = [
  {
    step: "01",
    name: "Discover",
    headline: "Understand business, audience & goals",
    description: "We understand your business, audience, goals and current stage before touching a single line of code or wireframe.",
    deliverable: "Strategic Discovery Brief",
    details: [
      "Target customer & competitor positioning",
      "Immediate vs future feature roadmap",
      "Core conversion goal definition"
    ]
  },
  {
    step: "02",
    name: "Define",
    headline: "Agree on scope, sitemap & milestones",
    description: "We agree on scope, sitemap, features, timeline and success criteria so there are zero unwelcome surprises later.",
    deliverable: "Scope & Architecture Document",
    details: [
      "Comprehensive page-by-page sitemap",
      "Technical requirements & integrations plan",
      "Milestone-based delivery schedule"
    ]
  },
  {
    step: "03",
    name: "Design",
    headline: "Visual direction & key user journeys",
    description: "We develop the visual direction, user journey and key page layouts, focusing on clarity, typography and high-converting UX.",
    deliverable: "Figma UI/UX Prototypes",
    details: [
      "Custom responsive design system",
      "Interactive desktop and mobile mockups",
      "Direct founder review & revision cycle"
    ]
  },
  {
    step: "04",
    name: "Build",
    headline: "Clean, performant modern development",
    description: "We develop the approved experience using the technology suited to the project—clean, accessible, and fast.",
    deliverable: "Functional Staging Deployment",
    details: [
      "Modern React / Tailwind / Clean code standards",
      "Mobile-first responsive engineering",
      "Content population & CMS integration"
    ]
  },
  {
    step: "05",
    name: "Test & Refine",
    headline: "Rigorous quality & cross-device checks",
    description: "We check responsiveness, functionality, forms, content and agreed technical requirements across real devices.",
    deliverable: "QA Validation Report",
    details: [
      "Cross-browser and viewport stress tests",
      "Form submission & analytics verification",
      "Core Web Vitals & speed optimization"
    ]
  },
  {
    step: "06",
    name: "Launch & Handover",
    headline: "Seamless deployment & full ownership",
    description: "We deploy the agreed deliverables, provide access and document the handover with complete transparency.",
    deliverable: "Production Launch & Asset Handover",
    details: [
      "Production DNS & domain connection",
      "Source code repository & admin transfer",
      "Handover guide & post-launch support"
    ]
  }
];

export const sprintTagline = "Smart Execution. Dependable Delivery. Professional Standards.";
