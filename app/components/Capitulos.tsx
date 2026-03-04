"use client";

import { motion } from "framer-motion";

const situacoes = [
  {
    num: "01",
    titulo: "A falácia da concorrência",
    desc: "Por que seu mercado é muito maior do que você imagina — e por que focar no concorrente é o maior erro.",
  },
  {
    num: "02",
    titulo: "O que é tráfego (de verdade)",
    desc: "A diferença entre orgânico e pago, explicada de forma simples para quem nunca estudou marketing.",
  },
  {
    num: "03",
    titulo: "Por que seu Instagram não gera pacientes",
    desc: "Posts bonitos sem estratégia são vitrines que ninguém para para olhar. Entenda o erro mais comum.",
  },
  {
    num: "04",
    titulo: "Indicadores que realmente importam",
    desc: "Curtida não paga boleto. Aprenda quais métricas cobrar da agência — e quais são só fumaça.",
  },
  {
    num: "05",
    titulo: "Como o tráfego pago realmente funciona",
    desc: "Segmentação avançada, plataformas certas para cada especialidade e como não desperdiçar verba.",
  },
  {
    num: "06",
    titulo: "Os perigos de contratar qualquer agência",
    desc: "Agências genéricas não entendem marketing médico. Veja o que observar antes de assinar qualquer contrato.",
  },
  {
    num: "07",
    titulo: "Expectativas reais de investimento",
    desc: "R$500 não trazem 500 pacientes. Entenda o que esperar, quando esperar e como medir.",
  },
  {
    num: "08",
    titulo: "As 3 engrenagens do marketing médico",
    desc: "Médico, equipe de atendimento e marketing. Se qualquer uma falhar, o resultado vai por água abaixo.",
  },
  {
    num: "09",
    titulo: "O papel crítico da sua secretária",
    desc: "De nada adianta gerar leads se quem atende não está preparado para converter em consulta.",
  },
  {
    num: "10",
    titulo: "Como cobrar resultado da agência",
    desc: "KPIs, relatórios, sinais de alerta. Aprenda a fazer perguntas que a agência ruim não consegue responder.",
  },
  {
    num: "11",
    titulo: "Números reais do mercado",
    desc: "Custo por lead, ROI médio, custo por paciente. Referências reais para você não ser enganado.",
  },
];

export default function Capitulos() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01FEC2]/15 to-transparent" />
        <motion.div
          animate={{ opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#01FEC2] blur-[140px]"
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
            O que você vai aprender
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            11 situações que vão mudar{" "}
            <span className="text-gradient">como você vê o marketing.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {situacoes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-[#01FEC2]/25 hover:bg-[#01FEC2]/5 transition-all duration-300"
            >
              <span className="text-[#01FEC2]/40 text-xs font-bold tracking-widest mb-3 block">
                {item.num}
              </span>
              <h3 className="text-base font-bold mb-2 text-white leading-snug">
                {item.titulo}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
