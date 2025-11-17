/*  Expert Programs + Repair Services – BADGE RESPONSIVE, NO CUT-OFF  */
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import {
  Clock, Star, ChevronRight, ArrowRight, Zap, Shield, CheckCircle,Users ,Trophy 
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

import iphones from "../assets/iphones.png";
import iwatch   from "../assets/iwatch.png";
import mac      from "../assets/mac.png";
import ipod     from "../assets/ipod.png";

/* ------------------- SERVICE DATA ------------------- */
const initialServices = [
  {
    img: iphones,
    title: "iPhone Repair",
    turnaround: "30–60 min",
    warranty: "180 Days",
    price: "From ₹899",
    gradient: "from-[#F37021] to-red-600",
    badge: "30 MIN FIX",
    badgeColor: "from-yellow-400 to-amber-600",
    features: ["Genuine Parts", "Same-Day Service", "Data Privacy"],
    link: "/repair/iphone",
  },
  {
    img: iwatch,
    title: "Apple Watch Repair",
    turnaround: "1–2 Hours",
    warranty: "90 Days",
    price: "From ₹799",
    gradient: "from-[#F37021] to-orange-700",
    badge: "FASTEST",
    badgeColor: "from-green-400 to-emerald-600",
    features: ["All Series", "Taptic Engine", "Water Resistance"],
    link: "/repair/watch",
  },
  {
    img: mac,
    title: "MacBook Repair",
    turnaround: "1–3 Days",
    warranty: "365 Days",
    price: "From ₹1,999",
    gradient: "from-red-600 to-[#F37021]",
    badge: "EXPERT",
    badgeColor: "from-purple-500 to-pink-600",
    features: ["Chip-Level Fix", "Retina Display", "Liquid Recovery"],
    link: "/repair/macbook",
  },
  {
    img: ipod,
    title: "iPod Repair",
    turnaround: "1–2 Hours",
    warranty: "90 Days",
    price: "From ₹499",
    gradient: "from-indigo-500 to-blue-600",
    badge: "POPULAR",
    badgeColor: "from-cyan-400 to-blue-500",
    features: ["Battery Replacement", "Audio Jack Fix", "Software Restore"],
    link: "/repair/ipod",
  },
];

/* ------------------- HOOKS ------------------- */
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
  const [services] = useState(initialServices);
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

        {/* HERO – REDUCED HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] via-[#F37021] to-[#F37021] mb-4 leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {"Our Expert Programs & Solutions".split("").map((c, i) => (
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
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light"
          >
            Master mobile engineering or fix your device in <span className="font-bold text-[#F37021]">minutes</span> — with India’s #1 repair & training brand.
          </motion.p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10">
            {[
              { icon: <Users className="w-7 h-7" />, value: "500+", label: "Students Trained" },
              { icon: <Trophy className="w-7 h-7" />, value: "250+", label: "Jobs Secured" },
              { icon: <Star className="w-7 h-7" />, value: "4.9", label: "Avg Rating" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                className="text-center group"
              >
                <div className="text-[#F37021] mb-2 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EXPERT PROGRAMS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F37021]/10 to-red-600/10 px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5 text-[#F37021]" />
            <span className="font-bold text-[#F37021]">Our Expert Programs</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Become a <span className="text-[#F37021]">Certified Pro</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            From iPhone mastery to chip-level engineering — hands-on, job-ready training.
          </p>

          {/* VIEW ALL COURSES BUTTON */}
          <motion.a
            href="/courses"
            whileHover={{ scale: 1.06, boxShadow: "0 20px 40px rgba(243, 112, 33, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-black text-lg rounded-full shadow-2xl hover:shadow-[#F37021]/40 transition-all duration-300 group"
          >
            View All Courses
            <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* REPAIR SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Need a <span className="text-[#F37021]">Quick Fix</span>?
          </h3>
          <p className="text-gray-600">Same-day repairs • Genuine parts • Full warranty</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} isDesktop={isDesktop} />
          ))}
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
           <motion.a
  href="https://wa.me/+918304952266"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[#F37021]/60 transition-all duration-300"
>
            Start Your Journey Today
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------- SERVICE CARD – BADGE RESPONSIVE ------------------- */
const ServiceCard = ({
  img, title, turnaround, warranty, price, gradient, badge, badgeColor, features, link, index, isDesktop
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={() => isDesktop && (mouseX.set(0), mouseY.set(0))}
        style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        whileHover={isDesktop ? { scale: 1.06, z: 100 } : { scale: 1.03 }}
        className="relative bg-white/80 backdrop-blur-2xl rounded-3xl overflow-visible shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-40 blur-3xl transition-opacity`} />

        {/* BADGE — RESPONSIVE & NO CUT-OFF */}
        {badge && (
          <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
            className={`
              absolute left-1/2 -translate-x-1/2 z-20 shadow-2xl
              bg-gradient-to-r ${badgeColor} text-white font-bold rounded-full
              /* Mobile: Smaller, inside card */
              top-3 text-[10px] px-2.5 py-1
              /* Tablet & Up: Larger, outside */
              md:top-[-14px] md:text-xs md:px-3.5 md:py-1.5
            `}
            style={isDesktop ? { transform: "translateZ(80px)" } : {}}
          >
            {badge}
          </motion.div>
        )}

        {/* Image */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="p-6 space-y-4" style={isDesktop ? { transform: "translateZ(60px)" } : {}}>
          <h3 className="text-xl md:text-2xl font-black text-gray-900 text-center">{title}</h3>
          <div className="flex items-center justify-center gap-2 text-[#F37021] font-bold">
            <Clock className="w-5 h-5" />
            <span>{turnaround}</span>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-gray-900">{price}</div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-center items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="font-bold text-green-600">{warranty} Warranty</span>
            </div>
            <div className="flex justify-center gap-3 flex-wrap">
              {features.slice(0, 2).map((f, i) => (
                <span key={i} className="flex items-center gap-1 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-600" /> {f}
                </span>
              ))}
            </div>
          </div>
          <motion.a
            href={link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full block text-center py-3 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-[#F37021]/50 transition-all"
          >
            Book Now
          </motion.a>
        </div>

        {/* Shine Sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.9 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CoursesAndServicesSection;