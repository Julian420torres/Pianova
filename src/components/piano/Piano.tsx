import PianoKey from "./pianoKey";

export default function Piano() {
  return (
    <section className="mt-16">
      <h2 className="text-center text-3xl font-bold mb-8">Piano interactivo</h2>

      <div className="flex justify-center">
        <div className="relative">
          <div className="flex">
            <PianoKey note="C" />
            <PianoKey note="D" />
            <PianoKey note="E" />
            <PianoKey note="F" />
            <PianoKey note="G" />
            <PianoKey note="A" />
            <PianoKey note="B" />
          </div>

          <div className="absolute top-0 left-[48px]">
            <PianoKey note="C#" isBlack />
          </div>

          <div className="absolute top-0 left-[112px]">
            <PianoKey note="D#" isBlack />
          </div>

          <div className="absolute top-0 left-[240px]">
            <PianoKey note="F#" isBlack />
          </div>

          <div className="absolute top-0 left-[304px]">
            <PianoKey note="G#" isBlack />
          </div>

          <div className="absolute top-0 left-[368px]">
            <PianoKey note="A#" isBlack />
          </div>
        </div>
      </div>
    </section>
  );
}
