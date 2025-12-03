"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-64 bg-white dark:bg-gray-900 h-full p-6 shadow-lg z-50"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4 text-lg">
              <Link href="/" onClick={onClose}>Inicio</Link>
              <Link href="/catalogo" onClick={onClose}>Catálogo</Link>
              <Link href="/reservas" onClick={onClose}>Reservas</Link>
              <Link href="/contactanos" onClick={onClose}>Contáctanos</Link>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
