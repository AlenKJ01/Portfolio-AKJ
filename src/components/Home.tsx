import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const skills = [
  'Python', 'Machine Learning', 'LLM Systems & RAG', 'Computer Vision',
  'SQL', 'Deep Learning', 'API Deployment', 'AI Agents',
];

const Home = () => {
  return (
    <section id="home" className="snap-section min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-secondary border-2 border-primary/20 flex items-center justify-center overflow-hidden">
              <span className="text-4xl font-display font-bold text-primary">AKJ</span>
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground">Alen K Johnson</h2>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/AlenKJ01" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={22} />
              </a>
              <a href="mailto:alenkj3101@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Data Scientist &<br />
              <span className="text-primary">AI / ML Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
              Building production-ready ML, Computer Vision, and LLM systems that solve real-world problems.
              I'm passionate about designing intelligent pipelines from raw data to deployed systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-primary/25 bg-primary/5 text-primary"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
