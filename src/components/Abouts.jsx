import { motion } from "framer-motion";
import { 
  GraduationCap, Users, Award, Wrench, Cpu, Shield, Rocket, 
  Target, Globe, Star, Zap, Clock, CheckCircle, ChevronRight
} from "lucide-react";

const AboutSection = () => {
  // === Stats ===
  const stats = [
    { icon: <GraduationCap className="w-9 h-9" />, value: "5+", label: "Years of Excellence" },
    { icon: <Users className="w-9 h-9" />, value: "10,000+", label: "Students Trained" },
    { icon: <Award className="w-9 h-9" />, value: "100%", label: "Job Placement" },
    { icon: <Zap className="w-9 h-9" />, value: "30 Days", label: "Fast-Track Course" },
  ];

  // === Why Choose Us ===
  const whyChoose = [
    { icon: <Wrench />, title: "Hands-On Labs", desc: "Real iPhone & Android devices — no simulators." },
    { icon: <Cpu />, title: "Chip-Level Repair", desc: "Micro-soldering, BGA, IC replacement." },
    { icon: <Shield />, title: "Certified Instructors", desc: "Apple & Android certified experts." },
    { icon: <Rocket />, title: "Job Guarantee", desc: "100% placement or money back." },
    { icon: <Clock />, title: "Flexible Schedule", desc: "Weekend & evening batches." },
    { icon: <CheckCircle />, title: "Lifetime Support", desc: "Free doubt sessions & updates." },
  ];

  // === Mission & Vision ===
  const missionVision = [
    { icon: <Target className="w-10 h-10" />, title: "Our Mission", desc: "Train 100,000 mobile engineers to fix every broken device with confidence." },
    { icon: <Globe className="w-10 h-10" />, title: "Our Vision", desc: "A world where every phone has a skilled repair hero — trained by Getfix." },
  ];

  // === Team (Optional Images) ===
  const team = [
    { name: "Rahul Sharma", role: "Founder & Lead", exp: "12+ yrs in mobile repair", img: "/team/rahul.jpg" },
    { name: "Priya Verma", role: "Chip-Level Expert", exp: "8+ yrs in BGA & diagnostics", img: "/team/priya.jpg" },
    { name: "Amit Patel", role: "Android Specialist", exp: "10+ yrs in software repair", img: "/team/amit.jpg" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* === About Title === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 mb-4">
            About Getfix Academy
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Founded in 2019, we’re India’s <span className="font-bold text-orange-600">leading mobile repair training institute</span>. 
            We don’t just teach — we <span className="font-bold">build careers</span> with hands-on, job-ready skills.
          </p>
        </motion.div>

        {/* === Stats === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-orange-600 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* === Mission & Vision === */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missionVision.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-200 shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-orange-600 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* === Why Choose Us === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Why Choose <span className="text-orange-600">Getfix</span>?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-orange-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-orange-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h4>
                <p className="text-sm text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Meet Our Experts === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Meet Our <span className="text-orange-600">Expert Instructors</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, type: "spring" }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100"
              >
                <div className="h-64 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600" />
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-orange-600 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{member.exp}</p>
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
          className="text-center"
        >
          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
          >
            <span>Join Getfix Today</span>
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronRight className="w-6 h-6" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;