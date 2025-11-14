import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.8]);

  // Form validation
  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name required";
    if (!formData.email.includes("@")) err.email = "Valid email required";
    if (formData.message.length < 10) err.message = "Min 10 characters";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50"
    >
      {/* Animated Background Orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -100, 0], rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#F37021]/30 to-red-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -140, 0], y: [0, 80, 0], rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-12 w-80 h-80 bg-gradient-to-l from-purple-500/25 to-[#F37021]/25 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-red-600 mb-4 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
          >
            {"Let's Connect".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Drop us a message. We reply in <span className="font-bold text-[#F37021]">under 2 hours</span>.
          </p>
        </motion.div>

        {/* MOBILE: Form First, Then Icons, Then Map */}
        {/* DESKTOP: Map Left, Icons+Form Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN - MOBILE: Form First, DESKTOP: Map */}
          <motion.div className="order-1 lg:order-1 space-y-8 lg:space-y-0">
            
            {/* MOBILE: Contact Form (FIRST) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="lg:hidden" // Only show on mobile
            >
              <motion.form
                onSubmit={submit}
                className="relative p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl"
                style={{
                  boxShadow: "0 25px 60px -15px rgba(243,112,33,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F37021]/15 to-red-500/10 blur-3xl -z-10" />

                <div className="space-y-4 sm:space-y-6">
                  <InputField 
                    icon={<Mail className="w-4 h-4" />} 
                    placeholder="Email" 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    error={errors.email} 
                  />
                  <InputField 
                    icon={<Phone className="w-4 h-4" />} 
                    placeholder="Name" 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    error={errors.name} 
                  />
                  <TextareaField 
                    icon={<Send className="w-4 h-4" />} 
                    placeholder="Your Message..." 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    error={errors.message} 
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-4 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-base rounded-2xl shadow-xl flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <Send className="w-4 h-4" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* DESKTOP: Map (Left Column) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              className="hidden lg:block" // Only show on desktop
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-96">
                <iframe
                  title="Mumbai Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6433229765!2d72.7410994!3d19.082688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4f4624c4a1b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - MOBILE: Icons then Form, DESKTOP: Icons + Form */}
          <motion.div className="order-2 lg:order-2 space-y-6 lg:space-y-8">
            
            {/* Contact Icons - Show on ALL devices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="lg:mb-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                {[
                  { icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Call", value: "+91 98765 43210" },
                  { icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Email", value: "hello@mobilefix.in" },
                  { icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Visit", value: "Mumbai, India" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg"
                    whileHover={{ y: -4, shadow: "0 15px 30px -10px rgba(243,112,33,0.3)" }}
                  >
                    <div className="text-[#F37021] mb-2 mx-auto w-fit">{item.icon}</div>
                    <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>
                    <p className="font-bold text-gray-900 text-sm">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* DESKTOP: Form (Right Column) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="hidden lg:block" // Only show on desktop
            >
              <motion.form
                onSubmit={submit}
                className="relative p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl"
                style={{
                  boxShadow: "0 25px 60px -15px rgba(243,112,33,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F37021]/15 to-red-500/10 blur-3xl -z-10" />

                <div className="space-y-6">
                  <InputField icon={<Mail />} placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} error={errors.email} />
                  <InputField icon={<Phone />} placeholder="Name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} error={errors.name} />
                  <TextareaField icon={<Send />} placeholder="Your Message..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} error={errors.message} />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-2xl shadow-xl flex items-center justify-center gap-3"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          {/* MOBILE: Map (LAST) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="order-3 lg:hidden" // Only show on mobile, last position
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-72 md:h-80">
              <iframe
                title="Mumbai Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6433229765!2d72.7410994!3d19.082688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4f4624c4a1b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-white/95 backdrop-blur-xl px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-2xl border border-green-200 flex items-center gap-3 sm:gap-4">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            <div>
              <p className="font-bold text-gray-900 text-sm sm:text-base">Message Sent!</p>
              <p className="text-xs sm:text-sm text-gray-600">We'll reply within 2 hours.</p>
            </div>
            <button onClick={() => setIsSubmitted(false)} className="text-gray-400 hover:text-gray-600 ml-2">
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

// Mobile-optimized Input
const InputField = ({ icon, placeholder, type, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10">{icon}</div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full pl-10 sm:pl-14 pr-3 sm:pr-4 py-3 sm:py-5 text-sm sm:text-base bg-white/60 backdrop-blur-md border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-2xl focus:outline-none focus:border-[#F37021] focus:ring-2 sm:focus:ring-4 focus:ring-[#F37021]/20 transition-all`}
        placeholder=" "
      />
      <label
        className={`absolute left-10 sm:left-14 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all origin-left ${
          focused || hasValue ? "text-xs -translate-y-8 sm:-translate-y-10 scale-90 font-medium" : "text-base"
        } ${error ? "text-red-500" : "text-[#F37021]"}`}
      >
        {placeholder}
      </label>
      {error && <p className="absolute -bottom-4 sm:-bottom-5 left-0 text-xs text-red-500">{error}</p>}
    </div>
  );
};

// Mobile-optimized Textarea
const TextareaField = ({ icon, placeholder, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <div className="absolute left-3 sm:left-4 top-5 sm:top-6 text-gray-500 z-10">{icon}</div>
      <textarea
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full pl-10 sm:pl-14 pr-3 sm:pr-4 py-3 sm:py-5 text-sm sm:text-base bg-white/60 backdrop-blur-md border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-2xl focus:outline-none focus:border-[#F37021] focus:ring-2 sm:focus:ring-4 focus:ring-[#F37021]/20 transition-all resize-none h-24 sm:h-36`}
        placeholder=" "
      />
      <label
        className={`absolute left-10 sm:left-14 top-5 sm:top-6 text-gray-500 pointer-events-none transition-all origin-left ${
          focused || hasValue ? "text-xs -translate-y-6 sm:-translate-y-8 scale-90 font-medium" : "text-base"
        } ${error ? "text-red-500" : "text-[#F37021]"}`}
      >
        {placeholder}
      </label>
      {error && <p className="absolute -bottom-4 sm:-bottom-5 left-0 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default ContactSection;