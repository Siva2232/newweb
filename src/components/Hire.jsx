/*  Hire.jsx – Hire Certified Technicians from Our Academy  */
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Users, Trophy, Star, Clock, Shield, CheckCircle,
  Zap, ChevronRight, Phone, Mail, MapPin, ArrowRight,BookOpen
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const Hire = () => {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] via-red-600 to-orange-700 mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {"Hire Our Certified Technicians".split("").map((c, i) => (
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
            Get <span className="font-bold text-[#F37021]">job-ready, academy-trained technicians</span> for your repair shop, service center, or startup — <span className="font-bold">100% certified & verified</span>.
          </motion.p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Trophy className="w-8 h-8" />, value: "1000+", label: "Technicians Placed" },
            { icon: <Star className="w-8 h-8" />, value: "4.9/5", label: "Client Rating" },
            { icon: <Users className="w-8 h-8" />, value: "500+", label: "Partner Shops" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg border border-white/50"
            >
              <div className="text-[#F37021] mb-3">{s.icon}</div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* WHY HIRE FROM US */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-gray-900 mb-10">
            Why Hire from <span className="text-[#F37021]">GetFix Academy</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Academy-Trained",
                desc: "12–18 months hands-on training with live projects",
                icon: <BookOpen className="w-6 h-6" />,
                color: "from-[#F37021] to-red-600"
              },
              {
                title: "Chip-Level Experts",
                desc: "Micro-soldering, BGA, schematics, oscilloscope mastery",
                icon: <Zap className="w-6 h-6" />,
                color: "from-orange-500 to-red-600"
              },
              {
                title: "100% Verified",
                desc: "Background check, skill test, certification included",
                icon: <Shield className="w-6 h-6" />,
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Same-Day Deployment",
                desc: "Get technicians in 24–48 hours across India",
                icon: <Clock className="w-6 h-6" />,
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Associated Network",
                desc: "Available in 300+ cities, metro to Tier-3",
                icon: <MapPin className="w-6 h-6" />,
                color: "from-cyan-500 to-blue-600"
              },
{
  title: "ISO-Certified Institution",
  desc: "Receive 12–18 months of hands-on training with live projects from an ISO-certified institution.",
  icon: <BookOpen className="w-6 h-6" />,
  color: "from-[#F37021] to-red-600"
},


            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/40 hover:shadow-xl transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* HIRE NOW CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-20"
        >
          <motion.a
            href="/hire-request"
            whileHover={{ scale: 1.06, boxShadow: "0 25px 50px rgba(243, 112, 33, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-black text-xl rounded-full shadow-3xl hover:shadow-[#F37021]/50 transition-all duration-300 group"
          >
            Hire Technicians Now
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>

          <p className="mt-6 text-sm text-gray-600">
            Or call us at <a href="tel:+91 83049 52266" className="font-bold text-[#F37021]">+91 83049 52266</a>
          </p>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-black text-center text-gray-900 mb-6">
            Get in Touch for Bulk Hiring
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="w-6 h-6 text-[#F37021] mx-auto mb-2" />
              <p className="font-bold text-gray-900">+91 9758828258</p>
              <p className="text-xs text-gray-600">Mon–Sat, 9AM–6PM</p>
            </div>
            <div>
              <Mail className="w-6 h-6 text-[#F37021] mx-auto mb-2" />
              <p className="font-bold text-gray-900">Hr@getfixacademy.in</p>
              <p className="text-xs text-gray-600">Response in 2 hours</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-[#F37021] mx-auto mb-2" />
              <p className="font-bold text-gray-900">300+ Cities</p>
              <p className="text-xs text-gray-600">Kerala Coverage</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hire;