import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import { useState, useEffect } from "react";

// Import your assets
import videoFile from "../assets/video/Video.mp4";
import iphones from "../assets/iphones.png";
import img from "../assets/images/img.png";
import imgg from "../assets/images/imgg.png";
import imagee from "../assets/imagee.png";

const carouselItems = [
  {
    type: "video",
    src: videoFile,
    poster: "/hero/image1.jpg",
  },
  {
    type: "image",
    src: img,
    alt: "Expert technician repairing iPhone screen",
  },
  {
    type: "image",
    src: imgg,
    alt: "Expert technician repairing iPhone screen",
  },
  {
    type: "image",
    src: iphones,
    alt: "Expert technician repairing iPhone screen",
  },
  {
    type: "image",
    src: imagee,
    alt: "Students learning chip-level repair in lab",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#F37021]/5 via-white to-[#F37021]/5 overflow-hidden">
      {/* Subtle Background Orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#F37021]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: CAROUSEL */}
        <div className="relative h-96 md:h-full md:min-h-96 rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {carouselItems[currentIndex].type === "image" ? (
                <img
                  src={carouselItems[currentIndex].src}
                  alt={carouselItems[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={carouselItems[currentIndex].src}
                  poster={carouselItems[currentIndex].poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white w-8" : "bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="text-left md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-tight">
              Empowering{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] to-red-600">
                Future
              </span>
              <br />
              Mobile Engineers
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
              Master <span className="font-semibold">iPhone & Android repair</span>, chip-level diagnostics, 
              and advanced software solutions — taught by <span className="font-semibold">certified experts</span>.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <Zap className="w-6 h-6 text-[#F37021]" />
              <span className="font-medium">30-Day Fast-Track</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="font-medium">100% Job Placement</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Award className="w-6 h-6 text-purple-600" />
              <span className="font-medium">Certified Curriculum</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-[#F37021]/50 transition-all duration-300"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#F37021] font-bold text-lg rounded-full border-2 border-[#F37021] hover:bg-[#F37021]/5 transition-all shadow-lg"
            >
              Get Free Demo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left pt-8 border-t border-gray-200"
          >
            {[
              { value: "10,000+", label: "Students Trained" },
              { value: "5+", label: "Years Excellence" },
              { value: "100%", label: "Job Placement" },
              { value: "4.9", label: "Student Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-black text-[#F37021]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#F37021] rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-[#F37021] rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;