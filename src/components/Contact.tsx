import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('alenkj3101@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="snap-section min-h-screen flex items-center py-24">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground mt-3">Open to opportunities and collaborations.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl font-bold mb-8">Alen K Johnson</h3>

          <div className="space-y-5">
            <div className="flex items-center gap-4 group">
              <Mail size={22} className="text-primary flex-shrink-0" />
              <a href="mailto:alenkj3101@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                alenkj3101@gmail.com
              </a>
              <button onClick={copyEmail} className="ml-auto text-muted-foreground hover:text-primary transition-colors">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
              {copied && <span className="text-xs text-primary">Copied</span>}
            </div>

            <div className="flex items-center gap-4">
              <Phone size={22} className="text-primary flex-shrink-0" />
              <a href="tel:+919207685517" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                +91 92076 85517
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={22} className="text-primary flex-shrink-0" />
              <span className="text-muted-foreground text-sm">Kochi, Kerala</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-border/50">
            <a
              href="https://github.com/AlenKJ01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-opacity"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-opacity"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:alenkj3101@gmail.com"
              className="text-primary/70 hover:text-primary transition-opacity"
            >
              <Mail size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
