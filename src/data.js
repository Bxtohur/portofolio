export const personalData = {
  name: "RIZAL M. NUR.",
  role: "FULLSTACK & AI ENGINEER",
  bio: "Fullstack Engineer yang spesialis bikin arsitektur web scalable dan integrasi AI. Saya membangun sistem tangguh yang menggabungkan model deep learning kompleks dengan tampilan antarmuka yang intuitif. Fokus utama: presisi dan clean code.",
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
  "React Ecosystem",
  "Python & AI Integration",
  "AI Engineering",
  "Tailwind CSS",
  "RESTful API Design",
  "MySQL & DB Arch.",
];

export const projects = [
  {
    id: 1,
    title: "Verified Certificate",
    category: "Sistem Fullstack",
    description: "Sistem verifikasi sertifikat yang aman buat validasi dan autentikasi kredensial digital. Dilengkapi fitur verifikasi real-time, ID sertifikat unik, dan manajemen data terpusat yang anti-manipulasi.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    images: [
      "./images/cert1.png",
      "./images/cert2.png",
      "./images/cert3.png",
    ],
  },
  {
    id: 2,
    title: "MULTIMODAL AI",
    category: "Riset & Dev",
    description: "Sistem deep learning hulu-ke-hilir yang menggabungkan Pengenalan Wajah, Klasifikasi Pose, dan Analisis Emosi. Dibangun pakai backend Flask buat otak pemrosesannya dan frontend React buat visualisasi datanya.",
    tech: ["React", "Flask", "Deep Learning"],
    images: [
      "./images/LandingPage.png",
      "./images/Analisis.png",
      "./images/Transkripsi.png",
    ],
  },
  {
    id: 3,
    title: "ABSENKU SYSTEM",
    category: "Aplikasi Desktop",
    description: "Aplikasi absensi biometrik canggih pakai YOLO-Face buat deteksi real-time dan ArcFace buat pengenalan wajah akurasi tinggi. Bikin manajemen karyawan jadi otomatis, cepat, dan akurat.",
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
    category: "Sistem Fullstack",
    description: "Sistem booking travel berbasis web profesional buat perusahaan wisata mengatur dan menjual paket liburan dengan efisien. Fiturnya lengkap: reservasi paket online, manajemen data pelanggan, pelacakan transaksi, sampai dashboard admin buat kontrol operasional.",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    images: [
      "./images/ecom1.jpg",
      "./images/ecom2.png",
      "./images/ecom3.png",
    ],
  },
  {
    id: 5,
    title: "Roblox Game: 'Kota Kuda'",
    category: "Pengalaman Metaverse",
    description: "Game balap kuda imersif di peta open-world yang luas. Pemain bisa adopsi kuda, balapan sengit dengan hitungan mundur real-time, dan panjat rank global. UI/UX-nya didesain mulus buat HP, ada sistem kamera sinematik, dan fitur sosial seru kayak boncengan kuda.",
    tech: ["Roblox Lua", "Rojo", "Roblox Studio"],
    images: [
      "./images/kk1.png",
      "./images/kk2.png",
      "./images/kk3.png",
    ],
  },
  {
    id: 6,
    title: "Metcha",
    category: "Fullstack System",
    description: "Platform kencan eksklusif yang dirancang buat nemuin koneksi yang 'klik' banget. Fokusnya bukan cuma swipe kanan-kiri, tapi algoritma matching yang presisi buat nyatuin personalitas yang cocok. Dibungkus dengan UI/UX modern yang clean, fitur chat real-time yang responsif, dan sistem privasi yang aman. Bikin pengalaman nyari jodoh jadi smooth dan nggak ribet.",
    tech: ["Laravel", "React.js", "WebSockets"],
    images: [
      "./images/metcha1.png",
      "./images/metcha2.png",
      "./images/metcha3.png",
    ],
  }
];

export const certifications = [
  {
    id: 101,
    title: "IoT Engineer",
    category: "Sertifikasi",
    description: "Sertifikasi teknik komprehensif yang ngebahas integrasi sensor, pemrograman mikrokontroler, dan protokol jaringan. Lulus dengan Band Score tinggi: 88.75.",
    tech: ["Indobot Academy", "Jun 2024"],
    image: "./images/cert-iot.png",
    pdf: "./certificates/cert-iot.pdf",
    link: "#",
  },
  {
    id: 102,
    title: "Android Developer",
    category: "Sertifikasi",
    description: "Bootcamp intensif spesialis Arsitektur Mobile dan Kotlin. Menguasai implementasi UI/UX dan integrasi API dengan Skor Hard Skill nyaris sempurna: 4.9/5.0.",
    tech: ["Binar Academy", "Jan 2024"],
    image: "./images/cert-androiddev.png",
    pdf: "./certificates/cert-androiddev.pdf",
    link: "#",
  },
  {
    id: 103,
    title: "IT Specialist: Databases",
    category: "Sertifikasi",
    description: "Sertifikasi standar internasional yang memvalidasi keahlian dalam Desain Database, SQL Querying, dan Relational Database Management Systems (RDBMS).",
    tech: ["IT Specialist", "Agu 2024"],
    image: "./images/cert-databases.png",
    pdf: "./certificates/cert-databases.pdf",
    link: "#",
  },
  {
    id: 104,
    title: "IoT Business Practitioner",
    category: "Sertifikasi",
    description: "Sertifikasi profesional (IoTBIZ) yang fokus pada potensi strategis bisnis ekosistem IoT, perencanaan proyek, dan implementasi di level korporat.",
    tech: ["CertNexus", "Nov 2024"],
    image: "./images/cert-iotBIZ.png",
    pdf: "./certificates/cert-iotBIZ.pdf",
    link: "#",
  },
  {
    id: 105,
    title: "Junior Web Developer",
    category: "Lisensi BNSP",
    description: "Sertifikasi Profesi Nasional (BNSP) sebagai bukti kompetensi resmi dalam pemrograman web, desain antarmuka, dan logika backend sesuai standar industri Indonesia.",
    tech: ["VSGA Kominfo", "Agu 2023"],
    image: "./images/cert-jwd.png",
    pdf: "./certificates/cert-jwd.pdf",
    link: "#",
  },
];
