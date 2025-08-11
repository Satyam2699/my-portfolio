import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TypewriterEffect from "./common/TypewriterEffect.jsx";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Satyam vishwakarma</span>
            </h1>
            <div className="text-2xl lg:text-3xl font-semibold text-primary-500 min-h-[3rem]">
              <TypewriterEffect
                texts={[
                  "Frontend Developer",
                  "React Specialist",
                  "UI Developer",
                  "JavaScript Expert",
                ]}
              />
            </div>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              I create beautiful, responsive, and user-friendly web applications
              using modern frontend technologies. Passionate about clean code
              and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/Satyam2699"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="www.linkedin.com/in/satyam-vishwakarma-6023781a4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:stymvish88@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-2 animate-float">
                <img
                  src="https://images.nightcafe.studio/ik-seo/jobs/w2j3wiTaLDAiuLQt0d1D/w2j3wiTaLDAiuLQt0d1D--1--6kfr8/batman-coding-in-python.jpg?tr=w-1600,c-at_max"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full bg-white"
                  onError={(e) => {
                    e.target.src = "null";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
