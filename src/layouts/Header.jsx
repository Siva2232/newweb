import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Courses", path: "/courses" },
     { name: "Our Services", path: "/services" },
      { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 70], [0, 0.95]);
  const blurAmount = useTransform(scrollY, [0, 70], [0, 10]);
  const scale = useTransform(scrollY, [0, 70], [1, 0.94]);

  const springConfig = { stiffness: 350, damping: 30 };
  const smoothOpacity = useSpring(backgroundOpacity, springConfig);
  const smoothBlur = useSpring(blurAmount, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  return (
    <>
      {/* FIXED HEIGHT & RESPONSIVE GLASS HEADER */}
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 pointer-events-none min-h-[56px] sm:min-h-[64px]"
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

        {/* TIGHT PADDING & RESPONSIVE */}
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 pointer-events-auto">
          
          {/* === MOBILE: LOGO + MENU === */}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/* LOGO — BIG BUT RESPONSIVE */}
            <div className="flex-1 flex justify-center max-w-[120px] sm:max-w-[140px]">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative group"
              >
                <Link to="/">
                  <div className="relative">
                    {/* CONTROLLED GLOW */}
                    <motion.div
                      className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#F37021]/35 to-red-600/35 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1.25 }}
                    />
                    {/* LOGO — SCALED SAFELY */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative z-10">
                      <img
                        src={Logo}
                        alt="GetFix Academy"
                        className="w-full h-full object-contain drop-shadow-lg"
                        style={{
                          imageRendering: "-webkit-optimize-contrast",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* MENU BUTTON — TIGHT */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="p-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-white/40 flex items-center justify-center"
            >
              {open ? (
                <X className="w-4.5 h-4.5 text-[#F37021]" />
              ) : (
                <Menu className="w-4.5 h-4.5 text-[#F37021]" />
              )}
            </motion.button>
          </div>

          {/* === DESKTOP === */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.12 }}
              className="relative group max-w-[140px]"
            >
              <Link to="/">
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#F37021]/35 to-red-600/35 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.25 }}
                  />
                  <div className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center relative z-10">
                    <img
                      src={Logo}
                      alt="GetFix Academy"
                      className="w-full h-full object-contain drop-shadow-xl"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* NAV */}
            <nav className="flex-1 flex justify-center">
              <div className="flex items-center gap-1 bg-white/60 backdrop-blur-xl rounded-full px-3 py-1.5 shadow-md border border-white/30 text-sm">
                {navItems.map((item, i) => (
                  <NavLink key={item.name} {...item} index={i} />
                ))}
              </div>
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/enroll"
                className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-xs rounded-full overflow-hidden shadow-md hover:shadow-[#F37021]/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Enroll
                  <Zap className="w-3.5 h-3.5" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-[#F37021]/5 via-white to-red-50 z-40 lg:hidden pt-16"
          >
            <motion.div
              initial={{ y: -60 }}
              animate={{ y: 0 }}
              exit={{ y: -60 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="flex flex-col items-center justify-center h-full space-y-6 px-6"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-3xl sm:text-4xl font-black text-gray-800 hover:text-[#F37021] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="/enroll"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-[#F37021]/50 transition-all"
                >
                  Start Learning
                  <ChevronDown className="w-5 h-5 animate-bounce" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// === RESPONSIVE NAV LINK ===
const NavLink = ({ name, path, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className="relative"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link
        to={path}
        className="px-3 py-1 text-gray-700 font-medium text-xs transition-colors whitespace-nowrap"
      >
        {name}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F37021] to-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ transformOrigin: "left" }}
        />
      </Link>
    </motion.div>
  );
};