export const personalData = {
  name: "RIZAL M. NUR.",
  role: "FULLSTACK WEB DEVELOPER",
  bio: "Fullstack Developer with experience in building and maintaining web-based applications, including systems that integrate AI or machine learning features. Focused on writing maintainable code and developing functional, user-friendly interfaces.",
  profileImage: "./images/profil.png",
  cvFile: "./file/Fullstack - Rizal Muhaimin Nur.pdf",
  contact: {
    email: "mn.rizal27@gmail.com",
    github: "https://github.com/Bxtohur",
    linkedin: "https://linkedin.com/in/rizal-muhaimin-n/",
  },
};

export const skills = [
  "Laravel & Vue.js",
  "React.js",
  "Python",
  "AI Integration",
  "Tailwind CSS",
  "RESTful API Development",
  "MySQL",
];

export const projects = [
  {
    id: 1,
    title: "Verified Certificate",
    category: "Fullstack System",
    description:
      "A web-based certificate verification system designed to validate digital credentials through unique certificate IDs and centralized data storage.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    images: ["./images/cert1.png", "./images/cert2.png", "./images/cert3.png"],
  },
  {
    id: 2,
    title: "Multimodal AI",
    category: "Research & Development",
    description:
      "A deep learning-based system combining face recognition, pose classification, and emotion analysis, supported by a Flask backend and React-based data visualization.",
    tech: ["React", "Flask", "Deep Learning"],
    images: [
      "./images/LandingPage.png",
      "./images/Analisis.png",
      "./images/Transkripsi.png",
    ],
  },
  {
    id: 3,
    title: "ABSENKU System",
    category: "Desktop Application",
    description:
      "A biometric attendance application utilizing YOLO-Face for detection and ArcFace for facial recognition to support automated attendance tracking.",
    tech: ["Python", "YOLO-Face", "Tkinter"],
    images: [
      "./images/absenku.jpg",
      "./images/absenku1.jpg",
      "./images/absenku3.jpg",
    ],
  },
  {
    id: 4,
    title: "Travel Package Booking",
    category: "Fullstack System",
    description:
      "A web-based booking system that allows travel agencies to manage reservations, customer data, and transactions through an administrative dashboard.",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    images: ["./images/ecom1.jpg", "./images/ecom2.png", "./images/ecom3.png"],
  },
  {
    id: 5,
    title: "Roblox Game: 'Kota Kuda'",
    category: "Game Project",
    description:
      "An open-world horse racing game where players can adopt horses, participate in races, and interact with other players in a shared environment.",
    tech: ["Roblox Lua", "Rojo", "Roblox Studio"],
    images: ["./images/kk1.png", "./images/kk2.png", "./images/kk3.png"],
  },
  {
    id: 6,
    title: "Metcha",
    category: "Fullstack System",
    description:
      "A web-based platform that includes user matching features and real-time chat functionality, supported by WebSocket-based communication.",
    tech: ["Laravel", "React.js", "WebSockets"],
    images: [
      "./images/metcha1.png",
      "./images/metcha2.png",
      "./images/metcha3.png",
    ],
  },
];

export const certifications = [
  {
    id: 101,
    title: "IoT Engineer",
    category: "Certification",
    description:
      "Technical certification covering sensor integration, microcontroller programming, and network communication fundamentals.",
    tech: ["Indobot Academy", "Jun 2024"],
    image: "./images/cert-iot.png",
    pdf: "./certificates/cert-iot.pdf",
    link: "#",
  },
  {
    id: 102,
    title: "Android Developer",
    category: "Certification",
    description:
      "Bootcamp-based certification focused on mobile application architecture, UI implementation, and API integration using Kotlin.",
    tech: ["Binar Academy", "Jan 2024"],
    image: "./images/cert-androiddev.png",
    pdf: "./certificates/cert-androiddev.pdf",
    link: "#",
  },
  {
    id: 103,
    title: "IT Specialist: Databases",
    category: "Certification",
    description:
      "Certification validating knowledge in database design, SQL querying, and relational database management systems.",
    tech: ["IT Specialist", "Aug 2024"],
    image: "./images/cert-databases.png",
    pdf: "./certificates/cert-databases.pdf",
    link: "#",
  },
  {
    id: 104,
    title: "IoT Business Practitioner",
    category: "Certification",
    description:
      "Certification focused on the business and implementation aspects of IoT projects.",
    tech: ["CertNexus", "Nov 2024"],
    image: "./images/cert-iotBIZ.png",
    pdf: "./certificates/cert-iotBIZ.pdf",
    link: "#",
  },
  {
    id: 105,
    title: "Junior Web Developer",
    category: "BNSP License",
    description:
      "National professional certification demonstrating competency in web development fundamentals.",
    tech: ["VSGA Kominfo", "Aug 2023"],
    image: "./images/cert-jwd.png",
    pdf: "./certificates/cert-jwd.pdf",
    link: "#",
  },
];
