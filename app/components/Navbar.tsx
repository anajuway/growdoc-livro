"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CHECKOUT_URL =
  "https://checkout.barte.com/payment-link/e9c42de5-693e-4f84-a225-9a7cc97626b5";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{
        background:
          "linear-gradient(to bottom, rgba(19,21,21,0.95) 0%, rgba(19,21,21,0) 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Image
        src="/images/logo-navbar.png"
        alt="GrowDoc"
        width={140}
        height={38}
        className="h-8 w-auto"
      />
      <motion.a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="hidden md:inline-flex items-center gap-2 bg-[#01FEC2] text-[#131515] font-bold text-sm px-5 py-2.5 rounded-full"
      >
        Quero o livro
      </motion.a>
    </motion.nav>
  );
}
