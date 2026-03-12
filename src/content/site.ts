export const featuredProjects = [
  {
    slug: "enableid",
    title: "EnableID",
    category: "Web App Design and Development",
    image:
      "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    slug: "ai-ah-ma",
    title: "AI Ah Ma",
    category: "Mobile App Design and UX Research",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
] as const;

export const services = [
  {
    eyebrow: "01",
    title: "Product Design",
    description:
      "Designing user-centered digital products through research, prototyping, and iterative testing with tools like Figma and Adobe Suite.",
  },
  {
    eyebrow: "02",
    title: "Frontend Development",
    description:
      "Building responsive web and mobile applications using React, Next.js, React Native, and Tailwind CSS with a focus on performance and accessibility.",
  },
  {
    eyebrow: "03",
    title: "AI Integration",
    description:
      "Implementing AI-powered features including chatbots, RAG systems, and LLM integrations to enhance user experiences.",
  },
] as const;

type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  organization: string;
  caseStudyLink?: string;
  externalLink?: string;
};

export const projects: readonly Project[] = [
  {
    title: "EnableID",
    slug: "enableid",
    category: "Web App Design and Development",
    year: "2024",
    description:
      "A web application that streamlines identification and resource access for refugees by unifying digital ID verification and support services. Led frontend development, UI/UX design, and automated testing using Cypress and Gherkin.",
    image:
      "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "UI/UX", "RAG", "Cypress", "Top 2 in Module"],
    organization: "Gebirah",
    caseStudyLink: "/work/enableid",
  },
  {
    title: "AI Ah Ma",
    slug: "ai-ah-ma",
    category: "Mobile App Design and UX Research",
    year: "2024",
    description:
      "A language learning app that combines AI with user-centered design to strengthen intergenerational connections through Cantonese conversation. Led design and development from user research to interactive prototyping.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Figma", "UX Research", "AI", "HCI", "Team Lead"],
    organization: "Human-Computer Interaction Module",
    caseStudyLink: "/work/ai-ah-ma",
  },
  {
    title: "Tangled",
    slug: "tangled",
    category: "Mobile App Design and Development",
    year: "2025",
    description:
      "A React Native and Expo app designed to help students and young professionals build meaningful relationships without the overwhelm of endless chats or large groups.",
    image:
      "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Expo", "Mobile Design", "80+ Users"],
    organization: "Independent Project",
    externalLink: "https://www.tangledsocial.com/",
  },
  {
    title: "Urban Research Assistant",
    slug: "urban-research-assistant",
    category: "Full-Stack Development and UI/UX",
    year: "2024",
    description:
      "An AI-driven assistant that evaluates cities' submissions for the Lee Kuan Yew World City Prize. Led UI/UX research and implemented the full frontend in React.",
    image:
      "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "NLP", "AI", "Full-Stack"],
    organization: "Urban Redevelopment Authority",
    caseStudyLink: "/work/urban-research-assistant",
  },
];

export const workExperience = [
  {
    title: "Product Management Intern",
    company: "Hello Group (Coffee Meets Bagel)",
    location: "Singapore",
    year: "Feb 2026 - Present",
    description:
      "Executing targeted CRM campaigns and A/B testing monetization workflows to enhance user lifetime value and improve ARPU through data-driven experimentation.",
    image:
      "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Product Management", "A/B Testing", "CRM", "ARPU Growth"],
  },
  {
    title: "Product Development Intern",
    company: "Central Provident Fund Board (CPFB)",
    location: "Singapore",
    year: "May 2025 - Aug 2025",
    description:
      "Redesigned an officer-training portal to increase usability and workflow efficiency, developed full-stack features in React, and fine-tuned a RAG system for AI training simulations.",
    image:
      "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Tailwind CSS", "RAG", "50% Speed Increase"],
  },
  {
    title: "Computational Design Intern",
    company: "Whitby Wood Mills",
    location: "Singapore",
    year: "Aug 2024 - Jan 2025",
    description:
      "Designed a contact management dashboard in PowerApps, ran CFD simulations, and developed parametric 3D building models in Grasshopper and Rhino.",
    image:
      "https://images.unsplash.com/photo-1709803312782-0c3b175875ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["PowerApps", "Rhino", "Grasshopper", "CFD", "CTBUH 2024"],
  },
] as const;

