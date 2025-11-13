import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, User, MessageSquare, Send, Sparkles, CheckCircle } from "lucide-react";
import { useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-gray-50 via-white to-[#F37021]/5 overflow-hidden relative"
      style={{ perspective: 1500 }}
    >
      {/* Floating Background Orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y }}
      >
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F37021]/20 to-red-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-[#F37021]/20 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Epic Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
         <motion.h2
  className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-[#F37021] mb-6 leading-tight"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }}
>
            {"Get In Touch".split("").map((char, i) => (
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
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light"
          >
            Have questions? Want to enroll?{" "}
            <span className="font-bold text-[#F37021]">We’re here to help.</span>
          </motion.p>
        </motion.div>

        {/* 3D Floating Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          className="max-w-2xl mx-auto"
          style={{ transform: "translateZ(100px)" }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="relative p-10 md:p-12 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/40 shadow-3xl"
            style={{
              boxShadow: "0 30px 60px -15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Holographic Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F37021]/20 to-red-600/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />

            {/* Form Fields */}
            <div className="grid gap-6">
              <FloatingInput
                icon={<User className="w-5 h-5" />}
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                delay={0.3}
              />
              <FloatingInput
                icon={<Mail className="w-5 h-5" />}
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                delay={0.5}
              />
              <FloatingTextarea
                icon={<MessageSquare className="w-5 h-5" />}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                delay={0.7}
              />
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8 flex justify-center"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl hover:shadow-[#F37021]/50 transition-all duration-300"
              >
                <motion.span
                  className="relative z-10 flex items-center gap-3"
                  animate={{ x: isSubmitted ? [0, 5, 0] : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.span>
                    </>
                  )}
                </motion.span>

                {/* Shine Sweep */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />

                {/* Success Pulse */}
                {isSubmitted && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-500"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 flex justify-center items-center gap-6 text-sm text-gray-500"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F37021]" />
                24hr Response
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                100% Secure
              </span>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-green-200"
            >
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <p className="text-2xl font-bold text-gray-900 text-center">Message Sent!</p>
              <p className="text-gray-600 text-center mt-2">We’ll get back to you within 24 hours.</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// === FLOATING INPUT FIELD ===
const FloatingInput = ({ icon, type, placeholder, value, onChange, delay }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative"
    >
      <motion.div
        animate={{ scale: isFocused ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=" "
          className="w-full pl-12 pr-4 py-5 bg-white/70 backdrop-blur-md border border-gray-300 rounded-2xl focus:outline-none focus:border-[#F37021] focus:ring-4 focus:ring-[#F37021]/20 transition-all duration-300 peer"
        />
        <label
          className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-300 ${
            isFocused || value
              ? "text-xs -translate-y-10 text-[#F37021] font-medium"
              : "text-base"
          }`}
        >
          {placeholder}
        </label>
      </motion.div>
    </motion.div>
  );
};

// === FLOATING TEXTAREA ===
const FloatingTextarea = ({ icon, placeholder, value, onChange, delay }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative"
    >
      <motion.div
        animate={{ scale: isFocused ? 1.03 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <div className="absolute left-4 top-6 text-gray-500 pointer-events-none">
          {icon}
        </div>
        <textarea
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=" "
          className="w-full pl-12 pr-4 py-5 bg-white/70 backdrop-blur-md border border-gray-300 rounded-2xl focus:outline-none focus:border-[#F37021] focus:ring-4 focus:ring-[#F37021]/20 transition-all duration-300 resize-none h-40 peer"
        />
        <label
          className={`absolute left-12 top-6 text-gray-500 pointer-events-none transition-all duration-300 ${
            isFocused || value
              ? "text-xs -translate-y-8 text-[#F37021] font-medium"
              : "text-base"
          }`}
        >
          {placeholder}
        </label>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;