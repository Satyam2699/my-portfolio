import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
  SiVite,
  SiSass,
} from "react-icons/si";

const About = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 88 },
    { name: "React", icon: <FaReact />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
    { name: "Sass/SCSS", icon: <SiSass />, level: 78 },
    { name: "Git", icon: <FaGitAlt />, level: 85 },
    { name: "Webpack", icon: <SiWebpack />, level: 70 },
    { name: "Vite", icon: <SiVite />, level: 80 },
  ];

  return (
    <section className="section-padding pt-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gradient">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Frontend Developer & UI Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate frontend developer with expertise in creating
                modern, responsive web applications. I love turning complex
                problems into simple, beautiful designs that provide exceptional
                user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in web development started with HTML and CSS, and has
                evolved into mastering modern JavaScript frameworks and build
                tools. I'm constantly learning new technologies to stay current
                with frontend trends.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Education
              </h4>
              <div className="space-y-2">
                <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                  Bachelor of Sceince in Computer Applicaton
                </h5>
                <p className="text-primary-500 font-medium">
                  Govt. Model Sceince College
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  2017 - 2020
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Clean Code
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Writing maintainable, readable code following best practices
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Responsive Design
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Creating websites that work perfectly on all devices
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Performance
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Optimizing applications for speed and user experience
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Collaboration
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Working effectively with designers and backend developers
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Frontend Technologies & Tools
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-2xl text-primary-500">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
