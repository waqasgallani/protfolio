import React from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={`${styles.section} py-20 relative`}>
      <div className={`${styles.background} absolute inset-0`}></div>
      <div className="container mx-auto px-6 relative">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/** Card 1: Education */}
          <motion.div
            className={`${styles.card} p-6 relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <GraduationCap className={`${styles.icon} w-12 h-12 mb-4`} />
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600">
                Graduate from Superior University with a strong foundation in computer
                science and software engineering principles.
              </p>
            </div>
            <div className={`${styles.cardBackground} absolute inset-0`}></div>
          </motion.div>

          {/** Card 2: Leadership */}
          <motion.div
            className={`${styles.card} p-6 relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10">
              <Briefcase className={`${styles.icon} w-12 h-12 mb-4`} />
              <h3 className="text-xl font-semibold mb-3">Leadership</h3>
              <p className="text-gray-600">
                CEO and co-founder of TWS Innovation, leading teams and driving technological
                innovation in software development.
              </p>
            </div>
            <div className={`${styles.cardBackground} absolute inset-0`}></div>
          </motion.div>

          {/** Card 3: Experience */}
          <motion.div
            className={`${styles.card} p-6 relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative z-10">
              <Code className={`${styles.icon} w-12 h-12 mb-4`} />
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <p className="text-gray-600">
                Extensive experience in mobile and web development, with a track record of
                delivering high-quality solutions.
              </p>
            </div>
            <div className={`${styles.cardBackground} absolute inset-0`}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
