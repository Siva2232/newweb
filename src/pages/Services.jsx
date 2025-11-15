// import { motion, useMotionValue, useTransform, useSpring, useScroll, useTransform as transformScroll } from "framer-motion";
// import { 
//   Wrench, Smartphone, Cpu, Zap, Shield, Award, Users, Trophy, 
//   PlayCircle, Headphones, Globe, CheckCircle, ChevronRight, 
//   Star, Clock, Laptop, Sparkles, Rocket, Target, 
//   Lightbulb, Heart, ArrowRight, Filter, Search 
// } from "lucide-react";
// import { useRef, useState } from "react";

// const services = [
//   {
//     id: 1,
//     icon: <Wrench className="w-16 h-16" />,
//     title: "iPhone Repair Mastery",
//     desc: "Professional-grade iPhone diagnostics, screen replacement, battery fixes, and water damage recovery.",
//     gradient: "from-orange-500 to-red-600",
//     badge: "MOST POPULAR",
//     badgeColor: "from-yellow-400 to-amber-600",
//     live: true,
//     price: "$1,299",
//     originalPrice: "$1,999",
//     duration: "12 Weeks",
//     students: "3,847",
//     rating: 4.9,
//     features: ["Live iPhone Teardowns", "Apple-Certified Tools", "1-on-1 Mentorship", "Job Placement"],
//     tools: ["iFixit Pro Kit", "DC Power Supply", "Microscope", "Ultrasonic Cleaner"],
//     instructor: "Rajesh Kumar",
//     level: "Intermediate",
//   },
//   {
//     id: 2,
//     icon: <Smartphone className="w-16 h-16" />,
//     title: "Android Repair Pro",
//     desc: "Master software flashing, hardware fixes, and multi-brand repairs for Samsung, Xiaomi, OnePlus, and more.",
//     gradient: "from-amber-500 to-orange-700",
//     badge: "FASTEST GROWING",
//     badgeColor: "from-green-400 to-emerald-600",
//     live: false,
//     price: "$999",
//     originalPrice: "$1,599",
//     duration: "8 Weeks",
//     students: "4,102",
//     rating: 4.8,
//     features: ["EDL Mode Mastery", "Custom ROMs", "Multi-Brand Repair", "Free Software Suite"],
//     tools: ["Odin", "SP Flash Tool", "ADB Toolkit", "Box Tools"],
//     instructor: "Priya Sharma",
//     level: "Beginner to Pro",
//   },
//   {
//     id: 3,
//     icon: <Cpu className="w-16 h-16" />,
//     title: "Chip-Level Engineering",
//     desc: "Micro-soldering, BGA reballing, circuit tracing, power IC replacement, and advanced diagnostics.",
//     gradient: "from-red-600 to-purple-700",
//     badge: "ELITE",
//     badgeColor: "from-purple-500 to-pink-600",
//     live: true,
//     price: "$2,499",
//     originalPrice: "$3,999",
//     duration: "24 Weeks",
//     students: "1,593",
//     rating: 5.0,
//     features: ["BGA Reballing", "Oscilloscope Training", "Schematic Reading", "Lifetime Support"],
//     tools: ["Hot Air Station", "Digital Oscilloscope", "Multimeter Pro", "IR Station"],
//     instructor: "Amit Verma",
//     level: "Advanced",
//   },
// ];

// const stats = [
//   { icon: <Users />, value: "12,542+", label: "Students Trained" },
//   { icon: <Trophy />, value: "3,842", label: "Jobs Secured" },
//   { icon: <Globe />, value: "62", label: "Countries" },
//   { icon: <Star />, value: "4.9", label: "Avg Rating" },
// ];

// const testimonials = [
//   { name: "Vikram S.", role: "iPhone Expert", text: "Landed a $90K job at Apple Authorized Center!", rating: 5 },
//   { name: "Anjali M.", role: "Android Pro", text: "Started my own 3-store repair chain in 6 months!", rating: 5 },
//   { name: "Rohan D.", role: "Chip Engineer", text: "Now consulting for global repair networks.", rating: 5 },
// ];

// const benefits = [
//   { icon: <Rocket />, title: "Fast-Track Career", desc: "Get job-ready in weeks, not years" },
//   { icon: <Target />, title: "100% Placement", desc: "Guaranteed job or money back" },
//   { icon: <Lightbulb />, title: "Real Projects", desc: "Work on 50+ real devices" },
//   { icon: <Heart />, title: "Lifetime Access", desc: "Updates, tools, community forever" },
// ];

// const Services = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
//   const y = transformScroll(scrollYProgress, [0, 1], [150, -150]);
//   const opacity = transformScroll(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLevel, setSelectedLevel] = useState("All");

//   const filteredServices = services.filter(s => {
//     const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          s.instructor.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = selectedLevel === "All" || s.level.includes(selectedLevel);
//     return matchesSearch && matchesLevel;
//   });

