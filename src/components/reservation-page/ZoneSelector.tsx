import React from "react";

export type Zone = {
  id: string;
  name: string;
  description?: string;
  icon?: string;
};

type ZoneSelectorProps = {
  zones: Zone[];
  onSelect: (zoneId: string) => void;
};

export const ZoneSelector: React.FC<ZoneSelectorProps> = ({
  zones,
  onSelect,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        ¿Dónde querés sentarte?
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => onSelect(zone.id)}
            className="bg-white border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              {zone.icon && <div className="text-3xl">{zone.icon}</div>}

              <div>
                <h3 className="text-lg font-semibold">{zone.name}</h3>
                {zone.description && (
                  <p className="text-sm text-gray-500 mt-1">
                    {zone.description}
                  </p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
