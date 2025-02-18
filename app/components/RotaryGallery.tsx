import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  MotionValue,
  useAnimate,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useMatchMedia } from "~/hooks/useMatchMedia";
import { cn } from "~/lib/utils";

export const RotaryGallery = ({ srcset }: { srcset: string[] }) => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({ target });
  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });

  return (
    <article className="h-[600vh]" ref={target}>
      <main className="sticky top-0 h-screen bg-white flex items-center justify-end">
        <VideoGear srcset={srcset} scrollYProgress={springYProgress} />
      </main>
    </article>
  );
};

const VideoGear = ({
  scrollYProgress,
  srcset,
}: {
  srcset: string[];
  scrollYProgress: MotionValue<number>;
}) => {
  const mapa: Record<string, number> = {
    "4": 0,
    "3": 1,
    "2": 2,
    "1": 3,
  };
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-20, 135]);
  const isDesktop = useMatchMedia("(min-width: 1024px)"); // css syntax
  return (
    <motion.section
      className={cn("bg-transparent h-[420px] w-[420px] rounded-full")}
      style={{
        x: isDesktop ? "200%" : "150%",
        rotateZ,
        scale: isDesktop ? 6 : 4,
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <Video key={i} index={i} src={srcset[mapa[i]]} />
      ))}
    </motion.section>
  );
};

const Video = ({
  index,
  className,
  src,
  ...props
}: {
  src?: string;
  className?: string;
  index: number;
  [x: string]: unknown;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (!scope.current) return;

    const [width, height] = [420, 420]; // hacked & fixed
    const increase = (Math.PI * 2) / 8; // 360deg / 8
    const angle = index * increase;
    const x = (width / 2.7) * Math.cos(angle) + width / 2.6; // magic numbers 🪄
    const y = (height / 2.7) * Math.sin(angle) + height / 2.4;
    // movemos
    animate(scope.current, {
      x,
      y,
      rotate: 45 * index,
      rotateZ: 180,
    });
  }, []);
  return (
    <video
      autoPlay
      muted
      loop
      src={src}
      ref={scope}
      style={{ aspectRatio: 4.76 / 3.54 }}
      className={cn(
        "object-cover",
        "w-24 bg-transparent rounded-2xl",
        "absolute",
        className
      )}
      {...props}
    />
  );
};
