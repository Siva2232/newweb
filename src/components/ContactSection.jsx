// 'use client';

// import { motion, useInView } from 'framer-motion';
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   CheckCircle,
//   X,
//   ChevronDown,
//   Shield,
//   Clock,
//   Zap,
//   Building2,
//   Star,
// } from 'lucide-react';
// import { useRef, useState, useEffect } from 'react';
// import confetti from 'canvas-confetti';
// import { sendContactForm } from '../api/api'; // Adjust path if needed

// const BRAND_ORANGE = '#F37021';

// // ──────────────────────────────────────────────────────────────
// // SMOOTH COUNTER
// // ──────────────────────────────────────────────────────────────
// const easeOutQuad = (t) => 1 - (1 - t) ** 2;

// const Counter = ({ end, suffix = '', label, icon }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView || count > 0) return;

//     const duration = 2000;
//     const start = Date.now();

//     const timer = setInterval(() => {
//       const elapsed = Date.now() - start;
//       const progress = Math.min(elapsed / duration, 1);
//       const eased = easeOutQuad(progress);
//       const value = Math.floor(eased * end);

//       setCount(value);

//       if (progress >= 1) clearInterval(timer);
//     }, 16);

//     return () => clearInterval(timer);
//   }, [inView, end]);

//   return (
//     <div ref={ref} className="text-center">
//       <div
//         className="text-4xl md:text-5xl font-black flex items-center justify-center gap-1"
//         style={{ color: BRAND_ORANGE }}
//       >
//         {icon}
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           {count}
//           {suffix}
//         </motion.span>
//       </div>
//       <p className="text-sm text-gray-600 mt-1">{label}</p>
//     </div>
//   );
// };

// // ──────────────────────────────────────────────────────────────
// // MAIN CONTACT SECTION – UPDATED WITH REAL API CALLS
// // ──────────────────────────────────────────────────────────────
// export default function ContactSection() {
//   const sectionRef = useRef(null);
//   const isVisible = useInView(sectionRef, { once: true, margin: '-100px' });

//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [quickEmail, setQuickEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [faqOpen, setFaqOpen] = useState({});

//   // Live IST Clock
//   const [currentTime, setCurrentTime] = useState('');
//   useEffect(() => {
//     const update = () => {
//       const now = new Date();
//       const ist = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
//       setCurrentTime(
//         ist.toLocaleTimeString('en-IN', {
//           hour: '2-digit',
//           minute: '2-digit',
//           timeZone: 'Asia/Kolkata',
//         })
//       );
//     };
//     update();
//     const id = setInterval(update, 1000);
//     return () => clearInterval(id);
//   }, []);

//   // Form validation
//   const validate = () => {
//     const err = {};
//     if (!formData.name.trim()) err.name = 'Name is required';
//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) err.email = 'Valid email required';
//     if (formData.message.length < 10) err.message = 'Message must be 10+ characters';
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   // MAIN FORM SUBMISSION – NOW CALLS REAL API
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setErrors({});
//     setIsSubmitting(true);

//     try {
//       await sendContactForm({
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
//       });

//       // Success!
//       confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 },
//         colors: [BRAND_ORANGE, '#FF8C42', '#FFA270'],
//       });

//       setIsSubmitted(true);
//       setTimeout(() => {
//         setIsSubmitted(false);
//         setFormData({ name: '', email: '', message: '' });
//       }, 4000);
//     } catch (error) {
//       setErrors({ submit: error.message || 'Failed to send message. Please try again.' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // QUICK QUOTE – ALSO SENDS REAL EMAIL
//   const handleQuick = async (e) => {
//     e.preventDefault();
//     if (!quickEmail.includes('@')) return;

//     setIsSubmitting(true);
//     try {
//       await sendContactForm({
//         name: 'Quick Quote Request',
//         email: quickEmail,
//         message: 'Interested in your services – please send a quick quote!',
//       });