export const profile = {
  image:
    "https://images.unsplash.com/photo-1709803312782-0c3b175875ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  bio: [
    "I'm Cion Tan, a designer and developer studying Design and Artificial Intelligence at Singapore University of Technology and Design (SUTD).",
    "With experience spanning product management at Coffee Meets Bagel, product development at CPFB, and computational design at Whitby Wood Mills, I bring a multidisciplinary approach to solving complex problems.",
    "I focus on building useful, thoughtful experiences, whether that means AI-powered chatbots, training portals, or mobile apps for real users.",
  ],
  experience: [
    {
      role: "Product Management Intern",
      company: "Hello Group (Coffee Meets Bagel)",
      period: "Feb 2026 - Present",
      description:
        "Executing targeted CRM campaigns and A/B testing monetization workflows to improve lifetime value and ARPU.",
    },
    {
      role: "Product Development Intern",
      company: "Central Provident Fund Board (CPFB)",
      period: "May 2025 - Aug 2025",
      description:
        "Redesigned an officer-training portal, built full-stack features with React and Tailwind CSS, and improved AI-assisted training workflows.",
    },
    {
      role: "Computational Design Intern",
      company: "Whitby Wood Mills",
      period: "Aug 2024 - Jan 2025",
      description:
        "Designed dashboards in PowerApps, ran CFD simulations, and contributed to parametric design workflows presented at CTBUH 2024.",
    },
  ],
} as const;

export const skills = [
  {
    title: "Core Skills",
    items: [
      "UI/UX Design",
      "Frontend Development",
      "Product Design",
      "Human-Computer Interaction",
      "Service Design",
      "AI Integration",
      "User Research",
      "Prototyping",
    ],
  },
  {
    title: "Design Tools",
    items: ["Figma", "Adobe Suite", "Rhino", "Grasshopper", "Blender", "Fusion360", "Lumion", "Unity"],
  },
  {
    title: "Development Tools",
    items: ["React", "Next.js", "React Native/Expo", "Tailwind CSS", "TypeScript", "Python", "Java", "Git", "LLMs"],
  },
] as const;

export const highlights = [
  { achievement: "Top 2 in Module", project: "EnableID Project", year: "2024" },
  { achievement: "80+ Live Users", project: "Tangled Mobile App", year: "2025" },
  { achievement: "50% Speed Increase", project: "CPFB Training Portal", year: "2025" },
  { achievement: "1,300+ Conference Attendees", project: "CTBUH 2024 Presentation", year: "2024" },
] as const;

export const contactDetails = {
  email: "cion.tan.se@gmail.com",
  phone: "+65 8620 1178",
  phoneHref: "+6586201178",
  linkedin: "https://linkedin.com/in/cion-tan",
  github: "https://github.com/ciontan",
  status:
    "Currently working as a Product Management Intern at Hello Group (Coffee Meets Bagel) and graduating from SUTD in May 2026. Open to full-time opportunities in product design, development, and AI starting mid-2026.",
} as const;

type CaseStudySection = {
  kicker: string;
  title: string;
  description?: string;
  image?: string;
  theme?: "default" | "muted" | "dark";
  cardColumns?: 1 | 2;
  cards?: Array<{
    title: string;
    body: string;
    bullets?: string[];
  }>;
  paragraphs?: string[];
  highlight?: {
    value: string;
    label: string;
  };
};

export const caseStudies: Record<
  string,
  {
    kicker: string;
    title: string;
    subtitle: string;
    heroImage: string;
    meta: Array<{ label: string; values: string[] }>;
    sections: CaseStudySection[];
    link?: { label: string; href: string };
  }
