// LaunchAdPopup.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function LaunchAdPopup() {
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMinimized(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink =
    "https://wa.me/+918304952266?text=Hi!%20Please%20notify%20me%20when%20the%20Professional%20Smartphone%20Technician%20Program%20(Beginner)%20launches!";

  return (
    <AnimatePresence>
      {/* Backdrop */}
      {!isMinimized && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMinimized(true)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* MAIN CARD – THIS IS THE MAGIC */}
      <motion.div
        layout
        initial={false} // Important: prevents jump
        animate={{
          // Center → Bottom-left
          top: isMinimized ? "auto" : "50%",
          left: isMinimized ? "20px" : "50%",
          bottom: isMinimized ? "20px" : "auto",
          right: isMinimized ? "auto" : "auto",
          x: isMinimized ? 0 : "-50%",
          y: isMinimized ? 0 : "-50%",
          scale: isMinimized ? 0.9 : 1,
          width: isMinimized ? "auto" : "min(420px, 92vw)",
          borderRadius: isMinimized ? "24px" : "32px",
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 32,
          mass: 1,
        }}
        className="fixed z-50 max-w-md"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            layout
            className="relative bg-white shadow-2xl overflow-hidden border border-gray-100 rounded-[inherit]"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMinimized(true);
              }}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* FULL CENTERED */}
            {!isMinimized && (
              <div className="p-10 text-center">
                <div className="mx-auto mb-8 h-28 w-28 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-2 shadow-2xl">
                  <div className="h-full w-full rounded-3xl bg-white flex items-center justify-center">
                    <img src={Logo} alt="Logo" className="h-20 w-20 object-contain" />
                  </div>
                </div>

                <h1 className="mb-4 text-4xl md:text-5xl font-black text-gray-900">
                  Launching Soon
                </h1>
                <p className="mb-3 text-xl font-semibold text-gray-700">
                  Professional Smartphone Technician Course
                </p>
                <p className="mb-10 text-gray-600">
                  Beginner to Pro • 100% Practical • Job-Ready
                </p>

                <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-10 py-5 font-bold text-white shadow-xl hover:scale-105 transition">
                  Get Notified on WhatsApp
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <p className="mt-6 text-sm text-gray-500 font-medium">
                  Limited seats • Launching this month
                </p>
              </div>
            )}

            {/* MINIMIZED BOTTOM-LEFT */}
            {isMinimized && (
              <div className="flex items-center gap-5 p-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-xl flex items-center justify-center flex-shrink-0">
                  <img src={Logo} alt="Logo" className="h-11 w-11 object-contain" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Launching Soon</div>
                  <div className="text-sm font-bold text-emerald-600">Tap to get notified →</div>
                </div>
              </div>
            )}
          </motion.div>
        </a>
      </motion.div>
    </AnimatePresence>
  );
}