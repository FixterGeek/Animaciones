import { index } from "@react-router/dev/routes";
import {
  MotionValue,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

export default function Page() {
  const target = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target });
  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });
  return (
    <article ref={target} className="bg-white h-[600vh]">
      <section className="bg-blue-500 h-screen sticky top-0 flex justify-end items-center overflow-hidden">
        <Gear springYProgress={springYProgress} />
      </section>
    </article>
  );
}

const Gear = ({
  springYProgress,
}: {
  springYProgress: MotionValue<number>;
}) => {
  const emojis = [
    "🤖",
    "🤓",
    "🪄",
    "💈",
    "📼",
    "🌀",
    "📚",
    "🎁",
    "📽️",
    "👧🏻",
    "👦🏾",
    "🍟",
    "🌮",
    "👾",
  ];
  const rotateZ = useTransform(springYProgress, [0, 1], [0, 360]);
  return (
    <motion.div
      style={{ rotateZ, scale: 4, x: "150%" }}
      className="bg-indigo-500 w-[320px] h-[320px] rounded-full relative text-4xl"
    >
      {emojis.map((emoji, i) => (
        <Emoji key={i} index={i}>
          {emoji}
        </Emoji>
      ))}
    </motion.div>
  );
};

const Emoji = ({
  children,
  index,
}: {
  index: number;
  children?: ReactNode;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const increase = (Math.PI * 2) / 14; // emojis length
    const x = (320 / 2.7) * Math.cos(increase * index) + 320 / 2.3;
    const y = (320 / 2.7) * Math.sin(increase * index) + 320 / 2.3;
    animate(scope.current, { x, y, rotate: 25 * index, rotateZ: 180 });
  }, []);
  return (
    <span ref={scope} className="absolute">
      {children}
    </span>
  );
};
