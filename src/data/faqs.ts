export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: "Pricing" | "Timelines" | "Scope" | "Technical" | "Ownership";
}

export const faqsData: FAQItem[] = [
  {
    id: "cost",
    number: "Q1",
    question: "How much does a startup website cost?",
    answer: "Our website projects are scoped around your goals, page requirements, design complexity and functionality. Our initial packages range from ₹35,000 to ₹2,50,000+, with custom requirements estimated separately.",
    category: "Pricing"
  },
  {
    id: "timeline",
    number: "Q2",
    question: "How long does it take to build a website?",
    answer: "Timelines depend on scope, content readiness, integrations and approvals. We define milestones and an expected timeline before the project begins.",
    category: "Timelines"
  },
  {
    id: "idea-stage",
    number: "Q3",
    question: "Can you help if I only have an idea?",
    answer: "Yes. We can discuss your current stage and identify suitable next steps, such as a validation landing page, brand foundation or a scoped MVP-related website experience.",
    category: "Scope"
  },
  {
    id: "redesign",
    number: "Q4",
    question: "Can you redesign my existing website?",
    answer: "Yes. We can review your goals, content structure, design, usability and technical requirements before recommending a suitable revamp scope.",
    category: "Scope"
  },
  {
    id: "technologies",
    number: "Q5",
    question: "Which technologies do you use?",
    answer: "We select the technology according to your project's requirements, functionality, budget and maintenance needs. The proposed stack is discussed before development begins.",
    category: "Technical"
  },
  {
    id: "ownership",
    number: "Q6",
    question: "Will I own my website after delivery?",
    answer: "Ownership, source code, credentials, third-party licenses and handover terms are documented in the project agreement. The exact terms depend on the agreed scope and applicable third-party licenses.",
    category: "Ownership"
  },
  {
    id: "seo-after-launch",
    number: "Q7",
    question: "Do you provide SEO after launch?",
    answer: "We can establish the agreed technical and on-page SEO foundation during development. Ongoing SEO, content and growth services can be scoped separately.",
    category: "Scope"
  }
];
