import { CircleHelp, Rocket, MessageSquareText, PenLine, Settings, FlaskConical, Telescope, User, Lightbulb, House, ShieldAlert, BookOpen, Folders, Zap } from 'lucide-react'

export default {
  "why-confident-ai": <div style={{ display: 'flex', alignItems: 'center' }}>
    <CircleHelp style={{ marginRight: '8px' }} size={16} />
    <span>Why Confident AI</span>
  </div>,
  "llm-use-cases": <div style={{ display: 'flex', alignItems: 'center' }}>
    <Lightbulb style={{ marginRight: '8px' }} size={16} />
    <span>LLM Use Cases</span>
  </div>,
  "data-handling": <div style={{ display: 'flex', alignItems: 'center' }}>
    <Folders style={{ marginRight: '8px' }} size={16} />
    <span>Data Handling</span>
  </div>,
  "on-prem-hosting": <div style={{ display: 'flex', alignItems: 'center' }}>
    <House style={{ marginRight: '8px' }} size={16} />
    <span>On-Prem Hosting</span>
  </div>,
  "llm-red-teaming": <div style={{ display: 'flex', alignItems: 'center' }}>
    <ShieldAlert style={{ marginRight: '8px' }} size={16} />
    <span>LLM Red Teaming</span>
  </div>,
  concepts: {
    title: <div style={{ display: 'flex', alignItems: 'center' }}>
      <BookOpen style={{ marginRight: '8px' }} size={16} />
      <span>Concepts</span>
    </div>,
    theme: {
      collapsed: true
    }
  },
  "---": {
    type: "separator",
    title: <div style={{ display: 'flex', alignItems: 'center' }}>
      <Zap style={{ marginRight: '8px' }} size={16} />
      <span>Quickstart</span>
    </div>
  },
  index: "",
  "how-it-works": "",
  "getting-started": "Getting Started",
  "---2": {
    type: "separator",
    title: <div style={{ display: 'flex', alignItems: 'center' }}>
      <Rocket style={{ marginRight: '8px' }} size={16} />
      <span>Platform Features</span>
    </div>
  },
  "dataset-editor": <div style={{ display: 'flex', alignItems: 'center' }}>
    <PenLine style={{ marginRight: '8px' }} size={16} />
    <span>Dataset Editor</span>
  </div>,
  "prompt-studio": <div style={{ display: 'flex', alignItems: 'center' }}>
    <MessageSquareText style={{ marginRight: '8px' }} size={16} />
    <span>Prompt Studio</span>
  </div>,
  "llm-evaluation": <div style={{ display: 'flex', alignItems: 'center' }}>
    <FlaskConical style={{ marginRight: '8px' }} size={16} />
    <span>LLM Evaluation</span>
  </div>,
  "llm-observability": <div style={{ display: 'flex', alignItems: 'center' }}>
    <Telescope style={{ marginRight: '8px' }} size={16} />
    <span>LLM Observability</span>
  </div>,
  "human-in-the-loop": <div style={{ display: 'flex', alignItems: 'center' }}>
    <User style={{ marginRight: '8px' }} size={16} />
    <span>Human-in-the-Loop</span>
  </div>,
  "project-settings": <div style={{ display: 'flex', alignItems: 'center' }}>
    <Settings style={{ marginRight: '8px' }} size={16} />
    <span>Project Settings</span>
  </div>,
  // "---3": {
  //   type: "separator",
  //   title: "Non-Functional Features"
  // },
  "navigation": {
    type: "menu",
    title: "More resources",
    items: {
      "home": {
        title: "Home Page",
        href: "https://confident-ai.com"
      },
      "pricing": {
        title: "Pricing",
        href: "https://confident-ai.com/pricing"
      },
      "book-a-demo": {
        title: "Book a Demo",
        href: "https://confident-ai.com/book-a-demo"
      },
      "docs": {
        title: "DeepEval",
        href: "https://deepeval.com"
      },
    }
  }
} 