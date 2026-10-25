export interface JourneyStage {
  stageNumber: number;
  stageCode: string;
  title: string;
  summary: string;
  mindset: string;
  supportingServices: string[];
  deliverableHighlights: string[];
  recommendedWhen: string;
}

export const journeyStages: JourneyStage[] = [
  {
    stageNumber: 1,
    stageCode: "STAGE 01",
    title: "Validate the Idea",
    summary: "Understand the customer, define the problem and identify what needs to be tested first before heavy engineering investment.",
    mindset: "Don't spend months building before knowing if your market cares.",
    supportingServices: [
      "High-conversion validation landing page",
      "Interactive waitlist & email capture",
      "Product concept visual specimen",
      "Early proposition testing assets"
    ],
    deliverableHighlights: [
      "Clear proposition headline testing",
      "Analytics & conversion tracking",
      "Founder interview booking integration"
    ],
    recommendedWhen: "You have a compelling concept, hypothesis, or pre-seed pitch that requires proof of demand."
  },
  {
    stageNumber: 2,
    stageCode: "STAGE 02",
    title: "Build the MVP",
    summary: "Create the smallest useful product experience needed to test a defined hypothesis and onboard pilot customers.",
    mindset: "Focus on the single core job the product does better than alternatives.",
    supportingServices: [
      "Product-facing website & app portal",
      "Interactive product demo pages",
      "Scoped MVP functionality & flows",
      "Self-service onboarding path"
    ],
    deliverableHighlights: [
      "Working prototype or web interface",
      "Clean feature explanation diagrams",
      "User feedback mechanism"
    ],
    recommendedWhen: "You've validated the problem and need real users clicking, testing, and giving direct feedback."
  },
  {
    stageNumber: 3,
    stageCode: "STAGE 03",
    title: "Build the Brand",
    summary: "Develop a consistent identity and website experience that communicates the product's value clearly to customers and investors.",
    mindset: "A great product with poor design will be perceived as amateur and risky.",
    supportingServices: [
      "Comprehensive brand identity & logos",
      "High-calibre website redesign / revamp",
      "Compelling product storytelling narrative",
      "Cohesive cross-platform visual systems"
    ],
    deliverableHighlights: [
      "Design tokens & typography system",
      "Polished investor-grade presentation",
      "Trust & compliance credibility cues"
    ],
    recommendedWhen: "Your product works, but your current website fails to reflect its true quality and caliber."
  },
  {
    stageNumber: 4,
    stageCode: "STAGE 04",
    title: "Prepare to Grow",
    summary: "Improve discoverability, lead capture and the digital experience based on real customer feedback and organic search intent.",
    mindset: "Scale what converts; refine what creates friction.",
    supportingServices: [
      "Technical & on-page search engine optimization",
      "Iterative landing-page speed & UX improvements",
      "Agreed ongoing growth & feature iterations",
      "Conversion rate optimization (CRO)"
    ],
    deliverableHighlights: [
      "Targeted search topic clusters",
      "Sub-second page load performance",
      "Systematic conversion funnel refinement"
    ],
    recommendedWhen: "You have product-market fit or steady traction and are ready to ramp customer acquisition."
  }
];

export const journeyTagline = "Validate First. Build What Matters. Brand It to Grow.";
