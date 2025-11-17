'use client';

import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  X,
  ChevronDown,
  Shield,
  Clock,
  Zap,
  Building2,
  Star,
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BRAND_ORANGE = '#F37021';

// ──────────────────────────────────────────────────────────────
// SMOOTH COUNTER – PURE JSX (no TS)
// ──────────────────────────────────────────────────────────────
const easeOutQuad = (t) => 1 - (1 - t) ** 2;

const Counter = ({ end, suffix = '', label, icon }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || count > 0) return;

    const duration = 2000;
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      const value = Math.floor(eased * end);

      setCount(value);

      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl md:text-5xl font-black flex items-center justify-center gap-1"
        style={{ color: BRAND_ORANGE }}
      >
        {icon}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {count}
          {suffix}
        </motion.span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────
// MAIN CONTACT SECTION – PURE JSX
// ──────────────────────────────────────────────────────────────
export default function ContactSection() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [quickEmail, setQuickEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [faqOpen, setFaqOpen] = useState({});

  // Live IST Clock
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ist = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
      setCurrentTime(
        ist.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Kolkata',
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Form validation
  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) err.email = 'Valid email required';
    if (formData.message.length < 10) err.message = 'Message must be 10+ characters';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: [BRAND_ORANGE] });
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 3000);
  };

  const handleQuick = (e) => {
    e.preventDefault();
    if (!quickEmail.includes('@')) return;
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 }, colors: [BRAND_ORANGE] });
    setQuickEmail('');
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50"
    >
      {/* Live Clock */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-xs font-medium text-gray-700 z-20">
        {currentTime} IST
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
            style={{ color: BRAND_ORANGE }}
          >
            {"Let's Connect".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            We respond within{' '}
            <span style={{ color: BRAND_ORANGE, fontWeight: 600 }}>2 hours</span> — guaranteed.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT – Map (desktop) / Form (mobile) */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Mobile Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="lg:hidden"
            >
              <ContactForm
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                isSubmitted={isSubmitted}
                onSubmit={handleSubmit}
              />
            </motion.div>

            {/* Desktop Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl h-96 border border-gray-200/50">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6433229765!2d72.7410994!3d19.082688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4f4624c4a1b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT – Contact Cards + Form */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call', value: '+91 7510636404' },
                { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'info@getfixonline.com' },
                { icon: <MapPin className="w-6 h-6" />, label: 'Visit', value: 'Keystone Building, Kozhikode' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg text-center"
                >
                  <div className="mb-2" style={{ color: BRAND_ORANGE }}>
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="hidden lg:block"
            >
              <ContactForm
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                isSubmitted={isSubmitted}
                onSubmit={handleSubmit}
              />
            </motion.div>
          </div>

          {/* Mobile: Map + Below */}
          <div className="space-y-12 lg:hidden order-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl h-72 border border-gray-200/50">
                <iframe
                  title="Location"
                  src="https://share.google/l9JKuZynadg4Y1HW6"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <div className="space-y-10">
              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: <Clock className="w-7 h-7" />, title: '2-Hour Response' },
                  { icon: <Shield className="w-7 h-7" />, title: '100% Secure' },
                  { icon: <Zap className="w-7 h-7" />, title: '24/7 Support' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/50"
                  >
                    <div
                      className="mx-auto w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-2"
                      style={{ color: BRAND_ORANGE }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-sm" style={{ color: BRAND_ORANGE }}>
                      {item.title}
                    </h4>
                  </motion.div>
                ))}
              </div>

              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.0 }}
                className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl text-center"
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: BRAND_ORANGE }}>
                  Need a Quick Quote?
                </h3>
                <p className="text-sm text-gray-600 mb-4">Drop your email — reply in 5 mins!</p>
                <form onSubmit={handleQuick} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
                  <input
                    type="email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none text-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm"
                    style={{ backgroundColor: BRAND_ORANGE }}
                  >
                    Get Quote <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>

              {/* COUNTERS – MOBILE */}
              <div className="grid grid-cols-2 gap-6">
              <Counter end={400} suffix="+" label="Customers Served" />
              <Counter end={100} suffix="+" label="Projects Done" />
              <Counter end={6} suffix="+" label="Years Experience" />
              <Counter end={100} suffix="%" label="Satisfaction" icon={<Star className="w-6 h-6 fill-current" />} />
              </div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
              >
                <h3 className="text-xl font-bold text-center mb-4" style={{ color: BRAND_ORANGE }}>
                  FAQ
                </h3>
                <div className="space-y-3">
                  {[
                    { q: 'How fast do you reply?', a: 'Within 2 hours, usually under 30 mins.' },
                    { q: 'Free consultation?', a: 'Yes! 15-min call included.' },
                  ].map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white/70 backdrop-blur-md rounded-xl border border-white/50 overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setFaqOpen((prev) => ({ ...prev, [i]: !prev[i] }))
                        }
                        className="w-full px-4 py-3 text-left flex justify-between items-center text-sm font-medium"
                      >
                        {faq.q}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${faqOpen[i] ? 'rotate-180' : ''}`}
                          style={{ color: BRAND_ORANGE }}
                        />
                      </button>
                      {faqOpen[i] && (
                        <div className="px-4 pb-3 text-xs text-gray-600">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Offices */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { city: 'Kozhikode', phone: '+918304952266' },
                  { city: 'Kochi', phone: '+91 7025229464' },
                ].map((loc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.3 + i * 0.1 }}
                    className="p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 text-center"
                  >
                    <Building2 className="w-8 h-8 mx-auto mb-2" style={{ color: BRAND_ORANGE }} />
                    <h4 className="font-bold text-sm">{loc.city}</h4>
                    <p className="text-xs text-gray-600 mt-1">{loc.phone}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Below Map */}
          <div className="hidden lg:block lg:col-span-2 mt-12 space-y-12">
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: <Clock className="w-8 h-8" />, title: '2-Hour Response', desc: 'Guaranteed' },
                { icon: <Shield className="w-8 h-8" />, title: '100% Secure', desc: 'SSL & GDPR' },
                { icon: <Zap className="w-8 h-8" />, title: '24/7 Support', desc: 'Always On' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50"
                >
                  <div
                    className="mx-auto w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-3"
                    style={{ color: BRAND_ORANGE }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg" style={{ color: BRAND_ORANGE }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* COUNTERS – DESKTOP */}
            <div className="grid grid-cols-4 gap-8">
              <Counter end={400} suffix="+" label="Customers Served" />
              <Counter end={100} suffix="+" label="Projects Done" />
              <Counter end={6} suffix="+" label="Years Experience" />
              <Counter end={100} suffix="%" label="Satisfaction" icon={<Star className="w-7 h-7 fill-current" />} />
            </div>

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.0 }}
              className="max-w-2xl mx-auto p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl text-center"
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: BRAND_ORANGE }}>
                Need a Quick Quote?
              </h3>
              <p className="text-gray-600 mb-6">Drop your email — reply in 5 mins!</p>
              <form onSubmit={handleQuick} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-5 py-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-4 text-white font-bold rounded-2xl flex items-center gap-2"
                  style={{ backgroundColor: BRAND_ORANGE }}
                >
                  Get Quote <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-center mb-6" style={{ color: BRAND_ORANGE }}>
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  { q: 'How fast do you reply?', a: 'Within 2 hours, guaranteed. Most replies in under 30 mins.' },
                  { q: 'Do you offer free consultation?', a: 'Yes! 15-min free call to discuss your needs.' },
                  { q: 'Where are you located?', a: 'Main office in Kozhikode, Kerala. Support teams in Mumbai & Delhi.' },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setFaqOpen((prev) => ({ ...prev, [i]: !prev[i] }))
                      }
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-orange-50/50 transition-all"
                    >
                      <span className="font-medium">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${faqOpen[i] ? 'rotate-180' : ''}`}
                        style={{ color: BRAND_ORANGE }}
                      />
                    </button>
                    {faqOpen[i] && (
                      <div className="px-6 pb-4 text-gray-600 text-sm">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Offices */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { city: 'Kozhikode', address: 'Keystone Building, Calicut, Kerala', phone: '+91 9758828258' },
                { city: 'Kochi', address: 'Kochi, Kerala', phone: '7025229464' },
              ].map((loc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 text-center"
                >
                  <Building2 className="w-10 h-10 mx-auto mb-3" style={{ color: BRAND_ORANGE }} />
                  <h4 className="font-bold text-lg">{loc.city}</h4>
                  <p className="text-sm text-gray-600 mt-1">{loc.address}</p>
                  <p className="text-sm font-medium mt-2" style={{ color: BRAND_ORANGE }}>
                    {loc.phone}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Toast */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-white/95 backdrop-blur-2xl px-8 py-5 rounded-3xl shadow-2xl border border-orange-200 flex items-center gap-4">
              <CheckCircle className="w-10 h-10" style={{ color: BRAND_ORANGE }} />
              <div>
                <p className="font-bold text-gray-900">Message Sent!</p>
                <p className="text-sm text-gray-600">We’ll reply within 2 hours.</p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// REUSABLE FORM COMPONENTS – PURE JSX
// ──────────────────────────────────────────────────────────────
const ContactForm = ({ formData, setFormData, errors, isSubmitted, onSubmit }) => {
  return (
    <motion.form
      onSubmit={onSubmit}
      className="relative p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl"
      style={{
        boxShadow: `0 25px 60px -15px ${BRAND_ORANGE}30, inset 0 1px 0 rgba(255,255,255,0.8)`,
      }}
      whileHover={{ scale: 1.01 }}
    >
      <div
        className="absolute inset-0 rounded-3xl blur-3xl -z-10"
        style={{ background: `${BRAND_ORANGE}15` }}
      />

      <div className="space-y-6">
        <FloatingInput
          icon={<Mail className="w-5 h-5" />}
          placeholder="Your Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
        />
        <FloatingInput
          icon={<Phone className="w-5 h-5" />}
          placeholder="Your Name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
        />
        <FloatingTextarea
          icon={<Send className="w-5 h-5" />}
          placeholder="How can we help you?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          error={errors.message}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 w-full py-5 text-white font-bold text-lg rounded-2xl shadow-xl flex items-center justify-center gap-3"
        style={{ background: `linear-gradient(135deg, ${BRAND_ORANGE}, #E55A00)` }}
      >
        {isSubmitted ? (
          <>
            <CheckCircle className="w-6 h-6" /> Sent!
          </>
        ) : (
          <>
            Send Message <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

const FloatingInput = ({ icon, placeholder, type, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        style={{ color: BRAND_ORANGE }}
      >
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full pl-14 pr-4 py-5 text-base bg-white/50 backdrop-blur-md border rounded-2xl focus:outline-none transition-all duration-300 ${
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/20'
            : 'border-gray-300'
        }`}
        style={{
          borderColor: focused && !error ? BRAND_ORANGE : undefined,
          boxShadow: focused ? `0 0 0 4px ${BRAND_ORANGE}20` : undefined,
        }}
        placeholder=" "
      />
      <label
        className={`absolute left-14 top-1/2 -translate-y-1/2 pointer-events-none transition-all origin-left text-gray-500 duration-300 ${
          focused || hasValue
            ? 'text-xs -translate-y-10 scale-90 font-medium'
            : 'text-base'
        } ${error ? '!text-red-500' : ''}`}
        style={{
          color: (focused || hasValue) && !error ? BRAND_ORANGE : undefined,
        }}
      >
        {placeholder}
      </label>
      {error && <p className="absolute -bottom-5 left-0 text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

const FloatingTextarea = ({ icon, placeholder, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <div className="absolute left-4 top-6 z-10" style={{ color: BRAND_ORANGE }}>
        {icon}
      </div>
      <textarea
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full pl-14 pr-4 py-5 text-base bg-white/50 backdrop-blur-md border rounded-2xl focus:outline-none transition-all duration-300 resize-none h-36 ${
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/20'
            : 'border-gray-300'
        }`}
        style={{
          borderColor: focused && !error ? BRAND_ORANGE : undefined,
          boxShadow: focused ? `0 0 0 4px ${BRAND_ORANGE}20` : undefined,
        }}
        placeholder=" "
      />
      <label
        className={`absolute left-14 top-6 pointer-events-none transition-all origin-left text-gray-500 duration-300 ${
          focused || hasValue
            ? 'text-xs -translate-y-8 scale-90 font-medium'
            : 'text-base'
        } ${error ? '!text-red-500' : ''}`}
        style={{
          color: (focused || hasValue) && !error ? BRAND_ORANGE : undefined,
        }}
      >
        {placeholder}
      </label>
      {error && <p className="absolute -bottom-5 left-0 text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};