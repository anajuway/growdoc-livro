"use client";

import { motion } from "framer-motion";

const stats = [
  { valor: "+100", label: "médicos especialistas atendidos" },
  { valor: "R$2M+", label: "em resultados gerados em 4 meses" },
  { valor: "600%", label: "ROI médio das campanhas" },
  { valor: "2", label: "plataformas dominadas: Google + Meta" },
];

export default function Credibilidade() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01FEC2]/15 to-transparent" />
        <div className="absolute inset-0 bg-[#0e1111]" />
        <motion.div
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#006C60] blur-[120px]"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#01FEC2] text-sm font-semibold tracking-widest uppercase mb-4">
            Por que confiar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Escrito por quem{" "}
            <span className="text-gradient">vive o marketing médico.</span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            A GrowDoc nasceu na interseção entre medicina e marketing digital.
            Este livro é destilado da experiência real com mais de 100 médicos
            especialistas — nenhuma teoria de livro importado.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-white/8 bg-white/3"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.valor}
              </p>
              <p className="text-white/45 text-sm leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative text-center px-8 py-10 rounded-2xl border border-[#01FEC2]/15 bg-[#01FEC2]/5"
        >
          <div className="absolute top-6 left-8 text-[#01FEC2]/30 text-6xl font-serif leading-none">
            "
          </div>
          <p className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto italic">
            Sem cada um desses conceitos, é quase certo que você vai perder
            dinheiro, tempo, energia e muitas vezes, sono — com o bendito
            marketing.
          </p>
          <p className="mt-6 text-[#01FEC2] text-sm font-semibold">
            — GrowDoc, Introdução do Manual
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
