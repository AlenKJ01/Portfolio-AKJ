import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="snap-section min-h-screen flex items-center py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-muted-foreground text-lg leading-relaxed text-center"
        >
          <p>
            I'm a Data Scientist and AI/ML Engineer with a deep passion for building intelligent systems that solve real-world problems. My expertise spans across Machine Learning, Natural Language Processing, and Computer Vision where I transform raw data into actionable insights and production-grade models.
          </p>
          <p>
            With a problem-solving mindset and a strong foundation in statistical analysis and deep learning, I thrive on tackling complex challenges. From predictive analytics to conversational AI, I build end-to-end solutions that bridge the gap between research and impact.
          </p>
          <p>
            I believe in the power of applied AI, not just models that work in notebooks, but systems that deliver value in the real world. Every project is an opportunity to push the boundaries of what's possible with data.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
