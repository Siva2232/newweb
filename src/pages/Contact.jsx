// 'use client';

// import { motion, useInView } from "framer-motion";
// import { 
//   MapPin, Phone, Mail, Clock, Globe, Users, Award, Zap, 
//   Send, CheckCircle, ChevronRight, Sparkles, X
// } from "lucide-react";
// import { useRef, useState } from "react";
// import confetti from 'canvas-confetti';
// import { sendContactForm } from '../api/api'; // Make sure this path is correct

// const BRAND_ORANGE = '#F37021';

// const stats = [
//   { icon: <Users className="w-10 h-10" />, value: "15,842+", label: "Students Helped" },
//   { icon: <Award className="w-10 h-10" />, value: "4.9", label: "Support Rating" },
//   { icon: <Zap className="w-10 h-10" />, value: "24/7", label: "Live Support" },
//   { icon: <Globe className="w-10 h-10" />, value: "3", label: "Countries" },
// ];

// const faqs = [
//   { q: "What are the course fees?", a: "Fees range from Rs2,499 to Rs60,000 based on course level. Installments available." },
//   { q: "Do you offer job placement?", a: "Yes! 100% placement support with our 500+ partner service centers." },
//   { q: "Are classes online or offline?", a: "Both! Hybrid mode with live online + hands-on offline labs." },
//   { q: "Is certification provided?", a: "Yes! Industry-recognized certificate upon completion." },
// ];

// export default function Contact() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [error, setError] = useState("");

//   // Form Validation
//   const validateForm = () => {
//     if (!formData.name.trim()) return "Name is required";
//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Please enter a valid email";
//     if (formData.message.trim().length < 10) return "Message must be at least 10 characters long";
//     return null;
//   };

//   // Real Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setShowSuccess(false);

//     const validationError = validateForm();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       await sendContactForm({
//         name: formData.name.trim(),
//         email: formData.email.trim(),
//         phone: formData.phone.trim() || "Not provided",
//         message: formData.message.trim(),
//       });

//       // Success Celebration
//       confetti({
//         particleCount: 150,
//         spread: 80,
//         origin: { y: 0.6 },
//         colors: [BRAND_ORANGE, '#FF8C42', '#FFA270', '#FF6347', '#FF4500'],
//         scalar: 1.3,
//         ticks: 200,
//       });

//       setShowSuccess(true);
//       setFormData({ name: "", email: "", phone: "", message: "" });

//       setTimeout(() => setShowSuccess(false), 6000);

//     } catch (err) {
//       setError(err.message || "Failed to send message. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <div ref={sectionRef} className="pt-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen overflow-hidden relative">

//         {/* Animated Background Blobs */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-40 left-10 w-[700px] h-[700px] bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/20 to-orange-600/20 rounded-full blur-3xl" />
//         </div>

//         {/* Hero Title */}
//       <motion.div
//   initial={{ opacity: 0, y: 50 }}
//   animate={isInView ? { opacity: 1, y: 0 } : {}}
//   transition={{ duration: 1 }}
//   className="relative z-10 text-center py-20 px-6"
// >

//           <motion.h1 className="text-6xl md:text-8xl font-black mb-6">
//             {"Contact Us".split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, y: 120 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
//                 className="inline-block"
//                 style={{ color: BRAND_ORANGE }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.7 }}
//             className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-light mb-12"
//           >
//             We're here to help you with <span className="font-bold text-orange-600">course details, admissions, and career guidance</span>.
//             Reach out today and start your journey!
//           </motion.p>

//           {/* Stats */}
//           <div className="flex justify-center gap-10 md:gap-20 flex-wrap">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.9 + i * 0.1 }}
//                 className="text-center group"
//               >
//                 <div className="text-orange-600 mb-3 group-hover:scale-110 transition-transform">
//                   {stat.icon}
//                 </div>
//                 <div className="text-4xl md:text-5xl font-black text-gray-900">{stat.value}</div>
//                 <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Contact Info + Map */}
//         <div className="max-w-7xl mx-auto px-6 mb-20">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Cards */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               {[
//                 { icon: <MapPin className="w-8 h-8" />, title: "Our Location", content: "2nd Floor, Keystone Building, Jail Rd, Kozhikode, Kerala 673004" },
//                 { icon: <Phone className="w-8 h-8" />, title: "Call Us", content: "+91 9758828258 (Mon-Sat: 9AM-6PM)" },
//                 { icon: <Mail className="w-8 h-8" />, title: "Email Us", content: "info@getfixacademy.com" },
//                 { icon: <Clock className="w-8 h-8" />, title: "Working Hours", content: "Monday - Saturday: 9:00 AM - 6:00 PM IST" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.03, x: 12 }}
//                   className="group flex gap-5 p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all"
//                 >
//                   <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl text-orange-600 group-hover:scale-110 transition-transform">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
//                     <p className="text-gray-600 leading-relaxed">{item.content}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Interactive 3D Map */}
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative h-96 lg:h-full min-h-96"
//               style={{ perspective: 1500 }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.02, rotateY: 6, rotateX: -6 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
//               >
//                 <iframe
//                   title="GetFix Academy Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.77!2d75.7901384!3d11.252201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593c6c20a8e3%3A0xb30547e131adeb98!2sGetFix%20Academy!5e0!3m2!1sen!2sin!4v1763393846551!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
//                 >
//                   <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
//                   <span className="text-sm font-bold text-gray-800">Live Campus Map</span>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Contact Form - Real API */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto px-6 mb-20"
//         >
//           <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
//             <h3 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">Get in Touch</h3>
//             <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
//               Fill out the form below and our team will respond within <span className="font-bold text-orange-600">2 hours</span>.
//             </p>

