import { motion, useMotionValue, useTransform, useSpring, useScroll, useTransform as transformScroll } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, Globe, MessageCircle, Send, 
  Users, Award, Star, CheckCircle, ChevronRight, Sparkles,
  Headphones, Shield, Zap, ArrowRight, Instagram, Youtube, 
  Facebook, Twitter, Linkedin, Menu, X 
} from "lucide-react";
import { useRef, useState } from "react";

const stats = [
  { icon: <Users />, value: "15,842+", label: "Students Helped" },
  { icon: <Award />, value: "4.9", label: "Support Rating" },
  { icon: <Zap />, value: "24/7", label: "Live Support" },
  { icon: <Globe />, value: "68", label: "Countries" },
];

const faqs = [
  { q: "What are the course fees?", a: "Fees range from $599 to $2,499 based on course level. Installments available." },
  { q: "Do you offer job placement?", a: "Yes! 100% placement support with our 500+ partner service centers." },
  { q: "Are classes online or offline?", a: "Both! Hybrid mode with live online + hands-on offline labs." },
  { q: "Is certification provided?", a: "Yes! Industry-recognized certificate upon completion." },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = transformScroll(scrollYProgress, [0, 1], [120, -120]);
  const opacity = transformScroll(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setShowSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div ref={sectionRef} className="pt-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
        <div className="absolute top-40 left-10 w-[700px] h-[700px] bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/20 to-orange-600/20 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[1800px] h-[1800px] -translate-x-1/2 -translate-y-1/2 border border-orange-200/10 rounded-full"
        />
        <div className="absolute inset-0 bg-grid-orange-100/5 bg-[size:100px_100px]" />
      </motion.div>

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center py-20 px-6"
      >
        <motion.h1
          className="text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {"Contact Us".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 100, rotateX: -80 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              className="inline-block"
              style={{ transform: "translateZ(80px)" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-light mb-12"
        >
          We're here to help you with <span className="font-bold text-orange-600">course details, admissions, and career guidance</span>. 
          Reach out today and start your journey!
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-10 md:gap-20 flex-wrap"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center group"
            >
              <div className="text-orange-600 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-gray-900">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Cards + Map */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: <MapPin />, title: "Our Location", content: "123 Mobile Academy Street, Anna Nagar, Chennai, Tamil Nadu 600040, India" },
              { icon: <Phone />, title: "Call Us", content: "+91 98765 43210 (Mon-Sat: 9AM-6PM)" },
              { icon: <Mail />, title: "Email Us", content: "info@mobileacademy.in | support@mobileacademy.in" },
              { icon: <Clock />, title: "Working Hours", content: "Monday - Saturday: 9:00 AM - 6:00 PM IST" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, x: 10 }}
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

          {/* Interactive 3D Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-full min-h-96"
            style={{ perspective: 1500 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-24 h-24 text-orange-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-800">Chennai, India</p>
                  <p className="text-gray-600">Main Campus</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              >
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-gray-800">Live Campus</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-20"
      >
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">Get in Touch</h3>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Fill out the form below and our team will respond within <span className="font-bold text-orange-600">2 hours</span>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-orange-500 focus:outline-none text-lg transition-all"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-orange-500 focus:outline-none text-lg transition-all"
              />
            </div>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-orange-500 focus:outline-none text-lg transition-all"
            />
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-orange-500 focus:outline-none text-lg transition-all resize-none"
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xl py-5 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              ) : (
                <>
                  Send Message
                  <Send className="w-6 h-6" />
                </>
              )}
            </motion.button>
          </form>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-6 bg-green-100 text-green-800 rounded-2xl text-center font-bold text-lg"
            >
              Message Sent Successfully! We'll contact you soon.
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-20"
      >
        <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
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

      {/* CTA + Social */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-5xl md:text-6xl font-black mb-6">Ready to Start?</h3>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Join 15,000+ students who transformed their careers with our expert training.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-12">
            <a
              href="/enroll"
              className="group relative inline-flex items-center gap-6 px-20 py-7 bg-white text-orange-600 font-black text-2xl rounded-full overflow-hidden shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-4">
                Enroll Now
                <motion.span animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ChevronRight className="w-8 h-8" />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.7 }}
              />
            </a>
          </motion.div>

          <div className="flex justify-center gap-6">
            {[Instagram, Youtube, Facebook, Twitter, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, rotate: 360 }}
                href="#"
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