//       confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 }, colors: [BRAND_ORANGE] });
//       setQuickEmail('');
//     } catch (err) {
//       alert('Failed to send. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Rest of your JSX remains beautiful and unchanged...
//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden"
//     >
//       {/* Live Clock */}
//       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-xs font-medium text-gray-700 z-20">
//         {currentTime} IST
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Hero Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h1
//             className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
//             style={{ color: BRAND_ORANGE }}
//           >
//             {"Let's Connect".split('').map((char, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={isVisible ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
//                 className="inline-block"
//               >
//                 {char === ' ' ? '\u00A0' : char}
//               </motion.span>
//             ))}
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
//             We respond within{' '}
//             <span style={{ color: BRAND_ORANGE, fontWeight: 600 }}>2 hours</span> — guaranteed.
//           </p>
//         </motion.div>

//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//           {/* LEFT – Map (desktop) / Form (mobile) */}
//           <div className="space-y-8 order-2 lg:order-1">
//             <motion.div initial={{ opacity: 0, x: -40 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="lg:hidden">
//               <ContactForm formData={formData} setFormData={setFormData} errors={errors} isSubmitting={isSubmitting} isSubmitted={isSubmitted} onSubmit={handleSubmit} />
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5 }} className="hidden lg:block">
//               <div className="rounded-3xl overflow-hidden shadow-2xl h-96 border border-gray-200/50">
//                 <iframe
//                   title="Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.125176151029!2d75.7901384!3d11.252201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593c6c20a8e3%3A0xb30547e131adeb98!2sGetFix%20Academy!5e0!3m2!1sen!2sin!4v1763393846551!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT – Contact Cards + Form */}
//           <div className="space-y-8 order-1 lg:order-2">
//             <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {[
//                 { icon: <Phone className="w-6 h-6" />, label: 'Call', value: '+91 7510636404' },
//                 { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'info@getfixacademy.com' },
//                 { icon: <MapPin className="w-6 h-6" />, label: 'Visit', value: '2nd Floor, Keystone Building, Kozhikode, Kerala 673004' },
//               ].map((item, i) => (
//                 <motion.div key={i} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + i * 0.1 }}
//                   className="p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg text-center">
//                   <div className="mb-2" style={{ color: BRAND_ORANGE }}>{item.icon}</div>
//                   <p className="text-sm text-gray-600">{item.label}</p>
//                   <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 40 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6 }} className="hidden lg:block">
//               <ContactForm formData={formData} setFormData={setFormData} errors={errors} isSubmitting={isSubmitting} isSubmitted={isSubmitted} onSubmit={handleSubmit} />
//             </motion.div>
//           </div>

//           {/* Mobile: Map + Below Content */}
//           <div className="space-y-12 lg:hidden order-3">
//             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.7 }}>
//               <div className="rounded-3xl overflow-hidden shadow-2xl h-72 border border-gray-200/50">
//                 <iframe title="Location" src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
//               </div>
//             </motion.div>

//             {/* Trust Badges, Quick CTA, Counters, FAQ, Offices – unchanged */}
//             {/* ... (same as your original code) */}
//           </div>

//           {/* Desktop: Below Map – unchanged */}
//           <div className="hidden lg:block lg:col-span-2 mt-12 space-y-12">
//             {/* Trust badges, counters, quick CTA, FAQ, offices – same as original */}
//           </div>
//         </div>

//         {/* Success Toast */}
//         {isSubmitted && (
//           <motion.div initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -30 }} className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
//             <div className="bg-white/95 backdrop-blur-2xl px-8 py-5 rounded-3xl shadow-2xl border border-orange-200 flex items-center gap-4">
//               <CheckCircle className="w-10 h-10" style={{ color: BRAND_ORANGE }} />
//               <div>
//                 <p className="font-bold text-gray-900">Message Sent Successfully!</p>
//                 <p className="text-sm text-gray-600">We’ll reply within 2 hours.</p>
//               </div>
//               <button onClick={() => setIsSubmitted(false)} className="text-gray-400 hover:text-gray-600">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//           </motion.div>
//         )}

