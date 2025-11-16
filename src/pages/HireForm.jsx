/*  HireForm.jsx – Technician Hiring Request Form  */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Building, Users, Calendar, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

// Zod Schema – India-focused validation
const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  ownerName: z.string().min(2, "Your name is required"),
  phone: z.string().regex(/^(\+91|0)?[6-9]\d{9}$/, "Valid Indian mobile number required"),
  email: z.string().email("Valid email required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  techniciansNeeded: z.string().min(1, "Select number of technicians"),
  experienceLevel: z.string().min(1, "Select experience level"),
  startDate: z.string().min(1, "Preferred start date is required"),
  message: z.string().optional(),
});

const HireForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Hire Request:", data);
    setIsSubmitted(true);
    setIsLoading(false);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-gradient-to-b from-orange-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F37021] mb-4">
            Hire Technician Request
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Fill the form below — our team will connect you with <span className="font-bold text-[#F37021]">certified technicians</span> in <span className="font-bold">24 hours</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/50"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent Successfully!</h3>
                <p className="text-gray-600">We’ll contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Business Info */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                      <Building className="w-4 h-4 text-[#F37021]" />
                      Business Name
                    </label>
                    <input
                      {...register("businessName")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                      placeholder="e.g. QuickFix Mobile"
                    />
                    {errors.businessName && (
                      <p className="text-red-500 text-xs mt-1">{errors.businessName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                      <Users className="w-4 h-4 text-[#F37021]" />
                      Your Name
                    </label>
                    <input
                      {...register("ownerName")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                      placeholder="e.g. Rajesh Kumar"
                    />
                    {errors.ownerName && (
                      <p className="text-red-500 text-xs mt-1">{errors.ownerName.message}</p>
                    )}
                  </div>
                </div>

                {/* Contact */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                      <Phone className="w-4 h-4 text-[#F37021]" />
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                      <Mail className="w-4 h-4 text-[#F37021]" />
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                      placeholder="rajesh@quickfix.in"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                      <MapPin className="w-4 h-4 text-[#F37021]" />
                      City
                    </label>
                    <input
                      {...register("city")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                      placeholder="e.g. Mumbai"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                      State
                    </label>
                    <select
                      {...register("state")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                    >
                      <option value="">Select State</option>
                      {[
                        "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat",
                        "Uttar Pradesh", "West Bengal", "Rajasthan", "Telangana", "Kerala"
                      ].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
                    )}
                  </div>
                </div>

                {/* Requirements */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                      Technicians Needed
                    </label>
                    <select
                      {...register("techniciansNeeded")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                    >
                      <option value="">Select</option>
                      <option value="1">1 Technician</option>
                      <option value="2">2 Technicians</option>
                      <option value="3">3 Technicians</option>
                      <option value="4+">4+ Technicians</option>
                    </select>
                    {errors.techniciansNeeded && (
                      <p className="text-red-500 text-xs mt-1">{errors.techniciansNeeded.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                      Experience Level
                    </label>
                    <select
                      {...register("experienceLevel")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                    >
                      <option value="">Select</option>
                      <option value="fresher">Fresher (0–6 months)</option>
                      <option value="intermediate">Intermediate (6–18 months)</option>
                      <option value="expert">Expert (18+ months)</option>
                    </select>
                    {errors.experienceLevel && (
                      <p className="text-red-500 text-xs mt-1">{errors.experienceLevel.message}</p>
                    )}
                  </div>
                </div>

                {/* Start Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                    <Calendar className="w-4 h-4 text-[#F37021]" />
                    Preferred Start Date
                  </label>
                  <input
                    {...register("startDate")}
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all"
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 outline-none transition-all resize-none"
                    placeholder="e.g. Need iPhone specialists for Andheri West branch..."
                  />
                </div>

                {/* SUBMIT */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-[#F37021]/40 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#F37021] to-red-600 text-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-black mb-6">Need Help?</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="font-bold">+91 98765 43210</p>
                  <p className="text-sm opacity-90">Mon–Sat, 9AM–6PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="font-bold">hire@youracademy.in</p>
                  <p className="text-sm opacity-90">Response in 2 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="font-bold">150+ Cities</p>
                  <p className="text-sm opacity-90">PAN India Coverage</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-white/20 rounded-2xl">
              <p className="text-sm font-medium">
                Average response time: <span className="font-black">4 hours</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HireForm;