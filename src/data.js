export const profile = {
  name: "Fenglin Yu",
  headline: "A personal homepage for product thinking, research, and creative signals",
  location: "Pittsburgh, PA · Eastern Time (UTC-4)",
  status: "M.S. student at Carnegie Mellon University working on systems, AI, and infrastructure.",
  summary:
    "This version is intentionally profile-first. The homepage introduces your face, current updates, and taste signals before visitors dive into your experience, awards, publications, or CV.",
  photo: "/profile-avatar.jpg",
  badges: ["Profile-first", "Media-friendly", "Easy to customize"],
  stats: [
    {
      label: "Base",
      value: "Pittsburgh, PA",
      icon: "location",
    },
    {
      label: "Time zone",
      value: "Eastern Time (UTC-4)",
      icon: "time",
    },
    {
      label: "Focus on",
      value: "Systems, AI infra",
      icon: "focus",
    },
  ],
  affiliations: [
    {
      id: "affiliation-cmu",
      role: "M.S. Student",
      organization: "Carnegie Mellon University",
      logo: "/logo-cmu-square.png",
    },
    {
      id: "affiliation-sglang",
      role: "Open-Source Contributor",
      organization: "SGLang",
      logo: "/logo-sglang.png",
    },
  ],
  snapshot: [
    {
      label: "Apr 3, 2026",
      value: "📄 Our paper has been accepted to SIGIR 2026.",
    },
    {
      label: "Feb 20, 2026",
      value: "💼 I'll join Google in Sunnyvale as a Software Engineering Intern this summer.",
    },
  ],
  rightNow: {
    title: "What this homepage should do first",
    description:
      "Give people a fast sense of your identity, your present momentum, and your personal taste before they scan the more formal sections.",
  },
  sideNote: {
    title: "Why split the site into sections",
    description:
      "Experience, awards, publications, and CV stay one click away, but the first screen remains welcoming and personal rather than dense.",
  },
};

export const newsItems = [
  {
    id: "news-profile",
    label: "Site update",
    date: "This week",
    title: "Reframing the homepage around you, not around a feed.",
    description:
      "The opening section now behaves like a personal profile: photo first, context second, and supporting artifacts close behind.",
  },
  {
    id: "news-pins",
    label: "Pinned content",
    date: "In progress",
    title: "Making room for photos, songs, and small personal signals.",
    description:
      "Pinned cards let the page carry taste and atmosphere, so visitors see more than titles and dates when they land here.",
  },
  {
    id: "news-structure",
    label: "Navigation",
    date: "Next step",
    title: "Keeping experience, awards, publications, and CV one click away.",
    description:
      "This layout is designed for scanning: visitors can switch context quickly without losing the sense that this is one unified profile.",
  },
];

export const pinnedItems = [
  {
    id: "pin-song",
    kind: "Song",
    title: "一首簡單的歌",
    meta: "Wang Leehom · Shangri-La · 2004",
    artist: "王力宏",
    stageLink: "https://www.youtube.com/watch?v=Ii0baNYKWTQ",
    lyric:
      "寫一首簡單的歌 讓你的心情快樂\n愛情就像一條河 難免會碰到波折\n這一首簡單的歌 並沒有什麼獨特\n好像我 那麼的平凡 卻又深刻",
  },
  {
    id: "pin-meeting",
    kind: "Meeting",
    title: "Book a 30-minute meeting",
    embedUrl:
      "https://calendly.com/fenglin02/30min?embed_domain=mikukuovo.github.io&embed_type=Inline",
    actionHref: "https://calendly.com/fenglin02/30min",
    actionLabel: "Open in Calendly",
  },
];

export const educationHistory = [
  {
    id: "education-cmu",
    degree: "M.S. in Information Networking",
    school: "Carnegie Mellon University",
    logo: "/logo-cmu-square.png",
    period: "Aug. 2025 - Dec. 2026",
    location: "Pittsburgh, PA",
    current: true,
    highlights: [
      "GPA: 4.0 / 4.0",
      "Scholarship: INI Scholarship.",
      "Selected coursework: Distributed Systems, Network and the Internet, Cloud Infrastructure, Machine Learning Systems, Database Systems, Introduction to Computer Systems, and Introduction to Deep Learning.",
    ],
  },
  {
    id: "education-whu",
    degree: "B.S. in Computer Science",
    school: "Wuhan University",
    logo: "/logo-whu.png",
    period: "Sep. 2021 - Jun. 2025",
    location: "Wuhan, China",
    current: false,
    highlights: [
      "GPA: 3.63 / 4.0",
      "Hongyi Honor College & School of Computer Science.",
      "Scholarships: Lei Jun Innovation Scholarship; First-Class Competition Scholarship.",
    ],
  },
];

