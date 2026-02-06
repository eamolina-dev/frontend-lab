type EventInfoSectionProps = {
  title: string;
  date: string;
  location: string;
  distances: string[];
};

const EventInfoSection = ({
  title,
  date,
  location,
  distances,
}: EventInfoSectionProps) => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          {title}
        </h2>

        {/* Info secundaria */}
        <p className="text-gray-600 text-lg mb-2">📍 {location}</p>
        <p className="text-gray-600 text-lg mb-16">📅 {date}</p>

        {/* Distancias destacadas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {distances.map((d) => (
            <div
              key={d}
              className="border border-gray-200 rounded-2xl py-12 px-6 hover:shadow-lg transition"
            >
              <p className="text-5xl font-bold tracking-tight">{d}</p>
              <p className="text-gray-500 mt-3 text-sm uppercase tracking-widest">
                Distancia
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
