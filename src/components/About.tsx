import React from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent opacity-20"></div>
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
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4 animate-spin-on-hover" />
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600">
                Graduate from Superior University with a strong foundation in computer
                science and software engineering principles.
              </p>
            </div>
            <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-lg"></div>
          </motion.div>

          {/** Card 2: Leadership */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4 animate-spin-on-hover" />
              <h3 className="text-xl font-semibold mb-3">Leadership</h3>
              <p className="text-gray-600">
                CEO and co-founder of TWS Innovation, leading teams and driving technological
                innovation in software development.
              </p>
            </div>
            <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-lg"></div>
          </motion.div>

          {/** Card 3: Experience */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative z-10">
              <Code className="w-12 h-12 text-blue-600 mb-4 animate-spin-on-hover" />
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <p className="text-gray-600">
                Extensive experience in mobile and web development, with a track record of
                delivering high-quality solutions.
              </p>
            </div>
            <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-lg"></div>
          </motion.div>
        </div>
      </div>

      <style>{`
  .animate-spin-on-hover:hover {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`}</style>

    </section>
  );
};

export default About;
