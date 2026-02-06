type TableSpotProps = {
  seats: number;
  status: "available" | "reserved";
  onClick?: () => void;
};

export const TableSpot = ({ seats, status, onClick }: TableSpotProps) => {
  const isAvailable = status === "available";

  return (
    <button
      onClick={onClick}
      className={`
        w-16 h-16 rounded-xl flex items-center justify-center text-xs font-medium
        transition border
        ${
          isAvailable
            ? "bg-green-100 border-green-400 text-green-800 hover:scale-105"
            : "bg-red-100 border-red-400 text-red-700 cursor-not-allowed"
        }
      `}
      disabled={!isAvailable}
    >
      {seats}p
    </button>
  );
};
