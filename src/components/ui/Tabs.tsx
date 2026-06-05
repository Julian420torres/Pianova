interface TabsProps {
  instrument: "piano" | "guitar";
  onChange: (instrument: "piano" | "guitar") => void;
}

export default function Tabs({ instrument, onChange }: TabsProps) {
  return (
    <div className="flex justify-center gap-3">
      <button
        onClick={() => onChange("piano")}
        className={`
          rounded-xl
          px-5
          py-2
          font-semibold
          transition
          ${
            instrument === "piano"
              ? "bg-cyan-500"
              : "border border-white/10 hover:bg-white/5"
          }
        `}
      >
        Piano
      </button>

      <button
        onClick={() => onChange("guitar")}
        className={`
          rounded-xl
          px-5
          py-2
          font-semibold
          transition
          ${
            instrument === "guitar"
              ? "bg-cyan-500"
              : "border border-white/10 hover:bg-white/5"
          }
        `}
      >
        Guitarra
      </button>
    </div>
  );
}
