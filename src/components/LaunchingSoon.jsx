// components/LaunchingSoonButton.jsx
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function LaunchingSoonButton() {
  return (
    <div className="flex justify-center">
      <motion.a
        href="https://wa.me/+918304952266?text=Hi!%20Please%20notify%20me%20when%20the%20Professional%20Smartphone%20Technician%20Program%20(Beginner)%20launches!"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.96 }}
        className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-bold text-xs rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden whitespace-nowrap"
      >
        <Sparkles className="w-3.5 h-3.5 animate-pulse flex-shrink-0 text-yellow-300" />
        <span className="relative z-10">
          Launching Soon • Professional Smartphone Technician (Beginner) Course
        </span>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.a>
    </div>
  );
}