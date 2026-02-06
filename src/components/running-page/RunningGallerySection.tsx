type RunningGallerySectionProps = {
  images: string[];
};

const RunningGallerySection = ({ images }: RunningGallerySectionProps) => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
          Viví la experiencia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={src}
                alt="Carrera running"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
        {/* https://www.ubice.com.ar/evento/352 */}
        <div className="text-center mt-8">
          <a
            href="https://www.ubice.com.ar/evento/352"
            className="inline-block border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition"
          >
            VER FOTOS 2025
          </a>
        </div>
      </div>
    </section>
  );
};

export default RunningGallerySection;
