"use client";
import { FaCode, FaGraduationCap } from "react-icons/fa";

const AboutSection = () => {
  const stats = [
    {
      number: "5",
      label: "Projects",
      icon: <FaCode className="text-xl" />,
      color:
        "from-purple-600 to-cyan-600 dark:from-purple-500 dark:to-cyan-500",
    },
    {
      number: "1",
      label: "Years Exp",
      icon: <FaGraduationCap className="text-xl" />,
      color: "from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
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
            WHO AM I
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

        {/* Content Section - Full Width */}
        <div className="max-w-4xl mx-auto text-gray-900 animate-fade-in-up animation-delay-200 dark:text-white">
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-purple-400">
                Full-Stack Developer.
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                Software Engineer.
              </span>
            </h3>
          </div>

          <div className="text-sm md:text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              Full-Stack Developer and Software Engineering student at Bahir Dar University with experience building scalable web and mobile applications. Proficient in JavaScript/TypeScript ecosystems (React, Next.js, Node.js, Nest.js), Python (FastAPI) for backend development, and mobile development using Flutter.
            </p>
            <p className="mb-4">
              Proven track record of adapting quickly to diverse environments, spanning on-site internships and collaborative remote teams.
            </p>
            <p className="mb-6">
              Focused on writing clean, maintainable code that solves complex technical challenges and delivers business value.
            </p>

            {/* Compact Achievements Section */}
            <div className="flex gap-4 mb-6 max-w-md mx-auto">
              {stats.map((stat, index) => (
                <div key={stat.label} className="group relative flex-1">
                  {/* Card content */}
                  <div className="relative bg-white rounded-xl p-4 text-center transform transition-all duration-300 group-hover:-translate-y-1 border border-gray-200 hover:bg-gray-50 hover:shadow-md dark:bg-[#1a1a1a]/80 dark:border-[#333333] dark:hover:bg-[#333333] dark:hover:shadow-gray-950/50">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${stat.color} rounded-full mb-2 mx-auto text-white`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1 dark:text-white">
                      {stat.number}
                      <span className="text-orange-400 dark:text-yellow-400">
                        +
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs font-medium dark:text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

        @keyframes tilt {
          0%,
          50%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
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

export default AboutSection;