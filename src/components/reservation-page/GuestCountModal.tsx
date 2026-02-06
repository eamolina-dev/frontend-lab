import { useState } from "react";

type GuestCountModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (guests: number) => void;
};

export function GuestCountModal({
  isOpen,
  onClose,
  onConfirm,
}: GuestCountModalProps) {
  const [guests, setGuests] = useState(2);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm space-y-5 shadow-xl">
        <h3 className="text-xl font-semibold text-center">
          ¿Para cuántas personas?
        </h3>

        {/* Selector */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            className="w-10 h-10 rounded-full border text-lg"
          >
            −
          </button>

          <span className="text-2xl font-semibold w-10 text-center">
            {guests}
          </span>

          <button
            onClick={() => setGuests((g) => Math.min(12, g + 1))}
            className="w-10 h-10 rounded-full border text-lg"
          >
            +
          </button>
        </div>

        <p className="text-xs text-center text-gray-500">
          Podrás ajustar esto luego si es necesario
        </p>

        {/* Acciones */}
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 border rounded-lg py-2">
            Cancelar
          </button>

          <button
            onClick={() => onConfirm(guests)}
            className="flex-1 bg-black text-white rounded-lg py-2"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
