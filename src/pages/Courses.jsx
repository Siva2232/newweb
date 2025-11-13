// import { motion, useMotionValue, useTransform, useSpring, useScroll, useTransform as transformScroll } from "framer-motion";
// import { Search, Filter, Star, Users, Trophy, Clock, Award, Zap, ChevronRight, PlayCircle, Shield, Headphones, CheckCircle, BookOpen, Smartphone, Cpu, Wrench, Globe, Laptop } from "lucide-react";
// import { useRef, useState } from "react";

// const courses = [
//   {
//     id: 1,
//     title: "iPhone Repair Mastery",
//     instructor: "Rajesh Kumar",
//     duration: "12 Weeks",
//     level: "Intermediate",
//     students: 3847,
//     rating: 4.9,
//     price: "$1,299",
//     originalPrice: "$1,999",
//     discount: 35,
//     category: "iPhone",
//     format: "Online + Offline",
//     certificate: true,
//     live: true,
//     thumbnail: "iphone",
//     features: ["Live Teardowns", "Apple Tools", "1-on-1 Mentorship", "Job Placement"],
//     tools: ["iFixit Pro", "DC Supply", "Microscope"],
//     badge: "BEST SELLER",
//     badgeColor: "from-yellow-400 to-amber-600",
//   },
//   {
//     id: 2,
//     title: "Android Repair Pro",
//     instructor: "Priya Sharma",
//     duration: "8 Weeks",
//     level: "Beginner to Pro",
//     students: 4102,
//     rating: 4.8,
//     price: "$999",
//     originalPrice: "$1,599",
//     discount: 37,
//     category: "Android",
//     format: "Online",
//     certificate: true,
//     live: false,
//     thumbnail: "android",
//     features: ["EDL Mode", "Custom ROMs", "Multi-Brand", "Free Tools"],
//     tools: ["Odin", "SP Flash", "ADB"],
//     badge: "FAST TRACK",
//     badgeColor: "from-green-400 to-emerald-600",
//   },
//   {
//     id: 3,
//     title: "Chip-Level Engineering",
//     instructor: "Amit Verma",
//     duration: "24 Weeks",
//     level: "Advanced",
//     students: 1593,
//     rating: 5.0,
//     price: "$2,499",
//     originalPrice: "$3,999",
//     discount: 37,
//     category: "Chip-Level",
//     format: "Offline + Online",
//     certificate: true,
//     live: true,
//     thumbnail: "chip",
//     features: ["BGA Reballing", "Oscilloscope", "Schematics", "Lifetime Support"],
//     tools: ["Hot Air", "Oscilloscope", "Multimeter"],
//     badge: "ELITE",
//     badgeColor: "from-purple-500 to-pink-600",
//   },
//   {
//     id: 4,
//     title: "Software Diagnostics",
//     instructor: "Neha Gupta",
//     duration: "6 Weeks",
//     level: "Beginner",
//     students: 2891,
//     rating: 4.7,
//     price: "$599",
//     originalPrice: "$999",
//     discount: 40,
//     category: "Software",
//     format: "Online",
//     certificate: true,
//     live: false,
//     thumbnail: "software",
//     features: ["Flashing", "Backup", "Rooting", "Debugging"],
//     tools: ["PC Suite", "ADB", "Fastboot"],
//     badge: "NEW",
//     badgeColor: "from-blue-400 to-cyan-600",
//   },
// ];

// const stats = [
//   { icon: <Users />, value: "12,433+", label: "Students Enrolled" },
//   { icon: <Trophy />, value: "3,842", label: "Jobs Secured" },
//   { icon: <Globe />, value: "58", label: "Countries" },
//   { icon: <Star />, value: "4.9", label: "Average Rating" },
// ];

// const testimonials = [
//   { name: "Vikram Singh", role: "iPhone Graduate", text: "From zero to $90K/year in 4 months!", rating: 5 },
//   { name: "Anjali Mehta", role: "Android Pro", text: "Now running my own repair chain!", rating: 5 },
//   { name: "Rohan Desai", role: "Chip Engineer", text: "Best technical training I’ve ever had.", rating: 5 },
// ];

