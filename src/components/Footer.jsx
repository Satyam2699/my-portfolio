import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Frontend Dev
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Passionate frontend developer creating beautiful, responsive web
              applications with modern technologies and exceptional user
              experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-gray-300 hover:text-primary-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-gray-300 hover:text-primary-500 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="/projects"
                className="block text-gray-300 hover:text-primary-500 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="block text-gray-300 hover:text-primary-500 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">
              Frontend Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-primary-500 hover:text-white transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 flex items-center gap-2">
            © {currentYear} Satyam vishwakarma Made with{" "}
            <FaHeart className="text-red-500 animate-pulse" /> using React &
            Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm">All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
