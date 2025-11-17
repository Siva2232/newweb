import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone, // <-- NEW: Phone icon
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Sparkles,
  ArrowUp,
  Linkedin,
  Copyright
} from "lucide-react";
import { useRef } from "react";
import Logo2 from "../assets/Logo2.png";

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-4.5 h-4.5" />, href: "https://www.facebook.com/haqsworld/videos/-welcome-to-getfix-academyin-this-video-we-dive-deep-into-the-jc-drawing-repair-/3991283944466014/", label: "Facebook" },
    { icon: <Instagram className="w-4.5 h-4.5" />, href: "https://www.instagram.com/getfix_academy/", label: "Instagram" },
    { icon: <Linkedin className="w-4.5 h-4.5" />, href: "https://www.linkedin.com/company/getfixonline/?trk=organization_guest_main-feed-card_feed-actor-name&originalSubdomain=in", label: "LinkedIn" },
    { icon: <Youtube className="w-4.5 h-4.5" />, href: "https://www.youtube.com/watch?v=zMjvlr7nOiM", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Learn With Us", path: "/courses" },
    { name: "What We Offer", path: "/services" },
    {name:"Highlights",path:"/gallery"},
    { name: "Get in Touch", path: "/contact" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black overflow-hidden"
    >
      {/* Floating Orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ y: smoothY, opacity: smoothOpacity }}
      >
        <motion.div
          animate={{ x: [0, 150, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#F37021]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -180, 0], y: [0, 120, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
        style={{ scale: smoothScale }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

            {/* === BRAND COLUMN === */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                {/* LOGO SIZE INCREASED */}
                <img
                  src={Logo2}
                  alt="GetFix Academy Logo"
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-md"
                />
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  GetFix Academy
                </h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
                Empowering the next generation of mobile engineers with world-class training.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-white mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <a
                      href={link.path}
                      className="group flex items-center gap-2 text-gray-400 hover:text-[#F37021] text-sm sm:text-base transition-all duration-300"
                    >
                      <div className="w-0 h-0.5 bg-[#F37021] group-hover:w-6 transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info – CONTACT NUMBER ADDED */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-white mb-5">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                  <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                    <Phone className="w-4.5 h-4.5 text-[#F37021]" />
                  </div>
                  <span>+91 9758828258</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                  <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                    <Mail className="w-4.5 h-4.5 text-[#F37021]" />
                  </div>
                  <span>info@getfixonline.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                  <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                    <MapPin className="w-4.5 h-4.5 text-[#F37021]" />
                  </div>
                  <span>Keystone Building Kozhikode, Kerala, India</span>
                </div>
              </div>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                <div className="flex gap-2.5">
                  {socialLinks.map((social, i) => (
                    <SocialIcon key={i} {...social} index={i} />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 max-w-sm"
              >
                <p className="text-xs sm:text-sm text-gray-400 mb-3">Subscribe for updates</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-[#F37021] rounded-lg shadow-lg"
                  >
                    <Sparkles className="w-4.5 h-4.5 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs sm:text-sm text-gray-400">
              <p className="flex items-center gap-1.5">
                <Copyright className="w-3.5 h-3.5" />
                {currentYear} GetFix Academy. All Rights Reserved.
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-gray-300 hover:text-[#F37021] hover:border-[#F37021] transition-all duration-300"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Back to Top
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

// === SOCIAL ICON ===
const SocialIcon = ({ icon, href, label, index }) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.15,
        backgroundColor: "rgba(243, 112, 33, 0.1)",
        borderColor: "rgba(243, 112, 33, 0.4)"
      }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
      }}
      className="p-2.5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 text-gray-400 hover:text-[#F37021] transition-all duration-300 flex items-center justify-center"
    >
      {icon}
    </motion.a>
  );
};

export default Footer;