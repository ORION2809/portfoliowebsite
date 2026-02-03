export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I build end-to-end ML systems with production-ready safety constraints",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Expertise in Time-Series Forecasting & Anomaly Detection",
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
      description: "Looking for an AI/ML Engineer? Let's connect!",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex",
      imgClassName: "",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Passionate about Explainable AI and ML Safety",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "From Data to Decisions",
      description: "Building intelligent systems that drive real-world impact",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Ready to build something amazing together?",
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
      title: "DocAssist 📄",
      des: "Desktop application using OCR and NLP to extract, tag, and search scanned documents efficiently. Published in IRJAEH (E-ISSN 2584-2137), Vol-3, Issue 5, May 2025.",
      img: "https://placehold.co/600x400/1a1a2e/4ECDC4?text=DocAssist",
      techTags: ["Python", "Tesseract OCR", "SpaCy", "NLP", "Tkinter", "MySQL"],
      link: "https://github.com/ORION2809/project_pheonix",
    },
    {
      id: 2,
      title: "InLegalBERT NER ⚖️",
      des: "Fine-tuned InLegalBERT for Indian Legal Named Entity Recognition with 14 entity types. Achieved 0.78 F1 score through custom data enrichment pipeline with template augmentation and class balancing on 870K+ training sentences.",
      img: "https://placehold.co/600x400/1a1a2e/FFD700?text=InLegalBERT",
      techTags: ["NLP", "BERT", "Transformers", "PyTorch", "NER", "Legal AI"],
      link: "https://huggingface.co/shreyas2809/IN_Lexi_X_BERT",
    },
    {
      id: 3,
      title: "Aquaculture AI 🐟",
      des: "An intelligent aquaculture farm management system powered by machine learning with 7 integrated engines: Water Quality, Growth Prediction, Survival Risk, Disease Detection, Feeding Efficiency, Yield Prediction, and Root Cause Analysis.",
      img: "https://placehold.co/600x400/1a1a2e/CBACF9?text=Aquaculture+AI",
      techTags: ["Python", "Machine Learning", "XGBoost", "LSTM", "FastAPI", "scikit-learn"],
      link: "https://github.com/ORION2809/aquaculture_ai",
    },
    {
      id: 4,
      title: "XAI Tachycardia Detection 🫀",
      des: "Deployment-grade ECG arrhythmia detection system with Explainable AI. Features clinical priority tiers (VT/VFL must-not-miss), two-lane detection pipeline, and multi-tier sensitivity floors for ICU/telemetry deployment.",
      img: "https://placehold.co/600x400/1a1a2e/FF6B6B?text=XAI+ECG",
      techTags: ["Python", "PyTorch", "Causal GRU", "LSTM", "XAI", "Medical AI"],
      link: "https://github.com/ORION2809/XAI_Tachycardia-",
    },
    {
      id: 5,
      title: "Legal NER Data Pipeline",
      des: "Built comprehensive data enrichment pipeline for NER training: template-based augmentation, class rebalancing, and validation. Scaled dataset from 32K to 870K sentences while eliminating rare label issues.",
      img: "https://placehold.co/600x400/1a1a2e/87CEEB?text=Data+Pipeline",
      techTags: ["Data Engineering", "NLP", "Augmentation", "Python", "HuggingFace"],
      link: "#",
    },
    {
      id: 6,
      title: "ECG Signal Quality Engine",
      des: "Multi-component signal quality assessment for ECG monitoring. Detects baseline wander, saturation, QRS detectability, and powerline noise with formal state machine for artifact handling.",
      img: "https://placehold.co/600x400/1a1a2e/90EE90?text=SQI+Engine",
      techTags: ["Signal Processing", "Python", "State Machine", "Real-time"],
      link: "#",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with this developer was a great experience. Their dedication and skills helped us achieve our goals efficiently.",
      name: "Client Name 1",
      title: "Position at Company",
    },
    {
      quote:
        "I highly recommend this developer for any project. Their expertise and commitment to quality are unmatched.",
      name: "Client Name 2",
      title: "Position at Company",
    },
    {
      quote:
        "This developer brought innovative solutions to our challenges. Their professionalism made the collaboration seamless.",
      name: "Client Name 3",
      title: "Position at Company",
    },
    {
      quote:
        "The results delivered by this developer exceeded our expectations. They are a true asset to any team.",
      name: "Client Name 4",
      title: "Position at Company",
    },
    {
      quote:
        "Collaborating with this developer was a pleasure. Their attention to detail and passion for development are evident.",
      name: "Client Name 5",
      title: "Position at Company",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Company A",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 2,
      name: "Company B",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 3,
      name: "Company C",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 4,
      name: "Company D",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 5,
      name: "Company E",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "NLP Engineer - Legal AI",
      desc: "Fine-tuned InLegalBERT for Indian Legal NER achieving 0.78 F1 across 14 entity types. Built data enrichment pipeline scaling 32K to 870K sentences with template augmentation and class balancing.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "AI/ML Engineer - Medical AI",
      desc: "Developed deployment-grade XAI Tachycardia Detection for ECG arrhythmia monitoring. Implemented clinical priority tiers, two-lane detection pipeline achieving 98% VT sensitivity for ICU deployment.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "AI/ML Engineer - Aquaculture AI",
      desc: "Designed 7 integrated ML engines for farm management: Water Quality, Growth Prediction, Survival Risk, Disease Detection, Feeding Efficiency, Yield Prediction, and Root Cause Analysis.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Deep Learning & Data Engineering",
      desc: "Built production ML pipelines using PyTorch, Transformers, and FastAPI. Expertise in BERT fine-tuning, time-series forecasting, signal processing, and comprehensive data augmentation strategies.",
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
