type MenuSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const MenuSection = ({ title, children }: MenuSectionProps) => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide">
        {title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
};
