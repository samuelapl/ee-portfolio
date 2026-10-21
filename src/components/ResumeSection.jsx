"use client";
import { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCog,
} from "react-icons/fa";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiGraphql,
  SiFlutter,
  SiCloudinary,
  SiFirebase,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiNestjs,
  SiGo,
  SiDocker,
  SiGithubactions,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

import bduLogo from "../assets/bduLogo.jpg";
const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [expandedItems, setExpandedItems] = useState([]);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const toggleItem = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const toggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const educationData = [
    {
      id: 1,
      date: "Sep 2023 - Present",
      title: "BSc in Software Engineering",
      institution: "Bahir Dar University, Ethiopia",
      logo: bduLogo,
      description:
        "Currently pursuing a degree in Software Engineering at Bahir Dar University.",
      download: "",
    },
  ];

  const experienceData = [
    {
      id: 1,
      duration: "Mar 2026 - Jul 2026",
      company: "Ethioden IT Consultancy PLC",
      title: "Full Stack Developer Intern",
      description:
        "Developed EstateLink, a real estate listing and rental management platform using React, FastAPI, and PostgreSQL, covering owner verification, listing approval, property search, and messaging workflows. Built secure REST APIs and real-time WebSocket messaging with JWT/bcrypt authentication, role-based access control, and Chapa payment integration. Designed the database with SQLAlchemy and tested with pytest, Jest, and Postman — 150/150 test cases passed, 23/23 functional requirements met, and 92% user satisfaction from 17 UAT users.",
    },
    {
      id: 2,
      duration: "Jun 2025 - Sep 2025",
      company: "Kukunet PLC",
      title: "Remote Software Developer",
      description:
        "Built a web-based Agri Smart Advisor System providing farmers with region-specific crop recommendations, pest control guidance, and seasonal agricultural insights. Developed responsive frontend interfaces using React.js and Vite, and implemented backend APIs using FastAPI. Collaborated remotely with the development team using Git for version control and code reviews.",
    },
  ];

  // Core skills (always visible)