// const Courses = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
//   const y = transformScroll(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = transformScroll(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedLevel, setSelectedLevel] = useState("All");

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
//     const matchesLevel = selectedLevel === "All" || course.level.includes(selectedLevel);
//     return matchesSearch && matchesCategory && matchesLevel;
//   });

//   return (
//     <div ref={sectionRef} className="pt-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen">
//       {/* Hero Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center py-16 px-6"
//       >
//         <motion.h1
//           className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 mb-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
//           }}
//         >
//           {"Explore Our Courses".split("").map((char, i) => (
//             <motion.span
//               key={i}
//               variants={{
//                 hidden: { opacity: 0, y: 80, rotateX: -70 },
//                 visible: { opacity: 1, y: 0, rotateX: 0 },
//               }}
//               className="inline-block"
//               style={{ transform: "translateZ(60px)" }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light mb-10"
//         >
//           Learn step-by-step mobile servicing from <span className="font-bold text-orange-600">industry professionals</span>. 
//           Real projects, live devices, and guaranteed job placement.
//         </motion.p>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, scaleX: 0.8 }}
//           animate={{ opacity: 1, scaleX: 1 }}
//           transition={{ delay: 0.8 }}
//           className="flex justify-center gap-8 md:gap-16 flex-wrap"
//         >
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1 + i * 0.1 }}
//               className="text-center"
//             >
//               <div className="text-orange-600 mb-2">{stat.icon}</div>
//               <div className="text-3xl font-black text-gray-900">{stat.value}</div>
//               <div className="text-sm text-gray-600">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Search + Filters */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2 }}
//         className="max-w-7xl mx-auto px-6 mb-12"
//       >
//         <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//           <div className="relative w-full md:w-96">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search courses or instructors..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-orange-500 focus:outline-none transition-all"
//             />
//           </div>
//           <div className="flex gap-3 flex-wrap">
//             {["All", "iPhone", "Android", "Chip-Level", "Software"].map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//                   selectedCategory === cat
//                     ? "bg-orange-600 text-white"
//                     : "bg-white border border-gray-200 text-gray-700 hover:border-orange-500"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//           <select
//             value={selectedLevel}
//             onChange={(e) => setSelectedLevel(e.target.value)}
//             className="px-5 py-2 rounded-full border border-gray-200 text-sm focus:border-orange-500 focus:outline-none"
//           >
//             <option value="All">All Levels</option>
//             <option value="Beginner">Beginner</option>
//             <option value="Intermediate">Intermediate</option>
//             <option value="Advanced">Advanced</option>
//           </select>
//         </div>
//       </motion.div>

//       {/* Course Grid */}
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
//         {filteredCourses.map((course, i) => (
//           <CourseCard key={course.id} {...course} index={i} />
//         ))}
//       </div>

//       {/* Certification & Career */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-6"
//       >
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-4xl md:text-5xl font-black mb-6">
//             Certification & Career Support
//           </h3>
//           <p className="text-xl mb-10 opacity-90">
//             Get <span className="font-bold">industry-recognized certification</span> and 
//             <span className="font-bold"> lifetime job placement assistance</span> in top repair centers worldwide.
//           </p>
//           <div className="flex justify-center gap-8 flex-wrap">
//             <div className="flex items-center gap-3">
//               <Award className="w-8 h-8" />
//               <span className="text-lg">Official Certificate</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Trophy className="w-8 h-8" />
//               <span className="text-lg">100% Placement Rate</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Laptop className="w-8 h-8" />
//               <span className="text-lg">Hybrid Learning</span>
//             </div>
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
//         <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Student Success Stories</h3>
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.2 }}
//               className="bg-white rounded-2xl p-6 shadow-xl border border-orange-100"
//             >
//               <div className="flex gap-1 mb-3">
//                 {[...Array(t.rating)].map((_, j) => (
//                   <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
//                 ))}
//               </div>
//               <p className="text-gray-700 italic mb-4">"{t.text}"</p>
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full" />
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
//         className="text-center py-16 px-6 bg-gradient-to-t from-gray-100 to-white"
//       >
//         <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
//           <a
//             href="/enroll"
//             className="group relative inline-flex items-center gap-4 px-16 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
//           >
//             <span className="relative z-10 flex items-center gap-3">
//               Start Your Journey Today
//               <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//                 <ChevronRight className="w-6 h-6" />
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

