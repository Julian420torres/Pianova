interface ChordInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ChordInput({ value, onChange }: ChordInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="C, Cm, D, Dm..."
      className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-zinc-900
        px-5
        py-4
        text-lg
        outline-none
      "
    />
  );
}
