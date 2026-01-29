type RaceDescriptionSectionProps = {
  title: string;
  paragraphs: string[];
};

const RaceDescriptionSection = ({
  title,
  paragraphs,
}: RaceDescriptionSectionProps) => {
  return (
    <section id="info" className="w-full bg-neutral-100 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-center">
          {title}
        </h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceDescriptionSection;
