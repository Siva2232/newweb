import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

const StickyButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = "+918304952266"; // Replace with your number
  const message = "Hi! I'd like to know more about your courses.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Auto-hide tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Animated Tooltip with Close & Auto-Hide */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative mr-2"
          >
            {/* Gradient Tooltip */}
            <div className="relative bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 text-white text-sm font-semibold rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-3 backdrop-blur-md border border-white/20">
              {/* Sparkle Icon */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-yellow-300"
              >
                
              </motion.div>

              <span className="whitespace-nowrap">Chat with us</span>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowTooltip(false)}
                className="ml-2 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              >
                <AiOutlineClose className="w-3.5 h-3.5 text-white" />
              </motion.button>

              {/* Tail */}
              <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-emerald-500 transform translate-y-full" />
            </div>

            {/* Pulse Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/50 to-teal-400/50 blur-xl -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Floating WhatsApp Button */}
      <motion.a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Main Button */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
          animate={{
            boxShadow: [
              "0 10px 30px rgba(34, 197, 94, 0.4)",
              "0 20px 50px rgba(34, 197, 94, 0.6)",
              "0 10px 30px rgba(34, 197, 94, 0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Official WhatsApp Icon */}
          <FaWhatsapp className="w-9 h-9 text-white drop-shadow-md" />

          {/* Shine Sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />

          {/* Floating Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-white/30"
            animate={{ scale: [1, 1.3, 1.6], opacity: [0.6, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>

        {/* Online Indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-4 border-white shadow-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="absolute inset-0 bg-green-400 rounded-full"
            animate={{ scale: [1, 2], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Hover Tooltip (Mini) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl pointer-events-none"
        >
          Open Chat
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-black translate-y-full" />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default StickyButton;