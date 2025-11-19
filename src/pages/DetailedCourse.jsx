/* DetailedCourse.jsx – FINAL & FULLY WORKING (November 17, 2025) */
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Clock, Star, Users, CheckCircle, IndianRupee,
  Globe, Calendar, MapPin, MessageCircle
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// === IMAGES ===
import offline from "../assets/offline.png";
import online from "../assets/online.png";
import android from "../assets/android.png";

// === FULL COURSE DATA ===
const courseData = [
  {
    id: "iphone-offline",
    name: "iPhone Basic to Advanced Level Repair Course (Offline)",
    duration: "18 Days",
    location: "Calicut, Kerala",
    students: "250+",
    rating: 4.9,
    price: "₹60,000/-",
    originalPrice: "₹72,000",
    image: offline,
    badge: "BEST SELLER",
    badgeColor: "from-yellow-400 to-amber-600",
    live: true,
    level: "Expert",
    features: [
      "Live iPhone Teardowns", "Apple-Certified Tools", "1-on-1 Mentorship",
      "Board-Level Repair", "Software & Hardware", "100% Practical"
    ],
    syllabus: [
      "History of iPhone, Apple lineup, and repair scope",
      "Basic electronics and advanced SMD component knowledge",
      "Advanced tools, machinery, and hands-on usage",
      "Logic board anatomy: single-layer and multi-layer boards",
      "Schematics and Bitmap tools: ZXW, JC Drawing, Wuxinji",
      "Heat control techniques: basic to expert level",
      "BGA IC practice: U2, WiFi, NAND, Audio, Baseband, Charging, Trinity, etc.",
      "NAND upgrade and replacement: JCID, i2C programming",
      "Complete theory and practical training on common iPhone faults",
      "Display, True Tone restoration, error fixing, green/white screen issues",
      "Advanced CPU repair: A10 to A19 Pro",
      "Face ID, Battery, Network, Charging, and key solutions",
      "RFFE, EEPROM, latest WiFi repair tools, and more",
      "Live CPU board practice plus additional surprise sessions in class"
    ],
    schedule: "Mon–Sat, 10 AM – 5 PM",
    // trainer: "Rajesh Kumar (10+ Yrs Exp)",
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
    features: [
      "Live Online Classes", "Recorded Sessions", "Lifetime Access to Materials",
      "Schematic & Bitmap Access", "Practical Video Demonstrations", "Doubt Clearing Sessions"
    ],
    syllabus: [
      "Basic to Advanced Level iPhone Repair Concepts",
      "Basic Electronics and SMD Component Knowledge",
      "Tools and Machinery – In-Depth Knowledge",
      "Schematics and Bitmap (ZXW, JC Drawing, Wuxinji)",
      "Advanced Heat Control and IC Rework Skill Sets",
      "Common Faults and Practical Demonstrations",
      "In-Depth Theory on iPhone Circuits and Troubleshooting",
      "Restart and Panic Report Solutions",
      "Sandwich Board Separation and Re-Fixing – Safe Methods",
      "Various IC Practical Demonstrations and Techniques",
      "A10–A19 Pro CPU Rework Theory and Practical Sessions",
      "Accessory Repairing Tools and Demonstrations",
      "iTunes Error Solutions and NAND Programming",
      "25+ Additional Important Topics"
    ],
    schedule: "Weekend Batches",
    // trainer: "Priya Sharma (8+ Yrs Exp)",
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
    features: [
      "BGA Reballing", "Oscilloscope Training", "Schematic Reading",
      "Chip-Level Repair", "EMI/EMC Testing", "Job Placement Assistance"
    ],
    syllabus: [
      "Complete iPhone + Android Chip-Level Training",
      "Advanced Diagnostics & Troubleshooting",
      "Universal Schematic Reading",
      "BGA IC Reballing & Replacement",
      "Oscilloscope & Thermal Camera Usage",
      "Software Flashing All Brands",
      "Data Recovery Techniques",
      "Business Setup Guidance",
      "Lifetime Community Access"
    ],
    schedule: "Flexible Timings",
    // trainer: "Amit Singh (15+ Yrs Exp)",
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const found = courseData.find(c => c.id === id);
    if (!found) {
      navigate("/courses", { replace: true });
    } else {
      setCourse(found);
    }

    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, [id, navigate]);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#F37021] border-t-transparent rounded-full mx-auto mb-6"
          />
          <p className="text-xl font-bold text-gray-700">Loading Course Details...</p>
        </div>
      </div>
    );
  }

  // Smart Price Parser + Monthly Detection
  const clean = (p) => parseInt((p || "").replace(/[^\d]/g, ""), 10) || 0;
  const current = clean(course.price);
  const original = clean(course.originalPrice || course.price);
  const savings = original > current ? Math.round((1 - current / original) * 100) : 0;
  const isMonthly = course.price.includes("/month") || (course.originalPrice && course.originalPrice.includes("/month"));

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-gradient-to-b from-orange-50 via-white to-gray-50 overflow-hidden relative"
      style={{ perspective: isDesktop ? "2000px" : "none" }}
    >
      <ParallaxBackground sectionRef={sectionRef} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Hero Title */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-red-600 mb-6 leading-tight">
            {course.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> {course.duration}</span>
            <span className="flex items-center gap-2"><Globe className="w-5 h-5" /> {course.location}</span>
            <span className="flex items-center gap-2"><Users className="w-5 h-5" /> {course.students} Students</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left: Image + Price Card */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <div className="sticky top-6 bg-white/90 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <div className="relative">
                <img src={course.image} alt={course.name} className="w-full h-96 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {course.badge && (
                  <div className={`absolute top-6 left-6 bg-gradient-to-r ${course.badgeColor} text-white font-bold px-5 py-2 rounded-full shadow-2xl`}>
                    {course.badge}
                  </div>
                )}
                {course.live && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <span className="w-3 h-3 bg-white rounded-full animate-ping" />
                    LIVE
                  </div>
                )}
              </div>

              <div className="p-8 space-y-6">
                <div className="text-center">
                  {/* Main Price */}
                  <div className="text-5xl font-black text-gray-900 flex items-center justify-center gap-2">
                    ₹{current.toLocaleString("en-IN")}
                    {isMonthly && <span className="text-2xl font-bold text-emerald-600">/month</span>}
                  </div>

                  {/* Original Price */}
                  {original > current && (
                    <div className="text-xl text-gray-500 line-through mt-2 flex items-center justify-center gap-2">
                      ₹{original.toLocaleString("en-IN")}
                      {isMonthly && <span className="text-lg">/month</span>}
                    </div>
                  )}

                  {/* Savings */}
                  {savings > 0 && (
                    <div className="mt-3 inline-block px-6 py-2 bg-green-500 text-white font-bold rounded-full">
                      Save {savings}%
                    </div>
                  )}

                  {/* Monthly Info */}
                  {isMonthly && (
                    <p className="text-sm text-gray-600 mt-4 font-medium">
                      12 Monthly Payments • Total: ₹{(current * 12).toLocaleString("en-IN")}
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>Level</span> <strong className="text-[#F37021]">{course.level}</strong></div>
                  <div className="flex justify-between"><span>Seats Left</span> <strong className="text-red-600">{course.seats - course.enrolled}</strong></div>
                </div>

                <a
                  href="https://wa.me/+918304952266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-black text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  Enroll via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: All Content (100% unchanged) */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-8">
            {/* Features */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-3xl font-black mb-6">What You'll Learn</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.features.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span>{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-3xl font-black mb-6">Detailed Syllabus</h3>
              <ol className="space-y-3 text-gray-700">
                {course.syllabus.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}
                    className="flex gap-3">
                    <span className="font-bold text-[#F37021]">{i + 1}.</span>
                    {item}
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Schedule + Location */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
                <h4 className="text-xl font-black flex items-center gap-2 mb-3">
                  <Calendar className="w-6 h-6 text-[#F37021]" /> Schedule
                </h4>
                <p className="text-gray-700">{course.schedule}</p>
                {/* <p className="text-sm text-gray-500 mt-2">Trainer: {course.trainer}</p> */}
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
                <h4 className="text-xl font-black flex items-center gap-2 mb-3">
                  <MapPin className="w-6 h-6 text-[#F37021]" /> Location
                </h4>
                <p className="text-gray-700">{course.location}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="text-center bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-8 h-8 ${i < Math.floor(course.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-4xl font-black">{course.rating}</p>
              <p className="text-gray-600">from {course.students} students</p>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/+918304952266"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-16 py-7 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-black text-2xl rounded-full shadow-2xl hover:shadow-[#F37021]/50 transform hover:scale-105 transition-all"
          >
            Enroll Now – Limited Seats!
            <MessageCircle className="w-9 h-9" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Parallax Background
const ParallaxBackground = ({ sectionRef }) => {
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.div className="absolute inset-0 pointer-events-none" style={{ y: smoothY, opacity: smoothOpacity }}>
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F37021]/30 to-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-[#F37021]/30 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default DetailedCourse;