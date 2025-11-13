import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const blurAmount = useTransform(scrollY, [0, 100], [0, 10]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  const springConfig = { stiffness: 300, damping: 30 };
  const smoothOpacity = useSpring(backgroundOpacity, springConfig);
  const smoothBlur = useSpring(blurAmount, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Glass Header */}
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 pointer-events-none"
        style={{ scale: smoothScale }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `rgba(255, 255, 255, ${smoothOpacity})`,
            backdropFilter: smoothBlur.get() > 0 ? `blur(${smoothBlur.get()}px)` : "none",
            WebkitBackdropFilter: smoothBlur.get() > 0 ? `blur(${smoothBlur.get()}px)` : "none",
          }}
        />

        {/* Layout Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 pointer-events-auto">
          {/* === MOBILE LAYOUT: Logo | Text (Center) | Menu === */}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center group"
            >
              <Link to="/" className="flex items-center">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/30 to-red-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.3 }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-6 h-6 bg-white/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                    <img
                      src={Logo}
                      alt="GetFix Academy Logo"
                      className="w-full h-full object-contain drop-shadow-lg"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* CENTERED TEXT (MOBILE ONLY) */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-lg sm:text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-orange-700"
            >
              GetFix Academy
            </motion.span>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="p-2 rounded-full bg-white/70 backdrop-blur-md shadow-md border border-white/30"
            >
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* === DESKTOP LAYOUT: Logo+Text | Nav | CTA === */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* LEFT: LOGO + TEXT */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <Link to="/" className="flex items-center gap-3 sm:gap-4">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/30 to-red-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.3 }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                    <img
                      src={Logo}
                      alt="GetFix Academy Logo"
                      className="w-full h-full object-contain drop-shadow-lg"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                      }}
                    />
                  </div>
                </div>

                <motion.span
                  className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-orange-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  GetFix Academy
                </motion.span>
              </Link>
            </motion.div>

            {/* CENTER: NAV */}
            <nav className="flex-1 justify-center flex">
              <div className="flex items-center gap-1 bg-white/50 backdrop-blur-xl rounded-full px-5 py-2.5 shadow-lg border border-white/30">
                {navItems.map((item, i) => (
                  <NavLink key={item.name} {...item} index={i} />
                ))}
              </div>
            </nav>

            {/* RIGHT: CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex"
            >
              <Link
                to="/enroll"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-sm sm:text-base rounded-full overflow-hidden shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Enroll Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU — FULLSCREEN & ANIMATED */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 z-40 lg:hidden pt-20"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 px-6"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 hover:text-orange-600 transition-all duration-300 text-center"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 sm:mt-12"
              >
                <Link
                  to="/enroll"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
                >
                  Start Learning
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// === HOLOGRAPHIC NAV LINK ===
const NavLink = ({ name, path, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        to={path}
        className="relative px-4 py-2 text-gray-800 font-medium text-sm lg:text-base transition-colors duration-300"
      >
        {name}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl"
          animate={{ scale: isHovered ? 1.5 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </Link>
    </motion.div>
  );
};