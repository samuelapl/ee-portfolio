"use client";
import {
  FaCode,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDownload,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFlutter,
  SiPostgresql,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiGo,
  SiPython,
  SiFastapi,
  SiNestjs,
} from "react-icons/si";
 import MyLatestCV from "../assets/Erediet_Gebrehiwot_CV.pdf";

const HeroSection = () => {
  const techItems = [
    {
      name: "JavaScript",
      icon: <FaJs className="text-4xl text-yellow-400 dark:text-yellow-500" />,
    },
    {
      name: "TypeScript",
      icon: (
        <SiTypescript className="text-4xl text-blue-600 dark:text-blue-500" />
      ),
    },
    {
      name: "React.js",
      icon: <FaReact className="text-4xl text-cyan-400 dark:text-cyan-500" />,
    },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs className="text-4xl text-gray-900 dark:text-gray-200" />
      ),
    },
    {
      name: "Python",
      icon: <SiPython className="text-4xl text-blue-500 dark:text-yellow-400" />,
    },
    {
      name: "Node.js",
      icon: (
        <FaNodeJs className="text-4xl text-green-500 dark:text-green-400" />
      ),
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-4xl text-black dark:text-gray-200" />,
    },
    {
      name: "NestJS",
      icon: <SiNestjs className="text-4xl text-red-600 dark:text-red-500" />,
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="text-4xl text-teal-500 dark:text-teal-400" />,
    },
    {
      name: "Golang",
      icon: (
        <SiGo className="text-4xl text-cyan-500 dark:text-cyan-400" />
      ),
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="text-4xl text-blue-400 dark:text-blue-300" />,
    },
    {
  name: "GraphQL",
  icon: <SiGraphql className="text-4xl text-pink-500 dark:text-pink-400" />,
}
,
    {
      name: "MongoDB",
      icon: (
        <SiMongodb className="text-4xl text-green-400 dark:text-green-300" />
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <SiPostgresql className="text-4xl text-[#336791] dark:text-[#5a9bd5]" />
      ),
    },
    {
      name: "Firebase",
      icon: (
        <SiFirebase className="text-4xl text-amber-500 dark:text-amber-400" />
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-bounce-slow transition-colors duration-500 dark:from-yellow-500 dark:to-orange-500" />
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-pink-300 rounded-full animate-ping-slow transition-colors duration-500 dark:border-pink-600" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 dark:from-[#1a1a1a]/50 dark:via-transparent dark:to-[#1a1a1a]/30 transition-colors duration-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <div className="flex items-center mb-8 mt-8 animate-fade-in-up animation-delay-100">
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-weight-bold uppercase text-xl md:text-3xl font-medium tracking-wider transition-colors duration-500 dark:from-amber-400 dark:to-orange-400">
              <span className="text-gray-600 font-light italic mr-2 transition-colors duration-500 dark:text-gray-200">
                Hello,
              </span>
              I'm Erediet
            </h4>
            <div className="ml-3 h-1 w-16 bg-gradient-to-r from-orange-400 to-transparent animate-grow-horizontal origin-left transition-colors duration-500 dark:from-amber-400 dark:to-transparent" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight animate-fade-in-up animation-delay-200 transition-colors duration-500 dark:text-white">
            <div className="inline-flex mr-2 md:mr-4 animate-code-bounce">
              <FaCode
                className="text-orange-400 transition-colors duration-500 dark:text-amber-400"
                size={24}
              />
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent whitespace-normal md:whitespace-nowrap transition-all duration-500 dark:from-white dark:via-purple-400 dark:to-cyan-400">
              Full-Stack Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400 transition-colors duration-500 dark:text-gray-300">
            Fast, scalable web apps and cross-platform mobile apps
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up animation-delay-600 w-full px-4 sm:px-0">
            <button
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl dark:from-purple-500 dark:to-cyan-500 dark:hover:from-purple-600 dark:hover:to-cyan-600 dark:shadow-gray-950/50 flex items-center justify-center text-sm sm:text-base"
            >
              <FaStar className="mr-2 group-hover:animate-spin" size={16} />
              Showcase
              <FaArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </button>

            <a
              href={MyLatestCV}
              download="Erediet_Gebrehiwot_CV.pdf"
              className="group border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md backdrop-blur-sm flex items-center justify-center cursor-pointer dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-gray-600 dark:shadow-gray-950/50 text-sm sm:text-base"
            >
              <FaDownload
                className="mr-2 group-hover:animate-bounce"
                size={16}
              />
              Resume
            </a>
          </div>
          {/* Tech Stack Carousel */}
          <div className="w-full max-w-6xl mx-auto overflow-hidden animate-fade-in-up animation-delay-1000">
            <h3 className="text-gray-700 text-base md:text-lg font-semibold mb-4 md:mb-6 flex items-center justify-center transition-colors duration-500 dark:text-gray-100">
              <FaCode className="mr-2" size={16} />
              Tech Stack
            </h3>
            <div className="relative">
              <div className="flex animate-scroll space-x-4 md:space-x-8 hover:pause-animation">
                {[...techItems, ...techItems].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[120px] flex-shrink-0 p-3 md:p-6 bg-white rounded-lg md:rounded-xl border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:-translate-y-1 md:hover:-translate-y-2 group dark:bg-[#1a1a1a]/80 dark:border-[#333333] dark:hover:bg-[#333333] dark:hover:shadow-gray-950/50"
                  >
                    <div className="group-hover:animate-bounce">
                      {tech.icon}
                    </div>
                    <p className="text-gray-700 text-xs md:text-sm font-medium mt-2 md:mt-3 transition-colors duration-500 dark:text-gray-200">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center transition-colors duration-500 dark:border-gray-600">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll-indicator transition-colors duration-500 dark:bg-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        @keyframes code-bounce {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
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

        @keyframes scroll-indicator {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(12px);
          }
        }

        @keyframes grow-horizontal {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .hover\\:pause-animation:hover .animate-scroll {
          animation-play-state: paused;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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

        .animate-code-bounce {
          animation: code-bounce 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-grow-horizontal {
          animation: grow-horizontal 1s ease-out forwards;
          transform-origin: left;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
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

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