export const experiences = [
  {
    id: "experience-google",
    role: "Software Engineering Intern",
    organization: "Google",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGv3cqOuUMY7g/company-logo_200_200/B4EZmhegXHGcAM-/0/1759350753990/google_logo?e=2147483647&t=Hzaw0d0Yz1Yi-_mDuQ6JQo-Ph41AG50Z8pWjyaeTI0k&v=beta",
    period: "May. 2026 - Aug. 2026",
    location: "Sunnyvale, CA",
    badge: "Future",
    badgeVariant: "future",
    current: false,
    summary:
      "Incoming summer internship on Google's network infrastructure team in Sunnyvale.",
    highlights: [
      "Incoming SWE intern on the Network Infrastructure team in Sunnyvale for Summer 2026.",
    ],
  },
  {
    id: "experience-cmu-ta",
    role: "Teaching Assistant",
    organization: "Carnegie Mellon University",
    logo: "/logo-cmu-square.png",
    period: "Jan. 2026 - Present",
    location: "Pittsburgh, PA",
    current: true,
    summary:
      "Supporting the graduate distributed systems course at CMU, helping students build stronger systems intuition across core distributed computing concepts.",
    highlights: [
      "Serve as a teaching assistant for 14-736 Distributed Systems in the Information Networking Institute at Carnegie Mellon University.",
    ],
  },
  {
    id: "experience-sglang",
    role: "Open-Source Contributor",
    organization: "SGLang",
    logo: "/logo-sglang.png",
    period: "Dec. 2025 - Present",
    location: "Open source / Remote",
    current: true,
    summary:
      "Contributing to high-performance diffusion generation and RL training infrastructure, with a focus on adapter systems, rollout efficiency, and scalable inference paths.",
    highlights: [
      "Extended SGLang Diffusion to support reinforcement learning over diffusion models, including diffusion rollout sampling for SDE and CPS schemes.",
      "Designed and optimized the latent log-probability return pipeline to support efficient trajectory collection during rollout and RL-based optimization.",
      "Built a unified LoRA adapter system with QKV-fused injection, alpha-aware scaling, and dynamic multi-LoRA composition during inference.",
    ],
  },
  {
    id: "experience-microsoft",
    role: "Software Engineering Intern",
    organization: "Microsoft",
    logo: "/logo-microsoft.png",
    period: "Sep. 2024 - Jun. 2025",
    location: "Beijing, China",
    current: false,
    summary:
      "Worked on LLM systems spanning autonomic microservice management, privacy mitigation for tool-using agents, and interactive human-AI reasoning interfaces.",
    highlights: [
      "Built a hierarchical multi-agent framework for microservice management across 40+ Kubernetes and Azure services, reaching 93.50% task success and 86.11% RCA accuracy.",
      "Improved distributed reliability and latency by optimizing Redis and RabbitMQ pipelines, skill persistence, retrieval workflows, and model orchestration for LLM agents.",
      "Developed privacy-aware and human-in-the-loop agent systems, reducing leakage from 26.3% to 5.3% in PrivacyLens and cutting CoThink graph refresh latency by about 45%.",
    ],
  },
  {
    id: "experience-huawei",
    role: "Software Engineering Intern",
    organization: "Huawei",
    logo: "/logo-huawei.png",
    period: "Jan. 2024 - Mar. 2024",
    location: "Wuhan, China",
    current: false,
    summary:
      "Built graph-based systems for network source node classification and layout, combining algorithmic analysis with interactive visualization.",
    highlights: [
      "Implemented a network node classification system using PageRank-style grouping, adjacency checks, and graph algorithms such as topological sort and community detection.",
      "Raised classification accuracy to 95%+ compared with a previous 60–70% machine-learning-only baseline.",
      "Developed interactive graph visualization with force-directed layouts, clustering controls, and dynamic edge weighting using D3.js, Gephi API, and Python graph analytics.",
    ],
  },
];

