import React, { useState } from "react";
import { personalData, skills, projects, certifications } from "./data";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  // Logic untuk Next/Prev Image (Hanya aktif jika item adalah Project/Gambar, bukan PDF)
  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen max-w-[1440px] mx-auto bg-[#fdfdfd] text-black font-sans selection:bg-black selection:text-white border-x border-black/10 relative">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full px-6 py-5 flex justify-between items-center z-40 bg-[#fdfdfd]/80 backdrop-blur-md border-b border-black/5">
        <div className="text-xl font-bold tracking-tighter uppercase border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors cursor-default">
          {personalData.name}
        </div>
        <nav className="hidden md:flex gap-6">
          {["Work", "Certifications", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest hover:line-through transition-all">
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 border-b border-black">
        <div className="flex flex-col md:flex-row gap-12 items-end">
          <div className="flex-1 animate-reveal">
            <h1 className="text-[10vw] md:text-[7rem] leading-[0.8] font-black tracking-tighter uppercase mb-6">
              Fullstack <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-500">Engineer</span>
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-lg leading-relaxed text-gray-600 animate-reveal delay-100">
              {personalData.bio}
            </p>
            <div className="mt-8 flex gap-4 animate-reveal delay-200">
              <a href="#contact" className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors border border-black">
                Available for hire
              </a>
              {/* TOMBOL DOWNLOAD CV */}
              <a href={personalData.cvFile} download className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors border border-black flex items-center gap-2">
                Download CV <span className="text-xl">↓</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[400px] h-[500px] bg-gray-200 relative overflow-hidden animate-reveal delay-300 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img src={personalData.profileImage} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100" />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* SKILLS RUNNING TEXT */}
      <div className="border-b border-black bg-black text-white overflow-hidden py-5 md:py-7 relative z-10">
        <div className="flex w-full">
          <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around">
            {skills.map((skill, i) => (
              <span key={i} className="text-xl md:text-3xl font-black uppercase tracking-widest px-8 flex items-center gap-8">{skill} <span className="w-3 h-3 bg-white rounded-full inline-block" /></span>
            ))}
          </div>
          <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around">
            {skills.map((skill, i) => (
              <span key={`dup-${i}`} className="text-xl md:text-3xl font-black uppercase tracking-widest px-8 flex items-center gap-8">{skill} <span className="w-3 h-3 bg-white rounded-full inline-block" /></span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="work" className="bg-white">
        <div className="px-6 py-12 border-b border-black flex justify-between items-end">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Selected Works</h2>
          <span className="text-sm font-bold uppercase tracking-[0.2em]">2023 — 2025</span>
        </div>
        <div>
          {projects.map((project) => (
            <div key={project.id} onClick={() => openModal(project)} className="group relative border-b border-black cursor-pointer overflow-hidden transition-colors duration-300 hover:bg-black hover:text-white">
              <div className="px-6 py-16 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                <div className="flex flex-col">
                   <span className="text-xs font-mono mb-2 opacity-50 group-hover:text-gray-400">0{project.id} / {project.category}</span>
                   <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter transform transition-transform duration-300 group-hover:translate-x-4">{project.title}</h3>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="font-bold uppercase tracking-widest text-sm">View Case</span>
                  <span className="text-2xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="bg-gray-50">
        <div className="px-4 md:px-8 py-8 border-b-2 border-black bg-white">
          <h2 className="text-xl font-black uppercase tracking-tighter">Licenses & Certifications</h2>
        </div>
        
        {/* Grid Layout diperbaiki untuk Landscape Certificate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-2 border-black">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              onClick={() => openModal(cert)}
              className="group relative cursor-pointer border-b-2 border-r-2 border-black bg-white hover:bg-gray-100 transition-colors"
            >
              {/* Aspect Ratio 4/3 lebih cocok untuk sertifikat daripada h-96 */}
              <div className="aspect-[4/3] w-full p-8 border-b-2 border-black bg-gray-100 flex items-center justify-center overflow-hidden relative">
                 {/* Gambar pakai OBJECT-CONTAIN agar tidak terpotong */}
                 <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain shadow-lg transform grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Badge PDF */}
                  {cert.pdf && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      PDF
                    </div>
                  )}
              </div>

              {/* Info Area - Static di bawah */}
              <div className="p-6">
                <h4 className="font-black uppercase text-xl leading-tight mb-2 group-hover:underline decoration-2 underline-offset-4">
                  {cert.title}
                </h4>
                <div className="flex justify-between items-end font-mono text-sm text-gray-600">
                  <span>{cert.tech[0]}</span>
                  <span>{cert.tech[1]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-2 border-b border-black bg-gray-50">
        <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
          <div><h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Let's build <br/>something <br/>solid.</h2></div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Me</span>
            <a href={`mailto:${personalData.contact.email}`} className="text-xl md:text-2xl font-bold underline decoration-2 underline-offset-4 hover:bg-black hover:text-white transition-colors inline-block w-max px-1">{personalData.contact.email}</a>
          </div>
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center gap-8 bg-white">
          <div className="space-y-6">
            <a href={personalData.contact.linkedin} target="_blank" className="flex items-center justify-between border-b border-black pb-4 group hover:pl-4 transition-all">
              <span className="text-2xl font-bold uppercase">LinkedIn</span><span className="group-hover:-rotate-45 transition-transform duration-300">→</span>
            </a>
            <a href={personalData.contact.github} target="_blank" className="flex items-center justify-between border-b border-black pb-4 group hover:pl-4 transition-all">
              <span className="text-2xl font-bold uppercase">GitHub</span><span className="group-hover:-rotate-45 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs font-mono uppercase tracking-widest text-gray-400">
        © {new Date().getFullYear()} Rizal M. Nur — Engineered with Precision.
      </footer>

      {/* MODAL UNIVERSAL (Bisa Gambar Project / PDF Sertifikat) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeModal}>
          <div className="w-full max-w-6xl bg-white border border-gray-200 shadow-2xl flex flex-col max-h-[95vh] overflow-hidden animate-reveal" onClick={(e) => e.stopPropagation()}>
            
            {/* AREA VISUAL (GAMBAR / PDF) */}
            <div className="relative h-[50vh] md:h-[65vh] bg-gray-100 group select-none">
              
              {/* Logika: Jika ada PDF, tampilkan iframe PDF. Jika tidak, tampilkan Carousel Gambar */}
              {selectedItem.pdf ? (
                <iframe 
                  src={`${selectedItem.pdf}#toolbar=0`} 
                  className="w-full h-full" 
                  title="Certificate PDF"
                ></iframe>
              ) : (
                <>
                  {/* Logic Project (Gambar) */}
                  <img 
                    src={selectedItem.images ? selectedItem.images[currentImageIndex] : selectedItem.image} 
                    alt="Detail View" 
                    className="w-full h-full object-contain bg-black/5"
                  />
                  {selectedItem.images && selectedItem.images.length > 1 && (
                    <div className="absolute inset-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button onClick={prevImage} className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">←</button>
                       <button onClick={nextImage} className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">→</button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* DETAIL TEXT */}
            <div className="p-8 md:p-10 overflow-y-auto bg-white flex flex-col md:flex-row gap-8 h-auto">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{selectedItem.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedItem.tech.map((t, i) => (
                    <span key={i} className="border border-black px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-lg leading-relaxed text-gray-700 mb-8">{selectedItem.description}</p>
                
                {/* Tombol Action Berbeda untuk Project vs Sertifikat */}
                <div className="flex gap-4">
                  {/* Jika PDF, tampilkan tombol Download */}
                  {selectedItem.pdf && (
                     <a 
                      href={selectedItem.pdf} 
                      download
                      className="flex-1 text-center bg-white text-black border border-black py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
                    >
                      Download PDF ↓
                    </a>
                  )}
                  
                  {/* Jika ada Link project (bukan #) */}
                  {selectedItem.link && selectedItem.link !== "#" && (
                    <a 
                      href={selectedItem.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 text-center bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                    >
                      {selectedItem.pdf ? "Verify Online" : "View Live"}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button onClick={closeModal} className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg hover:rotate-90 transition-transform">×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
