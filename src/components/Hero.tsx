import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm M. Waqas
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Software Engineer & CEO at{' '}
              <a
                href="https://twsinnovation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                TWS Innovation
              </a>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Passionate about leveraging technology to craft innovative, efficient, and scalable solutions. 
              With years of experience in software development and a knack for leadership, I turn ideas into reality.
            </p>
            <ul className="text-gray-600 mb-8 text-lg list-disc pl-5 space-y-2">
              <li>Expert in Web and Mobile App Development</li>
              <li>Proven Leadership in Building Scalable Teams</li>
              <li>Innovative Problem-Solver with a Results-Driven Mindset</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Let's Connect
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <img
              src="/images/gallani.jpeg"
              alt="M. Waqas"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl hover:shadow-2xl transition-shadow duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
