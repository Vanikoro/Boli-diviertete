"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // O usa FaWhatsapp de react-icons

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-100 hidden sm:block"
      >
        <p className="text-xs font-bold text-gray-600">¡Hablemos por WhatsApp!</p>
      </motion.div>

      <motion.a
        href="https://wa.me/573118417533"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        
        <MessageCircle size={32} fill="currentColor" className="relative z-10" />
      </motion.a>
    </div>
  );
}