//   return (
//     <div ref={sectionRef} className="pt-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen overflow-hidden">
//       {/* Animated Background */}
//       <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
//         <div className="absolute top-32 left-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/20 to-orange-600/20 rounded-full blur-3xl" />
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/2 left-1/2 w-[1600px] h-[1600px] -translate-x-1/2 -translate-y-1/2 border border-orange-200/10 rounded-full"
//         />
//         <div className="absolute inset-0 bg-grid-orange-100/5 bg-[size:80px_80px]" />
//       </motion.div>

//       {/* Hero Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 text-center py-20 px-6"
//       >
//         <motion.h1
//           className="text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 mb-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
//           }}
//         >
//           {"Our Services".split("").map((char, i) => (
//             <motion.span
//               key={i}
//               variants={{
//                 hidden: { opacity: 0, y: 100, rotateX: -80 },
//                 visible: { opacity: 1, y: 0, rotateX: 0 },
//               }}
//               className="inline-block"
//               style={{ transform: "translateZ(80px)" }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-light mb-12"
//         >
//           We provide <span className="font-bold text-orange-600">high-quality, hands-on training</span> for iPhone, Android, and chip-level repairs. 
//           Gain confidence to handle real-world device issues with <span className="font-bold">certified experts</span>.
//         </motion.p>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, scaleX: 0.8 }}
//           animate={{ opacity: 1, scaleX: 1 }}
//           transition={{ delay: 0.8 }}
//           className="flex justify-center gap-10 md:gap-20 flex-wrap"
//         >
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1 + i * 0.1 }}
//               className="text-center group"
//             >
//               <div className="text-orange-600 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
//               <div className="text-4xl md:text-5xl font-black text-gray-900">{stat.value}</div>
//               <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Search & Filter */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2 }}
//         className="max-w-7xl mx-auto px-6 mb-16"
//       >
//         <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//           <div className="relative w-full md:w-96">
//             <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
//             <input
//               type="text"
//               placeholder="Search services or instructors..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-14 pr-6 py-4 rounded-full border border-gray-200 focus:border-orange-500 focus:outline-none text-lg shadow-sm transition-all"
//             />
//           </div>
//           <div className="flex gap-3">
//             {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
//               <button
//                 key={level}
//                 onClick={() => setSelectedLevel(level)}
//                 className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
//                   selectedLevel === level
//                     ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg"
//                     : "bg-white border border-gray-200 text-gray-700 hover:border-orange-500"
//                 }`}
//               >
//                 {level}
//               </button>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* 3D Service Cards */}
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 mb-20">
//         {filteredServices.map((service, i) => (
//           <ServiceCard key={service.id} {...service} index={i} />
//         ))}
//       </div>

//       {/* Why Choose Us */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-6"
//       >
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-5xl md:text-6xl font-black text-center mb-16">
//             Why Choose Our Training?
//           </h3>
//           <div className="grid md:grid-cols-4 gap-8">
//             {benefits.map((b, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="text-center group"
//               >
//                 <div className="inline-block p-6 bg-white/20 backdrop-blur-md rounded-3xl mb-4 group-hover:scale-110 transition-transform">
//                   <div className="text-white">{b.icon}</div>
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">{b.title}</h4>
//                 <p className="text-sm opacity-90">{b.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* Testimonials */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="py-20 px-6"
//       >
//         <h3 className="text-5xl font-bold text-center mb-16 text-gray-900">Success Stories</h3>
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.2 }}
//               className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-3xl transition-shadow"
//             >
//               <div className="flex gap-1 mb-4">
//                 {[...Array(t.rating)].map((_, j) => (
//                   <Star key={j} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
//                 ))}
//               </div>
//               <p className="text-gray-700 italic mb-6 text-lg">"{t.text}"</p>
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                   {t.name.split(" ").map(n => n[0]).join("")}
//                 </div>
//                 <div>
//                   <div className="font-bold text-gray-900">{t.name}</div>
//                   <div className="text-sm text-gray-600">{t.role}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         className="text-center py-20 px-6 bg-gradient-to-t from-gray-100 to-white"
//       >
//         <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-12">
//           <a
//             href="/enroll"
//             className="group relative inline-flex items-center gap-6 px-20 py-7 bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-2xl rounded-full overflow-hidden shadow-3xl hover:shadow-orange-500/50 transition-all duration-300"
//           >
//             <span className="relative z-10 flex items-center gap-4">
//               Start Your Journey Now
//               <motion.span animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//                 <ChevronRight className="w-8 h-8" />
//               </motion.span>
//             </span>
//             <motion.div
//               className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: "100%" }}
//               transition={{ duration: 0.7 }}
//             />
//           </a>
//         </motion.div>