const coreSkills = [
    { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400 dark:text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-600 dark:text-blue-500" /> },
    { name: "Python", icon: <SiPython className="text-4xl text-blue-500 dark:text-yellow-400" /> },
    { name: "Go", icon: <SiGo className="text-4xl text-cyan-500 dark:text-cyan-400" /> },
    { name: "React.js", icon: <FaReact className="text-4xl text-cyan-400 dark:text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-gray-900 dark:text-gray-200" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500 dark:text-green-400" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-4xl text-black dark:text-gray-200" />,
    },
    { name: "NestJS", icon: <SiNestjs className="text-4xl text-red-600 dark:text-red-500" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-4xl text-teal-500 dark:text-teal-400" /> },
    { name: "Flutter", icon: <SiFlutter className="text-4xl text-blue-400 dark:text-blue-300" /> },
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-4xl text-pink-500 dark:text-pink-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-4xl text-[#336791] dark:text-[#5a9bd5]" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-green-400 dark:text-green-300" />,
    },
    {
      name: "Firestore",
      icon: <SiFirebase className="text-4xl text-amber-500 dark:text-amber-400" />,
    },
    { name: "Cloudinary", icon: <SiCloudinary className="text-4xl text-blue-500 dark:text-blue-400" /> },
    { name: "Docker", icon: <SiDocker className="text-4xl text-sky-500 dark:text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-500 dark:text-orange-400" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="text-4xl text-blue-600 dark:text-blue-400" /> },
    { name: "AWS", icon: <FaAws className="text-4xl text-orange-400 dark:text-orange-300" /> },
    { name: "Figma", icon: <SiFigma className="text-4xl text-purple-500 dark:text-purple-400" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-4xl text-blue-700 dark:text-blue-400" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-4xl text-orange-600 dark:text-orange-400" /> },
];

// Placeholder for additional skills if needed, otherwise remove
const additionalSkills = [];

  const displayedSkills = showAllSkills
    ? [...coreSkills, ...additionalSkills]
    : coreSkills;

  const tabs = [
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "skills", label: "Skills", icon: <FaCog /> },
  ];

  return (
    <section id="resume" className="relative py-20 overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500">
      {/* Animated Background - Consistent with hero section */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300/50 dark:bg-gray-700/20 rounded-full opacity-20 animate-float transition-colors duration-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5 dark:opacity-15 transition-opacity duration-500">
          <div className="absolute top-20 left-20 w-32 h-32 border border-purple-300 rotate-45 animate-spin-slow transition-colors duration-500 dark:border-purple-600" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-300 rotate-12 animate-pulse transition-colors duration-500 dark:border-cyan-600" />
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-bounce-slow transition-colors duration-500 dark:from-yellow-500 dark:to-orange-500" />
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-pink-300 rounded-full animate-ping-slow transition-colors duration-500 dark:border-pink-600" />

          {/* Code symbols scattered */}
          <div className="absolute top-1/4 left-1/3 text-yellow-300/20 text-2xl font-mono animate-pulse dark:text-yellow-400/20">
            {"{ }"}
          </div>
          <div className="absolute bottom-1/4 right-1/3 text-cyan-300/20 text-2xl font-mono animate-pulse dark:text-cyan-400/20">
            {"< />"}
          </div>
          <div className="absolute top-3/4 left-1/5 text-purple-300/20 text-2xl font-mono animate-pulse dark:text-purple-400/20">
            {"[ ]"}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 dark:from-[#1a1a1a]/50 dark:via-transparent dark:to-[#1a1a1a]/30 transition-colors duration-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
      <div className="flex items-center justify-center mb-16 animate-fade-in-up gap-3">
          {/* Left bar - reversed direction */}
          <div
            className="h-1 w-16
      bg-gradient-to-l from-orange-400 to-transparent
      animate-grow-horizontal origin-right
      transition-colors duration-500
      dark:from-amber-400 dark:to-transparent"
          />

          {/* Heading text */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent dark:from-yellow-400 dark:to-orange-400">
            RESUME
          </h2>

          {/* Right bar - same as before */}
          <div
            className="h-1 w-16
      bg-gradient-to-r from-orange-400 to-transparent
      animate-grow-horizontal origin-left
      transition-colors duration-500
      dark:from-amber-400 dark:to-transparent"
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-fade-in-up animation-delay-200">
          <div className="inline-flex bg-white rounded-2xl p-2 border border-gray-200 dark:bg-[#1a1a1a]/80 dark:border-[#333333]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-lg transform scale-105 dark:from-yellow-400 dark:to-orange-400 dark:text-black"
                    : "text-gray-700 hover:text-orange-400 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-yellow-400 dark:hover:bg-[#333333]"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in-up animation-delay-400">
           {/* Experience Tab */}
           {activeTab === "experience" && (
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 dark:from-green-500 dark:via-blue-500 dark:to-green-500"></div>

                  {/* Card content */}
                  <div className="relative bg-white rounded-2xl p-6 transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-200 hover:bg-gray-50 hover:shadow-md dark:bg-[#1a1a1a]/80 dark:border-[#333333] dark:hover:bg-[#333333] dark:hover:shadow-gray-950/50">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Logo */}
                      <div className="flex justify-center md:justify-start">
                        <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform duration-300 dark:bg-gray-800 dark:border-gray-700">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={`${item.company} logo`}
                              className="w-12 h-12 object-contain"
                            />
                          ) : (
                            <FaBriefcase className="text-3xl text-green-600 dark:text-green-400" />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <span className="text-green-600 text-sm font-semibold bg-green-600/20 px-3 py-1 rounded-full inline-block mb-2 dark:text-green-400 dark:bg-green-400/20">
                          {item.duration}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors dark:text-white dark:group-hover:text-green-400">
                          {item.title}
                        </h3>
                        <p className="text-cyan-600 font-medium mb-3 dark:text-cyan-300">
                          {item.company}
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 dark:from-purple-500 dark:via-cyan-500 dark:to-purple-500"></div>

                  {/* Card content */}
                  <div className="relative bg-white rounded-2xl p-6 transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-200 hover:bg-gray-50 hover:shadow-md dark:bg-[#1a1a1a]/80 dark:border-[#333333] dark:hover:bg-[#333333] dark:hover:shadow-gray-950/50">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Logo */}
                      <div className="flex justify-center md:justify-start">
                        <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform duration-300 dark:bg-gray-800 dark:border-gray-700">
                          <img
                            src={item.logo || "/placeholder.svg"}
                            alt={`${item.institution} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <span className="text-orange-400 text-sm font-semibold bg-orange-400/20 px-3 py-1 rounded-full inline-block mb-2 md:mb-0 dark:text-yellow-400 dark:bg-yellow-400/20">
                            {item.date}
                          </span>
                          {/* {item.download && (
                            <a
                              href={item.download}
                              download
                              className="text-cyan-400 hover:text-cyan-300 transition-colors p-2 bg-cyan-400/20 rounded-full hover:bg-cyan-400/30 inline-flex items-center justify-center w-10 h-10"
                              aria-label={`Download certificate for ${item.title}`}
                            >
                              <FaDownload />
                            </a>
                          )} */}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-400 transition-colors dark:text-white dark:group-hover:text-yellow-400">
                          {item.title}
                        </h3>
                        <p className="text-purple-600 font-medium mb-3 dark:text-purple-300">
                          {item.institution}
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}


          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-8">
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {displayedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 dark:from-purple-500 dark:to-cyan-500"></div>

                    {/* Card content */}
                    <div className="relative bg-white rounded-2xl p-6 text-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:bg-gray-50 hover:shadow-md dark:bg-[#1a1a1a]/80 dark:border-[#333333] dark:hover:bg-[#333333] dark:hover:shadow-gray-950/50">
                      <div className="group-hover:animate-bounce mb-3">
                        {skill.icon}
                      </div>
                      <span className="text-gray-700 font-medium text-sm dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

          

            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default ResumeSection;