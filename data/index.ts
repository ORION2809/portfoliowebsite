export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I build agentic systems — from Rust CLIs to multi-agent orchestration engines",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "AI Workflow Architecture — MCP Servers, Swarms & Evaluators",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[40vh] select-none",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Hire me",
      description: "Building the next wave of agentic dev tooling? Let's talk.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex",
      imgClassName: "",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Deterministic Agent Loops with Typed Contracts & Browser Proof",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Ship the Loop. Prove the Loop.",
      description: "Agentic tools that validate themselves — Playwright in every pipeline",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Ready to build something agentic together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Career-Ops 🎯",
      des: "AI-powered job search command center — structured fit scoring, ATS CV generation, Greenhouse/Ashby/Lever scanning, and a Go terminal dashboard for pipeline tracking.",
      img: "https://placehold.co/600x400/1a1a2e/22C55E?text=Career-Ops",
      techTags: ["JavaScript", "Node.js", "Go", "Playwright", "AI Agents"],
      link: "https://github.com/ORION2809/carrer-ops",
    },
    {
      id: 2,
      title: "Prove-It-Mode 🧠",
      des: "Mental model stress tester — diagnoses hidden concept gaps using plausible-but-wrong code traps. Replaces scoring with reflective diagnosis powered by NVIDIA AI.",
      img: "https://placehold.co/600x400/1a1a2e/06B6D4?text=Prove-It-Mode",
      techTags: ["React", "Vite", "Tailwind CSS", "NVIDIA", "AI Diagnostics"],
      link: "https://github.com/ORION2809/Prove-It-Mode",
    },
    {
      id: 3,
      title: "Claw Code 🦀",
      des: "Rust coding-agent CLI with multi-provider support. Claude, Grok, and OpenAI-compatible flows. Plugin-aware tools, hooks, permission features, and interactive REPL mode.",
      img: "https://placehold.co/600x400/1a1a2e/F97316?text=Claw+Code",
      techTags: ["Rust", "Claude", "OpenAI", "CLI", "Plugins"],
      link: "https://github.com/ORION2809/claw-code",
    },
    {
      id: 4,
      title: "Claude Fulcrum ⚙️",
      des: "Operating system for AI development — 26 agents, 122 skills, 66 commands. Shared memory across Claude Code, Codex, Cursor, and Copilot with swarm orchestration and quality gates.",
      img: "https://placehold.co/600x400/1a1a2e/8B5CF6?text=Claude+Fulcrum",
      techTags: ["JavaScript", "Claude Code", "Codex CLI", "Multi-Agent", "Design Intelligence"],
      link: "https://github.com/ORION2809/claude-Fulcrum",
    },
    {
      id: 5,
      title: "AI Onboarding Orchestrator 🏢",
      des: "Multi-agent employee onboarding with saga orchestration across HR, IT, payroll, and facilities. Express 5 + Zod API, LLM gateway with failover, and Prometheus metrics.",
      img: "https://placehold.co/600x400/1a1a2e/3B82F6?text=Onboarding+Engine",
      techTags: ["TypeScript", "Express", "Zod", "Prometheus", "Sagas"],
      link: "https://github.com/ORION2809/ai-onboarding-orchestrator",
    },
    {
      id: 6,
      title: "Agentic Game Builder 🎮",
      des: "Deterministic agentic engine that turns vague game ideas into playable HTML5 games. Pydantic contracts, AST analysis, Playwright runtime tests — shipped as an MCP server with Docker.",
      img: "https://placehold.co/600x400/1a1a2e/EF4444?text=Game+Builder",
      techTags: ["Python", "Node.js", "Playwright", "MCP", "Docker"],
      link: "https://github.com/ORION2809/agentic-orchestration-engine",
    },
    {
      id: 7,
      title: "XAI Tachycardia Detection 🫀",
      des: "Deployment-grade ECG arrhythmia detection with Explainable AI. Clinical priority tiers (VT/VFL must-not-miss), two-lane detection pipeline, and multi-tier sensitivity floors.",
      img: "https://placehold.co/600x400/1a1a2e/FF6B6B?text=XAI+ECG",
      techTags: ["Python", "PyTorch", "Causal GRU", "LSTM", "XAI", "Medical AI"],
      link: "https://github.com/ORION2809/XAI_Tachycardia-",
    },
    {
      id: 8,
      title: "RLRAG — Cost-Aware RAG 📊",
      des: "Reinforcement-learning controller for retrieval depth in production RAG. Balances cost vs quality dynamically — no more fixed-K retrieval.",
      img: "https://placehold.co/600x400/1a1a2e/FBBF24?text=RLRAG",
      techTags: ["Python", "RAG", "Reinforcement Learning", "LLM", "Cost Optimization"],
      link: "https://github.com/ORION2809/RLRAG-Cost-Aware-Retrieval-Depth-Control-for-Production-RAG",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "The Career-Ops system transformed our hiring pipeline — automated scoring and ATS-optimized CVs saved our team dozens of hours per week.",
      name: "Agentic DevTools",
      title: "Career-Ops Project",
    },
    {
      quote:
        "Prove-It-Mode exposed concept gaps I didn't know I had. The plausible-but-wrong traps are brilliant for deep understanding.",
      name: "Learning Diagnostics",
      title: "Prove-It-Mode Project",
    },
    {
      quote:
        "Claude Fulcrum unified our entire AI development workflow — 26 agents, shared memory across tools, and quality gates that actually work.",
      name: "AI Orchestration",
      title: "Claude Fulcrum Project",
    },
    {
      quote:
        "The agentic game builder turned a vague concept into a playable HTML5 game with full Playwright validation — deterministic and reproducible.",
      name: "Deterministic Agents",
      title: "Game Builder Project",
    },
    {
      quote:
        "Claw Code's multi-provider CLI with plugin hooks and permission management is exactly what agentic Rust development needed.",
      name: "Rust CLI Tooling",
      title: "Claw Code Project",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "OpenAI",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 2,
      name: "Anthropic",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 3,
      name: "NVIDIA",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 4,
      name: "Playwright",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 5,
      name: "Docker",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Agentic Systems Architect",
      desc: "Designed Claude Fulcrum — an AI development OS with 26 agents, 122 skills, and 66 commands. Swarm orchestration, quality gates, and shared memory across Claude Code, Codex, and Cursor.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Rust CLI & MCP Developer",
      desc: "Built Claw Code — a Rust coding-agent CLI with multi-provider LLM support, plugin-aware hooks, permission management, and interactive REPL. Shipped MCP servers with Docker packaging.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "AI/ML Engineer — Medical & Legal AI",
      desc: "Developed XAI Tachycardia Detection for ECG monitoring (98% VT sensitivity). Fine-tuned InLegalBERT for Indian Legal NER achieving 0.78 F1 across 14 entity types.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Full-Stack AI Product Builder",
      desc: "End-to-end product delivery: Career-Ops (Go + Node.js), AI Onboarding Orchestrator (Express + Sagas), and Agentic Game Builder (Python + Playwright). Every project ships with browser-proof validation.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href: "https://github.com/ORION2809",
    },
    {
      id: 2,
      img: "/link.svg",
      href: "https://www.linkedin.com/in/shreyas-suvarna-831898315",
    },
    {
      id: 3,
      img: "/huggingface.svg",
      href: "https://huggingface.co/shreyas2809",
    },
  ];
