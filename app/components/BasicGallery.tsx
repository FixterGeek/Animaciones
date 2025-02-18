import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "~/lib/utils";

type Item = {
  name: string;
  text: string;
  src: string;
};

export const BasicGallery = ({
  items,
  className,
}: {
  className?: string;
  items: Item[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const timeout = useRef<ReturnType<typeof setTimeout>>(null);
  // timeout.current && clearTimeout(timeout.current);

  return (
    <section className={cn("py-20 px-12", className)}>
      <div className="max-w-md mx-auto">
        <CommentItem
          item={items[currentIndex]}
          onClick={(index) => setCurrentIndex(index)}
          currentIndex={currentIndex}
        />
      </div>
    </section>
  );
};

const CommentItem = ({
  item,
  onClick,
  currentIndex,
}: {
  currentIndex: number;
  onClick?: (arg0: number) => void;
  item: Item;
}) => {
  return (
    <section className="flex flex-col">
      <img
        className="rounded-full my-8 h-[420px] w-[420px] mx-auto object-cover bg-black"
        src={item.src}
        alt="pic"
      />
      <p className="text-center font-bold text-xl mb-4">{item.text}</p>
      <h4 key={item.name} className="font-bold text-center mb-8 text-3xl">
        - {item.name}
      </h4>
      <section className="mt-auto flex gap-1 justify-center">
        <DotButton
          currentIndex={currentIndex}
          index={0}
          onClick={() => onClick?.(0)}
        />
        <DotButton
          currentIndex={currentIndex}
          index={1}
          onClick={() => onClick?.(1)}
        />
        <DotButton
          currentIndex={currentIndex}
          index={2}
          onClick={() => onClick?.(2)}
        />
      </section>
    </section>
  );
};

const DotButton = ({
  onClick,
  currentIndex,
  index,
  ...props
}: {
  onClick?: () => void;
  [x: string]: unknown;
}) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={cn(
        "w-6 h-6 rounded-full bg-black border-[1px] border-b-[2px] border-r-[2px] border-black relative"
      )}
      {...props}
    >
      {currentIndex === index && (
        <div
          //   transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className={cn(
            "absolute inset-0 bg-white rounded-full border border-black z-10",
            "inset-0",
            "bottom-px right-px"
          )}
        />
      )}
    </button>
  );
};
