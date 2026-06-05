interface InversionTabsProps {
  selected: number;
  onSelect: (index: number) => void;
  total: number;
}

export default function InversionTabs({
  selected,
  onSelect,
  total,
}: InversionTabsProps) {
  const labels = [
    "Fundamental",
    "1ra inversión",
    "2da inversión",
    "3ra inversión",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`
            rounded-xl px-4 py-2 transition
            ${
              selected === index
                ? "bg-cyan-500 text-white"
                : "bg-zinc-800 hover:bg-zinc-700"
            }
          `}
        >
          {labels[index]}
        </button>
      ))}
    </div>
  );
}
