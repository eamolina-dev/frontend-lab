type CourseSectionProps = {
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
};

const CourseSection = ({ description, stats }: CourseSectionProps) => {
  return (
    <section id="recorrido" className="w-full bg-neutral-100 py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Texto descriptivo */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            El recorrido
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            {description}
          </p>

          {/* Stats técnicas */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  {stat.label}
                </p>
                <p className="text-xl font-semibold mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen / mapa ilustrativo */}
        <div className="w-full h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden shadow-md">
          <img
            src="/assets/running-page/altimetria_6k.jpeg"
            alt="Recorrido de la carrera"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
