import { motion } from "framer-motion";
import {
  GraduationCap, Users, Award, Wrench, Cpu, Shield, Rocket,
  Target, Globe, Star, Zap, Clock, CheckCircle, ChevronRight
} from "lucide-react";
import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";

const AboutSection = () => {
  // === Stats ===
  const stats = [
    { icon: <GraduationCap className="w-7 h-7 sm:w-9 sm:h-9" />, value: "6+", label: "Years of Excellence" },
    { icon: <Users className="w-7 h-7 sm:w-9 sm:h-9" />, value: "10,000+", label: "Students Trained" },
    { icon: <Award className="w-7 h-7 sm:w-9 sm:h-9" />, value: "100%", label: "Job Placement" },
    { icon: <Zap className="w-7 h-7 sm:w-9 sm:h-9" />, value: "30 Days", label: "Fast-Track Course" },
  ];

  // === Why Choose Us ===
  const whyChoose = [
    { icon: <Wrench className="w-8 h-8" />, title: "Hands-On Labs", desc: "Real iPhone & Android devices — no simulators." },
    { icon: <Cpu className="w-8 h-8" />, title: "Chip-Level Repair", desc: "Micro-soldering, BGA, IC replacement." },
    { icon: <Shield className="w-8 h-8" />, title: "Certified Instructors", desc: "Apple & Android certified experts." },
    { icon: <Rocket className="w-8 h-8" />, title: "Job Guarantee", desc: "100% placement or money back." },
    { icon: <Clock className="w-8 h-8" />, title: "Flexible Schedule", desc: "Weekend & evening batches." },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Lifetime Support", desc: "Free doubt sessions & updates." },
  ];

  // === Mission & Vision ===
  const missionVision = [
    { icon: <Target className="w-9 h-9 sm:w-10 sm:h-10" />, title: "Our Mission", desc: "Train 100,000 mobile engineers to fix every broken device with confidence." },
    { icon: <Globe className="w-9 h-9 sm:w-10 sm:h-10" />, title: "Our Vision", desc: "A world where every phone has a skilled repair hero — trained by Getfix." },
  ];

  // === Team ===
  const team = [
    { name: "Sirajul Haque", role: "Founder & Lead Trainer - GetFix Academy", exp: "20+ Years Experience in chip level repair", img: T1 },
    { name: "Shuhaib Shadi", role: "Co-Founder & Lead Trainer - GetFix Academy", exp: "10+ Year Experience iPhone Chip level Expert", img: T2 },
    { name: "Amit Patel", role: "Android Specialist", exp: "10+ yrs in software repair", img: "/team/amit.jpg" },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-[#F37021]/5 to-white">
      <div className="max-w-7xl mx-auto">

        {/* === About Title === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] to-red-600 mb-3 sm:mb-4">
            Our Story
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
            Founded in 2019, we’re India’s <span className="font-bold text-[#F37021]">leading smartphone technology institute Kerala</span>.
            We don’t just teach — we <span className="font-bold">build careers</span> with hands-on, job-ready skills.
          </p>
        </motion.div>

        {/* === Stats === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-[#F37021]/20 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#F37021] mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* === Mission & Vision === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {missionVision.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="bg-gradient-to-br from-[#F37021]/5 to-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#F37021]/30 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[#F37021] mb-3 flex justify-center sm:justify-start">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center sm:text-left">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center sm:text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* === Why Choose Us === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] to-red-600">
            Why Choose <span className="text-[#F37021]">Getfix</span>?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-md border border-[#F37021]/20 hover:shadow-2xl transition-all duration-300 cursor-default"
              >
                <div className="text-[#F37021] mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Meet Our Experts === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 text-gray-900">
            Meet Our <span className="text-[#F37021]">Expert Instructors</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl border border-gray-100"
              >
                <div className="h-56 sm:h-64 relative overflow-hidden bg-gray-100">
                  {/* CLEAN IMAGE — NO GRADIENT, NO BLEND */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Optional subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>
                <div className="p-5 sm:p-6 text-center bg-white">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-[#F37021] font-medium text-sm sm:text-base">{member.role}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{member.exp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === CTA === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-[#F37021]/50 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <span>Join Getfix Today</span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;