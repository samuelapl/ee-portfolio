"use client"
import { useState, useEffect } from "react" 
import { FaComments, FaTimes, FaPaperPlane, FaEnvelope, FaPhone } from "react-icons/fa"

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBouncing, setIsBouncing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
 
  const API_BASE = "https://portfolio-dashboard-mve4.onrender.com" 

  const toggleModal = () => {
    setIsOpen(!isOpen)
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 1000)
  }

  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setIsBouncing(true)
      setTimeout(() => setIsBouncing(false), 1000)
    }, 30000) // Bounce every 30 seconds instead of 3 to be less distracting

    return () => clearInterval(bounceInterval)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.")
      return
    }

    setIsSubmitting(true)

    try {
 
      const res = await fetch(`${API_BASE}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
        toggleModal()
      } else {
        alert("Failed to send message.")
      }
    } catch (err) {
      alert("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={toggleModal}
        className={`group fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200 dark:from-purple-500 dark:to-cyan-500 dark:hover:from-purple-600 dark:hover:to-cyan-600 dark:border-[#333333] ${
          isBouncing ? "animate-bounce-once" : ""
        }`}
        aria-label="Open contact form"
      >
        <FaComments size={24} className="group-hover:animate-bounce" />
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex justify-center items-center p-4 animate-fade-in">
          {/* Modal Container - Adjusted height for mobile */}
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto overflow-hidden rounded-2xl shadow-xl animate-scale-up">
            {/* Darker Animated Background */}
            <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#1a1a1a]">
              {/* Floating Particles */}
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gray-300/50 dark:bg-gray-700/20 rounded-full opacity-10 animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 10}s`,
                      animationDuration: `${10 + Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>

              {/* Subtle Geometric Patterns */}
              <div className="absolute inset-0 opacity-5 dark:opacity-15">
                <div className="absolute top-10 left-10 w-16 h-16 border border-purple-300 rotate-45 animate-spin-slow dark:border-purple-600"></div>
                <div className="absolute bottom-10 right-10 w-12 h-12 border border-cyan-300 rotate-12 animate-pulse dark:border-cyan-600"></div>
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 dark:from-[#1a1a1a]/50 dark:via-transparent dark:to-[#1a1a1a]/30"></div>
            </div>

            {/* Glowing border effect - more subtle */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 rounded-2xl blur opacity-30 dark:from-purple-500 dark:via-cyan-500 dark:to-purple-500"></div>

            {/* Content Container - Adjusted padding for mobile */}
            <div className="relative z-10 bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 dark:bg-[#1a1a1a]/80 dark:border-[#333333]">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-red-500 transition-all duration-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-red-400"
                onClick={toggleModal}
                aria-label="Close contact form"
              >
                <FaTimes size={16} />
              </button>

              {/* Title - Adjusted margin for mobile */}
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent dark:from-yellow-400 dark:to-orange-400">
                    Contact Me
                  </span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full dark:from-purple-500 dark:to-cyan-500"></div>
              </div>

              {/* Contact Info - Adjusted spacing for mobile */}
              <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base dark:text-gray-300">
                  <FaEnvelope className="text-orange-400 dark:text-yellow-400" />
                  <a href="mailto:eredietgebrehiwot@gmail.com" className="hover:text-orange-400 transition-colors dark:hover:text-yellow-400">
                    eredietgebrehiwot@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base dark:text-gray-300">
                  <FaPhone className="text-orange-400 dark:text-yellow-400" />
                  <a href="tel:+251996647475" className="hover:text-orange-400 transition-colors dark:hover:text-yellow-400">
                    +251 996 647 475
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-4 sm:mb-6">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
              </div>

              {/* Form - Adjusted spacing for mobile */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="flex gap-3 sm:gap-4 flex-col">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full p-3 text-sm sm:text-base rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 group-hover:bg-gray-200 dark:bg-gray-800/70 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-yellow-400 dark:group-hover:bg-gray-800"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full p-3 text-sm sm:text-base rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 group-hover:bg-gray-200 dark:bg-gray-800/70 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-yellow-400 dark:group-hover:bg-gray-800"
                      required
                    />
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="3"
                    className="w-full p-3 text-sm sm:text-base rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 group-hover:bg-gray-200 resize-none dark:bg-gray-800/70 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-yellow-400 dark:group-hover:bg-gray-800"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium text-sm sm:text-base py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none dark:from-purple-500 dark:to-cyan-500 dark:hover:from-purple-600 dark:hover:to-cyan-600"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce-once {
          0%, 100% {
            transform: translateY(0);
          }
          20%, 50%, 80% {
            transform: translateY(-8px);
          }
          40%, 60% {
            transform: translateY(0);
          }
        }
        .animate-bounce-once {
          animation: bounce-once 1s ease-in-out;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-up { animation: scale-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>
    </>
  )
}

export default ChatModal
