import * as React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type Slide = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  statLeft?: { value: string; label: string; color?: string };
  statRight?: { value: string; label: string; color?: string };
};

const PRIMARY = "#25A6D9";
const BRAND_DARK = "#1A1773";

const SLIDES: Slide[] = [
  {
    title: "Recuperação de Carrinho\nem Automático",
    description:
      "Ative a recuperação por WhatsApp, E-mail e SMS com mensagens prontas. Sua loja começa a reverter abandono sem precisar mexer em código.",
    imageSrc: "/dashboard.png",
    imageAlt: "Recuperação de carrinho Unicodrop",
    statLeft: { value: "+28.000", label: "Lojas Ativas", color: "#95BF47" },
    statRight: { value: "↑ 340%", label: "ROI Médio", color: PRIMARY },
  },
  {
    title: "WhatsApp Inteligente\npara Conversão",
    description:
      "Automatize mensagens personalizadas e recupere boletos, PIX e carrinhos no canal que mais converte no Brasil.",
    imageSrc: "/whatsapp.png",
    imageAlt: "WhatsApp Unicodrop",
    statLeft: { value: "99+", label: "Conversas", color: PRIMARY },
    statRight: { value: "24/7", label: "Automação", color: "#95BF47" },
  },
  {
    title: "Rastreio de Pedidos\nsem Esforço",
    description:
      "Atualize status de envio automaticamente e reduza tickets de suporte com notificações de entrega para o cliente.",
    imageSrc: "/rastreio.png",
    imageAlt: "Rastreio Unicodrop",
    statLeft: { value: "-35%", label: "Tickets", color: "#95BF47" },
    statRight: { value: "+Confiança", label: "Reputação", color: PRIMARY },
  },
  {
    title: "Funis e Segmentação\npor Comportamento",
    description:
      "Crie campanhas por etapa do cliente e comportamento de compra. Mais conversão sem aumentar tráfego.",
    imageSrc: "/funil.jpg",
    imageAlt: "Funis Unicodrop",
    statLeft: { value: "7", label: "Etapas", color: PRIMARY },
    statRight: { value: "Auto", label: "Segmentação", color: "#95BF47" },
  },
  {
    title: "Dashboard Financeira\nem Tempo Real",
    description:
      "Acompanhe receita líquida, lucro real, custos de produtos, marketing e muito mais em um único painel. Visualize seus números financeiros com transparência total e tome decisões baseadas em dados reais.",
    imageSrc: "/dashboard.png",
    imageAlt: "Dashboard Financeira Unicodrop",
    statLeft: { value: "+28.000", label: "Lojas Ativas", color: "#95BF47" },
    statRight: { value: "↑ 340%", label: "ROI Médio", color: PRIMARY },
  },
  {
    title: "Relatórios e Alertas\nAutomáticos",
    description:
      "Veja produtos com margem negativa e identifique vazamentos de lucro sem planilhas e sem trabalho manual.",
    imageSrc: "/dashboard.png",
    imageAlt: "Relatórios Unicodrop",
    statLeft: { value: "Alertas", label: "Automáticos", color: PRIMARY },
    statRight: { value: "Clareza", label: "Financeira", color: "#95BF47" },
  },
  {
    title: "Ativação em Minutos\ncom Setup Essencial",
    description:
      "Conecte loja e checkout, publique a automação essencial e comece a recuperar hoje mesmo.",
    imageSrc: "/Onboard.png",
    imageAlt: "Onboarding Unicodrop",
    statLeft: { value: "10 min", label: "Setup", color: PRIMARY },
    statRight: { value: "Zero", label: "Código", color: "#95BF47" },
  },
];

export function HowItWorksCarousel() {
  const total = SLIDES.length;
  const [index, setIndex] = React.useState<number>(4);
  const slide = SLIDES[index];

  const prevSlide = React.useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const nextSlide = React.useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToSlide = React.useCallback((i: number) => setIndex(i), []);

  return (
    <div className="py-6 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-16 md:mt-20 text-gray-900">
          Como sua loja começa a recuperar dinheiro em 10 minutos
        </h2>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gray-50 flex items-center justify-center relative" id="slide-container">
            <div className="w-full h-full bg-white flex flex-col justify-center">
              <div className="max-w-6xl mx-auto w-full px-6 py-8">
                <div className="text-center mb-10">
                  <h1
                    className="text-5xl font-bold mb-6 whitespace-pre-line"
                    style={{ color: BRAND_DARK }}
                  >
                    {slide.title}
                  </h1>

                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                </div>

                <div className="relative animate-fade-in-up">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <img src={slide.imageSrc} alt={slide.imageAlt} className="w-full h-auto" />
                  </div>

                  {slide.statLeft && (
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                      <p
                        className="text-2xl font-bold"
                        style={{ color: slide.statLeft.color ?? "#95BF47" }}
                      >
                        {slide.statLeft.value}
                      </p>
                      <p className="text-sm text-gray-600">{slide.statLeft.label}</p>
                    </div>
                  )}

                  {slide.statRight && (
                    <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                      <p
                        className="text-2xl font-bold"
                        style={{ color: slide.statRight.color ?? PRIMARY }}
                      >
                        {slide.statRight.value}
                      </p>
                      <p className="text-sm text-gray-600">{slide.statRight.label}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-lg mt-6">
          <button
            type="button"
            onClick={prevSlide}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>

          <div className="flex items-center gap-4">
            <span className="text-lg font-bold" style={{ color: PRIMARY }}>
              Passo <span id="current-step">{index + 1}</span> de {total}
            </span>

            <div className="flex gap-2">
              {SLIDES.map((_, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para o slide ${i + 1}`}
                    onClick={() => goToSlide(i)}
                    className="slide-indicator h-3 rounded-full transition-all"
                    style={{
                      backgroundColor: isActive ? PRIMARY : "rgb(229, 231, 235)",
                      width: isActive ? "2rem" : "0.75rem",
                    }}
                  />
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition next-button"
            style={{ backgroundColor: PRIMARY }}
          >
            Próximo
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-10 text-center">
          <a href="https://www.unicodrop.com.br/app/?t=cadastrar" className="inline-block">
            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition"
              style={{ backgroundColor: PRIMARY }}
            >
              Teste grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
