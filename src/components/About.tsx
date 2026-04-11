import { motion } from "framer-motion";
import { Briefcase, User } from "lucide-react";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "3", label: "AI Domains" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-20"
        >
          About
        </motion.h2>


        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — INTERNSHIP EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="flex items-center gap-2 mb-8">
              <Briefcase size={14} style={{ color: '#2fd6b0' }} />
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
                Internship Experience
              </h3>
            </div>

            <div className="relative pl-10">

              {/* vertical line */}
              <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/10"></div>

              <div className="space-y-16">

                {/* Internship 1 */}
                <div className="relative">

                  {/* dot */}
                  <div className="absolute -left-[3px] top-4 w-3 h-3 bg-teal-400 rounded-full shadow-md shadow-teal-400/40"></div>

                  <div className="ml-8 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md
                                  hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-500/10
                                  hover:-translate-y-1 transition-all duration-300">

                    <h4 className="text-white font-semibold">
                      AI / ML Intern
                    </h4>

                    <p className="text-teal-400 text-sm mb-4">
                      PropMarker – Design Direct Web Solutions Ltd, UK
                      <br />
                      Apr 2025 – Dec 2025
                    </p>

                    <ul className="text-white/80 text-sm space-y-2">
                      <li>
                        ● Processed 500+ floorplans using OCR + OpenCV, cutting compute cost by ~50% while maintaining above 90% accuracy.
                      </li>

                      <li>
                        ● Built FastAPI + MongoDB pipelines, reducing manual effort by ~70% and doubling workflow throughput.
                      </li>

                      <li>
                        ● Developed LLM-based RAG pipeline with vector databases, reducing analysis time and improving extraction consistency.
                      </li>
                    </ul>

                  </div>
                </div>


                {/* Internship 2 */}
                <div className="relative">

                  <div className="absolute -left-[3px] top-4 w-3 h-3 bg-teal-400 rounded-full shadow-md shadow-teal-400/40"></div>

                  <div className="ml-8 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md
                                  hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-500/10
                                  hover:-translate-y-1 transition-all duration-300">

                    <h4 className="text-white font-semibold">
                      Data Science & Machine Learning Intern
                    </h4>

                    <p className="text-teal-400 text-sm mb-4">
                      GeeksForGeeks – Bengaluru
                      <br />
                      Aug 2024 – Dec 2024
                    </p>

                    <ul className="text-white/80 text-sm space-y-2">
                      <li>
                        ● Improved dataset quality and model reliability through systematic data cleaning, preprocessing, and feature engineering.
                      </li>

                      <li>
                        ● Transformed raw metrics into business-ready insights using Power BI dashboards for KPI tracking.
                      </li>

                      <li>
                        ● Supported segmentation and prediction tasks that enhanced operational understanding and planning.
                      </li>
                    </ul>

                  </div>
                </div>

              </div>
            </div>
          </motion.div>


          {/* RIGHT — ABOUT ME */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="flex items-center gap-2 mb-8">
              <User size={14} style={{ color: '#2fd6b0' }} />
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
                Who I Am
              </h3>
            </div>

            <p className="text-white/90 leading-relaxed mb-4">
              I’m a AI / ML Engineer and  Data Scientist focused on building intelligent
              systems that solve real-world problems.
            </p>

            <p className="text-white/80 leading-relaxed mb-4">
              My work spans Machine Learning, Computer Vision, and LLM-based
              applications, where I design end-to-end pipelines from data processing
              and model development to deployable AI solutions.
            </p>

            <p className="text-white/80 leading-relaxed mb-4">
              Through internships in Data Science and Software Development, I gained
              hands-on experience building ML models and working with real datasets.
            </p>

            <p className="text-white/80 leading-relaxed">
              I enjoy transforming raw data into meaningful insights and scalable
              systems that deliver real impact.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-xl p-4 text-center backdrop-blur-md shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)', // more neutral glass
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Number */}
                  <p className="text-2xl font-semibold text-teal-400">
                    {value}
                  </p>

                  {/* Label */}
                  <p
                    className="text-xs mt-1"
                    style={{ color: 'rgba(210,220,230,0.55)' }}
                  >
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;