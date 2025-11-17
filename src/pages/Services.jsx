// Services.jsx – Repair Services with Real Images & #F37021
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { 
  Wrench, Clock, Shield, Award, Star, ChevronRight, 
  Search, ArrowRight, Zap, CheckCircle 
} from "lucide-react";
import { useRef, useState, useEffect, useMemo } from "react";

import iphones from "../assets/iphones.png";
import iwatch   from "../assets/iwatch.png";
import mac      from "../assets/mac.png";
import ipod     from "../assets/ipod.png";

// ── DATA: Your Repair Services ───────────────────────────────
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
    title: "Apple Watch and AirPods Repair",
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
    title: "Android phone Repair",
    turnaround: "1–2 Hours",
    warranty: "90 Days",
    price: "From ₹499",
    gradient: "from-indigo-500 to-blue-600",
    badge: "POPULAR",
    badgeColor: "from-cyan-400 to-blue-500",
    features: ["Battery Replacement", "Audio Jack Fix  ", "Software Restore"],
    link: "/repair/ipod",
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
  { name: "Rohan M.", text: "iPod battery lasted 2 years post-repair.", rating: 5 },
];

// ── HOOK: Desktop Detection ───────────────────────────────────
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

// ── MAIN COMPONENT ────────────────────────────────────────────
const Services = () => {
  const sectionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const filteredServices = useMemo(() => {
    return initialServices.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "All" || s.title.includes(selectedType);
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  return (
    <section
      ref={sectionRef}
      className="pt-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen overflow-hidden relative"
      style={{ perspective: isDesktop ? 1500 : "none" }}
    >
      {/* Floating Orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: smoothY, opacity: smoothOpacity }}>
        <div className="absolute top-32 left-10 w-[600px] h-[600px] bg-gradient-to-br from-[#F37021]/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/20 to-[#F37021]/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-20"
        >
         <motion.h1
                    className="text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] to-[#F37021] mb-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08 },
                      },
                    }}
          >
            {"Repair Services".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: -80 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                className="inline-block"
                style={{ transform: "translateZ(80px)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-light mb-12"
          >
            Fast, reliable, and <span className="font-bold text-[#F37021]">genuine repairs</span> with up to <span className="font-bold">1-year warranty</span>.
          </motion.p>

          {/* Stats */}
          <div className="flex justify-center gap-10 md:gap-20 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center group"
              >
                <div className="text-[#F37021] mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search device or issue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full border border-gray-200 focus:border-[#F37021] focus:outline-none text-lg shadow-sm transition-all"
              />
            </div>
            <div className="flex gap-3">
              {["All", "iPhone", "Watch", "MacBook", "iPod"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    selectedType === type
                      ? "bg-gradient-to-r from-[#F37021] to-red-600 text-white shadow-lg"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-[#F37021]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {filteredServices.map((service, i) => (
            <RepairCard key={i} {...service} index={i} isDesktop={isDesktop} />
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-[#F37021] to-red-600 text-white py-20 px-6 rounded-3xl"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-5xl md:text-6xl font-black mb-12">Why Trust GetFix?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Zap className="w-12 h-12" />, title: "Lightning Fast", desc: "Most repairs done in under 1 hour" },
                { icon: <Shield className="w-12 h-12" />, title: "Genuine Parts", desc: "OEM quality, no compromises" },
                { icon: <Award className="w-12 h-12" />, title: "Expert Team", desc: "10+ years of Apple repair mastery" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="py-20"
        >
          <h3 className="text-5xl font-bold text-center mb-16 text-gray-900">Happy Customers</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div className="font-bold text-gray-900">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center py-20"
        >
          <motion.a
            href="/book"
            whileHover={{ scale: 1.05 }}
            className="group relative inline-flex items-center gap-6 px-20 py-7 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-black text-2xl rounded-full overflow-hidden shadow-3xl"
          >
            <span className="relative z-10 flex items-center gap-4">
              Book Repair Now
              <motion.span animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ChevronRight className="w-8 h-8" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.7 }}
            />
          </motion.a>

          <div className="flex justify-center gap-6 mt-10 text-sm text-gray-600">
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Free Diagnostics</div>
            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-blue-600" /> Open 10AM–8PM</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ── 3D REPAIR CARD ────────────────────────────────────────────
const RepairCard = ({ 
  img, title, turnaround, warranty, price, gradient, badge, badgeColor, features, link, index, isDesktop 
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [25, -25]);
  const rotateY = useTransform(smoothX, [-300, 300], [-25, 25]);

  const handleMouse = (e) => {
    if (!isDesktop || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={() => isDesktop && (mouseX.set(0), mouseY.set(0))}
        style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        whileHover={isDesktop ? { scale: 1.05 } : { scale: 1.03 }}
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute top-4 left-4 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl`}
          >
            {badge}
          </motion.div>
        </div>

        <div className="p-6 space-y-4" style={isDesktop ? { transform: "translateZ(60px)" } : {}}>
          <h3 className="text-xl font-black text-gray-900">{title}</h3>

          <div className="flex items-center gap-2 text-[#F37021] font-semibold">
            <Clock className="w-5 h-5" /> <span>{turnaround}</span>
          </div>

          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <Shield className="w-5 h-5" /> <span>{warranty}</span>
          </div>

          <div className="text-3xl font-black text-gray-900">{price}</div>

          <ul className="space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-[#F37021] rounded-full" />
                {f}
              </li>
            ))}
          </ul>

          <motion.a
            href={link}
            whileHover={{ scale: 1.05 }}
            className="w-full block text-center py-3 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold rounded-full shadow-lg"
          >
            Book Now
          </motion.a>
        </div>

        {/* Shine */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.9 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Services;