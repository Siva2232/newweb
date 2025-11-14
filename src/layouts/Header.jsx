import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Menu,
  X,
  Zap,
  ChevronDown,
  Home,
  BookOpen,
  Wrench,
  Image,
  Phone,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

/* -------------------------------------------------
   Desktop detection – 3-D effects only on lg+
   ------------------------------------------------- */
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
};

/* -------------------------------------------------
   MAIN HEADER
   ------------------------------------------------- */
export default function Header() {
  const [open, setOpen] = useState(false);
  const isDesktop = useIsDesktop();

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About Us", path: "/about", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Our Courses", path: "/courses", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Our Services", path: "/services", icon: <Wrench className="w-4 h-4" /> },
    { name: "Gallery", path: "/gallery", icon: <Image className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="w-4 h-4" /> },
  ];

  /* ---- scroll glass effect ---- */
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.92]);
  const blurAmt   = useTransform(scrollY, [0, 80], [0, 12]);
  const scale     = useTransform(scrollY, [0, 80], [1, 0.96]);

  const smoothOpacity = useSpring(bgOpacity, { stiffness: 300, damping: 30 });
  const smoothBlur    = useSpring(blurAmt,   { stiffness: 300, damping: 30 });
  const smoothScale   = useSpring(scale,     { stiffness: 300, damping: 30 });

  return (
    <>
      {/* ---------- FIXED GLASS HEADER ---------- */}
      <motion.header
        className="fixed inset-x-0 top-0 z-50 pointer-events-none"
        style={{ scale: isDesktop ? smoothScale : 1 }}
      >
        {/* glass backdrop */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `rgba(255,255,255,${smoothOpacity})`,
            backdropFilter:
              smoothBlur.get() > 0 ? `blur(${smoothBlur.get()}px)` : "none",
            WebkitBackdropFilter:
              smoothBlur.get() > 0 ? `blur(${smoothBlur.get()}px)` : "none",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 pointer-events-auto">
          {/* ---- MOBILE LAYOUT (logo left – toggle right) ---- */}
          <div className="flex items-center justify-between lg:hidden">
            <LogoLink size="sm" />
            <MenuToggle open={open} setOpen={setOpen} />
          </div>

          {/* ---- DESKTOP LAYOUT ---- */}
          <div className="hidden lg:flex items-center justify-between">
            <LogoLink size="lg" />
            <nav className="flex-1 flex justify-center">
              <div className="flex items-center gap-1 bg-white/70 backdrop-blur-xl rounded-full px-4 py-2 shadow-lg border border-white/40">
                {navItems.map((it, i) => (
                  <NavLink key={it.name} {...it} index={i} />
                ))}
              </div>
            </nav>
            <CTAButton />
          </div>
        </div>
      </motion.header>

      {/* ---------- FULL-SCREEN MOBILE MENU ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-[#F37021]/10 via-white to-red-50 z-40 pt-20 overflow-y-auto"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              className="flex flex-col items-center justify-center min-h-full space-y-8 px-6"
            >
              {navItems.map((it, i) => (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: i * 0.08 }}
                  className="w-full max-w-xs"
                >
                  <Link
                    to={it.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-3 px-6 py-4 text-2xl font-bold text-gray-800 hover:text-[#F37021] rounded-2xl hover:bg-white/60 hover:shadow-lg transition-all"
                  >
                    {it.icon}
                    <span>{it.name}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 w-full max-w-xs"
              >
                <CTAButton mobile />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------------------------
   LOGO (left-aligned)
   ------------------------------------------------- */
const LogoLink = ({ size = "sm" }) => {
  const isDesktop = useIsDesktop();
  const hoverScale = size === "lg" ? 1.12 : 1.15;

  return (
    <motion.div
      whileHover={{ scale: isDesktop ? hoverScale : 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="relative group"
    >
      <Link to="/" aria-label="GetFix Academy">
        <div className="relative">
          {/* glow */}
          <motion.div
            className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#F37021]/40 to-red-600/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.3 }}
          />
          {/* image */}
          <div
            className={
              size === "lg"
                ? "w-24 h-24 lg:w-28 lg:h-28"
                : "w-16 h-16 sm:w-20 sm:h-20"
            }
          >
            <img
              src={Logo}
              alt="GetFix Academy"
              className="w-full h-full object-contain drop-shadow-xl"
              style={{
                imageRendering: "-webkit-optimize-contrast",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
              }}
              loading="eager"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* -------------------------------------------------
   MENU TOGGLE (right-aligned)
   ------------------------------------------------- */
const MenuToggle = ({ open, setOpen }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={() => setOpen(!open)}
    className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-white/40"
    aria-label="Toggle menu"
  >
    <AnimatePresence mode="wait">
      {open ? (
        <motion.div
          key="close"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
        >
          <X className="w-5 h-5 text-[#F37021]" />
        </motion.div>
      ) : (
        <motion.div
          key="menu"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
        >
          <Menu className="w-5 h-5 text-[#F37021]" />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

/* -------------------------------------------------
   NAV LINK (desktop)
   ------------------------------------------------- */
const NavLink = ({ name, path, icon, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className="relative px-1"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link
        to={path}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#F37021] rounded-full transition-colors whitespace-nowrap"
      >
        {icon}
        <span>{name}</span>
      </Link>

      {/* active/hover dot */}
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F37021] rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

/* -------------------------------------------------
   CTA BUTTON
   ------------------------------------------------- */
const CTAButton = ({ mobile = false }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to="/enroll"
      className={`
        group relative inline-flex items-center justify-center gap-2
        ${mobile
          ? "px-8 py-4 text-lg font-bold w-full rounded-2xl shadow-xl"
          : "px-5 py-2.5 text-sm font-bold rounded-full shadow-lg"}
        bg-gradient-to-r from-[#F37021] to-red-600 text-white overflow-hidden
        hover:shadow-[#F37021]/50 transition-all duration-300
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {mobile ? "Start Learning" : "Enroll"}
        {mobile ? (
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        ) : (
          <Zap className="w-4 h-4" />
        )}
      </span>

      <motion.div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </Link>
  </motion.div>
);