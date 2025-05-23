import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { FaInstagram, FaSpinner } from "react-icons/fa6";
import { cn } from "~/lib/utils";

export default function Page() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({ target });
  return (
    <>
      <div className="bg-yellow-500 h-[10vh]"></div>
      <article ref={target} className="h-[400vh] pb-20">
        <h3 className="text-4xl font-bold pt-40 mx-auto max-w-[200px] text-center">
          Explore our social feed
        </h3>
        <div className="flex gap-2 items-center text-gray-600 justify-center mt-4">
          <p>Keep scrolling </p>
          <p className="animate-spin max-w-max">
            <FaSpinner />
          </p>
        </div>
        <main className="max-w-6xl mx-auto sticky top-0 mt-4">
          <section className="grid grid-cols-3 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Box
                scrollYProgress={scrollYProgress}
                title="Instagram"
                key={i}
                index={i}
              />
            ))}
            <Info scrollYProgress={scrollYProgress} />
            {Array.from({ length: 4 }).map((_, i) => (
              <Box
                scrollYProgress={scrollYProgress}
                title="Perro"
                key={i}
                index={4 + i}
              />
            ))}
          </section>
        </main>
      </article>
      <div className="bg-orange-500 h-[60vh]"></div>
    </>
  );
}

export const Box = ({
  scrollYProgress,
  title,
  index,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  title: string;
}) => {
  console.log("INDEX:", index);
  const configByIndex = {
    0: {
      // right 2
      x: ["180%", "0%"],
      y: ["40%", "0%"],
      scale: [1.1, 1],
      rotate: ["20deg", "0deg"],
    },
    1: {
      // left 2
      x: ["-90%", "0%"],
      y: ["40%", "0%"],
      scale: [1.1, 1],
      rotate: ["-20deg", "0deg"],
    },
    2: {
      // left 3
      x: ["-220%", "0%"],
      y: ["75%", "0%"],
      scale: [1, 1],
      rotate: ["-25deg", "0deg"],
    },
    3: {
      // front
      x: ["100%", "0%"],
      y: ["-100%", "0%"],
      scale: [1.3, 1],
      rotate: ["0deg", "0deg"],
    },
    4: {
      // left 1
      x: ["-170%", "0%"],
      y: ["-90%", "0%"],
      scale: [1.2, 1],
      rotate: ["-10deg", "0deg"],
    },
    5: {
      // right 1
      x: ["150%", "0%"],
      y: ["-200%", "0%"],
      scale: [1.2, 1],
      rotate: ["10deg", "0deg"],
    },
    6: {
      // right 3
      x: ["90%", "0%"],
      y: ["-150%", "0%"],
      scale: [1, 1],
      rotate: ["25deg", "0deg"],
    },
    7: {
      //right 1
      x: ["-70%", "0%"],
      y: ["-200%", "0%"],
      scale: [1.2, 1],
      rotate: ["10deg", "0deg"],
    },
  };

  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const x = useTransform(springYProgress, [0, 1], configByIndex[index].x);
  const y = useTransform(springYProgress, [0, 1], configByIndex[index].y);
  const rotate = useTransform(
    springYProgress,
    [0, 1],
    configByIndex[index].rotate
  );
  const scale = useTransform(
    springYProgress,
    [0, 1],
    configByIndex[index].scale
  );

  const opacity = useTransform(springYProgress, [0, 0.5, 1], [0, 0, 1]);

  return (
    <motion.figure
      style={{ scale, x, y, rotate }}
      className={cn("overflow-hidden rounded-2xl aspect-square relative z-0", {
        "z-30": index === 3,
        "z-20": index === 7 || index === 4,
        "z-10": index === 0 || index === 1,
      })}
    >
      <motion.p
        style={{ opacity }}
        className="absolute top-4 left-4 text-white bg-gray-900 z-10 py-1 px-3 rounded-full text-xs"
      >
        {title}
      </motion.p>
      <img
        className="object-cover scale-[1.2]"
        src="https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/London-E-Commerce-Website-Company2.jpg"
        alt="ninja"
      />
    </motion.figure>
  );
};

export const Info = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const scale = useTransform(springYProgress, [0, 1], [0.2, 1]);
  const opacity = useTransform(springYProgress, [0, 0.5, 1], [0, 0, 1]);
  return (
    <motion.div
      style={{ scale, opacity }}
      className="flex-col justify-center flex items-center h-full"
    >
      <h3 className="text-xl text-center font-bold mb-8">
        Follow us for all <br />
        the latest
      </h3>
      <nav className="flex gap-4 justify-center">
        <a href="#!">
          <FaInstagram />
        </a>
        <a href="#!">
          <FaInstagram />
        </a>{" "}
        <a href="#!">
          <FaInstagram />
        </a>{" "}
        <a href="#!">
          <FaInstagram />
        </a>
      </nav>
    </motion.div>
  );
};