//         <div className="flex justify-center gap-6 mt-8 text-sm text-gray-600">
//           <div className="flex items-center gap-2">
//             <Shield className="w-5 h-5 text-green-600" />
//             <span>100% Money-Back</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Headphones className="w-5 h-5 text-blue-600" />
//             <span>24/7 Support</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <CheckCircle className="w-5 h-5 text-purple-600" />
//             <span>Lifetime Access</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // === 3D HOLOGRAPHIC COURSE CARD ===
// const CourseCard = ({ title, instructor, duration, level, students, rating, price, originalPrice, discount, badge, badgeColor, live, features, tools, index }) => {
//   const cardRef = useRef(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
//   const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
//   const rotateX = useTransform(smoothY, [-300, 300], [20, -20]);
//   const rotateY = useTransform(smoothX, [-300, 300], [-20, 20]);

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
//       initial={{ opacity: 0, y: 80, rotateX: -30 }}
//       whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.9, delay: index * 0.15, type: "spring", stiffness: 120 }}
//       className="relative group"
//       style={{ perspective: 1200 }}
//     >
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         whileHover={{ scale: 1.06, z: 100 }}
//         transition={{ type: "spring", stiffness: 400 }}
//         className="relative p-6 rounded-3xl bg-white/95 backdrop-blur-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500"
//       >
//         {/* Badge */}
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           whileInView={{ scale: 1, rotate: 0 }}
//           transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
//           className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1`}
//           style={{ transform: "translateZ(80px)" }}
//         >
//           {badge === "BEST SELLER" && <Trophy className="w-3 h-3" />}
//           {badge === "FAST TRACK" && <Zap className="w-3 h-3" />}
//           {badge === "ELITE" && <Award className="w-3 h-3" />}
//           {badge === "NEW" && <PlayCircle className="w-3 h-3" />}
//           {badge}
//         </motion.div>

//         {/* Live Indicator */}
//         {live && (
//           <motion.div
//             animate={{ opacity: [1, 0.6, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"
//             style={{ transform: "translateZ(60px)" }}
//           />
//         )}

//         {/* Thumbnail */}
//         <div className="mb-5 h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
//           <div className="text-6xl">Phone</div>
//         </div>

//         <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ transform: "translateZ(40px)" }}>
//           {title}
//         </h3>
//         <p className="text-sm text-orange-600 mb-3" style={{ transform: "translateZ(30px)" }}>
//           by <span className="font-semibold">{instructor}</span>
//         </p>

//         <div className="flex items-center gap-4 text-sm text-gray-600 mb-4" style={{ transform: "translateZ(25px)" }}>
//           <div className="flex items-center gap-1">
//             <Clock className="w-4 h-4" />
//             <span>{duration}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Users className="w-4 h-4" />
//             <span>{students.toLocaleString()}</span>
//           </div>
//         </div>

//         <div className="flex items-center gap-1 mb-4" style={{ transform: "translateZ(30px)" }}>
//           <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
//           <span className="font-bold">{rating}</span>
//           <span className="text-sm text-gray-500">({students} reviews)</span>
//         </div>

//         <div className="flex items-center justify-between mb-4" style={{ transform: "translateZ(35px)" }}>
//           <div>
//             <span className="text-3xl font-black text-gray-900">{price}</span>
//             <span className="text-sm text-gray-500 line-through ml-2">{originalPrice}</span>
//           </div>
//           <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
//             {discount}% OFF
//           </span>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-3 rounded-full shadow-lg"
//           style={{ transform: "translateZ(40px)" }}
//         >
//           Enroll Now
//         </motion.button>

//         {/* Shine */}
//         <motion.div
//           className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
//           initial={{ x: "-150%" }}
//           whileHover={{ x: "150%" }}
//           transition={{ duration: 0.8 }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Courses;




import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 px-4">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 mb-4">
          Our Courses
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Our Courses page is progressing… Stay tuned!
        </p>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center justify-center text-orange-500"
        >
          <Zap className="w-10 h-10 sm:w-12 sm:h-12" />
        </motion.div>
      </motion.div>

      {/* Progressing Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 p-8 max-w-md w-full bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          🚧 Work in Progress
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We are adding courses soon. Check back later for updates and exclusive features!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Notify Me
        </motion.button>
      </motion.div>

    </div>
  );
};

export default Services;
