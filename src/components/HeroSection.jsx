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
  { type: "video", src: videoFile, poster: "/hero/image1.jpg" },
  { type: "image", src: img, alt: "Expert technician repairing iPhone screen" },
  { type: "image", src: imgg, alt: "Expert technician repairing iPhone screen" },
  { type: "image", src: iphones, alt: "Expert technician repairing iPhone screen" },
  { type: "image", src: imagee, alt: "Students learning chip-level repair in lab" },
];

/* Auto-changing sentences */
const tagLines = [
  "Master iPhone & Android repair, chip-level diagnostics, and advanced software solutions — taught by certified experts.",
  "Launch your mobile repair career in just 90 days with hands-on training.",
  "Learn live device teardowns, EDL mode, and custom ROM flashing.",
  "Get 100% job placement with top repair shops across the country.",
  "Join 10,000+ students who are now earning $50K+ as mobile engineers.",
];

/* NEW: 6 words that replace "Future" */
const futureWords = [
  "Future", "Skilled", "Pro", "Elite", "Expert", "Master"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  /* Auto-rotate carousel */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* Auto-rotate sentence */
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % tagLines.length);
    }, 5000);
    return () => clearInterval(textInterval);
  }, []);

  /* Auto-rotate "Future" word */
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % futureWords.length);
    }, 5000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-gradient-to-b from-[#F37021]/5 via-white to-[#F37021]/5 overflow-hidden">
      {/* Subtle Background Orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-16 sm:top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#F37021]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-16 sm:bottom-20 right-10 sm:right-20 w-60 sm:w-80 h-60 sm:h-80 bg-red-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* LEFT: CAROUSEL */}
        <div className="relative h-64 sm:h-80 md:h-full md:min-h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
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
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white w-6 sm:w-8" : "bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="text-center md:text-left space-y-5 sm:space-y-6 order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Empowering{" "}
              {/* AUTO-CHANGING "FUTURE" WORD */}
              <span className="inline-block min-w-[180px] text-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] to-red-600"
                  >
                    {futureWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">Mobile Engineers</span>
            </h1>

            {/* AUTO-CHANGING SENTENCE */}
            <div className="mt-3 h-20 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed"
                >
                  {tagLines[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#F37021]" />
              <span className="font-medium">18-Days Intensive Repair Course</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <span className="font-medium">100% Job Placement</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              <span className="font-medium">Certified Curriculum</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-[#F37021]/50 transition-all duration-300 whitespace-nowrap"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=zMjvlr7nOiM"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#F37021] font-bold text-base sm:text-lg rounded-full border-2 border-[#F37021] hover:bg-[#F37021]/5 transition-all shadow-lg whitespace-nowrap"
            >
              Get Free Demo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 text-center pt-6 sm:pt-8 border-t border-gray-200"
          >
            {[
              { value: "500+", label: "Students Trained" },
              { value: "6+", label: "Years Excellence" },
              { value: "100%", label: "Job Placement" },
              { value: "4.9", label: "Student Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#F37021]">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#F37021] rounded-full flex justify-center"
        >
          <div className="w-1 h-2 sm:h-3 bg-[#F37021] rounded-full mt-1.5 sm:mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;