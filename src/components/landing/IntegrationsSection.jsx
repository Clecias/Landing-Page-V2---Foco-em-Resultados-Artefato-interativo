const integrations = [
  { name: 'Shopify', logo: '/public/shopify.svg' },
  { name: 'UnicoPag', logo: '/public/unicopag3.svg' },
  { name: 'Yampi', logo: '/public/yampi.svg' },
  { name: 'Cartpanda', logo: '/public/cartpanda.svg' },
  { name: 'WooCommerce', logo: '/public/woocommerce.svg' },
  { name: 'Nuvemshop', logo: '/public/nuvemshop.svg' },
  { name: 'LPQV', logo: '/public/lpqv.svg' },
  { name: 'Appmax', logo: '/public/appmax.svg' },
  { name: 'Mercado Pago', logo: '/public/mercadopago.svg' },
  { name: 'PagSeguro', logo: '/public/pagseguro.svg' },
  { name: 'Pagar.me', logo: '/public/pagarme.svg' },
  { name: 'Yever', logo: '/public/yever.svg' },
  { name: 'Kiwify', logo: '/public/kiwify.svg' },
  { name: 'Hotmart', logo: '/public/hotmart.svg' },
  { name: 'Kirvano', logo: '/public/kirvano.svg' },
  { name: 'Braip', logo: '/public/braip.svg' },
  { name: 'Pepper', logo: '/public/pepper.svg' },
  { name: 'Ticto', logo: '/public/ticto.svg' },
  { name: 'Eduzz', logo: '/public/eduzz.svg' },
  { name: 'Monetizze', logo: '/public/monetizze.svg' },
  { name: 'Lastlink', logo: '/public/lastlink.svg' },
  { name: 'Loja Integrada', logo: '/public/lojaintegrada.svg' },
  { name: 'WhatsApp', logo: '/public/whatsapp.svg' },
  { name: 'Facebook', logo: '/public/facebook.svg' },
  { name: 'Google', logo: '/public/google.svg' },
  { name: 'TikTok', logo: '/public/tiktok.svg' },
  { name: 'Taboola', logo: '/public/taboola.svg' },
  { name: 'Correios', logo: '/public/correios.svg' },
  { name: 'Shopee', logo: '/public/shopee.svg' },
  { name: 'Cainiao', logo: '/public/cainiao.svg' },
];

const featuredIntegrations = [
  { name: 'Loggi', logo: '/public/loggi.svg' },
  { name: 'J&T', logo: '/public/jet.svg' },
  { name: 'Kangu', logo: '/public/kangu.svg' },
];

export default function IntegrationsSection() {
  return (
    <section className="py-16 px-4 bg-[#f8f9fa]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8 pb-2">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Integrações
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto mb-0">
            Todas as integrações necessárias para crescer o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((integration) => (
            <div key={integration.name} className="mt-4 pt-2">
              <div
                className="flex items-center justify-center p-2 rounded shadow-md bg-[#f8f9fa] border border-gray-200"
                style={{ height: '60px' }}
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="max-h-10 w-auto"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 mb-4">
          {featuredIntegrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-center p-2 rounded shadow-md bg-[#f8f9fa] border border-gray-200"
              style={{ height: '60px', minWidth: '120px' }}
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className="max-h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
