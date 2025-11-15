/* CoursesSection.jsx – Ultimate Version (Image Cards + Filters + 3D Tilt + Testimonials) */
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import {
  BookOpen, Clock, Zap, ChevronRight, Star, Award, Users, Trophy, Globe,
  Shield, Headphones, CheckCircle, Search, Filter, PlayCircle, Laptop
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

// === IMPORT YOUR IMAGES ===
import offline from "../assets/offline.png";
import online from "../assets/online.png";
import android from "../assets/android.png";

// === COURSES DATA (with images) ===
const allCourses = [
  {
    id: 1,
    name: "iPhone Basic to Advanced Level Repair Course (Offline)",
    duration: "18 Days",
    description: "Master iPhone diagnostics, chip replacement, and full device servicing.",
    level: "Intermediate",
    students: "2,847",
    rating: 4.9,
    price: "₹60,000/-",
    originalPrice: "₹72,000",
    image: offline,
    badge: "BEST SELLER",
    badgeColor: "from-yellow-400 to-amber-600",
    live: true,
    support: "24/7 Discord",
    features: ["Live iPhone Teardowns", "Apple-Certified Tools", "1-on-1 Mentorship"],
  },
  {
    id: 2,
    name: "iPhone Advanced Level Repair Course (Online)",
    duration: "3 Months",
    description: "Comprehensive training on Android software flashing, repairs, and board work.",
    level: "Advanced",
    students: "3,102",
    rating: 4.8,
    price: "₹24,999/-",
    originalPrice: "₹30,000",
    image: online,
    badge: "FAST TRACK",
    badgeColor: "from-green-400 to-emerald-600",
    live: false,
    support: "Email + Forum",
    features: ["EDL Mode Mastery", "Custom ROM Flashing", "Multi-Brand Repair"],
  },
  {
    id: 3,
    name: "iPhone & Android Advanced Course (Online)",
    duration: "12 Months",
    description: "Learn micro-soldering, circuit tracing, power supply testing, and IC replacement.",
    level: "Expert",
    students: "1,593",
    rating: 5.0,
    price: "₹2,499/month",
    originalPrice: "₹5,999/month",
    image: android,
    badge: "ELITE",
    badgeColor: "from-purple-500 to-pink-600",
    live: true,
    support: "Lifetime Access",
    features: ["BGA Reballing", "Oscilloscope Training", "Schematic Reading"],
  },
];

// === HOOKS ===
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

// === TESTIMONIALS & STATS ===
const stats = [
  { icon: <Users className="w-8 h-8" />, value: "12K+", label: "Students Trained" },
  { icon: <Trophy className="w-8 h-8" />, value: "3,842+", label: "Placed" },
  { icon: <Globe className="w-8 h-8" />, value: "58", label: "Countries" },
  { icon: <Star className="w-8 h-8" />, value: "4.9", label: "Rating" },
];

const testimonials = [
  { name: "Vikram Singh", role: "iPhone Graduate", text: "From zero to ₹90K/month in 4 months!", rating: 5 },
  { name: "Anjali Mehta", role: "Android Pro", text: "Now running my own repair chain!", rating: 5 },
  { name: "Rohan Desai", role: "Chip Engineer", text: "Best technical training I’ve ever had.", rating: 5 },
];

// === MAIN COMPONENT ===
const CoursesSection = () => {
  const sectionRef = useRef(null);
  const [courses] = useState(allCourses);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F37021]/5 via-white to-gray-50 overflow-hidden relative">
      {/* Floating Background Orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F37021]/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-[#F37021]/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <motion.h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#F37021] mb-6">
            {"Learn With Us".split("").map((char, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Become a <span className="font-bold text-[#F37021]">certified mobile repair engineer</span> with real hands-on training.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mt-12">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-[#F37021] mb-2">{s.icon}</div>
                <div className="text-3xl font-black text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-[#F37021] focus:outline-none transition"
              />
            </div>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-6 py-3 rounded-full border border-gray-300 focus:border-[#F37021] focus:outline-none"
            >
              <option value="All">All Levels</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredCourses.map((course, i) => (
            <CourseCard key={course.id} {...course} index={i} />
          ))}
        </div>

        {/* Certification Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="my-20 bg-gradient-to-r from-[#F37021] to-red-600 text-white py-16 rounded-3xl px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6">Certification & Lifetime Support</h3>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Industry-recognized certificate • 100% job placement assistance • Lifetime community access
          </p>
          <div className="flex justify-center gap-10 flex-wrap text-lg">
            <div className="flex items-center gap-3"><Award className="w-8 h-8" /> Official Certificate</div>
            <div className="flex items-center gap-3"><Trophy className="w-8 h-8" /> 100% Placement</div>
            <div className="flex items-center gap-3"><Laptop className="w-8 h-8" /> Hybrid Learning</div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">Student Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-orange-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="italic text-gray-700 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F37021] to-red-600 rounded-full" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-xl rounded-full shadow-2xl"
          >
            Enroll Now & Start Earning
            <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronRight className="w-7 h-7" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// === 3D TILT COURSE CARD (with Image) ===
const CourseCard = ({ name, duration, description, level, students, rating, price, originalPrice, image, badge, badgeColor, live, support, features, index }) => {
  const isDesktop = useIsDesktop();
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);

  const handleMouse = (e) => {
    if (!cardRef.current || !isDesktop) return;
    const r = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  const savings = originalPrice ? Math.round((1 - parseInt(price.replace(/[^\d]/g), "") / parseInt(originalPrice.replace(/[^\d]/g), "")) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={() => { if (isDesktop) { mouseX.set(0); mouseY.set(0); } }}
        style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        whileHover={isDesktop ? { scale: 1.05, z: 100 } : { scale: 1.03 }}
        className="relative bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/50 transition-all duration-500"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {badge && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className={`absolute top-4 left-4 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl`}>
              {badge}
            </motion.div>
          )}
          {live && (
            <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full" />
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4" style={isDesktop ? { transform: "translateZ(60px)" } : {}}>
          <h3 className="text-xl font-black text-gray-900 line-clamp-2">{name}</h3>
          <div className="flex items-center gap-2 text-[#F37021] font-semibold">
            <Clock className="w-5 h-5" /> <span>{duration}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-black text-gray-900">{price}</div>
              {originalPrice && <div className="text-sm text-green-600 font-bold">Save {savings}%</div>}
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-[#F37021]">{level}</div>
              <div className="text-xs text-gray-500">{students} students</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`} />
            ))}
            <span className="ml-2 font-bold">{rating}</span>
          </div>

          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.05 }}
            className="w-full block text-center py-3 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold rounded-full shadow-lg"
          >
            Enroll Now
          </motion.a>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.9 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CoursesSection;