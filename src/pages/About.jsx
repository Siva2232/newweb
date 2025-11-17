// About.jsx – FIXED: No Blank Screen + Instant Animations
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  Award,
  Users,
  Wrench,
  Shield,
  GraduationCap,
  Cpu,
  Star,
  ChevronRight,
  Target,
  Rocket,
  Globe,
  ChevronDown,
  ChevronUp,
  Trophy,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";
import T3 from "../assets/T3.png";

/* --------------------------------------------------------------
   "Our Story" – Teaser + Full
   -------------------------------------------------------------- */
const storyTeaser = `GetFix began its journey in 2019 with a clear mission — to bring professionalism, precision, and trust to the smartphone repair industry. What started as a small premium repair center in Kerala quickly grew into a respected multi-branch service brand, known for its high-quality repairs, transparent approach, and advanced technical expertise.`;

const storyFull = `Over the years, GetFix became the go-to destination for complex device repairs, chip-level services, and professional-grade diagnostics. But with every step forward, we observed an industry challenge:
There were far more devices needing quality repair than there were skilled technicians capable of handling them.

This growing gap led to the birth of something bigger —
**GetFix Academy**, launched in 2023.

GetFix Academy was created with a powerful purpose:
to build a new generation of confident, highly skilled smartphone technicians equipped for the future.

At the core of our academy is **Sirajul Haque**, the Visionary Co-Founder & Managing Director of GetFix, and the Founder & Lead Trainer at the Academy. With **20+ years** of smartphone repair expertise, Sirajul has trained hundreds of technicians and shaped the repair standards followed across our service centers today. His experience, passion, and hands-on teaching style form the backbone of every module we offer.

What makes GetFix Academy different is our learning philosophy:
We teach only what works in the real world.

Every lesson, workflow, and repair technique comes directly from the practical challenges handled at GetFix service centers. Our in-house R&D team continuously studies new smartphone architectures, updated IC designs, and the latest repair methods — ensuring our students stay ahead in a rapidly evolving industry.

From basic electronics to advanced chip-level workflows, from online learning to offline intensive programs — our training ecosystem is designed to suit both beginners and working professionals. With centralized support, live revision classes, real board case studies, and lifetime doubt assistance, we stand with our students long after their course is completed.

Today, GetFix Academy is more than a training institute.
It is a growth platform.
A community.
A movement built on knowledge, innovation, and real-world experience.

And our story is still being written — with every new technician who joins us, learns with us, and grows with us.`;

