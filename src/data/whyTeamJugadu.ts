export interface WhyDifferentiator {
  id: string;
  number: string;
  title: string;
  description: string;
  operationalProof: string;
}

export const whyDifferentiators: WhyDifferentiator[] = [
  {
    id: "clear-scope",
    number: "01",
    title: "Clear Scope",
    description: "Know what's included, what's excluded and what success means.",
    operationalProof: "Every engagement begins with an itemized Statement of Work and sitemap so expectations are aligned from day zero."
  },
  {
    id: "milestone-delivery",
    number: "02",
    title: "Milestone-Based Delivery",
    description: "Understand the project stages, approvals and next steps.",
    operationalProof: "Payments and progress are tied directly to agreed review gates—Discover, Design, Build, and Handover."
  },
  {
    id: "direct-communication",
    number: "03",
    title: "Direct Communication",
    description: "Stay aligned through documented updates and decisions.",
    operationalProof: "No multi-layered account managers playing telephone. You communicate directly with the builders driving your product forward."
  },
  {
    id: "documented-handover",
    number: "04",
    title: "Documented Handover",
    description: "Receive agreed deliverables, access and relevant documentation.",
    operationalProof: "Full repository ownership, design tokens, asset access, and operational walkthroughs so your team is never locked in."
  }
];
