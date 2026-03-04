"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const CHECKOUT_URL =
  "https://checkout.barte.com/payment-link/e9c42de5-693e-4f84-a225-9a7cc97626b5";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#01FEC2] blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.07, 0.03, 0.07] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#006C60] blur-[130px]"
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#01FEC2 1px, transparent 1px), linear-gradient(90deg, #01FEC2 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
      >
        {/* Left — text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 border border-[#01FEC2]/25 rounded-full px-5 py-2 text-sm text-[#01FEC2]/80 bg-[#01FEC2]/5 backdrop-blur-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#01FEC2]" />
            Livro digital da GrowDoc
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            Pacientes qualificados{" "}
            <span className="text-gradient">sem dancinhas</span>{" "}
            e sem precisar ser blogueiro.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10"
          >
            O manual que todo médico deveria ler antes de contratar qualquer
            agência — 11 situações reais para você ter resultado e não perder
            dinheiro com marketing.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <motion.a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(1,254,194,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#01FEC2] text-[#131515] font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all"
            >
              Quero o livro agora
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-white/30"
          >
            {[
              "Baseado em +100 médicos atendidos",
              "+R$2M em resultados gerados",
              "Escrito pela equipe GrowDoc",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-[#01FEC2]">✓</span> {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — book cover */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0 relative"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow behind book */}
            <div className="absolute inset-0 -z-10 blur-[60px] bg-[#01FEC2]/20 scale-90 rounded-[32px]" />
            <Image
              src="/images/capa-livro.png"
              alt="Manual de Sobrevivência no Marketing Para Médicos"
              width={320}
              height={480}
              className="w-64 md:w-80 h-auto rounded-2xl shadow-2xl"
              style={{
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(1,254,194,0.15)",
              }}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#01FEC2]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
