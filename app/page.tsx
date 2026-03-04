import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Capitulos from "./components/Capitulos";
import Credibilidade from "./components/Credibilidade";
import Depoimentos from "./components/Depoimentos";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#131515] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Problema />
      <Capitulos />
      <Credibilidade />
      <Depoimentos />
      <CTA />
    </main>
  );
}
