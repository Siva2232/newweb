// Services.jsx – Fully Updated & Production-Ready (Nov 2025)
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { 
  Wrench, Clock, Shield, Award, Star, ChevronRight, 
  Search, Zap, CheckCircle 
} from "lucide-react";
import { useRef, useState, useEffect, useMemo, lazy, Suspense } from "react";

import iphones from "../assets/iphones.png";
import iwatch from "../assets/iwatch.png";
import mac from "../assets/mac.png";
import ipod from "../assets/ipod.png";

// Lazy load Hire component for better performance
const Hire = lazy(() => import("../components/Hire"));

// ── DATA: Repair Services ───────────────────────────────
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
    title: "Apple Watch & AirPods Repair",
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
    title: "Android Phone Repair",
    turnaround: "1–2 Hours",
    warranty: "90 Days",
    price: "From ₹499",
    gradient: "from-indigo-500 to-blue-600",
    badge: "POPULAR",
    badgeColor: "from-cyan-400 to-blue-500",
    features: ["Battery Replacement", "Audio Fix", "Software Restore"],
    link: "/repair/android",
  },
];

// ── STATS & TESTIMONIALS ─────────────────────────────────────
const stats = [
  { icon: <Wrench className="w-8 h-8" />, value: "18K+", label: "Devices Fixed" },
  { icon: <Award className="w-8 h-8" />, value: "4.9", label: "Avg Rating" },
  { icon: <Clock className="w-8 h-8" />, value: "30 min", label: "Avg Turnaround" },
  { icon: <Shield className="w-8 h-8" />, value: "180+", label: "Days Warranty" },
];

const testimonials = [
  { name: "Arjun K.", text: "Screen replaced in 25 mins! Perfect.", rating: 5 },
  { name: "Priya S.", text: "MacBook liquid damage fixed — saved my data!", rating: 5 },
  { name: "Rohan M.", text: "Battery still going strong after 2 years!", rating: 5 },
];

// ── HOOK: Desktop Detection ───────────────────────────────────
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
};

// ── MAIN COMPONENT ────────────────────────────────────────────
const Services = () => {
  const sectionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const filteredServices = useMemo(() => {
    return initialServices.filter((service) => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === "All" ||
        service.title.toLowerCase().includes(selectedType.toLowerCase());
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  return (
    <section
      ref={sectionRef}
      className="pt-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen overflow-hidden relative"
      style={{ perspective: isDesktop ? "1500px" : "none" }}
    >
      {/* Floating Background Orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: smoothY, opacity: smoothOpacity }}
      >
        <div className="absolute top-32 left-10 w-[600px] h-[600px] bg-gradient-to-br from-[#F37021]/20 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-purple-600/20 to-[#F37021]/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-red-600 mb-6 leading-tight">
            Repair Services
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-light mb-12">
            Fast, reliable, and <span className="font-bold text-[#F37021]">genuine repairs</span> with up to{" "}
            <span className="font-bold">1-year warranty</span>.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center group"
              >
                <div className="text-[#F37021] mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search device or issue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full border border-gray-300 focus:border-[#F37021] focus:outline-none text-lg shadow-sm transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {["All", "iPhone", "Watch", "MacBook", "Android"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    selectedType === type
                      ? "bg-gradient-to-r from-[#F37021] to-red-600 text-white shadow-lg"
                      : "bg-white border border-gray-300 text-gray-700 hover:border-[#F37021]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {filteredServices.map((service, i) => (
            <RepairCard key={i} {...service} index={i} isDesktop={isDesktop} />
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#F37021] to-red-600 text-white py-20 px-8 rounded-3xl mb-20"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-5xl md:text-6xl font-black mb-12">Why Trust GetFix?</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: <Zap className="w-14 h-14" />, title: "Lightning Fast", desc: "Most repairs done in under 1 hour" },
                { icon: <Shield className="w-14 h-14" />, title: "Genuine Parts", desc: "100% OEM quality guaranteed" },
                { icon: <Award className="w-14 h-14" />, title: "Expert Team", desc: "10+ years Apple & Android mastery" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
                >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-lg opacity-90">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="py-20">
          <h3 className="text-5xl font-bold text-center mb-16 text-gray-900">Happy Customers</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-gray-900 text-xl">- {t.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <motion.a
            href="/book"
            whileHover={{ scale: 1.05 }}
            className="group relative inline-flex items-center gap-6 px-24 py-8 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-black text-3xl rounded-full overflow-hidden shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-4">
              Book Repair Now
              <motion.span
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-10 h-10" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.a>

          <div className="flex justify-center gap-10 mt-12 text-lg text-gray-600">
            <div className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-600" /> Free Diagnostics</div>
            <div className="flex items-center gap-3"><Clock className="w-6 h-6 text-blue-600" /> Open 10AM–8PM Daily</div>
          </div>
        </motion.div>

        {/* Hire Section (Lazy Loaded) */}
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <Hire />
        </Suspense>
      </div>
    </section>
  );
};

// ── 3D Interactive Repair Card ───────────────────────────────
const RepairCard = ({
  img, title, turnaround, warranty, price, badge, badgeColor, features, link, index, isDesktop
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [25, -25]);
  const rotateY = useTransform(smoothX, [-300, 300], [-25, 25]);

  const handleMouseMove = (e) => {
    if (!isDesktop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        whileHover={isDesktop ? { scale: 1.06, z: 50 } : { scale: 1.03 }}
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className={`absolute top-4 left-4 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-5 py-2 rounded-full shadow-2xl`}
          >
            {badge}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-7 space-y-5" style={isDesktop ? { transform: "translateZ(60px)" } : {}}>
          <h3 className="text-2xl font-black text-gray-900">{title}</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#F37021] font-bold">
              <Clock className="w-6 h-6" /> {turnaround}
            </div>
            <div className="flex items-center gap-3 text-green-600 font-bold">
              <Shield className="w-6 h-6" /> {warranty}
            </div>
          </div>

          <div className="text-3xl font-black text-gray-900">{price}</div>

          <ul className="space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 bg-[#F37021] rounded-full flex-shrink-0" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <motion.a
  href="https://wa.me/+919758828258"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="w-full block text-center py-3 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-[#F37021]/50 transition-all"
>
  Book Now
</motion.a>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Services;