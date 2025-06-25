import { UserCog, Gauge, MessageSquareText, PenLine, Settings, FlaskConical, User, Lightbulb, House, ShieldAlert, BookOpen, Folders, GitBranch } from 'lucide-react'
import NavIconTabItem from '@/components/NavIconTabItem'

export default {
    index: "",
    quickstart: "",
    "---1": {
        type: "separator",
        title: <NavIconTabItem icon={Gauge} label="Metrics" />
    },
    "---2": {
        type: "separator",
        title: <NavIconTabItem icon={FlaskConical} label="Evaluations" />
    },
    "---3": {
        type: "separator",
        title: <NavIconTabItem icon={GitBranch} label="Traces" />
    },
    "traces":  <NavIconTabItem icon={GitBranch} label="Traces" />,
    "---4": {   
        type: "separator",
        title: <NavIconTabItem icon={BookOpen} label="Datasets" />
    },
    "---5": {
        type: "separator",
        title: <NavIconTabItem icon={MessageSquareText} label="Prompts" />
    },
    "---6": {
        type: "separator",
        title: <NavIconTabItem icon={UserCog} label="User & Project Management" />
    },
}