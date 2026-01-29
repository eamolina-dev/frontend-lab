const ResultsPreviewTable = () => {
  return (
    <section id="results" className="w-full bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-center">
          Resultados edición anterior
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow">
          <table className="w-full text-left border-collapse">
            <thead className="bg-black text-white text-sm uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Pos</th>
                <th className="px-6 py-4">Corredor</th>
                <th className="px-6 py-4">Distancia</th>
                <th className="px-6 py-4">Tiempo</th>
                <th className="px-6 py-4">Categoría</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {[
                {
                  pos: 1,
                  name: "Martín Gómez",
                  dist: "21K",
                  time: "1:42:33",
                  cat: "General",
                },
                {
                  pos: 2,
                  name: "Lucas Fernández",
                  dist: "21K",
                  time: "1:45:10",
                  cat: "General",
                },
                {
                  pos: 3,
                  name: "Santiago Ruiz",
                  dist: "12K",
                  time: "58:21",
                  cat: "General",
                },
                {
                  pos: 4,
                  name: "Nicolás Pérez",
                  dist: "12K",
                  time: "1:01:44",
                  cat: "30-39",
                },
                {
                  pos: 5,
                  name: "Franco Díaz",
                  dist: "6K",
                  time: "29:15",
                  cat: "General",
                },
              ].map((r) => (
                <tr
                  key={r.pos}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-semibold">{r.pos}</td>
                  <td className="px-6 py-4">{r.name}</td>
                  <td className="px-6 py-4">{r.dist}</td>
                  <td className="px-6 py-4">{r.time}</td>
                  <td className="px-6 py-4">{r.cat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <a
            href="#resultados"
            className="inline-block border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition"
          >
            VER RESULTADOS COMPLETOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsPreviewTable;
