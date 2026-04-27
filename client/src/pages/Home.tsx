import { useState } from "react";
import { ChevronLeft, ChevronRight, Phone, MessageCircle, ZoomIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados de exemplo dos carros
const CARS_DATA = [
  {
    id: 1,
    name: "Mustang",
    year: "2022",
    model: "Mustang GT",
    chassis: "1ZVBP8CF5L5266186",
    price: "R$ 285.000",
    mainImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/mustang-car-Uqs7Crkf3ut2d4jcB2WD5J.webp",
    gallery: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/mustang-car-Uqs7Crkf3ut2d4jcB2WD5J.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/mustang-car-Uqs7Crkf3ut2d4jcB2WD5J.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/mustang-car-Uqs7Crkf3ut2d4jcB2WD5J.webp",
    ],
    description: "Veículo em perfeito estado, com histórico completo de manutenção.",
  },
  {
    id: 2,
    name: "Bronco Sport",
    year: "2022",
    model: "Bronco Sport",
    chassis: "1ZVBP8CF5L5266187",
    price: "R$ 195.000",
    mainImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/bronco-car-ZcjpV57GbJ893ETXbXizf2.webp",
    gallery: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/bronco-car-ZcjpV57GbJ893ETXbXizf2.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/bronco-car-ZcjpV57GbJ893ETXbXizf2.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/bronco-car-ZcjpV57GbJ893ETXbXizf2.webp",
    ],
    description: "SUV robusto, ideal para quem busca conforto e segurança.",
  },
  {
    id: 3,
    name: "Civic",
    year: "2023",
    model: "Civic Sedan",
    chassis: "1ZVBP8CF5L5266188",
    price: "R$ 165.000",
    mainImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/civic-car-bfSAhcr2giJPkc7mvECxaJ.webp",
    gallery: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/civic-car-bfSAhcr2giJPkc7mvECxaJ.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/civic-car-bfSAhcr2giJPkc7mvECxaJ.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/civic-car-bfSAhcr2giJPkc7mvECxaJ.webp",
    ],
    description: "Sedan moderno com tecnologia de ponta e consumo eficiente.",
  },
];

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real
const PHONE_NUMBER = "(11) 9 9999-9999"; // Substitua pelo número real

interface CarouselState {
  [key: number]: number;
}

interface SelectedImage {
  carId: number;
  imageIndex: number;
}

export default function Home() {
  const [carouselIndices, setCarouselIndices] = useState<CarouselState>(
    CARS_DATA.reduce((acc, car) => ({ ...acc, [car.id]: 0 }), {})
  );
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const handleCarouselNav = (carId: number, direction: "prev" | "next") => {
    setCarouselIndices((prev) => {
      const car = CARS_DATA.find((c) => c.id === carId);
      if (!car) return prev;

      const currentIndex = prev[carId] || 0;
      const galleryLength = car.gallery.length;
      let newIndex = currentIndex;

      if (direction === "next") {
        newIndex = (currentIndex + 1) % galleryLength;
      } else {
        newIndex = (currentIndex - 1 + galleryLength) % galleryLength;
      }

      return { ...prev, [carId]: newIndex };
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-display text-2xl text-primary">Paulinho Carros</div>
          <div className="flex gap-4 items-center">
            <a
              href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition flex items-center gap-2"
            >
              <MessageCircle size={20} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/hero-background-G8Q8upxbEURfQehLfE8VZg.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Bem-vindo à Paulinho Carros</h1>
          <p className="text-xl md:text-2xl mb-8">Veículos de qualidade para pessoas exigentes</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-accent-foreground hover:opacity-90 text-lg px-8 py-6">
              Fale Conosco via WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Veículos Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12 text-primary">Nossos Veículos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS_DATA.map((car) => {
              const currentImageIndex = carouselIndices[car.id] || 0;
              const currentImage = car.gallery[currentImageIndex];

              return (
                <div
                  key={car.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Carrossel de Imagens */}
                  <div className="relative bg-gray-100 aspect-video overflow-hidden group">
                    <img
                      src={currentImage}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Botões de Navegação do Carrossel */}
                    {car.gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => handleCarouselNav(car.id, "prev")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10"
                          aria-label="Imagem anterior"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={() => handleCarouselNav(car.id, "next")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10"
                          aria-label="Próxima imagem"
                        >
                          <ChevronRight size={20} />
                        </button>

                        {/* Indicadores de Imagem */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                          {car.gallery.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() =>
                                setCarouselIndices((prev) => ({
                                  ...prev,
                                  [car.id]: idx,
                                }))
                              }
                              className={`w-2 h-2 rounded-full transition ${
                                idx === currentImageIndex ? "bg-white" : "bg-white/50"
                              }`}
                              aria-label={`Imagem ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Botão de Zoom */}
                    <button
                      onClick={() =>
                        setSelectedImage({
                          carId: car.id,
                          imageIndex: currentImageIndex,
                        })
                      }
                      className="absolute top-2 right-2 bg-accent text-accent-foreground p-2 rounded-full hover:opacity-90 transition z-10"
                      aria-label="Ampliar imagem"
                    >
                      <ZoomIn size={20} />
                    </button>
                  </div>

                  {/* Informações do Carro */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-primary mb-2">{car.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {car.year} {car.model}
                    </p>
                    <p className="text-muted-foreground text-xs mb-4">CHASSIS: {car.chassis}</p>
                    <p className="text-foreground mb-6 text-sm leading-relaxed">{car.description}</p>

                    {/* Preço em Destaque */}
                    <div className="border-t border-border pt-4 mb-4">
                      <p className="text-accent font-display text-3xl font-bold">{car.price}</p>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=Olá! Tenho interesse no ${car.name} ${car.year}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                          Ver Detalhes
                        </Button>
                      </a>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=Olá! Tenho interesse no ${car.name} ${car.year}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full">
                          Contatar
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663030276958/ZpPZPmpD49p5xwnyCGQPBg/contact-section-bg-UxVZ4CK3fnqhCRFZRdrV5R.webp')`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-primary mb-4">Entre em Contato</h2>
          <p className="text-foreground mb-8 text-lg">Estamos aqui para ajudar você a encontrar o carro perfeito</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, "")}`}>
              <Button className="bg-primary text-primary-foreground hover:opacity-90 text-lg px-8 py-6">
                <Phone className="mr-2" />
                Ligar: {PHONE_NUMBER}
              </Button>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent text-accent-foreground hover:opacity-90 text-lg px-8 py-6">
                <MessageCircle className="mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Paulinho Carros. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Vendedor de Veículos para Pessoa Física</p>
        </div>
      </footer>

      {/* Modal de Zoom */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Imagem em Zoom */}
            <img
              src={CARS_DATA.find((c) => c.id === selectedImage.carId)?.gallery[selectedImage.imageIndex]}
              alt="Imagem ampliada"
              className="w-full h-auto rounded-lg"
            />

            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            {/* Navegação de Imagens no Modal */}
            {CARS_DATA.find((c) => c.id === selectedImage.carId)!.gallery.length > 1 && (
              <>
                <button
                  onClick={() => {
                    const car = CARS_DATA.find((c) => c.id === selectedImage.carId)!;
                    const newIndex =
                      (selectedImage.imageIndex - 1 + car.gallery.length) % car.gallery.length;
                    setSelectedImage({ ...selectedImage, imageIndex: newIndex });
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => {
                    const car = CARS_DATA.find((c) => c.id === selectedImage.carId)!;
                    const newIndex = (selectedImage.imageIndex + 1) % car.gallery.length;
                    setSelectedImage({ ...selectedImage, imageIndex: newIndex });
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
