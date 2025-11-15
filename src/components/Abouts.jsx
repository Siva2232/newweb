'use client';

import { motion } from "framer-motion";
import {
  GraduationCap, Users, Award, Wrench, Cpu, Shield, Rocket,
  Target, Globe, Star, Zap, Clock, CheckCircle, ChevronRight, Layers, MonitorSmartphone, UserCheck,
} from "lucide-react";
import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";
import T3 from "../assets/T3.png";

// IMAGES
import aboutImage from "../assets/about.png";
import whyChooseImage from "../assets/why.png";

const AboutSection = () => {
  const stats = [
    { icon: <GraduationCap className="w-7 h-7 sm:w-9 sm:h-9" />, value: "6+", label: "Years of Excellence" },
    { icon: <Users className="w-7 h-7 sm:w-9 sm:h-9" />, value: "10,000+", label: "Students Trained" },
    { icon: <Award className="w-7 h-7 sm:w-9 sm:h-9" />, value: "100%", label: "Job Placement" },
    { icon: <Zap className="w-8 h-8" />, value: "30 Days", label: "Fast-Track Course" },
  ];

  const whyChoose = [
    { icon: <Layers className="w-8 h-8" />, title: "Structured Learning", desc: "Basic to Advanced to Master modules designed for technicians to upgrade skills step-by-step." },
    { icon: <Users className="w-8 h-8" />, title: "Lifetime Support Community", desc: "Join a strong community with regular updates, doubt clearing, and guidance even after the course." },
    { icon: <MonitorSmartphone className="w-8 h-8" />, title: "Online + Offline + App Learning", desc: "Learn anytime, anywhere — with weekly live sessions for new faults and techniques." },
    { icon: <UserCheck className="w-8 h-8" />, title: "Learn Directly From the Expert", desc: "Get trained by Sirajul Haque, Kerala’s leading iPhone repair specialist and a trusted chip-level trainer across South India." },
    { icon: <Wrench className="w-8 h-8" />, title: "Hands-On Labs", desc: "Work on real iPhone & Android devices — not simulators." },
    { icon: <Cpu className="w-8 h-8" />, title: "Chip-Level Expertise", desc: "Learn micro-soldering, BGA reballing, and IC replacement." },
    { icon: <Shield className="w-8 h-8" />, title: "Certified Instructors", desc: "Trained Apple & Android repair specialists teaching you directly." },
    { icon: <Rocket className="w-8 h-8" />, title: "Job Guarantee", desc: "100% placement assistance — or your money back." },
    { icon: <Clock className="w-8 h-8" />, title: "Flexible Schedules", desc: "Weekend and evening batches designed for working professionals." },
  ];

  const missionVision = [
    { icon: <Target className="w-9 h-9 sm:w-10 sm:h-10" />, title: "Our Mission", desc: "Our mission is to establish Kerala’s No.1 Smartphone Training Academy. We aim to produce highly skilled technicians who can meet the growing demand in the mobile repair industry. The academy will also serve as a talent hub for the broader GetFix ecosystem, helping fuel the brand’s long term vision" },
    { icon: <Globe className="w-9 h-9 sm:w-10 sm:h-10" />, title: "Our Vision", desc: "A world where every phone has a skilled repair hero — trained by Getfix." },
  ];

  const team = [
    { name: "Sirajul Haque", role: "Founder & Lead Trainer - GetFix Academy", exp: "20+ Years Experience in chip level repair", img: T1 },
    { name: "Shuhaib Shadi", role: "Co-Founder & Director - GetFix Academy", exp: "10+ Year Experience iPhone Chip level Expert", img: T2 },
    { name: "Pinks", role: "Co-Founder and Technical Support - Getfix", exp: "20+ Years Industry Expertise (Works at Apple-Croatia)", img: T3 },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-[#F37021]/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* OUR STORY: Text Left + Animated Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F37021] leading-tight">
              Our Story
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Founded in 2019, we’re India’s <span className="font-bold text-[#F37021]">leading smartphone technology institute Kerala</span>.
              We don’t just teach — we <span className="font-bold">build careers</span> with hands-on, job-ready skills.
            </p>
          </motion.div>

          {/* Floating Animated Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-[#F37021]/30"
            >
              <img
                src={aboutImage}
                alt="GetFix Academy - Our Journey"
                className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#F37021]/20 text-center hover:shadow-2xl hover:border-[#F37021]/40 transition-all duration-300"
            >
              <div className="text-[#F37021] mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {missionVision.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-[#F37021]/10 to-white p-8 rounded-3xl border border-[#F37021]/30 shadow-xl hover:shadow-2xl transition-all duration-400"
            >
              <div className="text-[#F37021] mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* WHY CHOOSE US: Animated Image Left + Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Floating Image - Left */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-[#F37021]/30"
            >
              <img
                src={whyChooseImage}
                alt="Why Choose GetFix Academy"
                className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-center lg:text-left">
              <span className="text-[#F37021]">Why Choose</span> <span className="text-black">Getfix</span>?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.04 }}
                  className="group bg-white rounded-2xl p-6 shadow-md border border-[#F37021]/20 hover:shadow-2xl hover:border-[#F37021]/50 transition-all duration-300"
                >
                  <div className="text-[#F37021] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 text-center mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Meet Our <span className="text-[#F37021]">Expert Instructors</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                whileHover={{ y: -12 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-200"
              >
                <div className="h-64 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-[#F37021] font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{member.exp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#F37021] to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[#F37021]/60 transition-all duration-300"
          >
            Join Getfix Today
            <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronRight className="w-6 h-6" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;