import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function LaunchAdPopup() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinimized(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const whatsappLink =
    "https://wa.me/+918304952266?text=Hi!%20Please%20notify%20me%20when%20the%20Professional%20Smartphone%20Technician%20Program%20(Beginner)%20launches!";

  return (
    <AnimatePresence>
      {/* Dark backdrop only in full mode */}
      {!isMinimized && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsVisible(false)}
        />
      )}

      {/* Main Floating Card */}
      <motion.div
        initial={{
          scale: 0.92,
          opacity: 0,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isMinimized ? 1 : 1,
          top: isMinimized ? "auto" : "50%",
          bottom: isMinimized ? "28px" : "auto",
          left: isMinimized ? "20px" : "50%",
          x: isMinimized ? 0 : "-50%",
          y: isMinimized ? 0 : "-50%",
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="fixed z-50 pointer-events-none"
      >
        <motion.div className="pointer-events-auto relative">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
            {/* Full Screen Mode */}
            {!isMinimized && (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsVisible(false); }}
                  className="absolute top-4 right-4 z-20 bg-white/90 rounded-full p-2.5 shadow-lg hover:bg-white transition"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                <div className="h-64 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-8">
                  <img src={Logo} alt="Logo" className="max-w-full max-h-full object-contain" />
                </div>

                <div className="p-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Launching Soon</h2>
                  <p className="text-gray-600 mb-6">Professional Smartphone Technician Course (Beginner)</p>
                  <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition">
                    Get Notified on WhatsApp
                  </div>
                </div>
              </div>
            )}

            {/* Minimized Medium-Size Floating Card - Bottom Left */}
            {isMinimized && (
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 w-80 hover:shadow-2xl transition-all">
                {/* Close Button on Top-Right Corner */}
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsVisible(false); }}
                  className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-xl border border-gray-300 hover:bg-gray-100 z-10"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Launching Soon</h3>
                    <p className="text-sm text-gray-600">Smartphone Technician Course</p>
                    <p className="text-xs text-blue-600 font-medium mt-1">Tap to Get Notified →</p>
                  </div>
                </div>
              </div>
            )}
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}