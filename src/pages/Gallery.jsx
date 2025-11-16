// src/pages/Gallery.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Cpu, Wrench, Users, Award, Smartphone, Zap } from "lucide-react";

const placeholder = "https://images.unsplash.com/photo-1581092580490-9744e9e9d9c7?w=800&q=80";

const galleryImages = [
  { src: '' || placeholder, category: "training", title: "Chip-Level iPhone Repair Training" },
  { src: '' || placeholder, category: "lab", title: "Advanced Micro-Soldering Lab" },
  { src: '' || placeholder, category: "students", title: "Students Mastering BGA Reballing" },
  { src: '' || placeholder, category: "tools", title: "Professional Tools & Equipment" },
  { src: '' || placeholder, category: "training", title: "iPhone Motherboard Diagnostics" },
  { src: '' || placeholder, category: "success", title: "Student Placed at Premium Service Center" },
  { src: '' || placeholder, category: "lab", title: "Real Device Repair Practice" },
  { src: '' || placeholder, category: "training", title: "iPhone Display & Battery Replacement" },
  { src: '' || placeholder, category: "students", title: "Batch 47 – Hands-On Session" },
  { src: '' || placeholder, category: "tools", title: "DC Power Supply & Hot Air Station" },
  { src: '' || placeholder, category: "success", title: "100% Placement Celebration" },
  { src: '' || placeholder, category: "lab", title: "Night Lab Session – True Dedication" },
];

const categories = [
  { id: "all", name: "All", icon: <Zap className="w-6 h-6" /> },
  { id: "training", name: "Training", icon: <Cpu className="w-6 h-6" /> },
  { id: "lab", name: "Lab", icon: <Wrench className="w-6 h-6" /> },
  { id: "students", name: "Students", icon: <Users className="w-6 h-6" /> },
  { id: "tools", name: "Tools", icon: <Smartphone className="w-6 h-6" /> },
  { id: "success", name: "Success", icon: <Award className="w-6 h-6" /> },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 pb-16 px-5 bg-gradient-to-b from-white via-orange-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-red-600 mb-4 leading-tight">
            Highlights
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light">
            Real moments from <span className="font-bold text-[#F37021]">GetFix Academy</span>
            <br className="sm:hidden" /> — Where passion becomes profession
          </p>
        </motion.div>
      </section>

      {/* ULTRA PREMIUM MOBILE-FIRST FILTER BAR */}
      <section className="py-8 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-3 w-full max-w-2xl">
              <div className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide px-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className="relative flex flex-col sm:flex-row items-center justify-center gap-2 px-5 py-4 rounded-2xl font-bold text-sm min-w-fit flex-shrink-0 transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Active Pill Background */}
                    {filter === cat.id && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-gradient-to-r from-[#F37021] to-red-600 rounded-2xl shadow-2xl"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Icon */}
                    <span className={`relative z-10 transition-all ${filter === cat.id ? "text-white" : "text-gray-600"}`}>
                      {cat.icon}
                    </span>

                    {/* Text - Hidden on very small screens */}
                    <span className={`relative z-10 transition-all hidden xs:inline ${
                      filter === cat.id ? "text-white font-extrabold" : "text-gray-800"
                    }`}>
                      {cat.name}
                    </span>

                    {/* Tiny dot indicator for mobile */}
                    {filter === cat.id && (
                      <motion.div
                        className="absolute -bottom-1 w-2 h-2 bg-white rounded-full shadow-lg xs:hidden"
                        layoutId="mobileDot"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Mobile First */}
      <section className="py-12 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${filter}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg cursor-pointer bg-white"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-xs sm:text-sm md:text-base font-bold line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {image.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Mobile-Optimized Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 30 }}
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-screen rounded-3xl shadow-2xl"
              />
              <div className="text-center mt-6 px-4">
                <p className="text-white text-lg sm:text-xl font-bold leading-tight">
                  {selectedImage.title}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur rounded-full"
              >
                <X className="w-7 h-7 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide Scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}