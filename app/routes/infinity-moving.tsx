import type { ReactNode } from "react";
import { InfinityMovingChips } from "~/components/InfinityMovingChips";

export default function InfinityMoving() {
  return (
    <article className="text-white flex flex-col items-center justify-center gap-4">
      <div className="h-[50vh]" />
      <h1 className="text-4xl">Movimiento infinito</h1>
      <InfinityMovingChips direction={-1}>
        <Word>palabras</Word>
        <Word>words</Word>
        <Word>independientes</Word>
        <Word>small</Word>
        <Word>pequeñas</Word>
        <Word>medianas</Word>
        <Word>grandes</Word>
      </InfinityMovingChips>
      <InfinityMovingChips direction={1}>
        <Word>palabras</Word>
        <Word>words</Word>
        <Word>independientes</Word>
        <Word>small</Word>
        <Word>pequeñas</Word>
        <Word>medianas</Word>
        <Word>grandes</Word>
      </InfinityMovingChips>
      <div className="h-[50vh]" />
    </article>
  );
}

const Word = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-2xl rounded-full py-2 bg-gray-800 px-6 mx-4">
      {children}
    </span>
  );
};
