import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Lock, CreditCard, Mail } from 'lucide-react';

const PaymentDuePage = () => {
  return (
    <div className="min-h-screen bg-[#001F3F] text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <Helmet>
        <title>Payment Due | CHEF TY™</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#001024_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mb-10 relative w-48 h-48"
        >
          <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20" />
          <div className="absolute inset-4 rounded-full border border-[#D4AF37]/30 border-dashed animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl bg-[#002a5c] border border-[#D4AF37]/40 flex items-center justify-center shadow-2xl shadow-black/30">
                <CreditCard className="w-12 h-12 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg">
                <Lock className="w-5 h-5 text-[#001F3F]" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="inline-block text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Website Locked
          </span>
          <h1 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
            Payment Due
          </h1>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-white/75 text-lg font-light leading-relaxed mb-10">
            Please clear your due to unlock the website. Once payment is received, access will be restored automatically.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default PaymentDuePage;
