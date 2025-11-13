import { motion, useMotionValue, useTransform, useSpring, useScroll, useTransform as transformScroll } from "framer-motion";
import { BookOpen, Clock, Zap, ChevronRight, Star, Award, Users, Trophy, PlayCircle, Shield, Headphones, Globe, CheckCircle } from "lucide-react";
import { useRef } from "react";

const courses = [
  {
    name: "iPhone Expert Course",
    duration: "3 Months",
    description: "Master iPhone diagnostics, chip replacement, and full device servicing.",
    level: "Intermediate",
    students: "2,847",
    rating: 4.9,
    gradient: "from-orange-500 to-red-600",
    icon: <BookOpen className="w-8 h-8" />,
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
    gradient: "from-amber-500 to-orange-700",
    icon: <Zap className="w-8 h-8" />,
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
    icon: <Award className="w-8 h-8" />,
    features: ["BGA Reballing", "Oscilloscope Training", "Schematic Reading"],
    badge: "ELITE",
    badgeColor: "from-purple-500 to-pink-600",
    live: true,
    certificate: true,
    support: "Lifetime Access",
    price: "$1,999",
    originalPrice: "$2,999",
  },
   {
    name: "iPhone Expert Course",
    duration: "3 Months",
    description: "Master iPhone diagnostics, chip replacement, and full device servicing.",
    level: "Intermediate",
    students: "2,847",
    rating: 4.9,
    gradient: "from-orange-500 to-red-600",
    icon: <BookOpen className="w-8 h-8" />,
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
    gradient: "from-amber-500 to-orange-700",
    icon: <Zap className="w-8 h-8" />,
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
    icon: <Award className="w-8 h-8" />,
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

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = transformScroll(scrollYProgress, [0, 1], [100, -100]);
  const opacity = transformScroll(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-orange-50 via-white to-gray-100 overflow-hidden relative"
      style={{ perspective: 1500 }}
    >
      {/* Floating Background Orbs + NEW: Animated Lines */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-orange-600/20 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 border border-orange-300/10 rounded-full"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Epic Title + NEW: Subtitle + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
  className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 mb-6 leading-tight"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }}
>
            {"Our Courses".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80, rotateX: -70 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                className="inline-block"
                style={{ transform: "translateZ(50px)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light mb-8"
          >
            Choose your path to becoming a <span className="font-bold text-orange-600">certified mobile engineer</span>.
          </motion.p>

          {/* NEW: Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-8 md:gap-16 flex-wrap text-center"
          >
            {[
              { icon: <Users />, value: "700+", label: "Total Students" },
              { icon: <Trophy />, value: "2000+", label: "Graduates Placed" },
              { icon: <Globe />, value: "1", label: "Countries" },
              { icon: <Star />, value: "4.9", label: "Avg Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-orange-600 mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Holographic Course Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} index={i} />
          ))}
        </div>

        {/* CTA Banner + NEW: Trust Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-12">
            <a
              href="/enroll"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Journey
                <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ChevronRight className="w-6 h-6" />
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

          {/* NEW: Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center items-center gap-6 flex-wrap text-gray-600 text-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>100% Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-blue-600" />
              <span>Lifetime Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-600" />
              <span>Industry-Recognized Certificate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// === HOLOGRAPHIC 3D COURSE CARD ===
const CourseCard = ({
  name, duration, description, level, students, rating, gradient, icon, features,
  badge, badgeColor, live, certificate, support, price, originalPrice, index
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(smoothY, [-300, 300], [20, -20]);
  const rotateY = useTransform(smoothX, [-300, 300], [-20, 20]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: index * 0.2, type: "spring", stiffness: 120 }}
      className="relative group"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.06, z: 100 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="relative p-8 rounded-3xl bg-white/95 backdrop-blur-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500"
      >
        {/* Holographic Gradient Glow */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-700`} />

        {/* BADGE: Best Seller / Fast Track / Elite */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
          className={`absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1`}
          style={{ transform: "translateZ(80px)" }}
        >
          {badge === "BEST SELLER" && <Trophy className="w-3 h-3" />}
          {badge === "FAST TRACK" && <Zap className="w-3 h-3" />}
          {badge === "ELITE" && <Award className="w-3 h-3" />}
          {badge}
        </motion.div>

        {/* Level Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
          className="absolute top-4 right-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full"
          style={{ transform: "translateZ(60px)" }}
        >
          {level}
        </motion.div>

        {/* Live Indicator */}
        {live && (
          <motion.div
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"
            style={{ transform: "translateZ(60px)" }}
          />
        )}

        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-6 flex justify-center"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="p-5 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl shadow-inner">
            {icon}
          </div>
        </motion.div>

        {/* Course Name */}
        <motion.h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center" style={{ transform: "translateZ(40px)" }}>
          {name}
        </motion.h3>

        {/* Duration */}
        <motion.div className="flex items-center justify-center gap-2 text-orange-600 font-semibold mb-4" style={{ transform: "translateZ(30px)" }}>
          <Clock className="w-5 h-5" />
          <span>{duration}</span>
        </motion.div>

        {/* Description */}
        <motion.p className="text-gray-600 mb-6 leading-relaxed text-center" style={{ transform: "translateZ(20px)" }}>
          {description}
        </motion.p>

        {/* Features */}
        <motion.ul className="space-y-2 mb-6" style={{ transform: "translateZ(25px)" }}>
          {features.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
              {f}
            </motion.li>
          ))}
        </motion.ul>

        {/* NEW: Support & Certificate */}
        <motion.div className="flex justify-center gap-4 mb-6 text-xs text-gray-600" style={{ transform: "translateZ(30px)" }}>
          {certificate && (
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-purple-600" />
              <span>Certificate</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Headphones className="w-4 h-4 text-blue-600" />
            <span>{support}</span>
          </div>
        </motion.div>

        {/* Price */}
        <motion.div className="text-center mb-6" style={{ transform: "translateZ(35px)" }}>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-black text-gray-900">{price}</span>
            <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
          </div>
          <div className="text-sm text-green-600 font-bold">Save {Math.round((1 - parseInt(price.slice(1)) / parseInt(originalPrice.slice(1))) * 100)}%</div>
        </motion.div>

        {/* Stats */}
        <motion.div className="flex justify-between items-center text-sm" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-bold">{rating}</span>
            <span className="text-gray-500">({students})</span>
          </div>
          <motion.div whileHover={{ scale: 1.2 }} className="text-orange-600 font-bold flex items-center gap-1">
            Enroll <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Shine Sweep */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CoursesSection;