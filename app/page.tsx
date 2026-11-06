"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, BookOpen, HeartHandshake, Mic2, ArrowRight, Mail, Phone, Landmark, Target } from 'lucide-react';

export default function GuiaDaMulherB2B() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-purple-600/30">
      {/* Navbar Executiva */}
      <nav className="fixed w-full bg-[#0B0F19]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-purple-500" />
            <span className="font-bold text-xl tracking-tight text-white">Guia da Mulher</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#projeto" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">O Projeto</a>
            <a href="#esg" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Impacto ESG</a>
            <a href="#palestras" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Palestras Corporativas</a>
            <a href="#contato" className="px-6 py-2.5 bg-white text-[#0B0F19] rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
              Apoiar Iniciativa
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Foco Institucional) */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0B0F19] to-[#0B0F19] -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Landmark className="w-4 h-4" />
              Projeto Aprovado: Leis de Incentivo
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              A informação é o primeiro passo para a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">liberdade.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
              Alie a marca da sua empresa ao ODS 5 da ONU. Apoie a tiragem e distribuição gratuita de 3.000 exemplares do manual jurídico e prático de sobrevivência e emancipação feminina para órgãos de proteção (DEAMs, CRAS e CREAS).
            </motion.p>
            
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                Solicitar Pitch Deck <HeartHandshake className="w-5 h-5" />
              </a>
              <a href="#palestras" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Palestras Corporativas
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl blur-2xl" />
              <div className="relative h-full w-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                <BookOpen className="w-24 h-24 text-purple-500/50 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Guia da Mulher</h3>
                <p className="text-purple-400 font-medium mb-6">7 Passos para a Liberdade</p>
                <div className="w-full p-4 bg-black/40 rounded-xl border border-white/5 backdrop-blur-sm">
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Por que um livro físico?</strong><br/>
                    Garante privacidade total, sem deixar rastros no histórico do navegador ou celular da vítima.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impacto ESG & Distribuição */}
      <section id="esg" className="py-24 bg-black/40 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Métricas de Impacto Social (ESG)</h2>
            <p className="text-slate-400 text-lg">O investimento da sua empresa retorna de forma direta para a sociedade civil, viabilizado pelas Leis Rouanet, PIC-SC e Fazcultura.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <Target className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">3.000 Exemplares</h3>
              <p className="text-slate-400">Tiragem exclusiva para doação. Todo o lote patrocinado é destinado a mulheres em situação de vulnerabilidade.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <ShieldCheck className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Rede de Proteção</h3>
              <p className="text-slate-400">Distribuição estratégica mapeada para DEAMs, CRAS, CREAS e Varas de Violência Doméstica (BA e SC).</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <Landmark className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Custo Zero Real</h3>
              <p className="text-slate-400">O patrocínio corporativo pode ser 100% deduzido do Imposto de Renda ou ICMS, dependendo do enquadramento fiscal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Palestras Corporativas (Pivot) */}
      <section id="palestras" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Educação Corporativa e Conscientização</h2>
            <p className="text-lg text-slate-400 mb-8">
              A violência doméstica afeta a produtividade, a saúde mental e a retenção de talentos femininos nas empresas. Nossas palestras e workshops levam letramento jurídico e apoio estratégico para as lideranças e colaboradoras do seu time.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-500/20 rounded-full"><Mic2 className="w-4 h-4 text-purple-400"/></div>
                <span className="text-slate-300"><strong>O Custo Oculto:</strong> Como identificar e apoiar colaboradoras em situação de risco.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-500/20 rounded-full"><Mic2 className="w-4 h-4 text-purple-400"/></div>
                <span className="text-slate-300"><strong>Do Letramento à Ação:</strong> Direitos da mulher explicados de forma simples e acolhedora.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-500/20 rounded-full"><Mic2 className="w-4 h-4 text-purple-400"/></div>
                <span className="text-slate-300"><strong>Compliance ODS 5:</strong> Estruturando canais internos de apoio à diversidade e segurança.</span>
              </li>
            </ul>
            <a href="#contato" className="inline-flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition-colors">
              Solicitar Proposta Comercial <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-[#0B0F19] rounded-3xl p-10 border border-white/10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-purple-600/10 blur-[100px] rounded-full" />
             <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Dr. Reginaldo Oliveira</h3>
             <p className="text-purple-400 font-medium mb-6 relative z-10">Advogado e Estrategista</p>
             <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
               Com sólida atuação em Direito de Família e Defesa da Mulher (OAB/SC 57.879), é autor de obras estratégicas e mentor de lideranças. Seu projeto "Guia da Mulher" visa democratizar a informação jurídica, transformando linguagem técnica em ferramentas de sobrevivência e emancipação.
             </p>
          </div>
        </div>
      </section>

      {/* Footer / Contato */}
      <footer id="contato" className="bg-[#05070A] pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Vamos construir esse impacto juntos?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a href="mailto:contato@advogadonomade.com.br" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-medium text-white hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5" /> contato@advogadonomade.com.br
            </a>
            <a href="https://wa.me/5571983008001" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600/20 border border-green-600/30 rounded-lg font-medium text-green-400 hover:bg-green-600/30 transition-colors">
              <Phone className="w-5 h-5" /> (71) 98300-8001
            </a>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 text-slate-600 mb-4" />
            <p className="text-slate-500 text-sm">
              Dr. Reginaldo Oliveira - OAB/SC: 57.879<br/>
              © 2026 Advogado Nômade. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