> = {
  "enableid": {
    kicker: "EnableID",
    title: "EnableID",
    subtitle:
      "Streamlining digital identity and resource access for refugees through a unified web platform.",
    heroImage:
      "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    meta: [
      { label: "Timeline", values: ["16 Weeks", "Spring 2024"] },
      { label: "Role", values: ["Frontend Developer", "UI/UX Designer", "QA Engineer"] },
      { label: "Team", values: ["Gebirah", "Cross-functional team of 5"] },
      { label: "Recognition", values: ["Top 2 in Module"] },
    ],
    sections: [
      {
        kicker: "Overview",
        title: "A unified platform that puts people first.",
        description:
          "EnableID helps refugees establish digital identity and quickly access services like healthcare, housing, employment, and legal aid. The interface was designed around clarity, accessibility, and immediate support.",
        theme: "muted",
        cards: [
          {
            title: "Product Focus",
            body: "I led frontend development in React, shaped the UI/UX, and built an AI-powered chatbot with RAG integration and local session caching.",
          },
        ],
      },
      {
        kicker: "The Problem",
        title: "Fragmented systems create unnecessary barriers.",
        paragraphs: [
          "Refugees often lack complete physical documentation and must navigate disconnected services while under stress.",
          "Even when identification exists, finding support across healthcare, housing, and legal systems can be overwhelming, especially with language barriers.",
        ],
      },
      {
        kicker: "Research and Insights",
        title: "Understanding user needs",
        theme: "muted",
        cards: [
          {
            title: "Single source of truth",
            body: "Users needed one verified digital identity that could work across partner organizations.",
          },
          {
            title: "Low-friction navigation",
            body: "The experience had to stay intuitive for people with varying levels of digital literacy.",
          },
          {
            title: "Immediate guidance",
            body: "Users needed fast help understanding what services they qualify for and how to access them.",
          },
        ],
      },
      {
        kicker: "The Solution",
        title: "Three core capabilities",
        cardColumns: 1,
        cards: [
          {
            title: "Digital ID verification",
            body: "A unified identity layer designed to work with multiple forms of existing documentation.",
          },
          {
            title: "Centralized resource hub",
            body: "A single place for healthcare, housing, employment, and legal support with clear categorization and search.",
          },
          {
            title: "AI-powered assistant",
            body: "A chatbot built with React hooks and RAG APIs to answer questions and guide users through processes.",
          },
        ],
      },
      {
        kicker: "Technical Approach",
        title: "Building for reliability and scale",
        theme: "muted",
        cardColumns: 2,
        cards: [
          {
            title: "React Architecture",
            body: "Component-based frontend architecture for maintainability and reuse.",
          },
          {
            title: "RAG Integration",
            body: "Contextual chatbot responses with local session caching to improve performance.",
          },
          {
            title: "Responsive Design",
            body: "A fully responsive experience across desktop, tablet, and mobile.",
          },
          {
            title: "Automated Testing",
            body: "Behavior-driven testing with Cypress and Gherkin for confidence in production behavior.",
          },
        ],
      },
      {
        kicker: "Impact",
        title: "Recognition for technical and social impact",
        highlight: {
          value: "Top 2",
          label: "Ranking in module",
        },
      },
      {
        kicker: "Reflections",
        title: "What I learned",
        paragraphs: [
          "Design with empathy. Good product work must serve real human needs, not just visual polish.",
          "AI should serve, not showcase. The chatbot mattered because it reduced confusion at critical moments.",
          "Cross-functional collaboration is essential when shipping complex, production-ready software.",
        ],
      },
    ],
    link: {
      label: "View Full Documentation",
      href: "https://sites.google.com/view/sds-2024-team-14/home",
    },
  },
  "ai-ah-ma": {
    kicker: "AI Ah Ma",
    title: "AI Ah Ma",
    subtitle:
      "Bridging generations through AI-powered Cantonese learning with cultural empathy.",
    heroImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    meta: [
      { label: "Timeline", values: ["12 Weeks", "Fall 2024"] },
      { label: "Role", values: ["Team Lead", "UX Designer", "Researcher"] },
      { label: "Team", values: ["HCI Module", "Team of 4"] },
      { label: "Tools", values: ["Figma", "Paper Prototyping"] },
    ],
    sections: [
      {
        kicker: "Overview",
        title: "A warmer model for language learning",
        description:
          "AI Ah Ma reframes language learning as an emotionally resonant conversation with a virtual grandmother rather than a checklist of lessons.",
        theme: "muted",
        cards: [
          {
            title: "Leadership",
            body: "I led the team across user research, framing, prototyping, and iteration through three major design phases.",
          },
        ],
      },
      {
        kicker: "The Problem",
        title: "Language apps teach words but miss family connection.",
        paragraphs: [
          "Conventional tools often focus on drills and scripted phrases, while real conversations with elders are dynamic and deeply cultural.",
          "Learners wanted something that felt personal, flexible, and emotionally engaging rather than transactional.",
        ],
      },
      {
        kicker: "Research and Discovery",
        title: "What learners really needed",
        theme: "muted",
        cards: [
          {
            title: "Dynamic conversation",
            body: "Users wanted context-aware dialogue rather than scripted phrasebooks.",
          },
          {
            title: "Pronunciation support",
            body: "Learners needed slower playback and room to practice without embarrassment.",
          },
          {
            title: "Cultural context",
            body: "Words mattered more when tied to family settings and cultural meaning.",
          },
          {
            title: "Emotional warmth",
            body: "The most compelling idea was an experience that felt patient, encouraging, and human.",
          },
        ],
      },
      {
        kicker: "Design Evolution",
        title: "From gamified lessons to real-time conversation support",
        cards: [
          {
            title: "Phase 1: Gamified learning",
            body: "The initial concept borrowed heavily from standard language-app progression and rewards.",
          },
          {
            title: "Phase 2: Reality check",
            body: "User interviews showed that finishing lessons did not translate into confidence during real family conversations.",
          },
          {
            title: "Phase 3: Live transcript support",
            body: "The final pivot introduced real-time translation support so users could learn while having actual conversations.",
          },
        ],
      },
      {
        kicker: "Final Experience",
        title: "Features designed for connection",
        theme: "muted",
        cardColumns: 2,
        cards: [
          {
            title: "Live Transcript Translation",
            body: "Real-time dialect-to-English support during conversations.",
          },
          {
            title: "Conversational AI",
            body: "A virtual grandmother persona that adapts to the learner's level and interests.",
          },
          {
            title: "Cultural Context",
            body: "Language learning grounded in family-oriented scenarios and meaning.",
          },
          {
            title: "Flexible Learning Tools",
            body: "Playback controls, voice responses, hints, and note-taking to support multiple comfort levels.",
          },
        ],
      },
      {
        kicker: "Impact",
        title: "A new paradigm for language learning",
        paragraphs: [
          "The strongest insight was that AI can create emotionally resonant experiences, not just efficient ones.",
          "By supporting real conversations, the product shifts from practice-first to connection-first learning.",
        ],
      },
      {
        kicker: "Reflections",
        title: "What I learned as team lead",
        paragraphs: [
          "Iteration reveals truth. The best direction emerged only after repeated user feedback.",
          "Design for emotion, not just function. Warmth and context changed how people related to the product.",
          "Leading means listening and making room for the team to converge around user-centered decisions.",
        ],
      },
    ],
    link: {
      label: "View Figma Prototype",
      href: "https://www.figma.com/design/rYj2PL1yYjaJO3rLhU13Zp/Clean?node-id=0-1&t=XmHxZzwC8aolFYma-1",
    },
  },
  "urban-research-assistant": {
    kicker: "Urban Research Assistant",
    title: "Urban Research Assistant",
    subtitle:
      "Using AI to detect discrepancies between official city reports and public sentiment.",
    heroImage:
      "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    meta: [
      { label: "Timeline", values: ["14 Weeks", "Spring 2024"] },
      { label: "Role", values: ["UX Researcher", "Frontend Developer", "UI Designer"] },
      { label: "Client", values: ["Urban Redevelopment Authority"] },
      { label: "Tools", values: ["React", "NLP", "Python", "Figma"] },
    ],
    sections: [
      {
        kicker: "Overview",
        title: "An AI research assistant for evaluators",
        description:
          "This tool helps evaluators compare official city submissions for the Lee Kuan Yew World City Prize against public sentiment gathered from external sources.",
        theme: "muted",
        cards: [
          {
            title: "Role",
            body: "I led UX research, designed the interface, and implemented the frontend for a transparent AI-assisted evaluation workflow.",
          },
        ],
      },
      {
        kicker: "The Problem",
        title: "How do you verify what cities claim about themselves?",
        paragraphs: [
          "Official submissions highlight achievements, but evaluators still need to verify whether public sentiment aligns with those claims.",
          "That process was manual, time-consuming, and difficult to make comprehensive or unbiased.",
        ],
      },
      {
        kicker: "Research and Discovery",
        title: "Understanding evaluator needs",
        theme: "muted",
        cards: [
          {
            title: "Slow manual research",
            body: "Evaluators spent hours searching sources with no systematic coverage.",
          },
          {
            title: "Need for transparency",
            body: "Users wanted to see how the AI reached conclusions and inspect source evidence.",
          },
          {
            title: "Decision support, not automation",
            body: "The product had to augment human judgment rather than replace it.",
          },
        ],
      },
      {
        kicker: "The Solution",
        title: "An intelligent assistant that augments human judgment",
        cards: [
          {
            title: "Interactive dashboard",
            body: "A React interface that visualizes sentiment, confidence, and flagged discrepancies.",
          },
          {
            title: "NLP similarity scoring",
            body: "A pipeline that compares official claims with news and public discourse.",
          },
          {
            title: "Automated web scraping",
            body: "Multi-source data collection that compresses weeks of research into a usable workflow.",
          },
        ],
      },
      {
        kicker: "Technical Approach",
        title: "Building for transparency and trust",
        theme: "muted",
        cardColumns: 2,
        cards: [
          {
            title: "Natural Language Processing",
            body: "Text similarity and sentiment analysis to surface likely discrepancies.",
          },
          {
            title: "Web Scraping Engine",
            body: "Automated collection from major news sources and public channels.",
          },
          {
            title: "React Frontend",
            body: "An interactive dashboard with drill-down views and report-friendly structure.",
          },
          {
            title: "Transparent AI",
            body: "Each insight is connected to traceable sources so evaluators can validate results.",
          },
        ],
      },
      {
        kicker: "Impact",
        title: "Faster evaluation with better coverage",
        theme: "muted",
        cardColumns: 2,
        cards: [
          {
            title: "10x faster",
            body: "Compared with manual evaluation workflows.",
          },
          {
            title: "Broader coverage",
            body: "Major sources aggregated into one research surface for each city submission.",
          },
        ],
      },
      {
        kicker: "Reflections",
        title: "What I learned",
        paragraphs: [
          "AI works best when it augments expert judgment instead of automating it away.",
          "Transparency is not optional when users are making high-stakes evaluations.",
          "Deep UX research revealed more valuable opportunities than technical possibility alone.",
        ],
      },
    ],
    link: {
      label: "View Figma Prototype",
      href: "https://www.figma.com/proto/kIPvXVIcyNR7rWu4iznrkT/SDS-Draft-1?node-id=1-2&page-id=0%3A1&starting-point-node-id=1%3A2&t=hBZpXxZrBrPeRBA7-1",
    },
  },
};
