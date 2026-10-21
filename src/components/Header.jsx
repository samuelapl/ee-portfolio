"use client"
import { useState, useEffect } from "react"
import { Github, Home, User, FileText, LayoutDashboard, Server, Menu, X,Moon, Sun } from "lucide-react"
import { useTheme } from "../context/themeContext"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isBouncing, setIsBouncing] = useState(false)
 const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
  }

  const menuItems = [
    { name: "Home", icon: <Home className="text-lg" />, href: "#", id: "home" },
    { name: "About", icon: <User className="text-lg" />, href: "#about", id: "about" },
    { name: "Resume", icon: <FileText className="text-lg" />, href: "#resume", id: "resume" },
    { name: "Projects", icon: <LayoutDashboard className="text-lg" />, href: "#projects", id: "projects" },
    { name: "Services", icon: <Server className="text-lg" />, href: "#services", id: "services" },
  ]

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setIsBouncing(true)
      setTimeout(() => setIsBouncing(false), 500)
    }, 3000)

    return () => clearInterval(bounceInterval)
  }, [])

  return (
    <>
      {/* Floating Menu Button */}

      <div className="fixed top-6 right-6 z-[1000] flex gap-2">
        {/* Theme Toggle Button (left) */}
        <button
          onClick={toggleDarkMode}
          className="w-12 h-12 bg-gray-900/90 dark:bg-gray-100/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
          style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="text-white dark:text-gray-900" size={24} />
          ) : (
            <Moon className="text-white dark:text-gray-900" size={24} />
          )}
        </button>

        {/* Hamburger Menu Button (right) */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className={`w-12 h-12 bg-gray-900/90 dark:bg-gray-100/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700 hover:bg-gray-800 transition-all duration-300 ${
              isBouncing ? "animate-bounce-once" : ""
            }`}
            style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
          >
            {isMenuOpen ? (
              <X className="text-white dark:text-gray-900" size={24} />
            ) : (
              <Menu className="text-white dark:text-gray-900" size={24} />
            )}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-14 mt-2 w-56 origin-top-right bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl animate-scale-in">
              <div className="px-1 py-1">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex w-full items-center px-4 py-3 text-sm rounded-md transition-colors ${
                      activeSection === item.id
                        ? "bg-gray-800 text-yellow-400"
                        : "text-gray-200 hover:bg-gray-800 hover:text-yellow-400"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://github.com/RE21DI27"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex w-full items-center px-4 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-purple-400 rounded-md transition-colors mt-1 border-t border-gray-700"
                >
                  <Github className="mr-3 text-lg" />
                  GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }

        @keyframes bounce-once {
          0%,
          100% {
            transform: translateY(0);
          }
          20%,
          50%,
          80% {
            transform: translateY(-8px);
          }
          40%,
          60% {
            transform: translateY(0);
          }
        }
        .animate-bounce-once {
          animation: bounce-once 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default Header