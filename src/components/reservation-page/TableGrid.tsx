// import type { Table } from "./types";

export type Table = {
  id: string;
  name: string;
  seats: number;
  zoneId: string;
  available: boolean;
};

type TableGridProps = {
  tables: Table[];
  zoneId: string;
  guests: number;
  onSelect: (tableId: string) => void;
};

export function TableGrid({
  tables,
  zoneId,
  guests,
  onSelect,
}: TableGridProps) {
  const filteredTables = tables.filter(
    (t) => t.zoneId === zoneId && t.seats >= guests && t.available
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Elegí tu mesa</h2>

      {filteredTables.length === 0 && (
        <p className="text-center text-gray-500">
          No hay mesas disponibles para esa cantidad de personas en esta zona.
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredTables.map((table) => (
          <button
            key={table.id}
            onClick={() => onSelect(table.id)}
            className="aspect-square rounded-xl border flex flex-col items-center justify-center hover:bg-gray-100 transition"
          >
            <span className="font-semibold">{table.name}</span>
            <span className="text-sm text-gray-500">
              {table.seats} personas
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
