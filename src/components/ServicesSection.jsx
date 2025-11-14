/*  Courses + Services – Unified Section  */
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import {
  BookOpen, Zap, Award, Clock, Star, Shield, Wrench, Battery,
  ChevronRight, ExternalLink, Users, Trophy, Globe, CheckCircle,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

import iphones from "../assets/iphones.png";
import iwatch from "../assets/iwatch.png";
import mac from "../assets/mac.png";
import ipod from "../assets/ipod.png";

/* ------------------- DATA ------------------- */
const courses = [
  {
    type: "course",
    name: "iPhone Expert Course",
    duration: "3 Months",
    level: "Intermediate",
    students: "2,847",
    rating: 4.9,
    gradient: "from-[#F37021] to-red-600",
    icon: <BookOpen className="w-7 h-7 sm:w-8 sm:h-8" />,
    features: ["Live iPhone Teardowns", "Apple-Certified Tools", "1-on-1 Mentorship"],
    badge: "BEST SELLER",
    badgeColor: "from-yellow-400 to-amber-600",
    live: true,
    support: "24/7 Discord",
    price: "$899",
    originalPrice: "$1,499",
    link: "/courses/iphone-expert",
  },
  {
    type: "course",
    name: "Advanced Android Service",
    duration: "2 Months",
    level: "Advanced",
    students: "3,102",
    rating: 4.8,
    gradient: "from-[#F37021] to-orange-700",
    icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8" />,
    features: ["EDL Mode Mastery", "Custom ROM Flashing", "Multi-Brand Repair"],
    badge: "FAST TRACK",
    badgeColor: "from-green-400 to-emerald-600",
    live: false,
    support: "Email + Forum",
    price: "$699",
    originalPrice: "$1,199",
    link: "/courses/android-advanced",
  },
  {
    type: "course",
    name: "Mobile Chip Engineering",
    duration: "6 Months",
    level: "Expert",
    students: "1,593",
    rating: 5.0,
    gradient: "from-red-600 to-purple-700",
    icon: <Award className="w-7 h-7 sm:w-8 sm:h-8" />,
    features: ["BGA Reballing", "Oscilloscope Training", "Schematic Reading"],
    badge: "ELITE",
    badgeColor: "from-purple-500 to-pink-600",
    live: true,
    support: "Lifetime Access",
    price: "$1,999",
    originalPrice: "$2,999",
    link: "/courses/chip-engineering",
  },
];

const services = [
  {
    type: "service",
    img: iphones,
    title: "iPhone Repair",
    turnaround: "30–60 min",
    warranty: "180 Days",
    price: "From $89",
    gradient: "from-[#F37021] to-red-600",
    badge: "30 MIN FIX",
    badgeColor: "from-yellow-400 to-amber-600",
    features: ["Genuine Parts", "Same-Day Service", "Data Privacy"],
    link: "/repair/iphone",
  },
  {
    type: "service",
    img: iwatch,
    title: "Apple Watch Repair",
    turnaround: "1–2 Hours",
    warranty: "90 Days",
    price: "From $79",
    gradient: "from-[#F37021] to-orange-700",
    badge: "FASTEST",
    badgeColor: "from-green-400 to-emerald-600",
    features: ["All Series", "Taptic Engine", "Water Resistance"],
    link: "/repair/watch",
  },
  {
    type: "service",
    img: mac,
    title: "MacBook Repair",
    turnaround: "1–3 Days",
    warranty: "365 Days",
    price: "From $199",
    gradient: "from-red-600 to-[#F37021]",
    badge: "EXPERT",
    badgeColor: "from-purple-500 to-pink-600",
    features: ["Chip-Level Fix", "Retina Display", "Liquid Recovery"],
    link: "/repair/macbook",
  },
  {
    type: "service",
    img: ipod, // <-- your iPod image here
    title: "iPod Repair",
    turnaround: "1–2 Hours",
    warranty: "90 Days",
    price: "From $49",
    gradient: "from-indigo-500 to-blue-600",
    badge: "POPULAR",
    badgeColor: "from-cyan-400 to-blue-500",
    features: ["Battery Replacement", "Audio Jack Fix", "Software Restore"],
    link: "/repair/ipod",
  },
];


/* ------------------- HOOK ------------------- */
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

/* ------------------- MAIN SECTION ------------------- */
const CoursesAndServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#F37021]/5 via-white to-gray-100 overflow-hidden relative"
    >
      {/* Floating Orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
        <div className="absolute top-16 sm:top-20 left-8 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#F37021]/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 sm:bottom-32 right-8 sm:right-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-tl from-purple-500/20 to-[#F37021]/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ---------- HERO HEADING ---------- */}
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
            {"Our Courses".split("").map((c, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -60 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                className="inline-block"
                style={{ transform: "translateZ(40px)" }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light mb-8"
          >
            Become a <span className="font-bold text-[#F37021]">certified mobile engineer</span> – or get your device fixed fast.
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
              { icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />, value: "2000+", label: "Placed" },
              { icon: <Star className="w-6 h-6 sm:w-7 sm:h-7" />, value: "4.9", label: "Rating" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex flex-col items-center min-w-[70px]"
              >
                <div className="text-[#F37021] mb-1">{s.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------- COURSES GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16">
          {courses.map((c, i) => (
            <UnifiedCard key={i} {...c} index={i} />
          ))}
        </div>

        {/* ---------- QUICK REPAIR SERVICES ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Need a <span className="text-[#F37021]">Quick Fix</span>?
          </h3>
          <p className="mt-2 text-gray-600">Same-day repairs with genuine parts.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <UnifiedCard key={i} {...s} index={i + courses.length} />
          ))}
        </div>

        {/* ---------- CTA ---------- */}
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

/* ------------------- UNIFIED CARD ------------------- */
const UnifiedCard = ({
  type,
  name,
  title,
  duration,
  turnaround,
  level,
  students,
  rating,
  warranty,
  gradient,
  icon,
  img,
  features,
  badge,
  badgeColor,
  live,
  support,
  price,
  originalPrice,
  link,
  index,
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

  const handleLeave = () => {
    if (isDesktop) { mouseX.set(0); mouseY.set(0); }
  };

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
        className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500"
      >
        <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity`} />

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.12 + 0.2, type: "spring" }}
            className={`absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-xl flex items-center gap-1 text-[10px] sm:text-xs`}
            style={isDesktop ? { transform: "translateZ(60px)" } : {}}
          >
            {badge}
          </motion.div>
        )}

        {/* Image / Icon */}
        {type === "service" ? (
          <motion.div
            className="h-48 sm:h-56 overflow-hidden"
            whileHover={{ scale: 1.06 }}
            style={isDesktop ? { transform: "translateZ(50px)" } : {}}
          >
            <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        ) : (
          <motion.div
            className="flex justify-center py-6"
            style={isDesktop ? { transform: "translateZ(50px)" } : {}}
          >
            <div className="p-4 bg-gradient-to-br from-[#F37021]/10 to-red-100 rounded-2xl shadow-inner">
              {icon}
            </div>
          </motion.div>
        )}

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-3" style={isDesktop ? { transform: "translateZ(40px)" } : {}}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 text-center">
            {type === "course" ? name : title}
          </h3>

          {/* Time */}
          <div className="flex items-center justify-center gap-2 text-[#F37021] font-semibold text-sm sm:text-base">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{type === "course" ? duration : turnaround}</span>
          </div>

          {/* Price */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-gray-900">{price}</div>
            {originalPrice && (
              <div className="text-xs sm:text-sm text-green-600 font-bold">
                Save {Math.round((1 - parseInt(price.slice(1)) / parseInt(originalPrice.slice(1))) * 100)}%
              </div>
            )}
          </div>

          {/* Small Details */}
          <div className="space-y-1.5 text-xs sm:text-sm text-gray-700">
            {type === "course" ? (
              <>
                <div className="flex justify-between"><span>Level:</span><span className="font-bold text-[#F37021]">{level}</span></div>
                <div className="flex justify-between"><span>Students:</span><span>{students}</span></div>
                <div className="flex justify-between"><span>Support:</span><span>{support}</span></div>
              </>
            ) : (
              <>
                <div className="flex justify-between"><span>Warranty:</span><span className="font-bold text-green-600">{warranty}</span></div>
                <div className="flex justify-center gap-1">
                  {features.slice(0, 2).map((f, i) => (
                    <span key={i} className="inline-flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-600" />{f}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Rating (courses only) */}
          {type === "course" && (
            <div className="flex justify-center items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-bold">{rating}</span>
              <span className="text-gray-500 text-xs">({students})</span>
            </div>
          )}

          {/* SEE MORE */}
          <motion.a
            href={link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-[#F37021]/50 transition-all"
          >
            See More
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.a>
        </div>

        {/* Shine */}
        <motion.div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CoursesAndServicesSection;