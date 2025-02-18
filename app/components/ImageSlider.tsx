import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import { cn } from "~/lib/utils";

type Item = {
  src: string;
  href: string;
  name: string;
  text: string;
  role: string;
};

export const ImageSlider = ({ items }: { items: Item[] }) => {
  const [pics, setPics] = useState(items);
  const saved = useRef(null);
  const active = pics[pics.length - 3];

  const goToRight = () => {
    const cloned = [...pics];
    saved.current && cloned.unshift(saved.current);
    saved.current = cloned.pop();
    setPics(cloned);
  };
  const goToLeft = () => {
    const cloned = [...pics];
    saved.current && cloned.push(saved.current);
    saved.current = cloned.shift();
    setPics(cloned);
  };
  useEffect(() => {
    goToRight();
  }, []);

  return (
    <article className="flex flex-col justify-center items-center h-screen overflow-hidden max-w-4xl mx-auto">
      <section className="flex gap-2 justify-end items-center -translate-x-20">
        {pics.map((item) => (
          <motion.img
            whileHover={{ scaleY: 1.02, transformOrigin: "bottom" }}
            layout
            className={cn("min-w-40 object-cover h-60 rounded-2xl", {
              "min-w-[300px] h-[500px]": active.name === item.name,
            })}
            key={item.name}
            src={item.src}
            alt={item.name}
          />
        ))}
      </section>
      <section className="flex gap-4 mt-4">
        <button
          onClick={goToLeft}
          className="p-6 border border-indigo-500 text-indigo-500 rounded-full hover:scale-105 active:scale-100 transition-all"
        >
          <FaLeftLong />
        </button>
        <button
          onClick={goToRight}
          className="p-6 border border-indigo-500 text-indigo-500 rounded-full hover:scale-105 active:scale-100 transition-all"
        >
          <FaRightLong />
        </button>
      </section>
      <motion.section
        key={active.name}
        initial={{ y: 10, opacity: 0, filter: "blur(9px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      >
        <h2 className="text-center text-4xl font-bold tracking-tight pt-4">
          {active.name}
        </h2>
        <p className="text-center italic text-2xl">{active.role}</p>
        <p className="px-8 text-lg text-gray-700">{active.text}</p>
      </motion.section>
    </article>
  );
};