const storyFullParagraphs = storyFull.split("\n\n").map((para) => {
  const parts = para.split(/\*\*(.*?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? { text: p, bold: true } : { text: p, bold: false }
  );
});

/* --------------------------------------------------------------
   Success Stories
   -------------------------------------------------------------- */
const successStories = [
  {
    title: "From Zero to Hero in 45 Days",
    student: "Arjun Menon",
    location: "Kochi",
    achievement: "Mastered BGA reballing & placed at premium service center",
    salary: "₹45,000/month",
    icon: <Trophy className="w-8 h-8" />,
  },
  {
    title: "Started My Own Repair Shop",
    student: "Vikram Nair",
    location: "Calicut",
    achievement: "First month revenue: ₹1.2L after 3-month course",
    salary: "Self-employed",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "Landed Job Before Course End",
    student: "Sneha Rajan",
    location: "Trivandrum",
    achievement: "Fixed dead Samsung S23 in week 3 → hired immediately",
    salary: "₹38,000/month",
    icon: <Award className="w-8 h-8" />,
  },
];

/* --------------------------------------------------------------
   Academy Milestones
   -------------------------------------------------------------- */
const milestones = [
  { year: "2019", event: "GetFix  premium Repair Center Launched in Kerala" },
  { year: "2022", event: "GetFix store launched (Spare parts store)" },
  { year: "2022", event: "Expanded to 4 Branches Across South India" },
  { year: "2023", event: "GetFix Academy Officially Launched" },
  { year: "2024", event: "Trained 500+ Students & 100% Placement" },
  { year: "2025", event: "Upgraded to a premium platform accommodating 10 students." },
];

/* --------------------------------------------------------------
   useIsDesktop Hook (runs once)
   -------------------------------------------------------------- */
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

/* --------------------------------------------------------------
   MAIN COMPONENT
   -------------------------------------------------------------- */
const About = () => {
  const sectionRef = useRef(null);
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const stats = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      value: "5+",
      label: "Years of Excellence",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: "10,000+",
      label: "Students Trained",
      color: "from-amber-500 to-orange-700",
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: "100%",
      label: "Job Placement Rate",
      color: "from-red-600 to-purple-700",
    },
  ];

  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hands-On Labs",
      desc: "Real devices, real repairs — no simulations.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Chip-Level Mastery",
      desc: "Micro-soldering, BGA, IC replacement.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Certified Curriculum",
      desc: "Aligned with Apple & Android standards.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Career Launchpad",
      desc: "Resume building, interviews, job placement.",
    },
  ];

 const team = [
    { name: "Sirajul Haque", tagline: "Co-Founder - GetFix Academy", role: "Founder & Lead Trainer - GetFix Academy", exp: "20+ Years Experience in chip level repair", img: T1 },
    { name: "Shuhaib Shadi", role: "Co-Founder & Director - GetFix Academy", exp: "10+ Year Experience iPhone Chip level Expert", img: T2 },
    { name: "Pinks", role: "Co-Founder and Technical Support - GetFix", exp: "20+ Years Industry Expertise (Works at Apple-Croatia)", img: T3 },
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-32 pb-32 px-6 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden relative"
      style={{ perspective: isDesktop ? 1500 : "none" }}
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
        {/* Hero Title – INSTANT LOAD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
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
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Pioneering{" "}
            <span className="font-bold" style={{ color: "#F37021" }}>
              mobile engineering education
            </span>{" "}
            since 2019 — where{" "}
            <span className="font-bold">practical skills meet real careers</span>.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} isDesktop={isDesktop} />
          ))}
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-inner">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  Our Story
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">{storyTeaser}</p>

              <AnimatePresence>
                {isStoryExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-6 border-t border-orange-200 space-y-5 text-gray-700 leading-relaxed">
                      {storyFullParagraphs.map((para, i) => (
                        <p key={i} className={para.some(p => p.bold) ? "font-semibold text-gray-900" : ""}>
                          {para.map((part, j) => part.bold ? (
                            <span key={j} className="font-bold" style={{ color: "#F37021" }}>{part.text}</span>
                          ) : part.text)}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                className="mt-6 flex items-center gap-2 font-semibold transition-colors"
                style={{ color: "#F37021" }}
              >
                {isStoryExpanded ? "Show Less" : "Read More"}
                <motion.div animate={{ rotate: isStoryExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isStoryExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </motion.div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Real Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 bg-white rounded-2xl border border-gray-200 shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-xl" style={{ color: "#F37021" }}>
                    {story.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>{story.student}</strong> • {story.location}
                </p>
                <p className="text-gray-700 mb-3">{story.achievement}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold" style={{ color: "#F37021" }}>
                    {story.salary}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Our Journey So Far
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200" />
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-6 mb-8"
                >
                  <div className="relative z-10 w-16 h-16 bg-white border-4 border-orange-200 rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6" style={{ color: "#F37021" }} />
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-md border border-gray-100">
                    <p className="font-bold text-lg" style={{ color: "#F37021" }}>{m.year}</p>
                    <p className="text-gray-700">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trusted Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-full border border-orange-200 shadow-lg">
            <CheckCircle className="w-8 h-8" style={{ color: "#F37021" }} />
            <p className="text-xl font-bold text-gray-800">
              Trusted by <span style={{ color: "#F37021" }}>10,000+ Students</span> Across India
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <FeatureCard
            icon={<Target className="w-12 h-12" style={{ color: "#F37021" }} />}
            title="Our Mission"
            desc="Our mission is to establish Kerala’s No.1 Smartphone Training Academy. We aim to produce highly skilled technicians who can meet the growing demand in the mobile repair industry."
          />
          <FeatureCard
            icon={<Globe className="w-12 h-12" style={{ color: "#F37021" }} />}
            title="Our Vision"
            desc="A world where every broken phone finds a skilled repair hero — trained, certified, and job-ready."
            delay={0.4}
          />
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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

        {/* Team */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="mb-24"
>
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#F37021] to-[#F37021]">
    Meet Our Expert Instructors
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {team.map((member, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2, duration: 0.7 }}
        whileHover={{ y: -12 }}
        className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-200"
      >
        <div className="h-64 overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-6 text-center">
          <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>

          {/* 🔸 NEW SENTENCE BETWEEN NAME & ROLE */}

          <p className="text-[#F37021] font-medium">{member.role}</p>
          <p className="text-[#F37021] font-medium">{member.tagline}</p>
          <p className="text-sm text-gray-600 mt-1">{member.exp}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
 <motion.a
  href="https://wa.me/+918304952266"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[#F37021]/60 transition-all duration-300"
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
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== 3D STATS CARD ==================== */
const StatCard = ({ icon, value, label, color, index, isDesktop }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(smoothY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!isDesktop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isDesktop && (mouseX.set(0), mouseY.set(0))}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      style={isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      whileHover={isDesktop ? { scale: 1.05, z: 50 } : {}}
      className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl"
    >
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
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        style={{ transform: "translateZ(50px)" }}
      >
        PROVEN
      </motion.div>
    </motion.div>
  );
};

/* ==================== OTHER CARDS (unchanged) ==================== */
const FeatureCard = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="group relative p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-500"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
    <motion.div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
  </motion.div>
);

const FeatureItem = ({ icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="p-6 rounded-2xl bg-white border border-gray-200 shadow hover:shadow-xl transition-all duration-300 text-center"
  >
    <div className="mb-4 flex justify-center" style={{ color: "#F37021" }}>{icon}</div>
    <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </motion.div>
);

const TeamCard = ({ name, role, exp, img, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
    whileHover={{ y: -10 }}
    className="relative group"
  >
    <div className="p-6 rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden">
      <div className="relative mb-6 h-48 rounded-2xl overflow-hidden bg-gray-100">
        <img src={img} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="font-medium mb-2" style={{ color: "#F37021" }}>{role}</p>
      <p className="text-sm text-gray-600">{exp}</p>
    </div>
  </motion.div>
);

export default About;