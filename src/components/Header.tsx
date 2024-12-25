import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md transition-shadow duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors">
          <a href="#home" aria-label="Go to home section">M. Waqas</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              aria-label={`Go to ${item} section`}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/waqasgallani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-waqas-742a12255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 px-6 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label={`Go to ${item} section`}
            >
              {item}
            </a>
          ))}
          <div className="flex justify-center items-center space-x-4 py-3">
            <a
              href="https://github.com/waqasgallani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-waqas-742a12255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
