import { useTransform, type MotionValue, motion } from "motion/react";
import type { RefObject } from "react";

export const AnimatedUnderline = ({
  colors,
  scrollYProgress,
}: {
  colors?: string[];
  scrollYProgress: MotionValue<number>;
  target?: RefObject<HTMLDivElement>;
}) => {
  const map: Stroke[] = [
    {
      // color: "#ffb7e4", // pink
      color: "#5e60f6", // indigo
      range: [0, 0.2],
    },

    {
      color: "#ffb7e4", // pink
      range: [0.3, 0.4],
    },
    {
      // color: "#da3e05",
      color: "#da3e05", // orange
      range: [0.5, 0.6],
    },
    {
      color: "#ffb7e4", // pink
      range: [0.55, 0.7],
    },
    {
      color: "#5e60f6", // indigo
      range: [0.6, 1],
    },
  ];

  return (
    <svg
      //   className="-ml-20"
      viewBox="0 0 165 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {map.map((stroke, i) => (
        <AnimatedPath
          key={i}
          stroke={stroke}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </svg>
  );
};

const AnimatedPath = ({
  stroke,
  scrollYProgress,
}: {
  stroke: Stroke;
  scrollYProgress: MotionValue<number>;
}) => {
  const pathLength = useTransform(scrollYProgress, stroke.range, [0.01, 1]);
  return (
    <motion.path
      key={stroke.color}
      d="M3 10C33.5381 4.0372 85.7179 -2.19674 162 9.99985"
      stroke={stroke.color}
      strokeWidth="5"
      strokeLinecap="round"
      style={{ pathLength }}
    ></motion.path>
  );
};
