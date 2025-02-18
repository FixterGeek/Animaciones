import {
  MotionValue,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { useMatchMedia } from "~/hooks/useMatchMedia";
import { cn } from "~/lib/utils";

export const NewRotaryGallery = ({
  emojis,
  videos,
  titles = [],
  children,
}: {
  children: ReactNode;
  titles: string[];
  emojis: string[];
  videos: string[];
}) => {
  const nodes = Children.toArray(children);
  const target = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target });
  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });
  //   springYProgress.set(0);
  const opacity1 = useTransform(springYProgress, [0, 0.083, 0.38], [0, 1, 0]);
  const opacity2 = useTransform(
    springYProgress,
    [0.083, 0.38, 0.68],
    [0, 1, 0]
  );
  const opacity3 = useTransform(springYProgress, [0.38, 0.68, 0.99], [0, 1, 0]);
  const opacity4 = useTransform(springYProgress, [0.68, 0.99], [0, 1]);
  const opacities = [opacity1, opacity2, opacity3, opacity4];

  const [currentIndex, setCurrentIndex] = useState(0);
  useMotionValueEvent(springYProgress, "change", (last) => {
    let idx = 0;
    if (last >= 0.38) {
      idx = 1;
    }
    if (last >= 0.68) {
      idx = 2;
    }
    if (last >= 0.99) {
      idx = 3;
    }
    setCurrentIndex(idx);
  });

  return (
    <section className="h-[600vh]" ref={target}>
      <main
        className={cn(
          "overflow-hidden",
          "flex justify-end items-center",
          "sticky bg-white h-[100vh] top-0"
        )}
      >
        <VideoGear scrollYProgress={springYProgress} videos={videos} />
        <nav className="absolute top-0 bottom-0 left-12 flex flex-col justify-center gap-4">
          <div className="flex items-center">
            {emojis.map((emoji, i) => (
              <span
                className={cn(
                  "relative",
                  "text-4xl mx-3 p-1 rounded-full w-12 h-12 text-center"
                )}
                key={i}
              >
                <motion.span
                  style={{ opacity: opacities[i] }}
                  className="inset-0 absolute bg-orange-400 rounded-full"
                ></motion.span>
                <span className="relative z-10">{emoji}</span>
              </span>
            ))}
          </div>

          <div className="relative">
            {titles.map((title, i) => (
              <motion.h1
                style={{ opacity: opacities[i] }}
                className="text-xl font-bold uppercase absolute top-0 left-0"
                key={title}
              >
                {title}
              </motion.h1>
            ))}
          </div>
          <div className="relative">
            <AnimatePresence>
              {nodes.map(
                (node, i) =>
                  currentIndex === i && (
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: -10 }}
                      exit={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      // style={{ opacity: opacities[i] }}
                      className="text-xs font-medium absolute top-10 left-0"
                    >
                      {node}
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </nav>
      </main>
    </section>
  );
};

const VideoGear = ({
  scrollYProgress,
  videos,
}: {
  videos: string[];
  scrollYProgress: MotionValue<number>;
}) => {
  const map = {
    "5": 0,
    "4": 1,
    "3": 2,
    "2": 3,
  };
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-10, 109]);
  const isMatching = useMatchMedia("(min-width: 1024px)");
  return (
    <motion.div
      style={{
        rotateZ,
        scale: isMatching ? 6 : 4,
        x: isMatching ? "200%" : "150%",
      }}
      className={cn("rounded-full w-[420px] h-[420px] relative")}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <Video index={i} src={videos[map[i]]} key={i} />
      ))}
    </motion.div>
  );
};

const Video = ({ src, index }: { index: number; src: string }) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const increase = (Math.PI * 2) / 10;
    const x = (420 / 2.7) * Math.cos(increase * index) + 420 / 2.6;
    const y = (420 / 2.7) * Math.sin(increase * index) + 420 / 2.4;
    animate(scope.current, { x, y, rotateZ: 180, rotate: 36 * index });
  }, []);
  return (
    <video
      ref={scope}
      style={{ aspectRatio: 4.76 / 3.54 }}
      className="object-cover w-24 absolute rounded-2xl"
      src={src}
      autoPlay
      muted
      loop
    />
  );
};
