type ReservationFormProps = {
  date: string;
  time: string;
  guests: number;
  zone: string;
  tableName: string;
  onConfirm: (data: { name: string; phone: string }) => void;
};

import { useState } from "react";

export function ReservationForm({
  date,
  time,
  guests,
  zone,
  tableName,
  onConfirm,
}: ReservationFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const isValid = name.trim() !== "" && phone.trim() !== "";

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-center">Confirmar reserva</h2>

      {/* Resumen */}
      <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-1">
        <p>
          <strong>Fecha:</strong> {date}
        </p>
        <p>
          <strong>Hora:</strong> {time}
        </p>
        <p>
          <strong>Personas:</strong> {guests}
        </p>
        <p>
          <strong>Zona:</strong> {zone}
        </p>
        <p>
          <strong>Mesa:</strong> {tableName}
        </p>
      </div>

      {/* Formulario */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Teléfono</label>
          <input
            type="tel"
            className="w-full border rounded-lg p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ej: 11 2345 6789"
          />
        </div>

        <button
          disabled={!isValid}
          onClick={() => onConfirm({ name, phone })}
          className={`w-full py-3 rounded-lg font-medium transition
            ${
              isValid
                ? "bg-black text-white hover:opacity-90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Confirmar reserva
        </button>
      </div>
    </div>
  );
}
