"use client";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Career-Ops Platform",
    issuer: "Agentic Job Automation",
    description: "Multi-agent system with 30+ MCP tools, Playwright-verified pipelines, and AI resume tailoring.",
    link: "https://github.com/ORION2809/Career-Ops"
  },
  {
    title: "Prove-It-Mode",
    issuer: "Chaos Testing Framework",
    description: "Rust CLI that injects latency, kills processes, and validates recovery under fault conditions.",
    link: "https://github.com/ORION2809/Prove-It-Mode"
  },
  {
    title: "Claw Code",
    issuer: "Terminal AI Agent",
    description: "Rust-based agentic coding assistant with MCP tool orchestration and Playwright validation.",
    link: "https://github.com/ORION2809/Claw-Code"
  },
  {
    title: "Claude Fulcrum (ECC)",
    issuer: "Agent Config System",
    description: "200+ skill modules, agents, hooks, and commands for Claude Code configuration and orchestration.",
    link: "https://github.com/ORION2809/claude-fulcrum"
  },
  {
    title: "XAI Tachycardia Detection",
    issuer: "Medical AI Research",
    description: "Explainable deep learning with Grad-CAM, LIME, and SHAP for ECG arrhythmia classification.",
    link: "https://github.com/ORION2809/XAI-Tachycardia"
  },
  {
    title: "RLRAG – Retrieval Augmented Gen",
    issuer: "LLM Pipeline",
    description: "RL-optimized RAG with reward-ranked retrieval and dynamic context window management.",
    link: "https://github.com/ORION2809/RLRAG"
  },
  {
    title: "AI Onboarding Copilot",
    issuer: "Enterprise Tooling",
    description: "Multi-agent onboarding system that auto-generates README, tests, and architecture docs for new repos.",
    link: "https://github.com/ORION2809/AI-Onboarding"
  },
  {
    title: "Game Builder Agent",
    issuer: "Creative AI",
    description: "TypeScript agent that generates full playable games from natural language prompts with live preview.",
    link: "https://github.com/ORION2809/Game-Builder"
  },
  {
    title: "Playwright E2E Mastery",
    issuer: "Testing Expertise",
    description: "Comprehensive E2E test suites with visual regression, accessibility audits, and CI/CD integration.",
    link: "https://playwright.dev"
  },
  {
    title: "MCP Protocol Design",
    issuer: "Agent Communication",
    description: "Custom MCP servers for tool orchestration, context injection, and multi-agent coordination.",
    link: "https://modelcontextprotocol.io"
  },
  {
    title: "Rust Systems Programming",
    issuer: "Performance & Safety",
    description: "Production CLI tools, async runtimes, and zero-cost abstractions for agentic workloads.",
    link: "https://www.rust-lang.org"
  },
  {
    title: "Multi-Runtime Architecture",
    issuer: "Polyglot Engineering",
    description: "TypeScript, Python, Rust, and Go services orchestrated under unified agent protocols.",
    link: "https://github.com/ORION2809"
  }
];

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Certifications</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Professional Credentials
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                A collection of certifications and specializations in data science, machine learning, and IT.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col gap-2 border rounded-md p-4">
                <h3 className="text-xl tracking-tight">{cert.title}</h3>
                <p className="text-primary text-base font-medium">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
                <a href={cert.link} className="text-purple text-sm font-semibold hover:underline">Verify Certificate</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
