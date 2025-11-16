/*  DetailedCourse.jsx – NOV 16, 2025 | 100% WORKING */
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Clock, Star, Users, CheckCircle, IndianRupee,
  BookOpen, Globe, Calendar, MapPin, MessageCircle
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// === IMPORT IMAGES ===
import offline from "../assets/offline.png";
import online from "../assets/online.png";
import android from "../assets/android.png";

// === MOCK DATA (IMAGE FIXED) ===
const courseData = [
  {
    id: "iphone-offline",
    name: "iPhone Basic to Advanced Level Repair Course (Offline)",
    duration: "18 Days",
    location: "Mumbai, Delhi, Bangalore",
    students: "250+",
    rating: 4.9,
    price: "₹60,000/-",
    originalPrice: "₹72,000",
    image: offline, // FIXED: was {offline}
    badge: "BEST SELLER",
    badgeColor: "from-yellow-400 to-amber-600",
    live: true,
    level: "Expert",
    support: "Whatsapp",
    features: ["Live iPhone Teardowns", "Apple-Certified Tools", "1-on-1 Mentorship", "Board-Level Repair", "Software & Hardware", "100% Practical"],
    syllabus: ["iPhone Hardware Overview", "Multimeter & Oscilloscope", "Schematic Reading", "Micro-Soldering (BGA)", "Display & Battery Replacement", "Water Damage Recovery", "iOS Flashing & Jailbreak"],
    schedule: "Mon–Sat, 10 AM – 5 PM",
    trainer: "Rajesh Kumar (10+ Yrs Exp)",
    seats: 12,
    enrolled: 8,
  },
  {
    id: "iphone-online",
    name: "iPhone Advanced Level Repair Course (Online)",
    duration: "3 Months",
    location: "100% Online",
    students: "150+",
    rating: 4.8,
    price: "₹24,999/-",
    originalPrice: "₹30,000",
    image: online,
    badge: "FAST TRACK",
    badgeColor: "from-green-400 to-emerald-600",
    live: false,
    level: "Advanced",
    support: "Whatsapp",
    features: ["EDL Mode Mastery", "Custom ROM Flashing", "Multi-Brand Repair", "Live Online Classes", "Recorded Sessions", "Project-Based"],
    syllabus: ["Android Architecture", "Fastboot & ADB", "Rooting & Unlocking", "EDL & 9008 Mode", "Board Diagnostics", "Software Issues Fix"],
    schedule: "Weekend Batches",
    trainer: "Priya Sharma (8+ Yrs Exp)",
    seats: 50,
    enrolled: 42,
  },
  {
    id: "combo-online",
    name: "iPhone & Android Advanced Course (Online)",
    duration: "12 Months",
    location: "100% Online",
    students: "250+",
    rating: 5.0,
    price: "₹2,499/month",
    originalPrice: "₹2,999/month",
    image: android,
    badge: "ELITE",
    badgeColor: "from-purple-500 to-pink-600",
    live: true,
    level: "Expert",
    support: "Whatsapp",
    features: ["BGA Reballing", "Oscilloscope Training", "Schematic Reading", "Chip-Level Repair", "EMI/EMC Testing", "Job Placement"],
    syllabus: ["Advanced Diagnostics", "Power IC Replacement", "Audio & Display IC", "CPU Reballing", "Board Tracing", "Live Projects"],
    schedule: "Flexible Timings",
    trainer: "Amit Singh (15+ Yrs Exp)",
    seats: 30,
    enrolled: 25,
  },
];

const DetailedCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [course, setCourse] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const found = courseData.find(c => c.id === id);
    if (!found) {
      navigate("/courses", { replace: true });
    } else {
      setCourse(found);
    }

    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [id, navigate]);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-[#F37021] border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-semibold text-gray-700">Loading Course...</p>
        </div>
      </div>
    );
  }

  const clean = (p) => parseInt(p.replace(/[^\d]/g, ""), 10) || 0;
  const current = clean(course.price);
  const original = clean(course.originalPrice);
  const savings = original > current ? Math.round((1 - current / original) * 100) : 0;

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-gradient-to-b from-orange-50 via-white to-gray-50 overflow-hidden relative"
      style={{ perspective: isDesktop ? "2000px" : "none" }}
    >
      <ParallaxBackground sectionRef={sectionRef} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO TITLE — RESPONSIVE & VIBRANT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] via-red-600 to-orange-700 mb-6 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {course.name.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -60 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                className="inline-block"
                style={{ transform: "translateZ(50px)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> {course.location}</span>
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students} Students</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT: IMAGE + PRICE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <img src={course.image} alt={course.name} className="w-full h-80 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {course.badge && (
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.badgeColor} text-white font-bold px-4 py-2 rounded-full shadow-xl text-sm`}>
                  {course.badge}
                </div>
              )}

              {course.live && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full shadow-lg"
                />
              )}

              <div className="p-6 space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-black text-gray-900 flex items-center">
                      <IndianRupee className="w-6 h-6" />
                      {current.toLocaleString("en-IN")}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      <IndianRupee className="w-5 h-5 inline" />
                      {original.toLocaleString("en-IN")}
                    </span>
                  </div>
                  {savings > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg"
                    >
                      Save {savings}%
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Level:</span><span className="font-bold text-[#F37021]">{course.level}</span></div>
                  <div className="flex justify-between"><span>Seats Left:</span><span className="font-bold text-red-600">{course.seats - course.enrolled}</span></div>
                  <div className="flex justify-between"><span>Support:</span><span>{course.support}</span></div>
                </div>

                <motion.a
                  href="https://wa.me/+918304952266"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full block text-center py-4 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-black rounded-full shadow-xl hover:shadow-[#F37021]/50 transition-all"
                >
                  Enroll via WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-2xl font-black text-gray-900 mb-4">What You'll Learn</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Course Syllabus</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                {course.syllabus.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-start gap-2"
                  >
                    <span className="font-bold text-[#F37021]">{i + 1}.</span>
                    {item}
                  </motion.li>
                ))}
              </ol>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
              >
                <h3 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#F37021]" /> Schedule
                </h3>
                <p className="text-sm text-gray-700">{course.schedule}</p>
                <p className="text-xs text-gray-500 mt-2">Trainer: {course.trainer}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
              >
                <h3 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F37021]" /> Location
                </h3>
                <p className="text-sm text-gray-700">{course.location}</p>
                <p className="text-xs text-gray-500 mt-2">Limited Seats Available</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 text-center"
            >
              <div className="flex justify-center items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(course.rating) ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-3xl font-black text-gray-900">{course.rating}</p>
              <p className="text-sm text-gray-600">Based on {course.students} students</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
              <MessageCircle className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// === PARALLAX BACKGROUND ===
const ParallaxBackground = ({ sectionRef }) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ y: smoothY, opacity: smoothOpacity }}
    >
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F37021]/30 to-red-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-[#F37021]/30 rounded-full blur-3xl animate-pulse delay-700" />
    </motion.div>
  );
};

export default DetailedCourse;