export const personalData = {
  name: "RIZAL M. NUR.",
  role: "FULLSTACK WEB DEVELOPER & ARTIFICIAL INTELLIGENCE SPECIALIST",
  bio: "Seorang Fullstack Developer gila kerja yang suka bikin aplikasi web kencang, responsif, dan terintegrasi AI. Menghidupkan ide-ide rumit menjadi sistem interaktif yang ramah pengguna. Tidak suka basa-basi, fokus ke hasil nyata dan performa tinggi.",
  profileImage: "/images/profil.webp",
  cvFile: "/file/Fullstack - Rizal Muhaimin Nur.pdf",
  contact: {
    email: "mn.rizal27@gmail.com",
    github: "https://github.com/Bxtohur",
    linkedin: "https://linkedin.com/in/rizal-muhaimin-n/",
  },
};

export const skills = [
  "Laravel",
  "Vue.js",
  "React.js",
  "Node.js",
  "Next.js",
  "Python & AI Model",
  "Tailwind CSS",
  "RESTful API & WebSockets",
  "MySQL & PostgreSQL",
  "UI / UX Design",
];

export const projects = [
  {
    id: 1,
    title: "Desa Jagara (jagara.jastik.site)",
    category: "Desa Cantik BPS",
    description:
      "Portal statistik dan profil resmi Desa Jagara, dirancang untuk program Desa Cantik (Cinta Statistik) oleh Badan Pusat Statistik (BPS) Kuningan, Jawa Barat. Membantu digitalisasi data kependudukan, pendidikan, kesehatan, dan publikasi desa secara transparan dan mudah diakses oleh seluruh warga desa.",
    tech: ["Laravel", "Bootstrap", "MySQL", "GIS & Maps Integration"],
    images: ["/images/jagara.webp"],
    link: "https://jagara.jastik.site",
  },
  {
    id: 2,
    title: "KUNCI BERSAMA (kuncibersama.or.id)",
    category: "Corporate Portal & GIS Map",
    description:
      "Platform resmi Sekretariat Bersama forum kerja sama 10 daerah perbatasan Jawa Barat dan Jawa Tengah (Kuningan, Cirebon, Brebes, Cilacap, Ciamis, Majalengka, Indramayu, Banjar, Pangandaran). Dilengkapi visualisasi peta wilayah interaktif, direktori potensi daerah (kuliner, pariwisata, UMKM), dan manajemen dokumen dinamis.",
    tech: ["Laravel", "Tailwind CSS", "Interactive SVG Map", "MySQL"],
    images: ["/images/kuncibersama.webp"],
    link: "https://kuncibersama.or.id",
  },
  {
    id: 3,
    title: "CritLit (cdl-ai.id)",
    category: "Adaptive AI Education Platform",
    description:
      "Platform kecerdasan buatan adaptif yang dirancang khusus untuk mengukur dan meningkatkan Literasi Digital Kritis (Critical Digital Literacy) guru-guru di Indonesia. Dilengkapi model klasifikasi berbasis IndoBERT untuk mendeteksi 6 jenis bias kognitif dan framing secara otomatis dengan akurasi tinggi serta sistem tes adaptif.",
    tech: ["React.js", "FastAPI / Python", "IndoBERT Model", "PostgreSQL"],
    images: ["/images/cdl.webp"],
    link: "https://cdl-ai.id",
  },
  {
    id: 4,
    title: "Verified Certificate System",
    category: "Enterprise Fullstack System",
    description:
      "Sistem verifikasi sertifikat berbasis web untuk memvalidasi kredensial digital secara instan melalui ID sertifikat unik atau QR Code. Menghindari pemalsuan sertifikat secara efektif dengan sistem enkripsi dan penyimpanan data terpusat.",
    tech: ["Laravel", "Vue.js", "MySQL", "QR Code Engine"],
    images: ["/images/cert2.webp", "/images/cert3.webp"],
  },
  {
    id: 5,
    title: "Multimodal AI Analysis System",
    category: "R&D Deep Learning Project",
    description:
      "Sistem analisis kecerdasan buatan multimodal yang menggabungkan pengenalan wajah (Face Recognition), klasifikasi pose tubuh, dan deteksi emosi real-time. Dilengkapi visualisasi data interaktif untuk dashboard analytics.",
    tech: ["React", "Flask", "Deep Learning / ArcFace", "YOLO-Face"],
    images: [
      "/images/Transkripsi.webp",
    ],
  },
  {
    id: 6,
    title: "ABSENKU System",
    category: "Biometric Attendance App",
    description:
      "Aplikasi absensi biometrik berbasis desktop menggunakan kamera lokal. Mendeteksi dan memverifikasi wajah karyawan dalam waktu kurang dari 1 detik menggunakan model YOLO-Face untuk deteksi wajah dan ArcFace untuk ekstraksi fitur.",
    tech: ["Python", "YOLO-Face", "ArcFace", "Tkinter GUI"],
    images: [
      "/images/absenku.webp",
      "/images/absenku1.webp",
      "/images/absenku3.webp",
    ],
  },
  {
    id: 7,
    title: "Travel Package Booking",
    category: "E-Commerce System",
    description:
      "Sistem pemesanan paket wisata lengkap dengan dashboard admin interaktif untuk mengelola inventaris paket liburan, pemesanan pelanggan, transaksi, dan integrasi payment gateway.",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "Payment Gateway"],
    images: ["/images/ecom1.webp", "/images/ecom2.webp", "/images/ecom3.webp"],
  },
  {
    id: 8,
    title: "Roblox Game: 'Kota Kuda'",
    category: "3D Multiplayer Game",
    description:
      "Game dunia terbuka (open-world) bertema pacuan kuda di Roblox. Pemain dapat mengadopsi berbagai jenis kuda, melatih performa, menantang pemain lain dalam arena balapan, dan menjelajahi peta petualangan yang luas.",
    tech: ["Roblox Lua", "Rojo Development Tool", "Roblox Studio"],
    images: ["/images/kk1.webp", "/images/kk2.webp", "/images/kk3.webp"],
  },
  {
    id: 9,
    title: "Metcha",
    category: "Real-Time Matching Platform",
    description:
      "Platform sosial interaktif yang mempertemukan pengguna dengan minat yang sama melalui kecocokan profil (matching) dan ruang obrolan langsung (real-time chat) berbasis WebSockets.",
    tech: ["Laravel", "React.js", "WebSockets / Pusher", "Tailwind CSS"],
    images: [
      "/images/metcha1.webp",
      "/images/metcha2.webp",
      "/images/metcha3.webp",
    ],
  },
];

