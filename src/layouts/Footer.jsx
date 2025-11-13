import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Sparkles,
  ArrowUp,
  Copyright
} from "lucide-react";
import { useRef } from "react";
import Logo from "../assets/Logo.png";

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
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
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
          className="absolute top-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -180, 0], y: [0, 120, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 py-20 px-6"
        style={{ scale: smoothScale }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-16">

            {/* === BRAND COLUMN - TRANSPARENT LOGO === */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div className="flex items-center gap-4">
                {/* Transparent Logo - No Container */}
                <img
                  src={Logo}
                  alt="GetFix Academy Logo"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md"
                />

                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  GetFix Academy
                </h3>
              </motion.div>

              <p className="text-gray-400 leading-relaxed max-w-xs text-base">
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
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <a
                      href={link.path}
                      className="group flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300"
                    >
                      <div className="w-0 h-0.5 bg-orange-500 group-hover:w-8 transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                    <Mail className="w-5 h-5 text-orange-400" />
                  </div>
                  <span>hello@getfixacademy.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <span>Kerala, India</span>
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
                <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <SocialIcon key={i} {...social} index={i} />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10"
              >
                <p className="text-sm text-gray-400 mb-3">Subscribe for updates</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-orange-500 rounded-lg shadow-lg"
                  >
                    <Sparkles className="w-5 h-5 text-white" />
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
            className="pt-10 border-t border-white/10"
          >
            <div className="flex flex-col justify-center items-center text-center gap-4 text-sm">
              <p className="flex items-center justify-center gap-2 text-gray-400">
                <Copyright className="w-4 h-4" />
                {currentYear} GetFix Academy. All Rights Reserved.
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-gray-300 hover:text-orange-400 hover:border-orange-400 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

// === SOCIAL ICON (No Rotation) ===
const SocialIcon = ({ icon, href, label, index }) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.15,
        backgroundColor: "rgba(251, 146, 60, 0.1)",
        borderColor: "rgba(251, 146, 60, 0.4)"
      }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
      }}
      className="p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center justify-center"
    >
      {icon}
    </motion.a>
  );
};

export default Footer;