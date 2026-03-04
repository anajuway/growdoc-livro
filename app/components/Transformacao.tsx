"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const antes = [
  "Vulnerável a qualquer agência genérica",
  "Sem saber quais métricas cobrar",
  "Invisível digitalmente — ou com perfil bonito sem resultado",
  "Comunicação desalinhada com paciente certo",
  "Perdendo dinheiro sem entender por quê",
];

const depois = [
  "Critério para escolher e demitir agência",
  "Sabe exatamente o que cobrar e quando cobrar",
  "Demanda ativa e previsível todo mês",
  "Marketing que reflete quem você é",
  "Resultado financeiro que paga as contas",
];

export default function Transformacao() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01FEC2]/15 to-transparent" />
        <div className="absolute inset-0 bg-[#0e1111]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase mb-4">
            A transformação
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Do médico <span className="text-white/30">vulnerável</span> ao médico{" "}
            <span className="text-gradient">invulnerável.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Antes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-2xl border border-white/8 bg-white/3"
          >
            <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-5">
              Antes do manual
            </p>
            <ul className="space-y-4">
              {antes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/45 text-sm">
                  <span className="text-red-400/60 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Depois */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-2xl border border-[#01FEC2]/20 bg-[#01FEC2]/5"
          >
            <p className="text-[#01FEC2] text-xs font-bold tracking-widest uppercase mb-5">
              Depois do manual
            </p>
            <ul className="space-y-4">
              {depois.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                  <span className="text-[#01FEC2] mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Arrow connecting */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <div className="flex items-center gap-3 text-white/30 text-sm">
            <span>A diferença entre os dois</span>
            <ArrowRight className="w-4 h-4 text-[#01FEC2]" />
            <span className="text-[#01FEC2] font-semibold">este manual.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
