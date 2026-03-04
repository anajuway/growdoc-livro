"use client";

import { motion } from "framer-motion";

const dores = [
  {
    emoji: "💸",
    titulo: "Pagou caro e não teve retorno",
    desc: "Você investiu em marketing, recebeu um relatório cheio de gráficos bonitos e… nenhum paciente novo no consultório.",
  },
  {
    emoji: "😤",
    titulo: "Agência genérica que não entende médico",
    desc: "Eles fazem post para loja de roupa, salão de beleza e consultório ao mesmo tempo. O resultado são anúncios apelativos que mancham sua imagem.",
  },
  {
    emoji: "📊",
    titulo: "Métricas que não significam nada",
    desc: "Curtidas, seguidores, impressões — e você fica perguntando: \"Mas quantos pacientes vieram?\" Ninguém sabe responder.",
  },
  {
    emoji: "🔄",
    titulo: "Terceirizou e perdeu o controle",
    desc: "A agência faz o que quer, você não entende nada, não consegue cobrar resultado e fica refém de quem mal sabe o que é um CRM médico.",
  },
];

export default function Problema() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Subtle background */}
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
            Por que isso acontece
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Virou rotina ouvir médico{" "}
            <span className="text-gradient">dizendo que foi enganado.</span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            Trabalhando com médicos de todas as especialidades, ficou comum escutar:
            "a agência não entregou", "paguei e não vi resultado", "não sei nem
            o que cobrar". Esse manual existe por causa disso.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {dores.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl border border-white/8 bg-white/3 hover:border-[#01FEC2]/20 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{item.emoji}</span>
              <h3 className="text-lg font-bold mb-2 text-white">{item.titulo}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px rgba(1,254,194,0.04)" }} />
            </motion.div>
          ))}
        </div>

        {/* Divider phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-xl md:text-2xl font-medium leading-relaxed">
            Sem os conceitos certos, é{" "}
            <span className="text-white font-bold">quase certo</span> que você
            vai perder dinheiro, tempo, energia — e sono.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