//             {/* Error Alert */}
//             {error && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-2xl text-center font-medium"
//               >
//                 {error}
//               </motion.div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="text"
//                   placeholder="Your Name *"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                   className="w-full px-6 py-4 rounded-full border border-gray-300 focus:border-orange-500 focus:outline-none text-lg transition-all bg-white/50"
//                 />
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="email"
//                   placeholder="Email Address *"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                   className="w-full px-6 py-4 rounded-full border border-gray-300 focus:border-orange-500 focus:outline-none text-lg transition-all bg-white/50"
//                 />
//               </div>

//               <motion.input
//                 whileFocus={{ scale: 1.02 }}
//                 type="tel"
//                 placeholder="Phone Number (Optional)"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 className="w-full px-6 py-4 rounded-full border border-gray-300 focus:border-orange-500 focus:outline-none text-lg transition-all bg-white/50"
//               />

//               <motion.textarea
//                 whileFocus={{ scale: 1.01 }}
//                 placeholder="Your Message *"
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 required
//                 rows={5}
//                 className="w-full px-6 py-4 rounded-3xl border border-gray-300 focus:border-orange-500 focus:outline-none text-lg transition-all resize-none bg-white/50"
//               />

//               <motion.button
//                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
//                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xl py-5 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-80"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="w-6 h-6" />
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </div>
//         </motion.div>

//         {/* Success Toast */}
//         {showSuccess && (
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -30 }}
//             className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
//           >
//             <div className="bg-white/95 backdrop-blur-2xl px-8 py-5 rounded-3xl shadow-2xl border border-orange-200 flex items-center gap-4">
//               <CheckCircle className="w-10 h-10" style={{ color: BRAND_ORANGE }} />
//               <div>
//                 <p className="font-bold text-gray-900">Message Sent Successfully!</p>
//                 <p className="text-sm text-gray-600">We’ll reply within 2 hours.</p>
//               </div>
//               <button onClick={() => setShowSuccess(false)} className="text-gray-400 hover:text-gray-600">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//           </motion.div>
//         )}

//         {/* FAQ Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto px-6 mb-20"
//         >
//           <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">Frequently Asked Questions</h3>
//           <div className="space-y-6">
//             {faqs.map((faq, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50"
//               >
//                 <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
//                   <ChevronRight className="w-5 h-5 text-orange-600" />
//                   {faq.q}
//                 </h4>
//                 <p className="text-gray-600 pl-8">{faq.a}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Final CTA */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-6"
//         >
//           <div className="max-w-7xl mx-auto text-center">
//             <h3 className="text-5xl md:text-6xl font-black mb-6">Ready to Start Your Journey?</h3>
//             <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
//               Join 15,000+ students who transformed their careers with expert training.
//             </p>
//             <motion.a
//               href="https://wa.me/+918304952266"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-6 px-20 py-7 bg-white text-orange-600 font-black text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all"
//             >
//               Enroll Now via WhatsApp
//               <Sparkles className="w-8 h-8" />
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// }

'use client';

import { motion, useInView } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, Globe, Users, Award, Zap, 
  CheckCircle, ChevronRight, Sparkles, X
} from "lucide-react";
import { useRef, useEffect } from "react";
import confetti from 'canvas-confetti';

const BRAND_ORANGE = '#F37021';

const stats = [
  { icon: <Users className="w-10 h-10" />, value: "15,842+", label: "Students Helped" },
  { icon: <Award className="w-10 h-10" />, value: "4.9", label: "Support Rating" },
  { icon: <Zap className="w-10 h-10" />, value: "24/7", label: "Live Support" },
  { icon: <Globe className="w-10 h-10" />, value: "3", label: "Countries" },
];

