import { motion } from "framer-motion";

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

            <h3 className="text-2xl font-semibold text-white mb-10">
              Internship Experience
            </h3>

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
                      Data Scientist Intern
                    </h4>

                    <p className="text-teal-400 text-sm mb-4">
                      PropMarker – Design Direct Web Solutions Ltd, Kochi
                      <br />
                      Apr 2025 – Dec 2025
                    </p>

                    <ul className="text-white/80 text-sm space-y-2">
                      <li>
                        ● Processed 500+ floorplans using optimized OCR & OpenCV to generate structured datasets for predictive modeling.
                      </li>

                      <li>
                        ● Improved data usability by designing end-to-end Python APIs and MongoDB pipelines for analytics-ready datasets.
                      </li>

                      <li>
                        ● Built LLM-powered RAG pipelines with vector databases to automate document analysis and data extraction.
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

            <h3 className="text-2xl font-semibold mb-6 text-white">
              Who I Am
            </h3>

            <p className="text-white/90 leading-relaxed mb-4">
              I’m a Data Scientist and AI / ML Engineer focused on building intelligent
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

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <p className="text-2xl font-semibold text-teal-400">10+</p>
                <p className="text-sm text-white/70">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-teal-400">2</p>
                <p className="text-sm text-white/70">Internships</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-teal-400">3</p>
                <p className="text-sm text-white/70">AI Domains</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;