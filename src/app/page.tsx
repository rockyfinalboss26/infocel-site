export default function InfocelSite() {

  const whatsapp = "5514996509949";
  const instagram = "https://www.instagram.com/infocelcelulares";

  const main products = [
    {
      id: 1,
      name: "Carregadores e Cabos",
      price: "Consulte",
      image: "https://cdn.awsli.com.br/600x450/2628/2628073/produto/238772402/be70a878b64a9ba5ced2dad72700ec63-7htcv4fjxf.jpg"
    },
    {
      id: 2,
      name: "Fones Sem Fio",
      price: "Consulte",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_835231-MLU77159416458_072024-F.webp"
    },
    {
      id: 3,
      name: "Mouse e Teclado",
      price: "Consulte",
      image: "https://m.media-amazon.com/images/I/613oddY7z4L._AC_SX522_.jpg"
    },
    {
      id: 4,
      name: "Películas",
      price: "Consulte",
      image: "https://images.tcdn.com.br/img/img_prod/968316/pelicula_de_vidro_temperado_3d_preta_para_apple_1183_1_f7f469a5577afc83221b0b2824db49d9.jpg"
    }
  ];

  const services = [
    {
      name: "Avaliação para orçamento",
      highlight: true
    },
    {
      name: "Montagem de computadores"
    },
    {
      name: "Troca de tela"
    },
    {
      name: "Troca de bateria"
    },
    {
      name: "Formatação"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black text-red-600">
            INFO<span className="text-blue-700">CEL</span>
          </h1>

          <nav className="hidden md:flex gap-6 font-semibold">
            <a href="#inicio">Início</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href={`https://wa.me/${whatsapp}`}
            className="bg-green-500 text-white px-5 py-2 rounded-full font-bold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="bg-gradient-to-r from-red-600 to-blue-700 text-white py-20 text-center">
        <h2 className="text-4xl font-black">Tecnologia e assistência com confiança</h2>
        <p className="mt-4">Celulares, acessórios e manutenção em um só lugar</p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="#catalogo" className="bg-white text-red-600 px-6 py-3 rounded-full font-bold">
            Ver Catálogo
          </a>
          <a href={`https://wa.me/${whatsapp}`} className="border px-6 py-3 rounded-full font-bold">
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-black mb-10 text-center">Produtos</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow">
                <img src={p.image} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-4">
                  <h4 className="font-bold">{p.name}</h4>
                  <p className="text-red-600 font-bold mt-2">{p.price}</p>

                  <a
                    href={`https://wa.me/${whatsapp}?text=Tenho interesse em ${p.name}`}
                    className="block mt-4 bg-red-600 text-white text-center py-2 rounded-full"
                  >
                    Pedir no WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-black text-center mb-10">Assistência Técnica</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="border rounded-2xl p-6">
                <h4 className="font-bold text-lg">{s.name}</h4>

                <a
                  href={`https://wa.me/${whatsapp}?text=Quero saber sobre: ${s.name}`}
                  className={`mt-4 block text-center py-2 rounded-full font-bold ${
                    s.highlight
                      ? "bg-red-600 text-white"
                      : "bg-blue-700 text-white"
                  }`}
                >
                  {s.highlight ? "Contate agora" : "Solicitar"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-3xl font-black">Contato</h3>

            <p className="mt-4">
              Rua Euclides da Cunha, 537<br />
              Centro - Santa Cruz do Rio Pardo - SP
            </p>

            <p className="mt-4">
              <strong>Horário:</strong><br />
              Seg a Sex: 09:00 - 18:00<br />
              Sáb: 09:00 - 15:00
            </p>

            <div className="mt-6 flex gap-4">
              <a href={`https://wa.me/${whatsapp}`} className="bg-green-500 text-white px-5 py-3 rounded-full">
                WhatsApp
              </a>

              <a href={instagram} className="bg-gradient-to-r from-red-600 to-blue-700 text-white px-5 py-3 rounded-full">
                Instagram
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Loja+de+vendas+e+assist%C3%AAncia+t%C3%A9cnica+em+Inform%C3%A1tica,+Games+e+Celulares+(Infocel+Inform%C3%A1tica)&output=embed"
              width="100%"
              height="300"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center border-t">
        <p>© 2026 INFOCEL - Todos os direitos reservados</p>
      </footer>

    </div>
  );
}