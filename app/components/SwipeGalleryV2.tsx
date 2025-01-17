import { Children, useState, type ReactNode } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export const SwipeGalleryV2 = ({ children }: { children: ReactNode }) => {
  const imgs = Children.toArray(children);
  const [nextIndex, setNextIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // #1 arrastre y salir volando
  const xRange = [-300, 0, 300];
  const x = useMotionValue(0);
  const springX = useSpring(x);
  const rotate = useTransform(x, [-300, 300], [-45, 45], { clamp: false });
  const scale = useTransform(x, xRange, [0.6, 1, 0.6]);
  // vuelo 🪽
  const constrols = useAnimationControls();
  const removeTo = async (direction: -1 | 1) => {
    await constrols.start({ x: 300 * direction, opacity: 0, scale: 0 });
  };

  const reset = () => {
    constrols.set({ x: 0, opacity: 1, scale: 1 });
    swipeImages();
  };

  const handleDragEnd = async (event: DragEvent) => {
    const offset = event.offsetX;
    if (offset < -150) {
      // volar a la izq
      await removeTo(-1);
      reset();
    } else if (offset > 200) {
      // volar a la der
      await removeTo(1);
      reset();
    }
  };

  // #2 dependencias de x
  const y = useTransform(springX, xRange, [0, 90, 0]);
  const scale2 = useTransform(x, xRange, [1, 0.6, 1]);
  const filter = useTransform(x, xRange, [
    "blur(0px)",
    "blur(4px)",
    "blur(0px)",
  ]);

  // #3 Truco de mágia (cambio de imagenes) 🪄✨
  const getNextIndex = (num: number) => (num + 1) % imgs.length;
  const swipeImages = () => {
    setNextIndex((i) => getNextIndex(i));
    setCurrentIndex((i) => getNextIndex(i));
  };

  return (
    <article className="relative h-[320px] w-[320px]">
      <motion.div
        className="absolute object-cover inset-0 rounded-3xl overflow-hidden bg-black"
        style={{ y, scale: scale2, filter }}
      >
        {" "}
        {imgs[nextIndex]}
      </motion.div>
      <motion.div
        onDragEnd={handleDragEnd}
        animate={constrols}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragSnapToOrigin
        style={{ x, rotate, scale }}
        whileTap={{ cursor: "grabbing" }}
        className="absolute rounded-3xl overflow-hidden object-cover inset-0 bg-black hover:cursor-grab select-none"
      >
        {imgs[currentIndex]}
      </motion.div>
    </article>
  );
};
