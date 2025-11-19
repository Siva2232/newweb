// src/components/HireForm.jsx → WHATSAPP-ONLY VERSION (Email Automation Removed)
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Building, User, Phone, MapPin, Calendar, Send,
  CheckCircle, Loader2, Sparkles
} from "lucide-react";
import { useState } from "react";

// Indian Phone Validation
const schema = z.object({
  businessName: z.string().min(2, "Business name required"),
  ownerName: z.string().min(2, "Your name required"),
  phone: z.string().regex(/^(\+91|0)?[6-9]\d{9}$/, "Valid Indian mobile number required"),
  city: z.string().min(2, "City required"),
  state: z.string().min(2, "State required"),
  techniciansNeeded: z.string().min(1, "Select number of technicians"),
  experienceLevel: z.string().min(1, "Select experience level"),
  startDate: z.string().min(1, "Start date required"),
  message: z.string().optional(),
});

export default function HireForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm({
    resolver: zodResolver(schema),
  });

  // Direct WhatsApp Message Builder
  const sendViaWhatsApp = () => {
    const d = getValues();

    const text = `Hello GetFix Team! 

I'm interested in hiring certified technicians.

Business Name: ${d.businessName}
Owner Name: ${d.ownerName}
Phone: ${d.phone}
Location: ${d.city}, ${d.state}
Technicians Needed: ${d.techniciansNeeded}
Experience Level: ${d.experienceLevel}
Preferred Start Date: ${d.startDate}
Additional Message: ${d.message?.trim() || "None"}

Please contact me as soon as possible!`;

    const whatsappUrl = `https://wa.me/+917025229464?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const onSubmit = (data) => {
    setIsLoading(true);

    // Small delay for better UX feel
    setTimeout(() => {
      sendViaWhatsApp();
      reset();
      setIsLoading(false);

      // Optional: Show success toast (you can add one if you want)
      alert("Opening WhatsApp... Your request will be sent instantly!");
    }, 800);
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <motion.div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#F37021] to-red-600 bg-clip-text text-transparent">
              Hire Certified Technicians
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-700">
              Get Verified Experts in <span className="text-[#F37021] font-bold">24 hours</span>
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <Sparkles className="w-7 h-7 text-yellow-500" />
              <span className="text-lg font-bold text-gray-600">300+ Cities • Kerala</span>
              <Sparkles className="w-7 h-7 text-yellow-500" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Form */}
            <motion.div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                  <div className="grid md:grid-cols-2 gap-8">
                    <InputField label="Business Name" icon={<Building className="w-5 h-5" />} error={errors.businessName}>
                      <input {...register("businessName")} className="input" placeholder="QuickFix Mobile" />
                    </InputField>
                    <InputField label="Your Name" icon={<User className="w-5 h-5" />} error={errors.ownerName}>
                      <input {...register("ownerName")} className="input" placeholder="Rajesh Kumar" />
                    </InputField>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <InputField label="Phone Number" icon={<Phone className="w-5 h-5" />} error={errors.phone}>
                      <input {...register("phone")} className="input" placeholder="+919876543210" />
                    </InputField>

                    <div className="md:col-span-2">
                      <InputField label="City" icon={<MapPin className="w-5 h-5" />} error={errors.city}>
                        <input {...register("city")} className="input" placeholder="Mumbai" />
                      </InputField>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">State</label>
                      <select {...register("state")} className="input">
                        <option value="">Select State</option>
                        {["Delhi","Maharashtra","Karnataka","Tamil Nadu","Gujarat","Uttar Pradesh","West Bengal","Rajasthan","Telangana","Kerala"].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.state && <p className="text-red-600 text-sm mt-2">{errors.state.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Technicians Needed</label>
                      <select {...register("techniciansNeeded")} className="input">
                        <option value="">Select</option>
                        <option>1 Technician</option>
                        <option>2 Technicians</option>
                        <option>3 Technicians</option>
                        <option>4+ Technicians</option>
                      </select>
                      {errors.techniciansNeeded && <p className="text-red-600 text-sm mt-2">{errors.techniciansNeeded.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Experience Level</label>
                      <select {...register("experienceLevel")} className="input">
                        <option value="">Select</option>
                        <option value="fresher">Fresher (0–6 months)</option>
                        <option value="intermediate">Intermediate (6–18 months)</option>
                        <option value="expert">Expert (18+ months)</option>
                      </select>
                      {errors.experienceLevel && <p className="text-red-600 text-sm mt-2">{errors.experienceLevel.message}</p>}
                    </div>

                    <InputField label="Preferred Start Date" icon={<Calendar className="w-5 h-5" />} error={errors.startDate}>
                      <input {...register("startDate")} type="date" min={new Date().toISOString().split("T")[0]} className="input" />
                    </InputField>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">Additional Message (Optional)</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#F37021] focus:ring-4 focus:ring-orange-100 outline-none resize-none"
                      placeholder="Need iPhone specialists for Andheri branch..."
                    />
                  </div>

                  {/* WHATSAPP ONLY BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-2xl rounded-2xl shadow-2xl flex items-center justify-center gap-5 transition-all"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-10 h-10 animate-spin" />
                        Preparing WhatsApp...
                      </>
                    ) : (
                      <>
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.261c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Send Request via WhatsApp
                        <Send className="w-9 h-9" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Benefits Card */}
            <motion.div className="bg-gradient-to-br from-[#F37021] to-red-600 text-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-4xl font-black mb-10">Why Hire From Us?</h3>
              <div className="space-y-8">
                {["24-Hour Response", "Verified Technicians", "300+ Cities", "Upto 3 year contract", "Trained by Experts", "Job-Ready Skills"].map((t, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="bg-white/20 p-3 rounded-xl"><CheckCircle className="w-8 h-8" /></div>
                    <span className="font-bold text-xl">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center">
                <Phone className="w-14 h-14 mx-auto mb-4" />
                <p className="text-3xl font-black">+91 98765 43210</p>
                <p className="text-lg opacity-90">Call or WhatsApp 24×7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .input {
          @apply w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#F37021] focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-800 font-medium text-base;
        }
      `}</style>
    </>
  );
}

function InputField({ label, icon, children, error }) {
  return (
    <div>
      <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3">
        <span className="text-[#F37021]">{icon}</span> {label}
      </label>
      {children}
      {error && <p className="text-red-600 text-sm mt-2">{error.message}</p>}
    </div>
  );
}