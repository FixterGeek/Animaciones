import { FlipWords } from "~/components/FlipWords";

export default function Route() {
  return (
    <article className="h-screen bg-black flex flex-col items-center justify-center">
      <p className="text-5xl px-12 text-center font-bold font-sans whitespace-nowrap text-white">
        Administra la agenda de tu{" "}
        <span className="text-brand_blue font-extrabold text-5xl text-[#85DDCB]">
          <FlipWords
            words={[
              "negocio",
              "proyecto",
              "empresa",
              "changarro",
              "iglesia",
              "consultoría",
            ]}
          />
        </span>{" "}
        <br /> en un solo lugar
      </p>
    </article>
  );
}