//         {/* Global Error */}
//         {errors.submit && (
//           <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg z-50">
//             {errors.submit}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// // ──────────────────────────────────────────────────────────────
// // UPDATED CONTACT FORM WITH LOADING STATE
// // ──────────────────────────────────────────────────────────────
// const ContactForm = ({ formData, setFormData, errors, isSubmitting, isSubmitted, onSubmit }) => {
//   return (
//     <motion.form
//       onSubmit={onSubmit}
//       className="relative p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl"
//       style={{ boxShadow: `0 25px 60px -15px ${BRAND_ORANGE}30, inset 0 1px 0 rgba(255,255,255,0.8)` }}
//       whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
//     >
//       <div className="absolute inset-0 rounded-3xl blur-3xl -z-10" style={{ background: `${BRAND_ORANGE}15` }} />

//       <div className="space-y-6">
//         <FloatingInput icon={<Mail className="w-5 h-5" />} placeholder="Your Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} error={errors.email} />
//         <FloatingInput icon={<Phone className="w-5 h-5" />} placeholder="Your Name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} error={errors.name} />
//         <FloatingTextarea icon={<Send className="w-5 h-5" />} placeholder="How can we help you?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} error={errors.message} />
//       </div>

//       <motion.button
//         type="submit"
//         disabled={isSubmitting}
//         whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
//         whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//         className="mt-8 w-full py-5 text-white font-bold text-lg rounded-2xl shadow-xl flex items-center justify-center gap-3 disabled:opacity-80"
//         style={{ background: `linear-gradient(135deg, ${BRAND_ORANGE}, #E55A00)` }}
//       >
//         {isSubmitting ? (
//           <>
//             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//             Sending...
//           </>
//         ) : isSubmitted ? (
//           <>
//             <CheckCircle className="w-6 h-6" /> Sent!
//           </>
//         ) : (
//           <>
//             Send Message <Send className="w-5 h-5" />
//           </>
//         )}
//       </motion.button>
//     </motion.form>
//   );
// };

// // FloatingInput & FloatingTextarea – unchanged (perfect as-is)
// const FloatingInput = ({ icon, placeholder, type, value, onChange, error }) => {
//   const [focused, setFocused] = useState(false);
//   const hasValue = value.length > 0;

//   return (
//     <div className="relative">
//       <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10" style={{ color: BRAND_ORANGE }}>{icon}</div>
//       <input
//         type={type} value={value} onChange={onChange}
//         onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
//         className={`w-full pl-14 pr-4 py-5 text-base bg-white/50 backdrop-blur-md border rounded-2xl focus:outline-none transition-all duration-300 ${error ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' : 'border-gray-300'}`}
//         style={{ borderColor: focused && !error ? BRAND_ORANGE : undefined, boxShadow: focused ? `0 0 0 4px ${BRAND_ORANGE}20` : undefined }}
//         placeholder=" "
//       />
//       <label className={`absolute left-14 top-1/2 -translate-y-1/2 pointer-events-none transition-all origin-left text-gray-500 duration-300 ${focused || hasValue ? 'text-xs -translate-y-10 scale-90 font-medium' : 'text-base'} ${error ? '!text-red-500' : ''}`}
//         style={{ color: (focused || hasValue) && !error ? BRAND_ORANGE : undefined }}>
//         {placeholder}
//       </label>
//       {error && <p className="absolute -bottom-5 left-0 text-xs text-red-500 mt-1">{error}</p>}
//     </div>
//   );
// };

// const FloatingTextarea = ({ icon, placeholder, value, onChange, error }) => {
//   const [focused, setFocused] = useState(false);
//   const hasValue = value.length > 0;

