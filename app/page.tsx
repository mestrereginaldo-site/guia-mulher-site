import React from 'react';
import { BookOpen, Download, ShieldCheck, HeartHandshake, ArrowRight, Mail, Phone, Landmark, Lock } from 'lucide-react';

export default function GuiaDaMulherLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-200">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-purple-700" />
            <span className="font-bold text-xl tracking-tight text-slate-800">Guia da Mulher</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#projeto" className="text-slate-600 hover:text-purple-700 font-medium transition-colors">O Projeto</a>
            <a href="#impacto" className="text-slate-600 hover:text-purple-700 font-medium transition-colors">Impacto ESG</a>
            <a href="#downloads" className="text-slate-600 hover:text-purple-700 font-medium transition-colors">Downloads</a>
            <a href="#patrocinio" className="px-5 py-2 bg-purple-700 text-white rounded-full font-medium hover:bg-purple-800 transition-colors">
              Seja um Patrocinador
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-3 py-1 bg-purple-800/50 text-purple-200 rounded-full text-sm font-semibold tracking-wide border border-purple-700/50">
              Projeto Cultural & Social
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              7 Passos para a <span className="text-purple-400">Liberdade</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Um manual prático, jurídico e acolhedor de sobrevivência e emancipação. Apoie a distribuição gratuita de 3.000 exemplares físicos para mulheres em situação de vulnerabilidade.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#patrocinio" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-900 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                Quero Patrocinar <HeartHandshake className="w-5 h-5" />
              </a>
              <a href="#projeto" className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Conhecer o Projeto <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-tr from-purple-800 to-slate-700 rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-800 flex items-center justify-center">
              <BookOpen className="w-32 h-32 text-purple-300 opacity-50" />
              <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-slate-900 to-transparent">
                <p className="text-white font-bold text-xl">O Livro Impresso</p>
                <p className="text-purple-300 text-sm">Privacidade e segurança que a mídia física garante.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Projeto */}
      <section id="projeto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">A Informação que Salva Vidas</h2>
            <p className="mt-4 text-slate-600 text-lg">
              A imensa maioria das vítimas encontra-se presa em um ciclo de abusos por falta de informação estruturada. O projeto ataca diretamente essa raiz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <BookOpen className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">3.000 Exemplares</h3>
              <p className="text-slate-600">Tiragem focada 100% em doação. Nenhum exemplar desta cota será comercializado.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Distribuição Estratégica</h3>
              <p className="text-slate-600">Entregues em DEAMs, CRAS, CREAS e Varas de Violência Doméstica, diretamente na linha de frente.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <Landmark className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Apoio Legal</h3>
              <p className="text-slate-600">Conteúdo desenvolvido com sólida base jurídica, traduzindo direitos complexos em passos simples.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Downloads */}
      <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50 border-y border-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Área de Downloads</h2>
              <p className="mt-2 text-slate-600">Materiais de apoio, cartilhas de bolso e formulários importantes.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 text-purple-700 bg-purple-100 px-4 py-2 rounded-full text-sm font-semibold">
              <Lock className="w-4 h-4" /> Acesso Liberado em Breve
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-purple-700" />
                </div>
                <h4 className="font-bold text-lg text-slate-800">Cartilha de Emergência</h4>
                <p className="text-sm text-slate-500 mt-2">Os telefones úteis e as 3 primeiras atitudes a tomar em caso de risco iminente.</p>
              </div>
              <button disabled className="mt-6 w-full py-2 bg-slate-100 text-slate-400 rounded-lg font-medium cursor-not-allowed">
                Disponível na Fase 2
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-purple-700" />
                </div>
                <h4 className="font-bold text-lg text-slate-800">Mapa de Apoio (BA e SC)</h4>
                <p className="text-sm text-slate-500 mt-2">Endereços atualizados de delegacias da mulher e abrigos em Salvador e Jaraguá do Sul.</p>
              </div>
              <button disabled className="mt-6 w-full py-2 bg-slate-100 text-slate-400 rounded-lg font-medium cursor-not-allowed">
                Disponível na Fase 2
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-purple-700" />
                </div>
                <h4 className="font-bold text-lg text-slate-800">Resumo: Lei Maria da Penha</h4>
                <p className="text-sm text-slate-500 mt-2">Um infográfico prático explicando os tipos de violência (física, psicológica, moral, patrimonial e sexual).</p>
              </div>
              <button disabled className="mt-6 w-full py-2 bg-slate-100 text-slate-400 rounded-lg font-medium cursor-not-allowed">
                Disponível na Fase 2
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Patrocínio ESG */}
      <section id="patrocinio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Seja uma Empresa Transformadora</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Seu investimento pode ser viabilizado através de leis de incentivo fiscal (Lei Rouanet, PIC-SC, Fazcultura), aliando a marca da sua empresa ao ODS 5 da ONU (Igualdade de Gênero).
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:contato@advogadonomade.com.br" className="flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 rounded-lg font-bold hover:bg-purple-500 transition-colors">
                <Mail className="w-5 h-5" /> Solicitar Pitch Deck
              </a>
              <a href="https://wa.me/5571983008001" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 rounded-lg font-bold hover:bg-green-500 transition-colors">
                <Phone className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <ShieldCheck className="w-10 h-10 text-slate-300 mb-4" />
          <h3 className="font-bold text-slate-800 text-lg">Dr. Reginaldo Oliveira</h3>
          <p className="text-slate-500">OAB/SC: 57.879</p>
          <div className="mt-4 text-slate-600 flex flex-col gap-1">
            <p>contato@advogadonomade.com.br</p>
            <p>(71) 98300-8001</p>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            © 2026 Advogado Nômade. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}