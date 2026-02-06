import { useState } from "react";
import { DateTimeSelector } from "../components/reservation-page/DateTimeSelector";
import { GuestCountModal } from "../components/reservation-page/GuestCountModal";
import {
  ZoneSelector,
  type Zone,
} from "../components/reservation-page/ZoneSelector";
import {
  TableGrid,
  type Table,
} from "../components/reservation-page/TableGrid";
import { ReservationForm } from "../components/reservation-page/ReservationForm";

type Step = "datetime" | "zone" | "tables" | "form" | "success";

const zones: Zone[] = [
  { id: "indoor", name: "Adentro" },
  { id: "outdoor", name: "Afuera" },
];

const mockTables: Table[] = [
  { id: "t1", name: "Mesa 1", seats: 2, zoneId: "indoor", available: true },
  { id: "t2", name: "Mesa 2", seats: 4, zoneId: "indoor", available: true },
  { id: "t3", name: "Mesa 3", seats: 6, zoneId: "indoor", available: false },
  { id: "t4", name: "Mesa 4", seats: 2, zoneId: "outdoor", available: true },
  { id: "t5", name: "Mesa 5", seats: 4, zoneId: "outdoor", available: true },
];

export default function ReservationPage() {
  const [step, setStep] = useState<Step>("datetime");

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState<number | null>(null);
  const [showGuestModal, setShowGuestModal] = useState(false);

  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);

  const handleDateTime = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setShowGuestModal(true);
  };

  const handleGuestsConfirm = (count: number) => {
    setGuests(count);
    setShowGuestModal(false);
    setStep("zone"); // 👉 ACA NAVEGAMOS
  };

  return (
    <div className="p-6 space-y-10">
      {step === "datetime" && <DateTimeSelector onSelect={handleDateTime} />}

      {step === "zone" && (
        <ZoneSelector
          zones={zones}
          onSelect={(zoneId) => {
            setSelectedZone(zoneId);
            setStep("tables");
          }}
        />
      )}

      {step === "tables" && selectedZone && guests && (
        <TableGrid
          tables={mockTables}
          zoneId={selectedZone}
          guests={guests}
          onSelect={(tableId) => {
            const table = mockTables.find((t) => t.id === tableId) || null;
            setSelectedTable(table);
            setStep("form");
          }}
        />
      )}

      {step === "form" &&
        selectedTable &&
        selectedDate &&
        selectedTime &&
        guests &&
        selectedZone && (
          <ReservationForm
            date={selectedDate}
            time={selectedTime}
            guests={guests}
            zone={selectedZone}
            tableName={selectedTable.name}
            onConfirm={(data) => {
              console.log("Reserva confirmada:", {
                ...data,
                date: selectedDate,
                time: selectedTime,
                guests,
                zone: selectedZone,
                table: selectedTable.name,
              });

              setStep("success");
            }}
          />
        )}

      {step === "success" && (
        <div className="text-center space-y-4 py-12">
          <h2 className="text-2xl font-semibold">¡Reserva enviada!</h2>
          <p className="text-gray-600">
            En breve el restaurante confirmará tu mesa por WhatsApp.
          </p>
        </div>
      )}

      <GuestCountModal
        isOpen={showGuestModal}
        onClose={() => setShowGuestModal(false)}
        onConfirm={handleGuestsConfirm}
      />
    </div>
  );
}
