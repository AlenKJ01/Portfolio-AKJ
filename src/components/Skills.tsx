import { motion } from 'framer-motion';
import {
  Cpu, TrendingUp, Settings2, LineChart, FlaskConical, Activity,
  Brain, Share2, Eye, ScanText, Bot, Database, Plug, Network,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  Icon: LucideIcon | null;
  label?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', Icon: null, label: 'PY' },
      { name: 'SQL', Icon: Database, },
      { name: 'HTML5', Icon: null, label: 'H5' },
      { name: 'CSS3', Icon: null, label: 'C3' },
      { name: 'JavaScript', Icon: null, label: 'JS' },
    ],
  },
  {
    title: 'Databases & Data Infrastructure',
    skills: [
      { name: 'MySQL', Icon: Database },
      { name: 'MongoDB', Icon: Database },
      { name: 'PostgreSQL', Icon: Database },
    ],
  },
  {
    title: 'Machine Learning & Statistical Modelling',
    skills: [
      { name: 'Machine Learning', Icon: Cpu },
      { name: 'Predictive Modeling', Icon: TrendingUp },
      { name: 'Feature Engineering', Icon: Settings2 },
      { name: 'Statistical Analysis', Icon: LineChart },
      { name: 'Hypothesis Testing', Icon: FlaskConical },
      { name: 'Time-Series Forecasting', Icon: Activity },
      { name: 'Scikit-learn', Icon: null, label: 'SK' },
    ],
  },
  {
    title: 'Deep Learning, Vision & NLP',
    skills: [
      { name: 'Deep Learning', Icon: Brain },
      { name: 'Neural Networks', Icon: Share2 },
      { name: 'PyTorch', Icon: null, label: 'PT' },
      { name: 'TensorFlow', Icon: null, label: 'TF' },
      { name: 'Computer Vision', Icon: Eye },
      { name: 'OpenCV', Icon: Eye },
      { name: 'HuggingFace', Icon: null, label: 'HF' },
      { name: 'YOLO', Icon: Eye },
      { name: 'Detectron2', Icon: Cpu },
      { name: 'OCR', Icon: ScanText },
      { name: 'LLM', Icon: Bot },
      { name: 'RAG', Icon: Database },
      { name: 'LangChain', Icon: null, label: 'LC' },
      { name: 'LangGraph', Icon: null, label: 'LG' },
      { name: 'AI Agents', Icon: Bot },
    ],
  },
  {
    title: 'Deployment, APIs & Tools',
    skills: [
      { name: 'FastAPI', Icon: null, label: 'FA' },
      { name: 'Flask', Icon: FlaskConical },
      { name: 'REST APIs', Icon: Plug },
      { name: 'Docker', Icon: null, label: 'DK' },
      { name: 'Git', Icon: null, label: 'GIT' },
      { name: 'AWS', Icon: null, label: 'AWS' },
      { name: 'GCP', Icon: null, label: 'GCP' },
      { name: 'Power BI', Icon: null, label: 'PBI' },
      { name: 'Postman', Icon: null, label: 'PM' },
      { name: 'MCP', Icon: Network },
      { name: 'Claude', Icon: Bot },
      { name: 'Gemini', Icon: Bot },
      { name: 'Cursor', Icon: null, label: 'CR' },
      { name: 'OpenAI', Icon: Bot },
      { name: 'Llama', Icon: null, label: 'LL' },
      { name: 'Copilot', Icon: Bot },
    ],
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const { name, Icon, label } = skill;
  return (
    <div className="skill-card flex items-center gap-3 px-4 py-3 rounded-lg border border-border/50 bg-card/50">
      {Icon ? (
        <Icon size={20} className="text-primary flex-shrink-0" />
      ) : (
        <span className="w-5 h-5 flex items-center justify-center text-[10px] font-bold text-primary bg-primary/10 rounded flex-shrink-0">
          {label}
        </span>
      )}
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
