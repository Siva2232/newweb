import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { BookOpen, Clock, Zap, ChevronRight, Star, Award, Users, Trophy, PlayCircle, Shield, Headphones, Globe, CheckCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const courses = [
  {
    name: "iPhone Expert Course",
    duration: "3 Months",
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
    price: "$899",
    originalPrice: "$1,499",
  },
  {
    name: "Advanced Android Service",
    duration: "2 Months",
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
    price: "$699",
    originalPrice: "$1,199",
  },
  {
    name: "Mobile Chip Engineering",
    duration: "6 Months",
    description: "Learn micro-soldering, circuit tracing, power supply testing, and IC replacement.",
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
    price: "$1,999",
    originalPrice: "$2,999",
  },
];

// === Custom Hook: Detect Desktop for 3D Tilt ===
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

const CoursesSection = () => {
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
      {/* Floating Background Orbs */}
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
        {/* MAIN HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F37021] mb-4 sm:mb-6 leading-tight"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-light mb-8 px-2"
          >
            Choose your path to becoming a <span className="font-bold text-[#F37021]">certified mobile engineer</span>.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-center"
          >
            {[
              { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />, value: "700+", label: "Total Students" },
              { icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />, value: "2000+", label: "Graduates Placed" },
              { icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7" />, value: "1", label: "Countries" },
              { icon: <Star className="w-6 h-6 sm:w-7 sm:h-7" />, value: "4.9", label: "Avg Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex flex-col items-center min-w-[80px]"
              >
                <div className="text-[#F37021] mb-1">{stat.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} index={i} />
          ))}
        </div>

        {/* CTA + Trust Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block mb-10 sm:mb-12 w-full sm:w-auto">
            <a
              href="/enroll"
              className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 px-8 py-4 sm:px-12 sm:py-6 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-[#F37021]/50 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey
                <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.7 }}
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-600 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span>100% Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span>Lifetime Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span>Industry-Recognized Certificate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// === COURSE CARD (3D Tilt only on Desktop) ===
const CourseCard = ({
  name, duration, description, level, students, rating, gradient, icon, features,
  badge, badgeColor, live, certificate, support, price, originalPrice, index
}) => {
  const isDesktop = useIsDesktop();
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isDesktop) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        whileHover={isDesktop ? { scale: 1.05, z: 50 } : { scale: 1.02 }}
        className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700`} />

        {/* Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
          className={`absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-xl flex items-center gap-1 text-center text-[10px] sm:text-xs`}
          style={isDesktop ? { transform: "translateZ(60px)" } : {}}
        >
          {badge === "BEST SELLER" && <Trophy className="w-3 h-3" />}
          {badge === "FAST TRACK" && <Zap className="w-3 h-3" />}
          {badge === "ELITE" && <Award className="w-3 h-3" />}
          {badge}
        </motion.div>

        {live && (
          <motion.div
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-3 sm:top-4 left-3 sm:left-4 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"
            style={isDesktop ? { transform: "translateZ(50px)" } : {}}
          />
        )}

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-5 sm:mb-6 flex justify-center"
          style={isDesktop ? { transform: "translateZ(40px)" } : {}}
        >
          <div className="p-4 sm:p-5 bg-gradient-to-br from-[#F37021]/10 to-red-100 rounded-2xl sm:rounded-3xl shadow-inner">
            <div className="text-[#F37021]">{icon}</div>
          </div>
        </motion.div>

        <motion.h3
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center"
          style={isDesktop ? { transform: "translateZ(30px)" } : {}}
        >
          {name}
        </motion.h3>

        <motion.div
          className="flex items-center justify-center gap-2 text-[#F37021] font-semibold mb-3 sm:mb-4 text-sm sm:text-base"
          style={isDesktop ? { transform: "translateZ(25px)" } : {}}
        >
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{duration}</span>
        </motion.div>

        <motion.p
          className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-center text-sm sm:text-base px-2"
          style={isDesktop ? { transform: "translateZ(20px)" } : {}}
        >
          {description}
        </motion.p>

        <motion.ul className="space-y-2 mb-5 sm:mb-6 text-xs sm:text-sm" style={isDesktop ? { transform: "translateZ(25px)" } : {}}>
          {features.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.5 + i * 0.1 }}
              className="flex items-center gap-2 text-gray-700"
            >
              <div className="w-1.5 h-1.5 bg-[#F37021] rounded-full flex-shrink-0" />
              {f}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="text-center mb-5 sm:mb-6" style={isDesktop ? { transform: "translateZ(30px)" } : {}}>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl sm:text-3xl font-black text-gray-900">{price}</span>
            <span className="text-sm sm:text-base text-gray-500 line-through">{originalPrice}</span>
          </div>
          <div className="text-xs sm:text-sm text-green-600 font-bold">
            Save {Math.round((1 - parseInt(price.slice(1)) / parseInt(originalPrice.slice(1))) * 100)}%
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between items-center text-xs sm:text-sm"
          style={isDesktop ? { transform: "translateZ(25px)" } : {}}
        >
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
            <span className="font-bold">{rating}</span>
            <span className="text-gray-500">({students})</span>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="text-[#F37021] font-bold flex items-center gap-1">
            Enroll <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.div>
        </motion.div>

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

export default CoursesSection;