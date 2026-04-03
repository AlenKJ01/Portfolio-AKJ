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
    <section id="contact" className="snap-section min-h-screen flex flex-col items-center justify-center py-24 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(47,214,176,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-3 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Open to opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl max-w-md mx-auto overflow-hidden backdrop-blur-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.01)', // lighter = more glass feel
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: `
              0 8px 32px rgba(0,0,0,0.25),
              inset 0 1px 0 rgba(255,255,255,0.15)
            `,
          }}
        >
          {/* Top accent line */}
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(47,214,176,0.5), transparent)' }}
          />

          <div className="p-8 md:p-10">
            <h3 className="font-display text-xl font-bold mb-7 text-foreground" style={{ fontFamily: 'Syne, sans-serif' }}>
              Alen K Johnson
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="group flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{ background: 'rgba(47,214,176,0.1)', border: '1px solid rgba(47,214,176,0.2)' }}>
                  <Mail size={14} style={{ color: '#2fd6b0' }} />
                </div>
                <a href="mailto:alenkj3101@gmail.com"
                  className="text-sm transition-colors duration-200 flex-1"
                  style={{ color: 'rgba(210,220,230,0.65)', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(210,220,230,0.95)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(210,220,230,0.65)'}
                >
                  alenkj3101@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ color: copied ? '#2fd6b0' : 'rgba(210,220,230,0.35)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#2fd6b0'}
                  onMouseLeave={e => { if (!copied) (e.currentTarget as HTMLElement).style.color = 'rgba(210,220,230,0.35)'; }}
                  title="Copy email"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                </button>
                {copied && (
                  <span className="text-[10px] tracking-wider" style={{ color: '#2fd6b0' }}>Copied!</span>
                )}
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(47,214,176,0.1)', border: '1px solid rgba(47,214,176,0.2)' }}>
                  <Phone size={14} style={{ color: '#2fd6b0' }} />
                </div>
                <a href="tel:+919207685517"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(210,220,230,0.65)', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(210,220,230,0.95)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(210,220,230,0.65)'}
                >
                  +91 92076 85517
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(47,214,176,0.1)', border: '1px solid rgba(47,214,176,0.2)' }}>
                  <MapPin size={14} style={{ color: '#2fd6b0' }} />
                </div>
                <span className="text-sm" style={{ color: 'rgba(210,220,230,0.65)', fontFamily: 'DM Sans, sans-serif' }}>
                  Kochi, Kerala, India
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-8 pt-7"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5 text-center">Find me on</p>
              <div className="flex items-center justify-center gap-5">
                {[
                  { href: 'https://github.com/AlenKJ01', Icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/alenkj/', Icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:alenkj3101@gmail.com', Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(47,214,176,0.4)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(47,214,176,0.1)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(47,214,176,0.12)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Icon size={17} style={{ color: 'rgba(210,220,230,0.5)' }}
                      className="group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(47,214,176,0.2), transparent)' }}
          />
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-xs"
          style={{ color: 'rgba(210,220,230,0.3)', fontFamily: 'DM Sans, sans-serif' }}
        >
          © {new Date().getFullYear()} Alen K Johnson
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
