import React, { useState, useRef, useCallback, useEffect } from "react";
import { personalData, skills, projects, certifications } from "./data";
import { AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Download,
  Cpu,
  Briefcase,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  CornerRightDown,
  Zap,
  Flame
} from "lucide-react";
import { getAudioContext } from "./hooks/useLazyLoad";
import OptimizedImage from "./components/OptimizedImage";

// Sound effects or voice using text_to_speech API can be simulated.
// Let's build a ultra-funky Neobrutalism UI.
// Rules of Neobrutalism:
// - High-contrast colors (yellows, oranges, cyans, pinks, bright greens mixed with white and deep black).
// - Thick black borders (4px to 8px).
// - Hard drop shadows (not blurry, offset x/y with black colors).
// - Aggressive typography (bold uppercase, blocky look).
// - Fun hover states (movement, card pops, active state tilts).
// - Marquees and floating elements.
// - Dither/bitmap effects (pixel patterns, scanlines, grainy textures).

// Custom custom Cursor or Sparkles
// Optimized: Removed heavy scanlines, kept minimal grid
const PixelGrid = React.memo(() => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
      backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
      backgroundSize: '32px 32px'
    }} />
  );
});

// Horizontal neobrutalism carousel used when cards don't fit a single screen.
const Carousel = React.memo(({ children, onNav }) => {
  const trackRef = useRef(null);

  const scrollByCard = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
    onNav?.();
  }, [onNav]);

  return (
    <div className="relative w-full flex items-center">
      <button
        aria-label="Sebelumnya"
        onClick={() => scrollByCard(-1)}
        className="hidden md:flex shrink-0 z-20 w-12 h-12 mr-3 bg-white border-4 border-black items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:bg-yellow-300 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-all"
      >
        <ChevronLeft className="w-6 h-6 stroke-[3px]" />
      </button>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-6 px-1 w-full"
      >
        {children}
      </div>

      <button
        aria-label="Berikutnya"
        onClick={() => scrollByCard(1)}
        className="hidden md:flex shrink-0 z-20 w-12 h-12 ml-3 bg-white border-4 border-black items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:bg-yellow-300 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-all"
      >
        <ChevronRight className="w-6 h-6 stroke-[3px]" />
      </button>
    </div>
  );
});

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("ALL");
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Sparkle animation cleanup
    if (sparkles.length > 0) {
      const timer = setTimeout(() => setSparkles([]), 600);
      return () => clearTimeout(timer);
    }
  }, [sparkles]);

  // Setup sound effect (synthesized using audio context) - cached for performance
  const playSound = useCallback((freq = 440, type = "sine", duration = 0.1) => {
    try {
      const audioCtx = getAudioContext();
      if (!audioCtx) return;
      
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.type = type;
      oscillator.frequency.value = freq;
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch {
      // Ignored if browser blocks audio initialization
    }
  }, []);

  const openModal = (item) => {
    playSound(600, "triangle", 0.15);
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    playSound(300, "triangle", 0.1);
    setSelectedItem(null);
  };

  const triggerChaos = useCallback(() => {
    setEasterEggActive(true);
    playSound(880, "sawtooth", 0.3);
    setTimeout(() => {
      playSound(1200, "square", 0.1);
    }, 100);
    setTimeout(() => {
      setEasterEggActive(false);
    }, 3000);
  }, [playSound]);

  // Manage body overflow when modal opens/closes
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  const nextImage = useCallback(() => {
    playSound(450, "sine", 0.05);
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedItem, playSound]);

  const prevImage = useCallback(() => {
    playSound(450, "sine", 0.05);
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  }, [selectedItem, playSound]);

  // Filter projects by category
  const categories = ["ALL", "AI & R&D", "WEB APPS", "PORTALS", "GAMES"];
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "AI & R&D") return project.category.includes("AI") || project.category.includes("Deep");
    if (activeTab === "WEB APPS") return project.category.includes("System") || project.category.includes("Attendance") || project.category.includes("Platform") || project.category.includes("E-Commerce");
    if (activeTab === "PORTALS") return project.category.includes("Desa") || project.category.includes("Portal");
    if (activeTab === "GAMES") return project.category.includes("Game") || project.category.includes("3D");
    return true;
  });

  return (
    <div className={`h-screen flex flex-col bg-[#FFFbeb] text-black font-mono selection:bg-[#ff0055] selection:text-white relative overflow-hidden ${easterEggActive ? "animate-[shake_0.5s_infinite]" : ""}`}>
      <PixelGrid />

      {/* ===== FIXED TOP BAR (marquee + navigation) ===== */}
      <div className="flex-none relative z-40">
        {/* Retro Marquee Banner */}
        <div className="bg-[#ff0055] text-white py-2 border-b-4 border-black font-black uppercase text-xs md:text-sm flex overflow-x-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {Array.from({ length: 4 }).map((_, idx) => (
              <span key={idx} className="inline-flex items-center gap-4">
                <Zap className="fill-yellow-300 stroke-black stroke-[3px] animate-bounce w-4 h-4" />
                <span>SUPERCHARGED WEB EXPERIENCES</span>
                <span className="w-3 h-3 bg-black border-2 border-white rounded-none transform rotate-45" />
                <span>FULLSTACK EXPERT & AI WIZARD</span>
                <span className="w-3 h-3 bg-black border-2 border-white rounded-none transform rotate-45" />
                <span>NO EM-DASHES DETECTED</span>
                <span className="w-3 h-3 bg-black border-2 border-white rounded-none transform rotate-45" />
                <span>100% CLIENT SATISFACTION</span>
              </span>
            ))}
          </div>
        </div>

        {/* Main Header / Navigation */}
        <header className="bg-[#00ffcc] border-b-4 border-black px-6 py-3 flex justify-between items-center shadow-[4px_4px_0px_0px_#000]">
          <motion.div
            onClick={triggerChaos}
            whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
            className="text-lg md:text-2xl font-black tracking-tighter uppercase border-4 border-black bg-yellow-300 px-4 py-2 hover:bg-[#ff0055] hover:text-white transition-colors cursor-pointer shadow-[3px_3px_0px_0px_#000] select-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000]"
          >
            🦖 {personalData.name}
          </motion.div>

          <nav className="hidden md:flex gap-4">
            {["WORKS", "CERTIFICATIONS", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-black uppercase tracking-wider px-3 py-2 bg-white border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-300 hover:-translate-y-0.5 transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              playSound(700, "square", 0.2);
              window.location.href = `mailto:${personalData.contact.email}`;
            }}
            className="md:hidden p-2 border-3 border-black bg-white shadow-[2px_2px_0px_0px_#000] font-bold"
          >
            HUKUM
          </motion.button>
        </header>
      </div>

      {/* ===== SCROLL-SNAP CONTAINER: one full screen per section ===== */}
      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory no-scrollbar relative z-10">

        {/* ---------- HERO SECTION ---------- */}
        <section className="h-full snap-start flex flex-col">
          <div className="flex-1 min-h-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Decorative Grid items */}
              <div className="hidden lg:block absolute top-24 left-10 w-12 h-12 border-4 border-black bg-[#ff00ff] -z-10 transform -rotate-12 animate-pulse" />
              <div className="hidden lg:block absolute bottom-24 right-20 w-16 h-16 border-4 border-black bg-[#00ffcc] -z-10 transform rotate-45" />

              <div className="lg:col-span-7 space-y-5">
                {/* Heading */}
                <h1 className="text-[11vw] sm:text-[7vw] lg:text-[4.8rem] leading-[0.9] font-black uppercase tracking-tighter text-black select-none">
                  BUAT WEB <br />
                  <span className="bg-[#ff9900] px-4 inline-block border-4 border-black transform skew-x-3 rotate-1 hover:rotate-[-1deg] hover:bg-[#00ffcc] transition-all shadow-[6px_6px_0px_0px_#000]">
                    GILA KENCANG
                  </span> <br />
                  DENGAN AI!
                </h1>

                {/* Bio Description */}
                <p className="text-base md:text-lg font-bold bg-white p-5 border-4 border-black shadow-[6px_6px_0px_0px_#000] relative leading-relaxed max-w-2xl">
                  <CornerRightDown className="absolute -top-6 -left-6 w-12 h-12 stroke-[3px] text-[#ff0055] fill-[#ffff00]" />
                  Halo! Saya Rizal, Fullstack Developer berpengalaman dalam membangun aplikasi web modern, termasuk sistem cerdas yang mengintegrasikan kecerdasan buatan. Mengedepankan kode bersih, arsitektur kokoh, dan UI atraktif.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => playSound(500, "triangle", 0.1)}
                    className="bg-[#ff0055] text-white text-base md:text-lg font-black uppercase tracking-wide border-4 border-black px-6 py-4 shadow-[6px_6px_0px_0px_#000] hover:bg-black hover:text-[#00ffcc] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-colors flex items-center gap-3"
                  >
                    <Flame className="w-5 h-5 fill-yellow-400 stroke-black stroke-[2px]" />
                    <span>AJAK PROYEK GILA</span>
                  </motion.a>

                  <motion.a
                    href={personalData.cvFile}
                    download
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => playSound(500, "triangle", 0.1)}
                    className="bg-white text-black text-base md:text-lg font-black uppercase tracking-wide border-4 border-black px-6 py-4 shadow-[6px_6px_0px_0px_#000] hover:bg-yellow-300 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-colors flex items-center gap-3"
                  >
                    <Download className="w-5 h-5 stroke-[3px]" />
                    <span>UNDUH CV SAYA</span>
                  </motion.a>
                </div>
              </div>

              {/* Profile Card Container */}
              <div className="hidden lg:flex lg:col-span-5 justify-center">
                <motion.div
                  initial={{ rotate: 10, scale: 0.8 }}
                  animate={{ rotate: 3, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className="w-full max-w-[320px] bg-white border-4 border-black p-4 shadow-[12px_12px_0px_0px_#000] relative overflow-hidden"
                >
                  {/* Window header */}
                  <div className="flex items-center justify-between border-b-4 border-black pb-3 mb-4 bg-[#ffff00] -mx-4 -mt-4 px-4 py-2">
                    <span className="font-black text-xs">ROOT_USER_RIZAL.EXE</span>
                    <div className="flex gap-2">
                      <span className="w-3 h-3 bg-red-500 border-2 border-black inline-block rounded-none" />
                      <span className="w-3 h-3 bg-yellow-500 border-2 border-black inline-block rounded-none" />
                      <span className="w-3 h-3 bg-green-500 border-2 border-black inline-block rounded-none" />
                    </div>
                  </div>

                  {/* Profile Image with dithering overlay style */}
                  <div className="w-full aspect-square border-4 border-black relative bg-[#00ffcc] overflow-hidden group">
                    <OptimizedImage
                      src={personalData.profileImage}
                      alt="Profile"
                      eager={true}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#ff00ff]/5 pointer-events-none" />
                    <div className="absolute top-2 left-2 bg-yellow-300 text-black border-2 border-black font-black text-[10px] px-2 py-1 uppercase transform -rotate-12 shadow-[2px_2px_0px_0px_#000]">
                      LEVEL 99 DEV
                    </div>
                  </div>

                  {/* Role Card Block */}
                  <div className="mt-4 space-y-2 text-center">
                    <h3 className="text-xl font-black uppercase text-black tracking-tight">{personalData.name}</h3>
                    <div className="text-xs font-black uppercase bg-[#00ffcc] border-2 border-black px-2 py-1 text-black shadow-[2px_2px_0px_0px_#000] inline-block">
                      {personalData.role}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Running Skills Ticker pinned to bottom of hero screen */}
          <div className="flex-none border-t-4 border-b-4 border-black bg-black text-white overflow-hidden py-3 md:py-4 relative z-10">
            <div className="flex w-full select-none">
              <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around">
                {skills.map((skill, i) => (
                  <span key={i} className="text-base md:text-xl font-black uppercase tracking-widest px-8 flex items-center gap-6 text-[#00ffcc]">
                    <Cpu className="w-5 h-5 text-yellow-300 stroke-[3px]" />
                    <span>{skill}</span>
                    <span className="w-3 h-3 bg-[#ff0055] border-2 border-white rounded-none transform rotate-45 inline-block" />
                  </span>
                ))}
              </div>
              <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around">
                {skills.map((skill, i) => (
                  <span key={`dup-${i}`} className="text-base md:text-xl font-black uppercase tracking-widest px-8 flex items-center gap-6 text-[#00ffcc]">
                    <Cpu className="w-5 h-5 text-yellow-300 stroke-[3px]" />
                    <span>{skill}</span>
                    <span className="w-3 h-3 bg-[#ff0055] border-2 border-white rounded-none transform rotate-45 inline-block" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WORKS SECTION (carousel) ---------- */}
        <section id="works" className="h-full snap-start flex flex-col overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-6 pt-6 md:pt-8 flex-none">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-4 border-black pb-5">
              <div>
                <div className="flex items-center gap-2 text-[#ff0055] font-black text-xs uppercase tracking-widest mb-1">
                  <Briefcase className="w-4 h-4" />
                  PORTFOLIO UTAMA
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                  KARYA PILIHAN
                </h2>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      playSound(400, "triangle", 0.08);
                      setActiveTab(cat);
                    }}
                    className={`px-3 py-2 border-3 border-black text-xs font-black uppercase transition-all shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] ${
                      activeTab === cat
                        ? "bg-black text-white translate-x-[2px] translate-y-[2px] shadow-[1px_1px_0px_0px_#000]"
                        : "bg-white hover:bg-yellow-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Carousel */}
          <div className="flex-1 min-h-0 flex items-center w-full max-w-7xl mx-auto px-6">
            <Carousel onNav={() => playSound(400, "sine", 0.05)}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  data-card
                  onClick={() => openModal(project)}
                  className="snap-center shrink-0 w-[80vw] sm:w-[360px] group cursor-pointer bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all flex flex-col"
                >
                  {/* Card Top / Category */}
                  <div className="p-4 border-b-4 border-black flex justify-between items-center bg-gray-50 group-hover:bg-yellow-300 transition-colors">
                    <span className="font-mono text-[10px] uppercase bg-[#00ffcc] border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_#000] font-black truncate max-w-[70%]">
                      {project.category}
                    </span>
                    <span className="font-black text-sm">0{project.id}</span>
                  </div>

                  {/* Card Image Block */}
                  <div className="w-full aspect-[16/9] bg-gray-100 border-b-4 border-black relative overflow-hidden">
                    <OptimizedImage
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#00ffcc]/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {project.link && (
                      <div className="absolute top-2 right-2 bg-black text-white border-2 border-white px-2 py-1 text-[10px] font-black uppercase flex items-center gap-1 shadow-lg">
                        <ExternalLink className="w-3 h-3 text-[#00ffcc]" />
                        LIVE LINK
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex-grow flex flex-col justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-black uppercase leading-tight group-hover:text-[#ff0055] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-700 font-bold line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t-2 border-dashed border-gray-300">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <span key={i} className="bg-[#00ffcc]/10 border border-black px-2 py-0.5 text-[10px] font-black uppercase text-black">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action button inside card */}
                  <div className="border-t-4 border-black p-3 bg-black text-white group-hover:bg-[#ff0055] transition-colors flex justify-between items-center text-xs font-black uppercase">
                    <span>LIHAT DETAIL PROYEK</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* ---------- CERTIFICATIONS SECTION (carousel) ---------- */}
        <section id="certifications" className="h-full snap-start flex flex-col overflow-hidden bg-[#00ffcc] border-t-4 border-b-4 border-black relative">
          <div className="absolute top-0 right-0 w-32 h-full bg-[#ff00ff]/10 -skew-x-12 -z-10" />

          <div className="w-full max-w-7xl mx-auto px-6 pt-6 md:pt-8 flex-none">
            <div className="flex items-center gap-2 text-black font-black text-xs uppercase tracking-widest mb-1">
              <Award className="w-5 h-5 fill-yellow-300 text-black stroke-[2px]" />
              KREDENTIAL & LISENSI
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black border-b-4 border-black pb-5">
              LISENSI & SERTIFIKASI
            </h2>
          </div>

          <div className="flex-1 min-h-0 flex items-center w-full max-w-7xl mx-auto px-6">
            <Carousel onNav={() => playSound(400, "sine", 0.05)}>
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  data-card
                  onClick={() => openModal(cert)}
                  className="snap-center shrink-0 w-[80vw] sm:w-[340px] group cursor-pointer border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all flex flex-col"
                >
                  {/* Header aspect */}
                  <div className="aspect-[4/3] w-full p-5 border-b-4 border-black bg-[#ffff00] flex items-center justify-center overflow-hidden relative">
                    <OptimizedImage
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full"
                    />
                    {cert.pdf && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        PDF DOKUMEN
                      </div>
                    )}
                  </div>

                  {/* Content info */}
                  <div className="p-5 bg-white space-y-3 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-black uppercase text-base md:text-lg leading-tight mb-1 group-hover:underline decoration-4 underline-offset-4 decoration-[#ff0055] line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-700 font-bold line-clamp-2">
                        {cert.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-end font-black text-[10px] uppercase bg-gray-50 border-2 border-black p-2 shadow-[2px_2px_0px_0px_#000]">
                      <span className="text-[#ff0055]">{cert.tech[0]}</span>
                      <span className="bg-black text-white px-2 py-0.5">{cert.tech[1]}</span>
                    </div>
                  </div>

                  <div className="border-t-4 border-black p-3 bg-white group-hover:bg-yellow-300 transition-colors flex justify-between items-center text-xs font-black uppercase">
                    <span>BUKA BUKTI FISIK</span>
                    <CornerRightDown className="w-4 h-4 stroke-[3px]" />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* ---------- CONTACT + FOOTER SECTION ---------- */}
        <section id="contact" className="h-full snap-start flex flex-col overflow-hidden">
          <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black">
            {/* Left Grid */}
            <div className="p-8 md:p-16 bg-[#ff9900] border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff00ff]/20 rounded-full blur-2xl" />

              <div className="space-y-5 relative">
                <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]">
                  <Flame className="w-4 h-4 fill-yellow-400 text-black stroke-[2px]" />
                  SEGERA JALIN KOLABORASI
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] text-black">
                  MARI BANGUN <br />
                  PRODUK HEBAT <br />
                  BERSAMA SAYA!
                </h2>
              </div>

              <div className="flex flex-col gap-3 bg-white p-5 border-4 border-black shadow-[6px_6px_0px_0px_#000]">
                <span className="text-xs font-black uppercase tracking-widest text-[#ff0055]">
                  KIRIM EMAIL LANGSUNG
                </span>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="text-base md:text-xl font-black underline decoration-4 underline-offset-4 hover:bg-black hover:text-[#00ffcc] transition-all inline-block w-max px-2 py-1 border-2 border-transparent hover:border-black break-all"
                >
                  {personalData.contact.email}
                </a>
              </div>
            </div>

            {/* Right Grid / Social links */}
            <div className="p-8 md:p-16 flex flex-col justify-center gap-6 bg-white relative">
              <PixelGrid />

              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-2 text-black">
                <Zap className="fill-yellow-300 text-black stroke-[3px]" />
                JEJARING SOSIAL RESMI
              </h3>

              <div className="space-y-4">
                <motion.a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 10, scale: 1.01 }}
                  className="flex items-center justify-between border-4 border-black p-4 bg-[#00ffcc] shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all group font-black"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-6 h-6 stroke-[3px]" />
                    <span className="text-base md:text-xl uppercase">LINKEDIN PROFILE</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                </motion.a>

                <motion.a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 10, scale: 1.01 }}
                  className="flex items-center justify-between border-4 border-black p-4 bg-yellow-300 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all group font-black"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-6 h-6 stroke-[3px]" />
                    <span className="text-base md:text-xl uppercase">GITHUB PROFILE</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="flex-none py-5 bg-black text-white text-center relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="text-xs font-black uppercase tracking-widest text-gray-400">
                © {new Date().getFullYear()} RIZAL M. NUR. ALL RIGHTS RESERVED.
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest bg-yellow-300 text-black px-4 py-2 border-2 border-white shadow-[2px_2px_0px_0px_#fff] transform rotate-1">
                BUILT WITH EXTRA CHAOS AND DIGNITY
              </div>
            </div>
          </footer>
        </section>
      </main>

      {/* Floating Sparkle Elements container */}
      {sparkles.map((sp) => (
        <span
          key={sp.id}
          className="absolute w-2.5 h-2.5 pointer-events-none rounded-none transform rotate-45 z-50 animate-ping"
          style={{
            left: `${sp.x}px`,
            top: `${sp.y}px`,
            backgroundColor: sp.color,
            transform: `translate(-50%, -50%) translate(${Math.cos(sp.angle) * sp.distance}px, ${Math.sin(sp.angle) * sp.distance}px)`
          }}
        />
      ))}

      {/* Detail / Modal Box */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, y: 20, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full max-w-4xl bg-white border-4 border-black shadow-[12px_12px_0px_0px_#000] flex flex-col max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal window header */}
              <div className="bg-[#ff0055] text-white p-4 border-b-4 border-black flex justify-between items-center">
                <span className="font-black text-sm uppercase tracking-wider">
                  DETAIL_VIEW.EXE - {selectedItem.title}
                </span>
                <button
                  onClick={closeModal}
                  className="bg-black hover:bg-yellow-300 hover:text-black text-white w-8 h-8 border-2 border-white flex items-center justify-center font-black active:translate-y-[2px]"
                >
                  <X className="w-5 h-5 stroke-[3px]" />
                </button>
              </div>

              {/* Modal Image Gallery */}
              <div className="relative h-[40vh] md:h-[50vh] bg-gray-100 border-b-4 border-black select-none group">
                {selectedItem.pdf ? (
                  <iframe
                    src={`${selectedItem.pdf}#toolbar=0`}
                    className="w-full h-full"
                    title="Certificate PDF"
                  ></iframe>
                ) : (
                  <>
                    <OptimizedImage
                      src={
                        selectedItem.images
                          ? selectedItem.images[currentImageIndex]
                          : selectedItem.image
                      }
                      alt="Detail Preview"
                      className="w-full h-full"
                    />
                    {selectedItem.images && selectedItem.images.length > 1 && (
                      <div className="absolute inset-0 flex justify-between items-center px-4">
                        <button
                          onClick={prevImage}
                          className="w-12 h-12 bg-white border-3 border-black text-black flex items-center justify-center font-black hover:bg-yellow-300 shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000]"
                        >
                          <ChevronLeft className="w-6 h-6 stroke-[3px]" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="w-12 h-12 bg-white border-3 border-black text-black flex items-center justify-center font-black hover:bg-yellow-300 shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000]"
                        >
                          <ChevronRight className="w-6 h-6 stroke-[3px]" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Modal info description */}
              <div className="p-6 md:p-8 overflow-y-auto bg-white flex flex-col md:flex-row gap-6 h-auto">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                    {selectedItem.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-[#00ffcc] border-2 border-black px-2 py-1 text-xs font-black uppercase text-black shadow-[2px_2px_0px_0px_#000]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between gap-6">
                  <p className="text-sm md:text-base font-bold leading-relaxed text-gray-800">
                    {selectedItem.description}
                  </p>

                  <div className="flex gap-4">
                    {selectedItem.pdf && (
                      <a
                        href={selectedItem.pdf}
                        download
                        className="flex-1 text-center bg-white text-black border-4 border-black py-3 text-sm font-black uppercase tracking-wider hover:bg-yellow-300 shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-colors"
                      >
                        UNDUH PDF ↓
                      </a>
                    )}

                    {selectedItem.link && selectedItem.link !== "#" && (
                      <a
                        href={selectedItem.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-[#00ffcc] text-black border-4 border-black py-3 text-sm font-black uppercase tracking-wider hover:bg-black hover:text-[#00ffcc] shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-colors"
                      >
                        KUNJUNGI LIVE MANTAP!
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
