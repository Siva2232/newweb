import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { Zap, Shield, Clock, CheckCircle, ChevronRight, Star, Wrench, Battery, Headphones } from "lucide-react";
import { useRef } from "react";
import iphones from "../assets/iphones.png";
import iwatch from "../assets/iwatch.png";
import mac from "../assets/mac.png";
import ipod from "../assets/ipod.png";

const services = [
  {
    img: iphones,
    title: "iPhone Repair",
    desc: "Screen, battery, camera, charging port, Face ID, water damage — all models (iPhone 6 to 16 Pro Max).",
    gradient: "from-[#F37021] to-red-600",
    delay: 0.2,
    badge: "30 MIN FIX",
    badgeColor: "from-yellow-400 to-amber-600",
    price: "From $89",
    turnaround: "30–60 min",
    warranty: "180 Days",
    features: ["Genuine Parts", "Same-Day Service", "Data Privacy", "Free Diagnostics"],
  },
  {
    img: iwatch,
    title: "Apple Watch Repair",
    desc: "Screen, battery, digital crown, sensors, charging coil — Series 1–10, Ultra, SE.",
    gradient: "from-[#F37021] to-orange-700",
    delay: 0.4,
    badge: "FASTEST",
    badgeColor: "from-green-400 to-emerald-600",
    price: "From $79",
    turnaround: "1–2 Hours",
    warranty: "90 Days",
    features: ["All Series", "Taptic Engine", "ECG Repair", "Water Resistance"],
  },
  {
    img: mac,
    title: "MacBook Repair",
    desc: "Logic board, screen, keyboard, battery, SSD, M1/M2/M3 chip — MacBook Air & Pro.",
    gradient: "from-red-600 to-[#F37021]",
    delay: 0.6,
    badge: "EXPERT",
    badgeColor: "from-purple-500 to-pink-600",
    price: "From $199",
    turnaround: "1–3 Days",
    warranty: "365 Days",
    features: ["Chip-Level Fix", "Retina Display", "T2/M1 Bypass", "Liquid Recovery"],
  },
  {
    img: ipod,
    title: "iPod Repair",
    desc: "iPod Classic, Nano, Touch — battery, click wheel, hard drive, headphone jack.",
    gradient: "from-blue-500 to-indigo-600",
    delay: 0.8,
    badge: "VINTAGE",
    badgeColor: "from-blue-400 to-cyan-500",
    price: "From $59",
    turnaround: "Same Day",
    warranty: "90 Days",
    features: ["HDD to SSD", "Click Wheel", "Battery Upgrade", "Data Recovery"],
  },
];

const testimonials = [
  { name: "Priya Sharma", text: "iPhone 15 screen replaced in 25 mins! Perfect color match.", rating: 5 },
  { name: "Rahul Verma", text: "MacBook Pro wouldn’t turn on — fixed in 2 days. Saved my work!", rating: 5 },
  { name: "Amit Patel", text: "Apple Watch Ultra battery replaced. Works like new!", rating: 5 },
  { name: "Sneha Reddy", text: "iPod Classic from 2007 — now has 1TB SSD! Amazing!", rating: 5 },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-gray-50 via-white to-[#F37021]/5 overflow-hidden relative"
    >
      {/* Background Orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F37021]/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-blue-500/20 to-[#F37021]/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-[#F37021]/5 bg-[size:60px_60px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* MAIN HEADING - SAME STYLE AS "Why Choose Getfix?" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
            <motion.h2
  className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-[#F37021] mb-6 leading-tight"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }}
>
            {"Get Fixed".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80, rotateX: -70 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                className="inline-block"
                style={{ transform: "translateZ(60px)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light mb-10"
          >
            Fast, reliable Apple repair for <span className="font-bold text-[#F37021]">iPhone, iWatch, MacBook & iPod</span> — done right, the first time.
          </motion.p>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-8 md:gap-16 flex-wrap text-center"
          >
            {[
              { icon: <Wrench className="w-8 h-8" />, value: "15,847+", label: "Devices Fixed" },
              { icon: <Clock className="w-8 h-8" />, value: "30 min", label: "Avg iPhone Fix" },
              { icon: <Shield className="w-8 h-8" />, value: "180+", label: "Day Warranty" },
              { icon: <Star className="w-8 h-8" />, value: "4.9", label: "Google Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-[#F37021] mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-gray-900 mt-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Happy Customers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-md border border-[#F37021]/20"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-3 leading-tight">"{t.text}"</p>
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA + Trust Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-12">
            <a
              href="/book"
              className="group relative inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-[#F37021]/50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Fixed Today
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center items-center gap-8 flex-wrap text-gray-600 text-sm"
          >
            <div className="flex items-center gap-2">
              <Battery className="w-5 h-5 text-green-600" />
              <span>Genuine Parts Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600" />
              <span>Up to 1-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-[#F37021]" />
              <span>Free Pickup & Drop</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// === SERVICE CARD ===
const ServiceCard = ({
  img, title, desc, gradient, index, delay,
  badge, badgeColor, price, turnaround, warranty, features
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay }}
      className="relative group"
      style={{ perspective: 1500 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.05, z: 120 }}
        className="relative bg-white/95 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />

        {/* Badge */}
        <motion.div
          initial={{ scale: 0, y: -20 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ delay: delay + 0.3, type: "spring" }}
          className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xl`}
          style={{ transform: "translateZ(80px)" }}
        >
          {badge}
        </motion.div>

        {/* Large Image */}
        <motion.div
          className="relative h-64 md:h-72 lg:h-80 overflow-hidden"
          style={{ transform: "translateZ(60px)" }}
          whileHover={{ scale: 1.08 }}
        >
          <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="p-6 space-y-4" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl font-black text-gray-900 text-center">{title}</h3>

          <div className="flex items-center justify-center gap-2 text-[#F37021] font-bold">
            <Clock className="w-5 h-5" />
            <span>{turnaround}</span>
          </div>

          <div className="text-center">
            <div className="text-3xl font-black text-gray-900">{price}</div>
            <div className="text-sm text-gray-500">Starting Price</div>
          </div>

          <ul className="space-y-2 text-sm">
            {features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-1 text-sm font-bold text-green-600">
            <Shield className="w-4 h-4" />
            {warranty} Warranty
          </div>
        </div>

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

export default ServicesSection;