import { CircleHelp, Rocket, MessageSquareText, PenLine, Settings, FlaskConical, Telescope, User, Lightbulb, House, ShieldAlert, BookOpen, Folders, Zap } from 'lucide-react'
import NavIconTabItem from '@/components/NavIconTabItem'

export default {
  "why-confident-ai": <NavIconTabItem icon={CircleHelp} label="Why Confident AI" />,
  "llm-use-cases": <NavIconTabItem icon={Lightbulb} label="LLM Use Cases" />,
  "data-handling": <NavIconTabItem icon={Folders} label="Data Handling" />,
  "on-prem-hosting": <NavIconTabItem icon={House} label="On-Prem Hosting" />,
  "llm-red-teaming": <NavIconTabItem icon={ShieldAlert} label="LLM Red Teaming" />,
  concepts: {
    title: <NavIconTabItem icon={BookOpen} label="Concepts" />,
    theme: {
      collapsed: true
    }
  },
  "---": {
    type: "separator",
    title: <NavIconTabItem icon={Zap} label="Quickstart" />
  },
  index: "",
  "how-it-works": "",
  "getting-started": "Getting Started",
  "---2": {
    type: "separator",
    title: <NavIconTabItem icon={Rocket} label="Platform Features" />
  },
  "dataset-editor": <NavIconTabItem icon={PenLine} label="Dataset Editor" />,
  "prompt-studio": <NavIconTabItem icon={MessageSquareText} label="Prompt Studio" />,
  "llm-evaluation": <NavIconTabItem icon={FlaskConical} label="LLM Evaluation" />,
  "llm-observability": <NavIconTabItem icon={Telescope} label="LLM Observability" />,
  "human-in-the-loop": <NavIconTabItem icon={User} label="Human-in-the-Loop" />,
  "project-settings": <NavIconTabItem icon={Settings} label="Project Settings" />,
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