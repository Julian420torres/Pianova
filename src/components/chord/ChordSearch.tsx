import Card from "../ui/Card";
import ChordInput from "./ChordInput";

export default function ChordSearch() {
  return (
    <Card>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Buscar acorde</h2>

        <ChordInput />

        <div className="rounded-xl bg-zinc-900 p-6">
          Aquí aparecerán las notas del acorde
        </div>
      </div>
    </Card>
  );
}
