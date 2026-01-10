import React, { useState } from 'react';
import { ArrowRight, TrendingUp, DollarSign, Clock, Zap, Users, BarChart3, CheckCircle2, Target, Shield, Star, Play, PhoneCall } from 'lucide-react';

export default function LandingPageV2() {
  const [activeTab, setActiveTab] = useState('recovery');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="text-white py-20 px-6" style={{background: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-5 py-2 rounded-lg font-semibold mb-6">
              <TrendingUp className="w-5 h-5" />
              +3.847 vendas recuperadas nas últimas 24h
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Aumente Seu Faturamento em 30-45% Sem Vender Mais
            </h1>
            
            <p className="text-2xl mb-4 font-semibold">
              Recupere automaticamente vendas que você já conquistou mas não fechou
            </p>
            
            <p className="text-xl opacity-95 mb-12 max-w-3xl mx-auto">
              Carrinhos abandonados, pedidos recusados e clientes inativos viram dinheiro no bolso enquanto você dorme
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-white px-10 py-5 rounded-lg font-bold text-xl hover:shadow-2xl transition" style={{color: '#2472b3'}}>
                Começar a Recuperar Vendas Agora
                <ArrowRight className="w-6 h-6 inline ml-2" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:bg-opacity-10 transition">
                <Play className="w-6 h-6 inline mr-2" />
                Ver Demonstração
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-20 backdrop-blur p-6 rounded-xl">
                <p className="text-4xl font-black mb-2">R$ 2.3M+</p>
                <p className="text-sm opacity-90">Recuperados em 2024</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur p-6 rounded-xl">
                <p className="text-4xl font-black mb-2">38%</p>
                <p className="text-sm opacity-90">Aumento médio</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur p-6 rounded-xl">
                <p className="text-4xl font-black mb-2">500+</p>
                <p className="text-sm opacity-90">Lojas ativas</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur p-6 rounded-xl">
                <p className="text-4xl font-black mb-2">24/7</p>
                <p className="text-sm opacity-90">Trabalhando</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Esperados */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Reais Que Você Pode Esperar
            </h2>
            <p className="text-xl text-gray-600">
              Baseado em dados de +500 lojas usando o Único Drop
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <DollarSign className="w-16 h-16 text-white" />,
                metric: "R$ 4.800 - R$ 18.500",
                label: "Recuperados no 1º mês",
                desc: "Média de clientes que faturam R$ 30k-100k/mês",
                color: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)'
              },
              {
                icon: <TrendingUp className="w-16 h-16 text-white" />,
                metric: "22-35%",
                label: "De carrinhos recuperados",
                desc: "Taxa média de conversão em vendas efetivas",
                color: 'linear-gradient(135deg, #26abe2 0%, #2472b3 100%)'
              },
              {
                icon: <Clock className="w-16 h-16 text-white" />,
                metric: "40-60 horas",
                label: "Economizadas por mês",
                desc: "Tempo que gastava respondendo clientes",
                color: 'linear-gradient(135deg, #1b1464 0%, #2472b3 100%)'
              }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:shadow-xl transition">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-6" style={{background: stat.color}}>
                  {stat.icon}
                </div>
                <p className="text-4xl font-black text-gray-900 mb-2">{stat.metric}</p>
                <p className="text-lg font-bold text-gray-700 mb-3">{stat.label}</p>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-2xl border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              De Onde Vem Esse Resultado?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Recuperação de Carrinhos",
                  percentage: "40%",
                  value: "R$ 3.200 - R$ 12.000/mês",
                  desc: "70% abandonam. Recuperamos 25-35% automaticamente.",
                  bg: 'bg-blue-50'
                },
                {
                  title: "Pedidos Recusados",
                  percentage: "25%",
                  value: "R$ 1.000 - R$ 4.000/mês",
                  desc: "40% compram com método alternativo quando oferecido.",
                  bg: 'bg-blue-50'
                },
                {
                  title: "Reativação de Clientes",
                  percentage: "20%",
                  value: "R$ 800 - R$ 3.500/mês",
                  desc: "Inativos voltam com campanhas personalizadas.",
                  bg: 'bg-blue-50'
                },
                {
                  title: "Upsell Pós-Compra",
                  percentage: "15%",
                  value: "R$ 600 - R$ 2.500/mês",
                  desc: "Ofertas complementares aumentam ticket médio.",
                  bg: 'bg-blue-50'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                    <span className="px-3 py-1 rounded-full text-sm font-bold text-white" style={{background: '#2472b3'}}>
                      {item.percentage}
                    </span>
                  </div>
                  <p className="text-3xl font-black mb-2" style={{color: '#2472b3'}}>{item.value}</p>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg border-2" style={{borderColor: '#2472b3'}}>
              <p className="text-lg text-gray-700 mb-2">Potencial total de recuperação mensal:</p>
              <p className="text-5xl md:text-6xl font-black mb-2" style={{color: '#2472b3'}}>R$ 5.600 - R$ 22.000</p>
              <p className="text-gray-600 text-lg">Com vendas que você JÁ CONQUISTOU mas perdeu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Resultados Reais. Clientes Reais.
          </h2>
          <p className="text-center text-xl opacity-90 mb-12">
            Veja o que nossos clientes estão alcançando
          </p>

          <div className="space-y-8">
            {[
              {
                name: "Rafael Costa",
                business: "Dropshipping de Eletrônicos",
                period: "90 dias usando Único Drop",
                image: "RC",
                before: "Faturava R$ 45k/mês",
                after: "Passou a faturar R$ 68k/mês",
                increase: "+R$ 23.000/mês",
                highlight: "Recuperou R$ 18.400 só de carrinhos abandonados",
                quote: "Nos primeiros 30 dias já tinha pago 6 meses da ferramenta. Hoje não consigo imaginar trabalhar sem. O sistema literalmente se paga sozinho.",
                rating: 5
              },
              {
                name: "Camila Mendes",
                business: "E-commerce de Moda Feminina",
                period: "120 dias usando Único Drop",
                image: "CM",
                before: "Gastava 5h/dia em atendimento",
                after: "Gasta 45min/dia em atendimento",
                increase: "+67% tempo livre",
                highlight: "Margem de lucro aumentou 12% identificando produtos ruins",
                quote: "A automação não só recuperou vendas, me devolveu minha vida. Agora eu trabalho NO negócio, não só DENTRO dele.",
                rating: 5
              },
              {
                name: "Lucas Barros",
                business: "Infoprodutos (Curso Online)",
                period: "60 dias usando Único Drop",
                image: "LB",
                before: "ROI de 2.1x em tráfego pago",
                after: "ROI de 4.3x em tráfego pago",
                increase: "+105% no ROI",
                highlight: "R$ 31.200 recuperados em pedidos recusados",
                quote: "Mesmo investimento em anúncios, mas agora converto mais que o dobro. O follow-up automático não deixa ninguém escapar.",
                rating: 5
              }
            ].map((story, idx) => (
              <div key={idx} className="rounded-2xl p-8 border-2" style={{background: 'linear-gradient(135deg, rgba(36, 114, 179, 0.1) 0%, rgba(27, 20, 100, 0.1) 100%)', borderColor: '#2472b3'}}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black" style={{background: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)'}}>
                        {story.image}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{story.name}</h3>
                        <p className="opacity-90">{story.business}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{color: '#26abe2'}} />
                        <p><span className="text-gray-400">Antes:</span> {story.before}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{color: '#26abe2'}} />
                        <p><span className="text-gray-400">Depois:</span> {story.after}</p>
                      </div>
                    </div>

                    <div className="bg-green-600 p-4 rounded-lg">
                      <p className="text-2xl font-black mb-1">{story.increase}</p>
                      <p className="text-sm opacity-90">{story.period}</p>
                    </div>
                  </div>

                  <div>
                    <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl mb-4 border border-white border-opacity-20">
                      <p className="font-bold mb-2" style={{color: '#26abe2'}}>✨ Destaque:</p>
                      <p className="text-lg">{story.highlight}</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-5 backdrop-blur p-6 rounded-xl italic border-l-4" style={{borderColor: '#26abe2'}}>
                      <p className="text-lg leading-relaxed">"{story.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white px-10 py-5 rounded-lg font-bold text-xl hover:shadow-2xl transition" style={{color: '#2472b3'}}>
              Quero Resultados Como Esses
              <ArrowRight className="w-6 h-6 inline ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como o Único Drop Gera Esses Resultados
            </h2>
            <p className="text-xl text-gray-600">
              Sistema completo trabalhando 24/7 para você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                number: "1",
                title: "Detecta Oportunidades",
                desc: "Identifica carrinhos abandonados, pedidos recusados e clientes inativos em tempo real",
                icon: <Target className="w-8 h-8" />
              },
              {
                number: "2",
                title: "Recupera Automaticamente",
                desc: "Envia sequências otimizadas via WhatsApp, Email e SMS no momento perfeito",
                icon: <Zap className="w-8 h-8" />
              },
              {
                number: "3",
                title: "Mostra Resultados",
                desc: "Dashboard atualizado em tempo real com lucro, conversões e métricas",
                icon: <BarChart3 className="w-8 h-8" />
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:shadow-lg transition">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl font-black mb-6" style={{background: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)'}}>
                  {step.number}
                </div>
                <div className="mb-4 text-gray-700">{step.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-10 rounded-2xl border-2" style={{borderColor: '#2472b3'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">O Que Você Recebe</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Recuperação automática de carrinhos abandonados",
                "Recuperação de pedidos recusados com métodos alternativos",
                "Reativação de clientes inativos",
                "Notificações inteligentes por WhatsApp",
                "Campanhas automatizadas por Email",
                "Mensagens SMS em momentos-chave",
                "Dashboard com lucro real em tempo real",
                "Rastreamento automático de pedidos",
                "Atendimento automatizado 24/7",
                "Análise de margem por produto",
                "ROI de campanhas de marketing",
                "Implementação guiada pela equipe"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{color: '#2472b3'}} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-16 px-6 text-white" style={{background: 'linear-gradient(135deg, #1b1464 0%, #2472b3 100%)'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Invista Menos do Que Gasta em Café
          </h2>
          <p className="text-xl text-center mb-12 opacity-90">
            Sistema completo que se paga no primeiro mês
          </p>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-10 rounded-2xl mb-8">
            <div className="text-center mb-8">
              <p className="text-xl mb-4 opacity-90">Se contratasse tudo separado:</p>
              <p className="text-5xl font-black line-through opacity-60 mb-4">R$ 1.700/mês</p>
              <p className="text-2xl mb-6">Com o Único Drop você paga:</p>
              <div className="inline-block bg-white bg-opacity-20 backdrop-blur px-12 py-8 rounded-2xl border-2 border-white border-opacity-40">
                <p className="text-7xl font-black mb-2">R$ 119</p>
                <p className="text-2xl opacity-90">por mês</p>
              </div>
              <p className="text-lg mt-6 opacity-90">
                + Implementação Guiada + Suporte Especializado Inclusos
              </p>
            </div>

            <div className="bg-green-600 p-6 rounded-xl mb-8">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 flex-shrink-0" />
                <div>
                  <p className="font-bold text-xl mb-2">🛡️ Garantia de Resultado ou Dinheiro de Volta</p>
                  <p className="text-lg">Use por 30 dias. Se não recuperar pelo menos R$ 119 em vendas, devolvemos 100% sem perguntas. Todo o risco é nosso.</p>
                </div>
              </div>
            </div>

            <p className="text-sm opacity-75">
                ✓ Sem contrato de fidelidade • ✓ Cancele quando quiser • ✓ Ativação imediata
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <p className="text-2xl font-bold">4.9/5</p>
              </div>
              <p className="opacity-90">Avaliação média</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-2xl font-bold">2800+</p>
              </div>
              <p className="opacity-90">Lojas</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6" />
                <p className="text-2xl font-bold">R$ 2.3M+</p>
              </div>
              <p className="opacity-90">Recuperados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não Deixe Seus Concorrentes Te Ultrapassarem
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Enquanto você decide, eles estão recuperando vendas no automático. Comece hoje e veja resultados em 24h.
          </p>
          <button className="bg-white px-12 py-6 rounded-xl font-bold text-2xl hover:shadow-2xl transition mb-6" style={{color: '#2472b3'}}>
            Começar Minha Automação Agora
            <ArrowRight className="w-7 h-7 inline ml-2" />
          </button>
          <div className="pt-8 border-t border-gray-700">
            <p className="text-lg mb-4">Prefere falar com alguém? Estamos aqui:</p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition">
              <PhoneCall className="w-5 h-5 inline mr-2" />
              Falar no WhatsApp com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
