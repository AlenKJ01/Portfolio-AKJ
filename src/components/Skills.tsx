import { motion } from "framer-motion";
import {
  Cpu, TrendingUp, Settings2, LineChart, FlaskConical, Activity,
  Brain, Share2, Eye, ScanText, Bot, Database, Plug, Network,
  Cloud, BarChart3, MousePointer2
} from "lucide-react";

import {
  SiPython, SiMysql, SiHtml5, SiCss, SiJavascript,
  SiMongodb, SiPostgresql, SiScikitlearn,
  SiPytorch, SiTensorflow, SiOpencv, SiHuggingface,
  SiDocker, SiGit, SiGooglecloud, SiPostman,
  SiFastapi, SiFlask, SiLangchain, SiOpenai
} from "react-icons/si";

import type { IconType } from "react-icons";

interface Skill {
  name: string;
  Icon: IconType;
  label?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "SQL", Icon: SiMysql },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "JavaScript", Icon: SiJavascript },
    ],
  },
  {
    title: "Databases & Data Infrastructure",
    skills: [
      { name: "MySQL", Icon: SiMysql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
  },
  {
    title: "Machine Learning & Statistical Modelling",
    skills: [
      { name: "Machine Learning", Icon: Cpu },
      { name: "Predictive Modeling", Icon: TrendingUp },
      { name: "Feature Engineering", Icon: Settings2 },
      { name: "Statistical Analysis", Icon: LineChart },
      { name: "Hypothesis Testing", Icon: FlaskConical },
      { name: "Time-Series Forecasting", Icon: Activity },
      { name: "Scikit-learn", Icon: SiScikitlearn },
    ],
  },
  {
    title: "Deep Learning, Vision & NLP",
    skills: [
      { name: "Deep Learning", Icon: Brain },
      { name: "Neural Networks", Icon: Share2 },
      { name: "PyTorch", Icon: SiPytorch },
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "Computer Vision", Icon: Eye },
      { name: "OpenCV", Icon: SiOpencv },
      { name: "HuggingFace", Icon: SiHuggingface },
      { name: "YOLO", Icon: Eye },
      { name: "Detectron2", Icon: Cpu },
      { name: "OCR", Icon: ScanText },
      { name: "LLM", Icon: Bot },
      { name: "RAG", Icon: Database },
      { name: "LangChain", Icon: SiLangchain },
      { name: "LangGraph", Icon: Network },
      { name: "AI Agents", Icon: Bot },
    ],
  },
  {
    title: "Deployment, APIs & Tools",
    skills: [
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Flask", Icon: SiFlask },
      { name: "REST APIs", Icon: Plug },
      { name: "Docker", Icon: SiDocker },
      { name: "Git", Icon: SiGit },
      { name: "AWS", Icon: Cloud },
      { name: "GCP", Icon: SiGooglecloud },
      { name: "Power BI", Icon: BarChart3 },
      { name: "Postman", Icon: SiPostman },
      { name: "MCP", Icon: Network },
      { name: "Claude", Icon: Bot },
      { name: "Gemini", Icon: Bot },
      { name: "Cursor", Icon: MousePointer2 },
      { name: "OpenAI", Icon: SiOpenai },
      { name: "Llama", Icon: Bot },
      { name: "Copilot", Icon: Bot },
    ],
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const { name, Icon } = skill;

  return (
    <div className="skill-card flex items-center gap-3 px-4 py-3 rounded-lg border border-border/50 bg-card/50">
      <Icon size={20} className="text-primary flex-shrink-0" />
      <span className="text-sm text-foreground">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="snap-section min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">Tools & Technologies</h2>
          <p className="text-muted-foreground mt-3">
            Technologies and tools used across AI, ML, and production systems.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.4 }}
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-foreground">{cat.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
