import { BackgroundHighlight } from "~/components/BackgroundHighlight";

export default function Route() {
  // Unidad 04
  return (
    <main className="bg-black h-screen flex items-center justify-center text-3xl px-12 text-center">
      <div className="font-sans font-bold text-white">
        Emplea componentes interactivos en tu sitio web. <br />
        <BackgroundHighlight className="from-yellow-500 to-orange-500">
          Haz que destaque.
        </BackgroundHighlight>
      </div>
    </main>
  );
}
