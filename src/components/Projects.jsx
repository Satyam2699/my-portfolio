import React from "react";
import ecommerceImg from "../assets/images/ecommerce.JPG";
import refokusimg from "../assets/images/refokus.jpg";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

const Projects = () => {
  const frontendProjects = [
    {
      title: "E-Commerce Frontend",
      description:
        "A modern, responsive e-commerce website built with React and Tailwind CSS. Features product catalog, shopping cart, and checkout flow with beautiful animations.",
      image: ecommerceImg,
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      features: [
        "Responsive design for all devices",
        "Smooth animations and transitions",
        "Modern UI/UX design",
      ],
      github: "https://github.com/Satyam2699/e-commerce",
      demo: "https://satyam2699.github.io/e-commerce/",
    },
    {
      title: "refokus clone",
      description:
        "A pixel-perfect clone of the Refokus website built with React and Tailwind CSS, replicating its sleek modern design, smooth animations, and interactive elements. The project showcases advanced frontend techniques, responsive layouts, and visually engaging UI/UX.",
      image: refokusimg,
      technologies: ["React", "javascript", "CSS3", "tailwind", "gsap"],
      features: [

        "Smooth scroll-based animations",

        "Modern, minimal UI components",
        "Smooth transitions",
      ],
      github: "https://github.com/Satyam2699/refokus",
      demo: "https://satyam2699.github.io/refokus/",
    },
  ];

  const techIcons = {
    React: <FaReact className="text-blue-500" />,
    JavaScript: <FaJs className="text-yellow-500" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    HTML5: <FaHtml5 className="text-orange-500" />,
    CSS3: <FaCss3Alt className="text-blue-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
    Vite: <SiVite className="text-purple-500" />,
  };

  return (
    <section className="section-padding pt-24 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-gradient">
          My Frontend Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          Here are some of my frontend projects that showcase my skills in
          creating beautiful, responsive, and user-friendly web applications.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {frontendProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {techIcons[tech] || (
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      )}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn btn-outline text-center text-sm"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn btn-primary text-center text-sm"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
