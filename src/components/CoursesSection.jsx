/*  CoursesSection.jsx – Pure JSX, Image Cards, Stunning UI  */
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import {
  BookOpen, Clock, Zap, ChevronRight, Star, Award, Users, Trophy, Globe,
  Shield, Headphones, CheckCircle
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

// === COURSE IMAGES (Replace with your actual images) ===
import offline from "../assets/offline.png"
import online from "../assets/online.png"
import android from "../assets/android.png"

// === MOCK DATA WITH IMAGES ===
const initialCourses = [
  {
    name: "iPhone Basic to Advanced Level Repair Course (Offline)",
    duration: "18 Days",
    description: "Master iPhone diagnostics, chip replacement, and full device servicing.",
    level: "Intermediate",
    students: "2,847",
    rating: 4.9,
    gradient: "from-[#F37021] to-red-600",
    icon: <BookOpen className="w-7 h-7 sm:w-8 sm:h-8" />,
    features: ["Live iPhone Teardowns", "Apple-Certified Tools", "1-on-1 Mentorship"],
    badge: "BEST SELLER",
    badgeColor: "from-yellow-400 to-amber-600",
    live: true,
    certificate: true,
    support: "24/7 Discord",
    price: "₹60,000/-",
    originalPrice: "₹72,000",
    image: offline,
  },
  {
    name: "iPhone Advanced Level Repair Course (Online)",
    duration: "3 Months",
    description: "Comprehensive training on Android software flashing, repairs, and board work.",
    level: "Advanced",
    students: "3,102",
    rating: 4.8,
    gradient: "from-[#F37021] to-orange-700",
    icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8" />,
    features: ["EDL Mode Mastery", "Custom ROM Flashing", "Multi-Brand Repair"],
    badge: "FAST TRACK",
    badgeColor: "from-green-400 to-emerald-600",
    live: false,
    certificate: true,
    support: "Email + Forum",
    price: "₹24,999/-",
    originalPrice: "₹30,000",
    image: online,
  },
  {
  name: "iPhone & Android Advanced Course (Online)",
  duration: "12 Months",
  description:
    "Learn micro-soldering, circuit tracing, power supply testing, and IC replacement.",
  level: "Expert",
  students: "1,593",
  rating: 5.0,
  gradient: "from-red-600 to-purple-700",
  icon: <Award className="w-7 h-7 sm:w-8 sm:h-8" />,
  features: ["BGA Reballing", "Oscilloscope Training", "Schematic Reading"],
  badge: "ELITE",
  badgeColor: "from-purple-500 to-pink-600",
  live: true,
  certificate: true,
  support: "Lifetime Access",
  price: "₹2,499/month",
  originalPrice: "₹5999/month",
  image: android,
}
];

// === DESKTOP HOOK ===
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
};

// === MAIN COMPONENT ===
const CoursesSection = () => {
  const sectionRef = useRef(null);
  const [courses] = useState(initialCourses);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#F37021]/5 via-white to-gray-50 overflow-hidden relative"
    >
      {/* Floating Orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
        <div className="absolute top-16 sm:top-20 left-8 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#F37021]/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 sm:bottom-32 right-8 sm:right-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-tl from-purple-500/20 to-[#F37021]/20 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] -translate-x-1/2 -translate-y-1/2 border border-[#F37021]/10 rounded-full"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F37021] mb-4 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {"Learn With Us".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -60 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                className="inline-block"
                style={{ transform: "translateZ(40px)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light mb-8"
          >
            Become a <span className="font-bold text-[#F37021]">certified mobile engineer</span> with hands-on training.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 text-center"
          >
            {[
              { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />, value: "700+", label: "Students" },
              { icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />, value: "500+", label: "Placed" },
              { icon: <Star className="w-6 h-6 sm:w-7 sm:h-7" />, value: "4.9", label: "Rating" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex flex-col items-center min-w-[80px]"
              >
                <div className="text-[#F37021] mb-1">{s.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* COURSE GRID WITH IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[#F37021]/50 transition-all duration-300"
          >
            Enroll Now
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronRight className="w-6 h-6" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// === COURSE CARD WITH IMAGE & 3D TILT ===
const CourseCard = ({
  name, duration, description, level, students, rating, gradient, icon, features,
  badge, badgeColor, live, support, price, originalPrice, image, index
}) => {
  const isDesktop = useIsDesktop();
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [12, -12]);
  const rotateY = useTransform(smoothX, [-300, 300], [-12, 12]);

  const handleMouse = (e) => {
    if (!cardRef.current || !isDesktop) return;
    const r = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };
  const handleLeave = () => { if (isDesktop) { mouseX.set(0); mouseY.set(0); } };

  const clean = (p) => parseInt(p.replace(/[^\d]/g, ""), 10) || 0;
  const savings = originalPrice ? Math.round((1 - clean(price) / clean(originalPrice)) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        whileHover={isDesktop ? { scale: 1.04, z: 60 } : { scale: 1.02 }}
        className="relative bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500"
      >
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity`} />

        {/* Course Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Badge on Image */}
          {badge && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.12 + 0.2, type: "spring" }}
              className={`absolute top-4 left-4 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1`}
            >
              {badge}
            </motion.div>
          )}

          {/* Live Badge */}
          {live && (
            <motion.div
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4" style={isDesktop ? { transform: "translateZ(40px)" } : {}}>
          <div className="flex justify-center">{icon}</div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 text-center line-clamp-2">
            {name}
          </h3>

          <div className="flex items-center justify-center gap-2 text-[#F37021] font-semibold text-sm">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>

          <p className="text-gray-600 text-sm text-center line-clamp-2">{description}</p>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-gray-900">{price}</div>
            {originalPrice && (
              <div className="text-xs text-green-600 font-bold">Save {savings}%</div>
            )}
          </div>

          <div className="space-y-1.5 text-xs text-gray-700">
            <div className="flex justify-between"><span>Level:</span><span className="font-bold text-[#F37021]">{level}</span></div>
            <div className="flex justify-between"><span>Students:</span><span>{students}</span></div>
            <div className="flex justify-between"><span>Support:</span><span>{support}</span></div>
          </div>

          <div className="flex justify-center items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-bold">{rating}</span>
            <span className="text-gray-500 text-xs">({students})</span>
          </div>

          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-[#F37021]/50 transition-all"
          >
            Enroll Now
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CoursesSection;