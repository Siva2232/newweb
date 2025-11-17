/*  CoursesSection.jsx – NOV 16, 2025 | 100% STABLE | Links to DetailedCourse */
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import {
  BookOpen, Clock, Zap, ChevronRight, Star, Award, Users, Trophy, Globe,
  CheckCircle, IndianRupee
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// === COURSE IMAGES ===
import offline from "../assets/offline.png";
import online from "../assets/online.png";
import android from "../assets/android.png";

// === MOCK DATA WITH IDS ===
const initialCourses = [
  {
    id: "iphone-offline",
    name: "iPhone Basic to Advanced Level Repair Course (Offline)",
    duration: "18 Days",
    description: "Master iPhone diagnostics, chip replacement, and full device servicing.",
    level: "Expert",
    students: "250+",
    rating: 4.9,
    gradient: "from-[#F37021] to-red-600",
    icon: <BookOpen className="w-7 h-7 sm:w-8 sm:h-8" />,
    features: ["Live iPhone Teardowns", "Apple-Certified Tools", "1-on-1 Mentorship"],
    badge: "BEST SELLER",
    badgeColor: "from-yellow-400 to-amber-600",
    live: true,
    certificate: true,
    support: "Whatsapp",
    price: "₹60,000/-",
    originalPrice: "₹72,000",
    image: offline,
  },
  {
    id: "iphone-online",
    name: "iPhone Advanced Level Repair Course (Online)",
    duration: "3 Months",
    description: "Comprehensive training on Android software flashing, repairs, and board work.",
    level: "Advanced",
    students: "150+",
    rating: 4.8,
    gradient: "from-[#F37021] to-orange-700",
    icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8" />,
    features: ["EDL Mode Mastery", "Custom ROM Flashing", "Multi-Brand Repair"],
    badge: "FAST TRACK",
    badgeColor: "from-green-400 to-emerald-600",
    live: false,
    certificate: true,
    support: "Whatsapp",
    price: "₹24,999/-",
    originalPrice: "₹30,000",
    image: online,
  },
  {
    id: "combo-online",
    name: "iPhone & Android Advanced Course (Online)",
    duration: "12 Months",
    description: "Learn micro-soldering, circuit tracing, power supply testing, and IC replacement.",
    level: "Expert",
    students: "250+",
    rating: 5.0,
    gradient: "from-red-600 to-purple-700",
    icon: <Award className="w-7 h-7 sm:w-8 sm:h-8" />,
    features: ["BGA Reballing", "Oscilloscope Training", "Schematic Reading"],
    badge: "ELITE",
    badgeColor: "from-purple-500 to-pink-600",
    live: true,
    certificate: true,
    support: "Whatsapp",
    price: "₹2,499/month",
    originalPrice: "₹2,999/month",
    image: android,
  },
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
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-gradient-to-b from-orange-50 via-white to-gray-50 overflow-hidden relative"
      style={{ perspective: isDesktop ? 2000 : "none" }}
    >
      {/* PARALLAX ORBS */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: smoothY, opacity: smoothOpacity }}>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F37021]/30 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-[#F37021]/30 rounded-full blur-3xl animate-pulse delay-700" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 border-2 border-[#F37021]/10 rounded-full"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] via-red-600 to-orange-700 mb-4 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {"Learn With Us".split("").map((c, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -60 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                className="inline-block"
                style={{ transform: "translateZ(50px)" }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light"
          >
            Become a <span className="font-bold text-[#F37021]">Certified Mobile Engineer</span> with hands-on training.
          </motion.p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10">
            {[
              { icon: <Users className="w-7 h-7" />, value: "700+", label: "Students" },
              { icon: <Trophy className="w-7 h-7" />, value: "500+", label: "Placed" },
              { icon: <Star className="w-7 h-7" />, value: "4.9", label: "Rating" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/50 text-center min-w-[100px]"
              >
                <div className="text-[#F37021] mb-2">{s.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* COURSE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} index={i} isDesktop={isDesktop} />
          ))}
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="https://wa.me/+918304952266"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, boxShadow: "0 25px 50px rgba(243, 112, 33, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-black text-xl rounded-full shadow-3xl hover:shadow-[#F37021]/50 transition-all duration-300 group"
          >
            Enroll Now via WhatsApp
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// === COURSE CARD ===
const CourseCard = ({
  id, name, duration, description, level, students, rating, gradient, icon, features,
  badge, badgeColor, live, support, price, originalPrice, image, index, isDesktop
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);

  const handleMouse = (e) => {
    if (!isDesktop || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  const clean = (p) => parseInt(p.replace(/[^\d]/g, ""), 10) || 0;
  const current = clean(price);
  const original = clean(originalPrice);
  const savings = original > current ? Math.round((1 - current / original) * 100) : 0;

  // Card content to avoid repetition
  const cardContent = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={() => isDesktop && (mouseX.set(0), mouseY.set(0))}
      style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      whileHover={isDesktop ? { scale: 1.06, z: 100 } : { scale: 1.03 }}
      className="relative bg-white/80 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-40 blur-3xl transition-opacity`} />

      {badge && (
        <motion.div
          initial={{ scale: 0, y: -20 }}
          whileInView={{ scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
          className={`absolute left-1/2 -translate-x-1/2 z-20 shadow-2xl bg-gradient-to-r ${badgeColor} text-white font-bold rounded-full top-3 text-[10px] px-2.5 py-1 md:top-[-14px] md:text-xs md:px-3.5 md:py-1.5`}
          style={isDesktop ? { transform: "translateZ(80px)" } : {}}
        >
          {badge}
        </motion.div>
      )}

      {live && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full shadow-lg"
          style={isDesktop ? { transform: "translateZ(80px)" } : {}}
        />
      )}

      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="p-6 space-y-4" style={isDesktop ? { transform: "translateZ(60px)" } : {}}>
        <div className="flex justify-center text-[#F37021]">{icon}</div>

        <h3 className="text-xl md:text-2xl font-black text-gray-900 text-center line-clamp-2">{name}</h3>

        <div className="flex items-center justify-center gap-2 text-[#F37021] font-bold">
          <Clock className="w-5 h-5" />
          <span>{duration}</span>
        </div>

        <p className="text-sm text-gray-600 text-center line-clamp-2">{description}</p>

        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-black text-gray-900 flex items-center">
              <IndianRupee className="w-5 h-5" />
              {current.toLocaleString("en-IN")}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through opacity-80">
                <IndianRupee className="w-4 h-4 inline" />
                {original.toLocaleString("en-IN")}
              </span>
            )}
          </div>
          {savings > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm rounded-full shadow-lg"
            >
              Save {savings}%
            </motion.span>
          )}
        </div>

        <div className="flex justify-center gap-3 flex-wrap text-xs text-gray-600">
          {features.slice(0, 2).map((f, i) => (
            <span key={i} className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-600" /> {f}
            </span>
          ))}
        </div>

        <div className="flex justify-center items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-500 fill-current" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-1 font-bold text-sm">{rating}</span>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={`/course/${id}`}
            className="w-full block text-center py-3 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-[#F37021]/50 transition-all"
            onClick={(e) => !isDesktop && e.stopPropagation()}
          >
            View Details
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ x: "-150%" }}
        whileHover={{ x: "150%" }}
        transition={{ duration: 0.9 }}
      />
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
      className="relative group"
    >
      {/* Wrap card in Link for mobile only */}
      {isDesktop ? (
        cardContent
      ) : (
        <Link
          to={`/course/${id}`}
          className="block"
          onClick={(e) => {
            // Prevent navigation if clicking the View Details button
            if (e.target.closest("a")) {
              e.stopPropagation();
            }
          }}
        >
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default CoursesSection;