//         <div className="flex justify-center gap-8 flex-wrap text-sm text-gray-600">
//           <div className="flex items-center gap-3">
//             <Shield className="w-6 h-6 text-green-600" />
//             <span className="font-semibold">100% Money-Back Guarantee</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <Headphones className="w-6 h-6 text-blue-600" />
//             <span className="font-semibold">24/7 Expert Support</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <CheckCircle className="w-6 h-6 text-purple-600" />
//             <span className="font-semibold">Lifetime Updates</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <Laptop className="w-6 h-6 text-orange-600" />
//             <span className="font-semibold">Online + Offline</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // === 3D HOLOGRAPHIC SERVICE CARD ===
// const ServiceCard = ({ 
//   icon, title, desc, gradient, badge, badgeColor, live, price, originalPrice, 
//   duration, students, rating, features, tools, instructor, index 
// }) => {
//   const cardRef = useRef(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
//   const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
//   const rotateX = useTransform(smoothY, [-300, 300], [25, -25]);
//   const rotateY = useTransform(smoothX, [-300, 300], [-25, 25]);

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;
//     mouseX.set(x);
//     mouseY.set(y);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100, rotateX: -40 }}
//       whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1, delay: index * 0.2, type: "spring", stiffness: 120 }}
//       className="relative group"
//       style={{ perspective: 1500 }}
//     >
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         whileHover={{ scale: 1.08, z: 120 }}
//         transition={{ type: "spring", stiffness: 400 }}
//         className="relative p-8 rounded-3xl bg-white/95 backdrop-blur-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500"
//       >
//         {/* Holographic Glow */}
//         <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-50 blur-3xl transition-opacity duration-700`} />

//         {/* Badge */}
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           whileInView={{ scale: 1, rotate: 0 }}
//           transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
//           className={`absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${badgeColor} text-white text-sm font-bold px-5 py-2 rounded-full shadow-2xl flex items-center gap-1`}
//           style={{ transform: "translateZ(100px)" }}
//         >
//           {badge === "MOST POPULAR" && <Trophy className="w-4 h-4" />}
//           {badge === "FASTEST GROWING" && <Zap className="w-4 h-4" />}
//           {badge === "ELITE" && <Award className="w-4 h-4" />}
//           {badge}
//         </motion.div>

//         {/* Live Indicator */}
//         {live && (
//           <motion.div
//             animate={{ opacity: [1, 0.6, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute top-6 right-6 w-4 h-4 bg-red-500 rounded-full shadow-lg"
//             style={{ transform: "translateZ(80px)" }}
//           />
//         )}

//         {/* Icon */}
//         <motion.div
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
//           className="mb-8 flex justify-center"
//           style={{ transform: "translateZ(60px)" }}
//         >
//           <div className="p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl shadow-inner text-orange-600">
//             {icon}
//           </div>
//         </motion.div>

//         {/* Title & Instructor */}
//         <motion.h3 className="text-3xl font-bold text-gray-900 mb-2 text-center" style={{ transform: "translateZ(50px)" }}>
//           {title}
//         </motion.h3>
//         <motion.p className="text-sm text-orange-600 text-center mb-6" style={{ transform: "translateZ(40px)" }}>
//           by <span className="font-bold">{instructor}</span>
//         </motion.p>

//         {/* Duration */}
//         <motion.div className="flex items-center justify-center gap-2 text-orange-600 font-semibold mb-6" style={{ transform: "translateZ(35px)" }}>
//           <Clock className="w-6 h-6" />
//           <span className="text-lg">{duration}</span>
//         </motion.div>

//         {/* Description */}
//         <motion.p className="text-gray-600 mb-8 leading-relaxed text-center" style={{ transform: "translateZ(30px)" }}>
//           {desc}
//         </motion.p>

//         {/* Features */}
//         <motion.ul className="space-y-3 mb-8" style={{ transform: "translateZ(35px)" }}>
//           {features.map((f, i) => (
//             <motion.li
//               key={i}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
//               className="flex items-center gap-3 text-sm text-gray-700"
//             >
//               <div className="w-2 h-2 bg-orange-600 rounded-full" />
//               {f}
//             </motion.li>
//           ))}
//         </motion.ul>

//         {/* Tools */}
//         <motion.div className="flex flex-wrap justify-center gap-2 mb-8" style={{ transform: "translateZ(40px)" }}>
//           {tools.map((tool, i) => (
//             <span key={i} className="text-xs bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
//               {tool}
//             </span>
//           ))}
//         </motion.div>

//         {/* Price & Rating */}
//         <motion.div className="flex justify-between items-center mb-6" style={{ transform: "translateZ(45px)" }}>
//           <div>
//             <span className="text-4xl font-black text-gray-900">{price}</span>
//             <span className="text-lg text-gray-500 line-through ml-2">{originalPrice}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
//             <span className="font-bold text-lg">{rating}</span>
//             <span className="text-sm text-gray-500">({students})</span>
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg py-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
//           style={{ transform: "translateZ(50px)" }}
//         >
//           Enroll Now
//         </motion.button>

//         {/* Shine Sweep */}
//         <motion.div
//           className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
//           initial={{ x: "-150%" }}
//           whileHover={{ x: "150%" }}
//           transition={{ duration: 0.8 }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;