const faqs = [
  { q: "What are the course fees?", a: "Fees range from Rs2,499 to Rs60,000 based on course level. Installments available." },
  { q: "Do you offer job placement?", a: "Yes! 100% placement support with our 500+ partner service centers." },
  { q: "Are classes online or offline?", a: "Both! Hybrid mode with live online + hands-on offline labs." },
  { q: "Is certification provided?", a: "Yes! Industry-recognized certificate upon completion." },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Optional: Confetti on form submission (works with most LeadConnector forms)
  useEffect(() => {
    const handleSuccess = () => {
      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: [BRAND_ORANGE, '#FF4500', '#FF6347', '#FF8C42', '#FFA270'],
      });
    };
    window.addEventListener("message", (e) => {
      if (e.data?.type === "hsFormCallback" && e.data?.eventName === "onFormSubmitted") handleSuccess();
    });
  }, []);

  return (
    <>
      {/* ================== LEADCONNECTOR SCRIPT (REQUIRED) ================== */}
      <script src="https://link.msgsndr.com/js/form_embed.js" async></script>

      <div ref={sectionRef} className="pt-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen overflow-hidden relative">

        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-40 left-10 w-[700px] h-[700px] bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/20 to-orange-600/20 rounded-full blur-3xl" />
        </div>

        {/* Hero + Stats */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="relative z-10 text-center py-20 px-6">
          <motion.h1 className="text-6xl md:text-8xl font-black mb-6">
            {"Contact Us".split("").map((char, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 120 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }} className="inline-block" style={{ color: BRAND_ORANGE }}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-light mb-12">
            We're here to help you with <span className="font-bold text-orange-600">course details, admissions, and career guidance</span>. Reach out today!
          </motion.p>

          <div className="flex justify-center gap-10 md:gap-20 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 + i * 0.1 }} className="text-center group">
                <div className="text-orange-600 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info + Map */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              {[
                { icon: <MapPin className="w-8 h-8" />, title: "Our Location", content: "2nd Floor, Keystone Building, Jail Rd, Kozhikode, Kerala 673004" },
                { icon: <Phone className="w-8 h-8" />, title: "Call Us", content: "+91 9758828258 (Mon-Sat: 9AM-6PM)" },
                { icon: <Mail className="w-8 h-8" />, title: "Email Us", content: "info@getfixacademy.com" },
                { icon: <Clock className="w-8 h-8" />, title: "Working Hours", content: "Monday - Saturday: 9:00 AM - 6:00 PM IST" },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03, x: 12 }} className="group flex gap-5 p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all">
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl text-orange-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-96 lg:h-full min-h-96" style={{ perspective: 1500 }}>
              <motion.div whileHover={{ scale: 1.02, rotateY: 6, rotateX: -6 }} transition={{ type: "spring", stiffness: 300 }} className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  title="GetFix Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.77!2d75.7901384!3d11.252201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593c6c20a8e3%3A0xb30547e131adeb98!2sGetFix%20Academy!5e0!3m2!1sen!2sin!4v1763393846551!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ================== YOUR LEADCONNECTOR FORM WITH PREMIUM UI ================== */}
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto px-6 mb-32 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-400/30 to-red-500/30 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative bg-white/90 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-[#F37021] via-orange-500 to-red-600" />
            <div className="p-10 md:p-16 text-center">
              <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#F37021] to-red-600 bg-clip-text text-transparent mb-6">
                Get Free Consultation Now
              </h3>
              <p className="text-xl text-gray-600 mb-12">
                Fill the form — our team will call you in <span className="font-bold text-orange-600">under 2 hours</span>
              </p>

              {/* YOUR EXACT IFRAME CODE (100% WORKING) */}
              <div className="relative w-full h-[650px] rounded-3xl overflow-hidden shadow-inner border border-orange-100">
                <iframe
    src="https://api.leadconnectorhq.com/widget/form/ohKjwrblqjVflbUJY7Ei"
                  style={{display:"block",width:"100%",height:"100%",border:"none",borderRadius:"24px"}}
                  id="popup-ohKjwrblqjVflbUJY7Ei"
                  data-layout={'{"id":"POPUP"}'}
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Us"
                  data-height="416"
                  data-layout-iframe-id="popup-ohKjwrblqjVflbUJY7Ei"
                  data-form-id="ohKjwrblqjVflbUJY7Ei"
                  title="Contact Us"
                ></iframe>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                🔒 100% Secure • Powered by GetFix Academy
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ & Final CTA */}
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto px-6 mb-20">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-orange-600" />
                  {faq.q}
                </h4>
                <p className="text-gray-600 pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-5xl md:text-6xl font-black mb-6">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Join 15,000+ students who transformed their careers with expert training.
            </p>
            <motion.a
              href="https://wa.me/+918304952266"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 px-20 py-7 bg-white text-orange-600 font-black text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all"
            >
              Enroll Now via WhatsApp
              <Sparkles className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}