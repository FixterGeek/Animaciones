import {
  motion,
  useAnimationControls,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Children, useState, type ReactNode } from "react";
import { useTimeout } from "~/hooks/useTimeout";

export const SwipeGallery = ({ children }: { children?: ReactNode }) => {
  const imgs = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  // controls 👇🏼
  const frontControls = useAnimationControls();

  // Update images stuff 👇🏼
  const getNextIndex = (indx: number) => (indx + 1) % imgs.length;

  const updateIndexes = () => {
    setNextIndex((n) => getNextIndex(n));
    setCurrentIndex((n) => getNextIndex(n));
  };

  const exitFront = async (direction: -1 | 1) =>
    await frontControls.start({
      x: 300 * direction,
      opacity: 0,
    });

  const reappearFront = () => {
    frontControls.set({ x: 0, opacity: 1 });
    updateIndexes();
  };

  const { placeTimeout } = useTimeout(0.5);
  const fullMovementTo = async (direction: -1 | 1) => {
    await exitFront(direction);
    placeTimeout(reappearFront);
  };

  // trigger 👇🏼
  async function handleDragEnd(_, info) {
    if (info.offset.x < -150) {
      fullMovementTo(-1);
    } else if (info.offset.x > 150) {
      fullMovementTo(1);
    }
  }

  // "Responsive" animations 👇🏼
  // front
  const x = useMotionValue(0);
  const springX = useSpring(x, { bounce: 0.4 });
  const scale = useTransform(x, [-350, 0, 350], [0.6, 1, 0.6]);
  const rotate = useTransform(x, [-350, 350], [-45, 45], {
    clamp: false,
  });
  // back
  const y = useTransform(springX, [-350, 0, 350], [0, 80, 0], {
    clamp: true,
  });
  const scale2 = useTransform(scale, [1, 0.65], [0.7, 1.005], {
    clamp: false,
  });
  const filterValue = useTransform(x, [-300, 0, 300], [0, 4, 0]);
  const filter = useMotionTemplate`blur(${filterValue}px)`;

  return (
    <div className="relative w-[320px] h-[320px]">
      <motion.div
        dragConstraints={{ left: 0, right: 0 }}
        animate={frontControls}
        onDragEnd={handleDragEnd}
        drag="x"
        whileTap={{ cursor: "grabbing" }}
        className="inset-0 absolute bg-black overflow-hidden rounded-3xl z-10 cursor-grab shadow-2xl"
        style={{ x, rotate, scale, y: 11 }}
      >
        {[imgs[currentIndex]]}
      </motion.div>
      <motion.div
        className="inset-0 absolute rounded-3xl overflow-hidden bg-black shadow-2xl"
        style={{ y, scale: scale2, filter }}
      >
        {[imgs[nextIndex]]}
      </motion.div>
    </div>
  );
};
