import { JackPotSection } from "~/components/JackPotSection";

export default function Route() {
  return (
    <article>
      <div className="h-[40vh] bg-gray-600 rounded-xl" />
      <JackPotSection
        images={[
          "/react.svg",
          "/js.svg",
          "/react.svg",
          "/js.svg",
          "/react.svg",
          "/js.svg",
          "/react.svg",
          "/js.svg",
        ]}
        mode="fast"
      />
      <div className="h-[40vh] bg-gray-600 rounded-xl" />
    </article>
  );
}
