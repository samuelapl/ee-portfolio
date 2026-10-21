// src/data/projectsData.js
const projects = [
  {
    _id: "1",
    title: "EstateLink",
    description:
      "A web-based real estate listing and rental management platform built during my internship at Ethioden IT Consultancy. It covers owner verification, listing approval, property search, and real-time messaging over WebSockets. Secure REST APIs use JWT/bcrypt authentication with role-based access control, and Chapa payment integration handles owner subscriptions. Tested with pytest, Jest, and Postman — 150/150 test cases passed and 92% user satisfaction in UAT.",
    technologies: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "WebSockets", "JWT", "Chapa"],
    github: "https://github.com/RE21DI27",
  },
  {
    _id: "2",
    title: "BDU FindBack - Lost & Found App",
    description:
      "A full-stack mobile application developed for Bahir Dar University to help students and staff report, search, and recover lost and found items. The app features a clean Flutter UI, secure user authentication, real-time notifications, and item management. FastAPI powers the backend REST APIs, while PostgreSQL manages users, item records, reports, and recovery workflows.",
    technologies: ["Flutter", "FastAPI", "PostgreSQL"],
    github: "https://github.com/RE21DI27",
  },
  {
    _id: "3",
    title: "StudentSpend",
    description:
      "A mobile application built with Flutter to help university students track, manage, and analyze their daily expenses. It features secure authentication, expense categorization, budget management, spending analytics, and real-time cloud synchronization. Firebase provides authentication and Cloud Firestore for expense data — helping students build better financial habits.",
    technologies: ["Flutter", "Firebase", "Firestore"],
    github: "https://github.com/RE21DI27",
  },
  {
    _id: "4",
    title: "KidCode",
    description:
      "An interactive online coding quiz platform designed for children to learn and test their knowledge of HTML, Scratch, and Python. The platform provides fun coding quizzes, automated scoring and results, progress tracking, and certificate generation, with React and Vite powering the frontend and FastAPI handling backend APIs and application logic.",
    technologies: ["React", "Vite", "FastAPI", "PostgreSQL"],
    github: "https://github.com/RE21DI27",
  },
  {
    _id: "5",
    title: "Agri Smart Advisor System",
    description:
      "A web-based system built remotely with the Kukunet PLC team that provides farmers with region-specific crop recommendations, pest control guidance, and seasonal agricultural insights. Responsive frontend interfaces were built with React.js and Vite, backed by FastAPI APIs supporting the core application workflows.",
    technologies: ["React", "Vite", "FastAPI"],
    github: "https://github.com/RE21DI27",
  },
];

export default projects;
