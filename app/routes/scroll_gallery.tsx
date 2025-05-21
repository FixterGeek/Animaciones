import { useScroll } from "framer-motion";
import { useRef } from "react";
import { ScrollGallery } from "~/components/ScrollGallery";
import { AnimatedUnderline } from "~/components/SVGDemo";

export default function Page() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({ target });
  return (
    <article className="h-max bg-slate-800">
      <div className="h-20 rounded-full max-w-2xl" />
      <section className="" />
      {/* <ScrollGallery /> */}
      <section className="h-[500vh]" ref={target}>
        <main className="sticky top-20">
          <h1 className="text-6xl text-center">Hola blissmo</h1>
          <div className="w-80 mx-auto">
            <AnimatedUnderline scrollYProgress={scrollYProgress} />
          </div>
        </main>
      </section>
      <section className="h-[50vh] bg-pink-500" />
    </article>
  );
}
