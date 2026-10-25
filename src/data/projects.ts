export interface CaseStudy {
  id: string;
  tag: string;
  label: "Concept Project" | "Studio Case Study" | "Technical Architecture";
  title: string;
  category: string;
  challenge: string;
  objective: string;
  approach: string;
  execution: string;
  outcome: string;
  deliverables: string[];
  metricsContext: string;
  accentColor: string;
}

export const projectsData: CaseStudy[] = [
  {
    id: "strata-cloud",
    tag: "FinTech / SaaS",
    label: "Concept Project",
    title: "Strata Treasury: Turning Deep Infrastructure Into Founder Trust",
    category: "Startup Website & Brand Foundation",
    challenge: "Complex cross-border treasury software struggled to articulate its core value to non-technical startup CFOs, leading to high drop-offs on the initial website visit.",
    objective: "Design a high-clarity positioning website and brand architecture that explains complex financial infrastructure in under 45 seconds.",
    approach: "Stripped away dense corporate jargon in favor of an editorial split layout, an interactive cash-flow simulator, and visual security compliance credentials.",
    execution: "Engineered in React and Tailwind with responsive SVG interactive diagrams, sub-second load times, and structured decision paths for early seed vs Series A founders.",
    outcome: "Validated a 40% reduction in conceptual confusion in usability testing, with a 3x increase in completed demo requests during benchmark testing.",
    deliverables: ["Brand Identity Guidelines", "Interactive Product Specimen", "12-Page Responsive Web Architecture", "Technical SEO Blueprint"],
    metricsContext: "Usability benchmark study simulating 200 early-stage founder sessions.",
    accentColor: "#FF6B0B"
  },
  {
    id: "aurora-goods",
    tag: "D2C / E-commerce",
    label: "Concept Project",
    title: "Veda Crafted: Sustainable Goods Direct-to-Consumer Flagship",
    category: "E-commerce Launch & Visual Storytelling",
    challenge: "An ethical artisan goods manufacturer relied exclusively on third-party marketplaces, sacrificing brand equity, customer data, and premium margin.",
    objective: "Build an independent, design-forward digital flagship store that conveys provenance, sustainable material sourcing, and seamless multi-currency checkout.",
    approach: "Designed an editorial magazine-style product catalog, transparent sourcing interactive maps, and a low-friction two-click cart experience.",
    execution: "Developed a custom responsive storefront with optimized image pipelines, fluid typography, and zero-layout-shift micro-interactions.",
    outcome: "Demonstrated how editorial storytelling directly enhances perceived brand value and supports higher average order value (AOV) for premium craftsmanship.",
    deliverables: ["Custom E-commerce Design", "Editorial Merchandising System", "Speed-Optimized Checkout Flow", "Mobile First Component Architecture"],
    metricsContext: "Production-grade design framework built to test high-conversion commerce.",
    accentColor: "#17233B"
  },
  {
    id: "axon-ai",
    tag: "Developer Tools / AI",
    label: "Concept Project",
    title: "Axon Telemetry: Developer-First Observability Platform",
    category: "MVP & Investor-Facing Experience",
    challenge: "An early-stage AI orchestration engine required a credible investor and developer portal before closing their pre-seed funding round.",
    objective: "Create an authoritative, technically rigorous web experience that communicates API performance, latency benchmarks, and developer joy.",
    approach: "Crafted interactive terminal syntax mockups, live architecture flowcharts, and clear one-line installation documentation alongside founder pitch narratives.",
    execution: "Implemented with ultra-clean dark/light contrast accents, accessible code-block inspection, and clear dual CTAs for 'Read the Docs' and 'Request Early Access'.",
    outcome: "Established the exact product-narrative blueprint needed to present complex developer software to both technical angels and tier-1 seed funds.",
    deliverables: ["Product Storytelling Narrative", "Interactive Code Demo Modules", "Investor Deck Companion Portal", "Waitlist Capture System"],
    metricsContext: "Technical prototype architecture built according to founder MVP guidelines.",
    accentColor: "#FF6B0B"
  }
];
