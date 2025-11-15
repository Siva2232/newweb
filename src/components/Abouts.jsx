'use client';

import { motion } from "framer-motion";
import {
  GraduationCap, Users, Award, Wrench, Cpu, Shield, Rocket,
  Target, Globe, Zap, Clock, ChevronRight, Layers,
  MonitorSmartphone, UserCheck,
} from "lucide-react";
import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";
import offline from "../assets/offline.png"
import online from "../assets/online.png"

const BRAND_ORANGE = "#F37021";

const AboutSection = () => {
  // === Stats ===
  const stats = [
    { icon: <GraduationCap className="w-8 h-8" />, value: "6+", label: "Years of Excellence" },
    { icon: <Users className="w-8 h-8" />, value: "10,000+", label: "Students Trained" },
    { icon: <Award className="w-8 h-8" />, value: "100%", label: "Job Placement" },
    { icon: <Zap className="w-8 h-8" />, value: "30 Days", label: "Fast-Track Course" },
  ];

  // === Why Choose ===
  const whyChoose = [
    { icon: <Layers className="w-7 h-7" />, title: "Structured Learning", desc: "Basic to Advanced to Master modules designed for technicians to upgrade skills step-by-step." },
    { icon: <Users className="w-7 h-7" />, title: "Lifetime Support Community", desc: "Join a strong community with regular updates, doubt clearing, and guidance even after the course." },
    { icon: <MonitorSmartphone className="w-7 h-7" />, title: "Online + Offline + App Learning", desc: "Learn anytime, anywhere — with weekly live sessions for new faults and techniques." },
    { icon: <UserCheck className="w-7 h-7" />, title: "Learn Directly From the Expert", desc: "Get trained by Sirajul Haque, Kerala’s leading iPhone repair specialist and a trusted chip-level trainer across South India." },
    { icon: <Wrench className="w-7 h-7" />, title: "Hands-On Labs", desc: "Work on real iPhone & Android devices — not simulators." },
    // { icon: <Cpu className="w-7 h-7" />, title: "Chip-Level Expertise", desc: "Learn micro-soldering, BGA reballing, and IC replacement." },
    { icon: <Shield className="w-7 h-7" />, title: "Certified Instructors", desc: "Trained Apple & Android repair specialists teaching you directly." },
    { icon: <Rocket className="w-7 h-7" />, title: "Job Guarantee", desc: "100% placement assistance — or your money back." },
    { icon: <Clock className="w-7 h-7" />, title: "Flexible Schedules", desc: "Weekend and evening batches designed for working professionals." },
  ];

  // === Mission & Vision ===
  const missionVision = [
    { icon: <Target className="w-10 h-10" />, title: "Our Mission", desc: "Our mission is to establish Kerala’s No.1 Smartphone Training Academy. We aim to produce highly skilled technicians who can meet the growing demand in the mobile repair industry. The academy will also serve as a talent hub for the broader GetFix ecosystem, helping fuel the brand’s long term vision." },
    { icon: <Globe className="w-10 h-10" />, title: "Our Vision", desc: "A world where every phone has a skilled repair hero — trained by Getfix." },
  ];

  // === Team ===
  const team = [
    { name: "Sirajul Haque", role: "Founder & Lead Trainer - GetFix Academy", exp: "Industry Expert Trainers with 20+ Years of Chip-Level Repair Experience", img: T1 },
    { name: "Shuhaib Shadi", role: "Co-Founder & Director - GetFix Academy", exp: "Industry Expert Trainers with 10+ Years of iPhone Chip-Level Repair Experience", img: T2 },
    { name: "Amit Patel", role: "Android Specialist", exp: "10+ Years in Software Repair", img: "/team/amit.jpg" },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* === HERO: Our Story (Text Left + Image Right) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Story</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in <strong>2019</strong>, we are <span className="font-bold text-orange-600">Kerala’s #1 Smartphone Repair Academy</span>. We don’t just teach — we <strong>build careers</strong> with real-world, job-ready skills.
            </p>
            <p className="text-gray-600">
              From chip-level repair to advanced diagnostics, our students become <strong>repair heroes</strong> trusted by thousands.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
              <img
                src={online}
                alt="GetFix Academy - Our Journey"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-3xl" />
          </motion.div>
        </div>

        {/* === Stats === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-orange-600 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
              <p className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* === Mission & Vision === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {missionVision.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-200 shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-orange-600 mb-4 flex justify-center md:justify-start">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center md:text-left">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed text-center md:text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* === Why Choose Getfix (Image Left + Cards Right) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
              <img
                src={offline}
                alt="Why Choose GetFix Academy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left mb-10">
              <span className="text-orange-600">Why Choose</span> <span className="text-gray-900">Getfix</span>?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-orange-100 hover:shadow-xl transition-all cursor-default"
                >
                  <div className="text-orange-600 mb-3 flex justify-center">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 text-center mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* === Meet Our Experts === */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Meet Our <span className="text-orange-600">Expert Instructors</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="h-64 relative overflow-hidden bg-gray-50">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-orange-600 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{member.exp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === CTA === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
          >
            Join Getfix Academy Today
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;