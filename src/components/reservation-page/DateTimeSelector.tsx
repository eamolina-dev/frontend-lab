import { useState } from "react";

type DateTimeSelectorProps = {
  onSelect: (date: string, time: string) => void;
};

const timeSlots = ["19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

export function DateTimeSelector({ onSelect }: DateTimeSelectorProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeClick = (time: string) => {
    if (!selectedDate) return; // no dejamos elegir hora sin fecha
    setSelectedTime(time);
    onSelect(selectedDate, time);
  };

  return (
    <section className="max-w-xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center">Reservar mesa</h2>

      {/* Fecha */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Seleccionar fecha</label>
        <input
          type="date"
          className="w-full border rounded-lg p-2"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setSelectedTime(""); // resetea horario si cambia fecha
          }}
        />
      </div>

      {/* Horarios */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Horarios disponibles</p>

        {!selectedDate && (
          <p className="text-sm text-gray-500">
            Primero elegí una fecha para ver los horarios
          </p>
        )}

        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((time) => {
            const isSelected = selectedTime === time;

            return (
              <button
                key={time}
                disabled={!selectedDate}
                onClick={() => handleTimeClick(time)}
                className={`p-2 rounded-lg border transition
                  ${
                    isSelected
                      ? "bg-black text-white border-black"
                      : "bg-white hover:bg-gray-100"
                  }
                  ${!selectedDate ? "opacity-40 cursor-not-allowed" : ""}
                `}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
