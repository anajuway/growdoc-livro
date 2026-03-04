"use client";

import { motion } from "framer-motion";

const depoimentos = [
  {
    nome: "Dr. Carlos Trindade",
    especialidade: "Medicina da Dor",
    texto:
      "Gosto da proatividade e da tentativa de resolver os problemas com comprometimento.",
  },
  {
    nome: "Dra. Aline Ribeiro",
    especialidade: "Cirurgia Plástica",
    texto:
      "Estamos com 6 agendamentos no total e uma conversão de 13%.",
  },
  {
    nome: "Dr. Fabiano Winckler",
    especialidade: "Nutrologia",
    texto:
      "Essa semana foram mais de 15 solicitações de exames para consulta.",
  },
  {
    nome: "Dr. Romollo Pelegrino",
    especialidade: "Cirurgia Vascular",
    texto:
      "Praticamente uma semana de campanha ativa e já conseguimos 2 agendamentos.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#01FEC2]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01FEC2]/15 to-transparent" />
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
            Resultados reais
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Médicos que{" "}
            <span className="text-gradient">pararam de ser enrolados.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-7 rounded-2xl border border-white/8 bg-white/3 hover:border-[#01FEC2]/20 transition-all duration-300"
            >
              <StarRow />
              <p className="text-white/80 text-base leading-relaxed mb-6 italic">
                "{dep.texto}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#01FEC2]/15 border border-[#01FEC2]/25 flex items-center justify-center text-[#01FEC2] font-bold text-sm flex-shrink-0">
                  {dep.nome.split(" ")[1]?.[0] ?? dep.nome[0]}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{dep.nome}</p>
                  <p className="text-white/35 text-xs">{dep.especialidade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