//   return (
//     <div className="relative">
//       <div className="absolute left-4 top-6 z-10" style={{ color: BRAND_ORANGE }}>{icon}</div>
//       <textarea
//         value={value} onChange={onChange}
//         onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
//         className={`w-full pl-14 pr-4 py-5 text-base bg-white/50 backdrop-blur-md border rounded-2xl focus:outline-none transition-all duration-300 resize-none h-36 ${error ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' : 'border-gray-300'}`}
//         style={{ borderColor: focused && !error ? BRAND_ORANGE : undefined, boxShadow: focused ? `0 0 0 4px ${BRAND_ORANGE}20` : undefined }}
//         placeholder=" "
//       />
//       <label className={`absolute left-14 top-6 pointer-events-none transition-all origin-left text-gray-500 duration-300 ${focused || hasValue ? 'text-xs -translate-y-8 scale-90 font-medium' : 'text-base'} ${error ? '!text-red-500' : ''}`}
//         style={{ color: (focused || hasValue) && !error ? BRAND_ORANGE : undefined }}>
//         {placeholder}
//       </label>
//       {error && <p className="absolute -bottom-5 left-0 text-xs text-red-500 mt-1">{error}</p>}
//     </div>
//   );
// };

'use client';

import { motion, useInView } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Globe, Users, Award, Zap,
  CheckCircle, ChevronRight, Sparkles, X
} from 'lucide-react';
import { useRef, useEffect } from 'react';
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

  // Confetti on LeadConnector form submission
  useEffect(() => {
    const celebrate = () => {
      confetti({
        particleCount: 250,
        spread: 100,
        origin: { y: 0.6 },
        colors: [BRAND_ORANGE, '#FF4500', '#FF6347', '#FF8C42', '#FFA270'],
      });
    };

    const listener = (event) => {
      if (event.data?.type === "hsFormCallback" && event.data?.eventName === "onFormSubmitted") {
        celebrate();
      }
      if (typeof event.data === "string" && event.data.includes("submitted")) {
        celebrate();
      }
    };

    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, []);

  return (
    <>
      {/* LeadConnector Script */}
      <script src="https://link.msgsndr.com/js/form_embed.js" async></script>

      <div ref={sectionRef} className="pt-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen overflow-hidden relative">

        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-40 left-10 w-[700px] h-[700px] bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/20 to-orange-600/20 rounded-full blur-3xl" />
        </div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center py-20 px-6"
        >
          <motion.h1 className="text-6xl md:text-8xl font-black mb-6">
            {"Contact Us".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 120 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
                className="inline-block"
                style={{ color: BRAND_ORANGE }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-light mb-12"
          >
            We're here to help you with <span className="font-bold text-orange-600">course details, admissions, and career guidance</span>.
            Reach out today and start your journey!
          </motion.p>

          {/* Stats */}
          <div className="flex justify-center gap-10 md:gap-20 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center group"
              >
                <div className="text-orange-600 mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info + Map */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: <MapPin className="w-8 h-8" />, title: "Our Location", content: "2nd Floor, Keystone Building, Jail Rd, Kozhikode, Kerala 673004" },
                { icon: <Phone className="w-8 h-8" />, title: "Call Us", content: "+91 9758828258 (Mon-Sat: 9AM-6PM)" },
                { icon: <Mail className="w-8 h-8" />, title: "Email Us", content: "info@getfixacademy.com" },
                { icon: <Clock className="w-8 h-8" />, title: "Working Hours", content: "Monday - Saturday: 9:00 AM - 6:00 PM IST" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, x: 12 }}
                  className="group flex gap-5 p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all"
                >
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

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full min-h-96"
              style={{ perspective: 1500 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 6, rotateX: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
              >
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-gray-800">Live Campus Map</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* PREMIUM LEADCONNECTOR FORM */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 mb-32 relative"
        >
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

              <div className="relative w-full h-[680px] rounded-3xl overflow-hidden shadow-2xl border border-orange-100/50">
                <iframe
    src="https://api.leadconnectorhq.com/widget/form/ohKjwrblqjVflbUJY7Ei"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "24px",
                  }}
                  id="popup-ohKjwrblqjVflbUJY7Ei"
                  data-layout='{"id":"POPUP"}'
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
                  allowFullScreen
                ></iframe>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                100% Secure • Your information is never shared
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-orange-600" />
                  {faq.q}
                </h4>
                <p className="text-gray-600 pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA – NO WHATSAPP SYMBOL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-6"
        >
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