import { useEffect, useRef, useState } from "react";
import { FaLink, FaGithub, FaChevronRight } from "react-icons/fa";
import projectsData from "../assets/projectsData";

const ProjectsSection = () => {
  // The original project data is no longer needed in state as we're not modifying it based on user interaction
  // const [projects, setProjects] = useState(projectsData);
  const projectRefs = useRef([]);

  // Removed all useEffect hooks related to hover/click/mobile behavior as the content will always be visible by default.

  // The shouldShowHover function is no longer needed as all content is always shown.
  // The handleProjectClick function is also no longer needed.

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500"
    >
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
            PROJECTS
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

        <div className="animate-fade-in-up animation-delay-400">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project._id}
                ref={(el) => (projectRefs.current[index] = el)}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
            

                {/* Card content - Increased height with min-h-[500px] */}
                <div
                  className={`relative bg-white rounded-2xl overflow-hidden transform transition-all duration-500 border border-gray-200 hover:bg-gray-50 hover:shadow-md dark:bg-[#1a1a1a]/80 dark:border-[#333333] dark:hover:bg-[#333333] dark:hover:shadow-gray-950/50 min-h-[500px] scale-[1.02]`}
                >
                  {/* Project Image */}
                  <div className="relative h-60 overflow-hidden">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-700 scale-110`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-purple-600 to-cyan-600 dark:from-purple-500 dark:to-cyan-500">
                        <span className="text-white text-2xl md:text-3xl font-bold text-center">
                          {project.title}
                        </span>
                      </div>
                    )}

                    {/* Overlay - now always visible */}
                   
                  </div>

                  {/* Tech Tags - Moved below image */}
                  <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
                    {project.technologies &&
                      project.technologies.slice(0, 8).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-black/50 text-white rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-400 transition-colors dark:text-white dark:group-hover:text-yellow-400">
                      {project.title}
                    </h3>

                    {/* Description - line-clamp class removed to always show full text */}
                    <p
                      className={`text-gray-600 text-sm mb-4 transition-all duration-500 dark:text-gray-300`}
                    >
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex gap-3">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 text-white hover:from-orange-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-110 shadow-lg dark:from-yellow-500 dark:to-orange-500 dark:hover:from-yellow-600 dark:hover:to-orange-600"
                          >
                            <FaLink className="text-lg" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-110 shadow-lg dark:from-purple-500 dark:to-cyan-500 dark:hover:from-purple-600 dark:hover:to-cyan-600"
                          >
                            <FaGithub className="text-lg" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub link remains the same */}
          <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com/RE21DI27"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl dark:from-purple-500 dark:to-cyan-500 dark:hover:from-purple-600 dark:hover:to-cyan-600"
            >
              <FaGithub className="mr-2 text-xl group-hover:rotate-12 transition-transform" />
              <span>More Projects on GitHub</span>
              <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
