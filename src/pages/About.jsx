import { motion, useScroll, useTransform, useSpring,useMotionValue } from "framer-motion";
import { 
  Award, 
  Users, 
  Wrench, 
  Zap, 
  Shield, 
  GraduationCap,
  Cpu,
  Star,
  ChevronRight,
  Target,
  Rocket,
  Globe,
} from "lucide-react";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const stats = [
    { icon: <GraduationCap className="w-10 h-10" />, value: "5+", label: "Years of Excellence", color: "from-orange-500 to-red-600" },
    { icon: <Users className="w-10 h-10" />, value: "10,000+", label: "Students Trained", color: "from-amber-500 to-orange-700" },
    { icon: <Award className="w-10 h-10" />, value: "100%", label: "Job Placement Rate", color: "from-red-600 to-purple-700" },
  ];

  const features = [
    { icon: <Wrench className="w-8 h-8" />, title: "Hands-On Labs", desc: "Real devices, real repairs — no simulations." },
    { icon: <Cpu className="w-8 h-8" />, title: "Chip-Level Mastery", desc: "Micro-soldering, BGA, IC replacement." },
    { icon: <Shield className="w-8 h-8" />, title: "Certified Curriculum", desc: "Aligned with Apple & Android standards." },
    { icon: <Rocket className="w-8 h-8" />, title: "Career Launchpad", desc: "Resume building, interviews, job placement." },
  ];

  const team = [
    { name: "Rahul Sharma", role: "Founder & Lead Instructor", exp: "12+ years in mobile repair", img: "/team/rahul.jpg" },
    { name: "Priya Verma", role: "Senior Chip-Level Expert", exp: "8+ years in BGA & diagnostics", img: "/team/priya.jpg" },
    { name: "Amit Patel", role: "Android Specialist", exp: "10+ years in software & flashing", img: "/team/amit.jpg" },
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-32 pb-32 px-6 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden relative"
      style={{ perspective: 1500 }}
    >
      {/* Floating Orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: smoothY, opacity: smoothOpacity }}
      >
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-orange-600/20 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {"About Getfix Academy".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: -90 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                className="inline-block"
                style={{ transform: "translateZ(60px)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Pioneering <span className="font-bold text-orange-600">mobile engineering education</span> since 2019 — 
            where <span className="font-bold">practical skills meet real careers</span>.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <FeatureCard
            icon={<Target className="w-12 h-12 text-orange-600" />}
            title="Our Mission"
            desc="To democratize mobile repair education and create 100,000 skilled technicians who power the future of device servicing."
            delay={0.2}
          />
          <FeatureCard
            icon={<Globe className="w-12 h-12 text-orange-600" />}
            title="Our Vision"
            desc="A world where every broken phone finds a skilled repair hero — trained, certified, and job-ready."
            delay={0.4}
          />
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Why Choose Mobile Academy?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FeatureItem key={i} {...f} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Meet Our Experts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-700">
            Meet Our Expert Instructors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} index={i} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="/enroll"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                Join the Revolution
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
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
        </motion.div>
      </div>
    </section>
  );
};

// === 3D STATS CARD ===
const StatCard = ({ icon, value, label, color, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.05, z: 50 }}
      className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl"
    >
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        className="mb-4 flex justify-center"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-inner">
          {icon}
        </div>
      </motion.div>
      <motion.h3
        className="text-5xl font-black text-gray-900 mb-2"
        style={{ transform: "translateZ(30px)" }}
      >
        {value}
      </motion.h3>
      <motion.p
        className="text-gray-600 font-medium"
        style={{ transform: "translateZ(20px)" }}
      >
        {label}
      </motion.p>
      <motion.div
        className="absolute -bottom-3 -right-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        style={{ transform: "translateZ(50px)" }}
      >
        PROVEN
      </motion.div>
    </motion.div>
  );
};

// === FEATURE CARD ===
const FeatureCard = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="group relative p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-500"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
    <motion.div
      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
    />
  </motion.div>
);

// === FEATURE ITEM ===
const FeatureItem = ({ icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="p-6 rounded-2xl bg-white border border-gray-200 shadow hover:shadow-xl transition-all duration-300 text-center"
  >
    <div className="mb-4 flex justify-center text-orange-600">{icon}</div>
    <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </motion.div>
);

// === TEAM CARD ===
const TeamCard = ({ name, role, exp, img, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
    whileHover={{ y: -10 }}
    className="relative group"
  >
    <div className="p-6 rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden">
      <div className="relative mb-6 h-48 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
        <div className="flex items-end justify-center h-full p-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
            <Star className="w-6 h-6 text-yellow-500 fill-current mx-auto" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-orange-600 font-medium mb-2">{role}</p>
      <p className="text-sm text-gray-600">{exp}</p>
    </div>
  </motion.div>
);

export default About;