"use client"
import { FaGithub, FaEnvelope, FaLinkedinIn, FaArrowUp } from "react-icons/fa"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500">
      {/* Animated Background - Consistent with other sections */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
        <div className="absolute inset-0 opacity-5 dark:opacity-15">
          <div className="absolute top-20 left-20 w-32 h-32 border border-purple-300 rotate-45 animate-spin-slow dark:border-purple-600"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-300 rotate-12 animate-pulse dark:border-cyan-600"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-purple-300 to-cyan-300 rounded-full animate-bounce-slow dark:from-purple-500 dark:to-cyan-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-pink-300 rounded-full animate-ping-slow dark:border-pink-600"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 dark:from-[#1a1a1a]/50 dark:via-transparent dark:to-[#1a1a1a]/30 transition-colors duration-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-110 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <FaArrowUp className="text-gray-700 text-xl group-hover:animate-bounce dark:text-gray-200" />
          </button>

          {/* Main Footer Content */}
          <div className="w-full max-w-4xl mx-auto">
            {/* Content */}
            <div className="relative bg-white rounded-2xl p-8 text-center animate-fade-in-up border border-gray-200 dark:bg-[#1a1a1a]/80 dark:border-[#333333]">
              <div className="flex flex-col items-center gap-6">
                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/RE21DI27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <FaGithub className="text-gray-700 text-xl group-hover:text-purple-600 transition-colors dark:text-gray-200 dark:group-hover:text-purple-400" />
                  </a>
                  <a
                    href="mailto:eredietgebrehiwot@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <FaEnvelope className="text-gray-700 text-xl group-hover:text-orange-400 transition-colors dark:text-gray-200 dark:group-hover:text-yellow-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/erediet-gebrehiwot-b9408633a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <FaLinkedinIn className="text-gray-700 text-xl group-hover:text-blue-600 transition-colors dark:text-gray-200 dark:group-hover:text-blue-400" />
                  </a>
                </div>

                {/* Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full dark:from-purple-500 dark:to-cyan-500"></div>

                {/* Footer Text */}
                <p className="max-w-lg text-center text-gray-600 leading-relaxed dark:text-gray-300">
                  I'm happy to work on new things. Clients and anyone who wants to work cooperatively with me can
                  contact me with the above social media links.
                </p>

               
              </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-8 animate-fade-in-up animation-delay-200">
              {/* Copyright */}
              <p className="text-gray-500 text-sm dark:text-gray-400">© {currentYear} All Rights Reserved</p>
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

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </footer>
  )
}

export default Footer