export const certifications = [
  {
    id: 101,
    title: "IoT Engineer",
    category: "Certification",
    description:
      "Sertifikasi kompetensi teknis yang mencakup integrasi sensor, pemrograman mikrokontroler (Arduino/ESP32), dan protokol komunikasi IoT.",
    tech: ["Indobot Academy", "Jun 2024"],
    image: "/images/cert-iot.webp",
    pdf: "/certificates/cert-iot.pdf",
    link: "#",
  },
  {
    id: 102,
    title: "Android Developer",
    category: "Certification",
    description:
      "Sertifikasi bootcamp intensif yang berfokus pada arsitektur aplikasi mobile Android modern, UI/UX Material Design, dan integrasi API menggunakan Kotlin.",
    tech: ["Binar Academy", "Jan 2024"],
    image: "/images/cert-androiddev.webp",
    pdf: "/certificates/cert-androiddev.pdf",
    link: "#",
  },
  {
    id: 103,
    title: "IT Specialist: Databases",
    category: "Certification",
    description:
      "Sertifikasi keahlian dalam perancangan database relasional, optimasi kueri SQL kompleks, dan manajemen basis data skala enterprise.",
    tech: ["IT Specialist", "Aug 2024"],
    image: "/images/cert-databases.webp",
    pdf: "/certificates/cert-databases.pdf",
    link: "#",
  },
  {
    id: 104,
    title: "IoT Business Practitioner",
    category: "Certification",
    description:
      "Sertifikasi internasional yang berfokus pada aspek kelayakan bisnis, strategi pasar, dan implementasi industri untuk proyek berbasis Internet of Things.",
    tech: ["CertNexus", "Nov 2024"],
    image: "/images/cert-iotBIZ.webp",
    pdf: "/certificates/cert-iotBIZ.pdf",
    link: "#",
  },
  {
    id: 105,
    title: "Junior Web Developer",
    category: "BNSP License",
    description:
      "Lisensi profesi nasional dari Badan Nasional Sertifikasi Profesi (BNSP) yang memvalidasi kompetensi fundamental dalam pengembangan aplikasi web.",
    tech: ["VSGA Kominfo", "Aug 2023"],
    image: "/images/cert-jwd.webp",
    pdf: "/certificates/cert-jwd.pdf",
    link: "#",
  },
];
