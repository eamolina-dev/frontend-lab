import { TableSpot } from "./TableSpot";

const tables = [
  { id: 1, seats: 2, status: "available", x: 10, y: 20 },
  { id: 2, seats: 4, status: "reserved", x: 120, y: 20 },
  { id: 3, seats: 4, status: "available", x: 10, y: 120 },
  { id: 4, seats: 6, status: "available", x: 120, y: 120 },
];

export const DiningLayout = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-light text-center mb-8">Elegí tu mesa</h2>

      <div className="relative mx-auto bg-neutral-100 rounded-2xl border max-w-xl h-[350px]">
        {tables.map((table) => (
          <div
            key={table.id}
            className="absolute"
            style={{ left: table.x, top: table.y }}
          >
            <TableSpot
              seats={table.seats}
              status={table.status}
              onClick={() => alert(`Mesa ${table.id} seleccionada`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
