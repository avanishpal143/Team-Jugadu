export interface TechGroup {
  id: string;
  category: string;
  badge: string;
  description: string;
  technologies: {
    name: string;
    description: string;
    tag: string;
  }[];
}

export const technologyGroups: TechGroup[] = [
  {
    id: "frontend",
    category: "A. Frontend & Interface",
    badge: "Client Experience",
    description: "User-facing interfaces and interactive digital experiences built for speed, accessibility, and high visual polish.",
    technologies: [
      { name: "React", description: "Modular, declarative UI components for dynamic web applications.", tag: "Framework" },
      { name: "JavaScript (ES6+)", description: "Modern scripting language powering interactive client-side logic.", tag: "Core" },
      { name: "HTML5", description: "Semantic, accessible structural markup adhering to modern web standards.", tag: "Markup" },
      { name: "CSS3 / Tailwind", description: "Engineered design systems, typography tokens, and responsive utility styling.", tag: "Styling" }
    ]
  },
  {
    id: "backend",
    category: "B. Backend & Application Logic",
    badge: "Engine & Data",
    description: "Server-side logic, data storage and application functionality, selected according to project requirements.",
    technologies: [
      { name: "Node.js", description: "High-throughput asynchronous runtime for real-time web services.", tag: "Runtime" },
      { name: "Express.js", description: "Lightweight, flexible REST API framework for scalable endpoints.", tag: "Framework" },
      { name: "Python", description: "Robust scripting, automation, data processing, and custom utility scripts.", tag: "Language" },
      { name: "PHP", description: "Proven server-side execution power behind custom portals and CMS engines.", tag: "Server" },
      { name: "MySQL", description: "Reliable relational database management with strict ACID compliance.", tag: "SQL" },
      { name: "MongoDB", description: "Flexible document-oriented NoSQL database for rapid schema iteration.", tag: "NoSQL" }
    ]
  },
  {
    id: "cms-commerce",
    category: "C. CMS & E-commerce",
    badge: "Content & Sales",
    description: "Content management, online stores and custom shopping experiences designed for easy non-technical founder operations.",
    technologies: [
      { name: "WordPress", description: "World-class extensible CMS allowing internal teams to manage content freely.", tag: "CMS" },
      { name: "WooCommerce", description: "Flexible, battle-tested e-commerce engine for catalogues and global orders.", tag: "Store" },
      { name: "Custom E-commerce", description: "Tailored checkout flows, cart systems, and headless storefront architectures.", tag: "Bespoke" }
    ]
  }
];

export const mernStackNote = {
  title: "Full-Stack MERN Architecture",
  formula: "MongoDB · Express.js · React · Node.js",
  description: "When a project calls for an end-to-end JavaScript environment, we leverage the unified MERN stack for cohesive data exchange, lightning-fast rendering, and maintainable full-stack codebases."
};