export const awards = [
  {
    id: "award-icpc-invitational",
    title: "ICPC National Invitational Contest",
    tier: "gold",
    issuer: "Gold Medal",
    year: "Jun. 2025",
  },
  {
    id: "award-raicom",
    title: "RAICOM Robotics Developer Competition",
    tier: "gold",
    issuer: "National First Prize · Algorithm Design Track",
    year: "Aug. 2023",
  },
  {
    id: "award-sinan-cup",
    title: "CCF 'Sinan Cup' Quantum Computing Programming Challenge",
    tier: "gold",
    issuer: "National First Prize",
    year: "Mar. 2023",
  },
  {
    id: "award-gplt",
    title: "Group Programming Ladder Tournament",
    tier: "silver",
    issuer: "National Second Prize",
    year: "Apr. 2023",
  },
  {
    id: "award-icpc-regional",
    title: "ICPC Asia Regional Contest",
    tier: "silver",
    issuer: "Silver Medal",
    year: "Dec. 2022",
  },
  {
    id: "award-ccpc",
    title: "China Collegiate Programming Contest National Contest",
    tier: "silver",
    issuer: "Silver Medal",
    year: "Nov. 2022",
  },
  {
    id: "award-noip",
    title: "National Olympiad in Informatics in Provinces (NOIP)",
    tier: "gold",
    issuer: "Provincial First Prize",
    year: "Nov. 2020",
  },
  {
    id: "award-csp-s",
    title: "CCF Certified Software Professional (CSP-S, Senior Division)",
    tier: "gold",
    issuer: "Provincial First Prize",
    year: "Nov. 2019",
  },
];

export const publications = [
  {
    id: "publication-dart",
    title: "Mitigating Structural Overfitting: A Distribution-Aware Rectification Framework for Missing Feature Imputation",
    authors: "Y Song, F Yu, Y Luo, X Tao, S Qiu, K Han, J Tang",
    venue: "ACM Special Interest Group on Information Retrieval Conference (SIGIR 2026)",
    year: "2026",
    description:
      "DART combines global structural augmentation, masked autoencoding, and test-time distribution rectification to improve missing feature imputation under distribution shift.",
  },
  {
    id: "publication-privacy-in-action",
    title: "Privacy in Action: Towards Realistic Privacy Mitigation and Evaluation for LLM-Powered Agents",
    authors: "S Wang, F Yu, X Liu, X Qin, J Zhang, Q Lin, D Zhang, S Rajmohan",
    venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP 2025)",
    year: "2025",
    description:
      "A realistic privacy mitigation and evaluation framework for LLM-powered agents operating across tool-using environments.",
  },
  {
    id: "publication-microservice",
    title: "Enabling autonomic microservice management through self-learning agents",
    authors: "F Yu, F Yang, X Qin, Z Zhang, J Zhang, Q Lin, H Zhang, Y Dang, S Rajmohan, D Zhang, Q Zhang",
    venue: "arXiv preprint arXiv:2501.19056",
    year: "2025",
    description:
      "A self-learning agent system for autonomic microservice management that adapts to service-specific environments without prior configuration knowledge.",
  },
  {
    id: "publication-cloud-detection",
    title: "YOLO, Faster R-CNN, and SSD for cloud detection",
    authors: "F Yu",
    venue: "International Conference on Machine Learning and Automation (ICMLA 2024)",
    year: "2024",
    description:
      "A comparative study of object detection models for cloud detection, examining accuracy and optimization tradeoffs in a visually similar target domain.",
  },
];

export const cvData = {
  profile: [
    "Write a two- or three-line summary of the kind of work you want to be known for.",
    "Name the domains, industries, or problem spaces you are especially drawn to.",
    "Keep the wording recruiter-friendly even if the rest of the site feels more personal.",
  ],
  skills: [
    "Product strategy",
    "UX research",
    "Prototyping",
    "Frontend systems",
    "Technical writing",
    "Presentation design",
    "Cross-functional collaboration",
    "Data storytelling",
  ],
  education: [
    {
      id: "education-cmu",
      school: "Carnegie Mellon University",
      detail: "M.S. in Information Networking, Information Networking Institute, GPA 4.0/4.0",
    },
    {
      id: "education-whu",
      school: "Wuhan University",
      detail: "B.S. in Computer Science, Hongyi Honor College & School of Computer Science",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Selected project or thesis",
      description:
        "A single line on what you built, studied, or launched and what changed because of it.",
    },
    {
      id: "project-2",
      title: "Another meaningful project",
      description:
        "Choose projects that reinforce the same narrative as the rest of the site instead of listing everything.",
    },
  ],
  contact: [
    "Add your email address",
    "Add your LinkedIn URL",
    "Add your GitHub, portfolio, or another public link",
  ],
};
