import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Brand and Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-wide">M. Waqas</h3>
            <p className="text-gray-400 mt-2">Building Solutions with Passion & Precision</p>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/waqasgallani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-waqas-742a12255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:waqasgallani789@gmail.com"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} M. Waqas. All rights reserved.
          </p>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:waqasgallani789@gmail.com"
                className="hover:text-blue-400"
              >
                waqasgallani789@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a href="tel:+923174096548" className="hover:text-blue-400">
                +923 174 096 548
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
