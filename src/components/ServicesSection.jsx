"use client"
import { useState } from "react"
import {
  FaChevronRight,
  FaTimes,
  FaCheck,
  FaServer,
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
} from "react-icons/fa"

const ServicesSection = () => {
  const [activeModal, setActiveModal] = useState(null)
  
const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: (
      <FaLaptopCode className="text-5xl text-cyan-400 group-hover:text-orange-400 transition-colors duration-300 dark:text-cyan-500 dark:group-hover:text-yellow-400" />
    ),
    color: "from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500",
    points: [
      "Make websites using JavaScript, TypeScript, React.js, and Next.js",
      "Design clean, easy-to-use interfaces with modern CSS tooling",
      "Build web pages that work well on phones and computers",
      "Use modern tools to create fast and interactive websites",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <FaServer className="text-5xl text-green-400 group-hover:text-orange-400 transition-colors duration-300 dark:text-green-500 dark:group-hover:text-yellow-400" />,
    color: "from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500",
    points: [
      "Build backends with FastAPI, Node.js, Express.js, NestJS, and Go (Gin)",
      "Design RESTful and GraphQL APIs with real-time WebSocket features",
      "Work with PostgreSQL, MongoDB, and Firestore to store data",
      "Secure apps with JWT auth and role-based access control",
      "Ship with Docker, GitHub Actions, and AWS (EC2, S3)",
    ],
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: (
      <FaMobileAlt className="text-5xl text-purple-400 group-hover:text-orange-400 transition-colors duration-300 dark:text-purple-500 dark:group-hover:text-yellow-400" />
    ),
    color: "from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500",
    points: [
      "Make mobile apps for Android and iOS using Flutter",
      "Manage app state with Bloc for scalable architecture",
      "Connect apps to Firebase or custom FastAPI backends",
      "Build apps that are fast and easy to use",
    ],
  },
  {
    id: 4,
    title: "UI/UX & Graphic Design",
    icon: (
      <FaPaintBrush className="text-5xl text-pink-400 group-hover:text-orange-400 transition-colors duration-300 dark:text-pink-500 dark:group-hover:text-yellow-400" />
    ),
    color: "from-pink-600 to-orange-500 dark:from-pink-500 dark:to-orange-400",
    points: [
      "Design user interfaces and prototypes in Figma",
      "Create logos and branding identities",
      "Produce graphics with Adobe Photoshop and Illustrator",
    ],
  },
];


  const toggleModal = (id) => {
    setActiveModal(activeModal === id ? null : id)
  }

  return (
    <section id="services" className="relative py-12 sm:py-20 overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500">
      {/* Animated Background - Consistent with hero section */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a] transition-colors duration-500">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300/50 dark:bg-gray-700/20 rounded-full opacity-10 animate-float transition-colors duration-500"
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
          <div className="absolute top-20 left-20 w-24 h-24 border border-purple-300 rotate-45 animate-spin-slow dark:border-purple-600"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-cyan-300 rotate-12 animate-pulse dark:border-cyan-600"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 dark:from-[#1a1a1a]/50 dark:via-transparent dark:to-[#1a1a1a]/30 transition-colors duration-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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
            SERVICES
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


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 animate-fade-in-up animation-delay-200">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Glowing border effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000`}
              ></div>

              {/* Card content */}
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 transform group-hover:scale-[1.02] transition-all duration-300 h-full border border-gray-200 hover:bg-gray-50 hover:shadow-md dark:bg-[#1a1a1a]/80 dark:border-[#333333] dark:hover:bg-[#333333] dark:hover:shadow-gray-950/50">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon with circular background */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-400 transition-colors dark:text-white dark:group-hover:text-yellow-400">
                    {service.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mb-3 sm:mb-4 group-hover:w-16 sm:group-hover:w-24 transition-all duration-300 dark:from-purple-500 dark:to-cyan-500"></div>

                  {/* View More Button */}
                  <button
                    onClick={() => toggleModal(service.id)}
                    className="flex items-center px-4 sm:px-6 py-2 mt-auto bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-all duration-300 group-hover:text-orange-400 border border-gray-200 text-sm sm:text-base dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-yellow-400 dark:border-gray-700"
                  >
                    <span>View Details</span>
                    <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto overflow-hidden rounded-2xl shadow-xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glowing border effect - more subtle */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 rounded-2xl blur opacity-30 dark:from-purple-500 dark:via-cyan-500 dark:to-purple-500"></div>

            {/* Modal content */}
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 dark:bg-[#1a1a1a]/90 dark:border-[#333333]">
              {/* Close button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-red-500 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-red-400"
              >
                <FaTimes />
              </button>

              {/* Service details */}
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  {services.find((s) => s.id === activeModal)?.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-400 text-center dark:text-yellow-400">
                  {services.find((s) => s.id === activeModal)?.title}
                </h3>
                <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mt-3 sm:mt-4 dark:from-purple-500 dark:to-cyan-500"></div>
              </div>

              {/* Service points */}
              <ul className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                {services
                  .find((s) => s.id === activeModal)
                  ?.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="mr-3 sm:mr-4 mt-1 flex-shrink-0">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center dark:from-yellow-400 dark:to-orange-400">
                          <FaCheck className="text-white text-xs" />
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base dark:text-gray-300">{point}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}

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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  )
}

export default ServicesSection
