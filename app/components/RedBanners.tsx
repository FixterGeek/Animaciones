import { motion, useAnimate, useMotionTemplate, useSpring } from "motion/react";
import {
  Children,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "../lib/utils";
import { useInfinityMovement } from "~/hooks/useInfinityMovement";

export const RedBanners = ({ children }: { children?: ReactNode }) => {
  const firstChild = Children.toArray(children)[0];
  const secondChild = Children.toArray(children)[1];
  const [currentHover, setCurrentHover] = useState(1);

  const x = useSpring(500);
  const y = useSpring(500);

  const background = useMotionTemplate`radial-gradient(at ${x}px ${y}px, #5158f6 5%, black 80%)`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const { pageY, pageX } = event;
    x.set(pageX);
    y.set(pageY);
  };

  return (
    <motion.article
      style={{ background }}
      onMouseMove={handleMouseMove}
      className={cn("min-h-screen text-white relative overflow-hidden")}
    >
      <BigRectangle
        onMouseEnter={() => setCurrentHover(0)}
        isHover={currentHover === 0}
        className="rotate-12 bg-black"
      >
        {secondChild}
      </BigRectangle>
      <BigRectangle
        direction={-1}
        onMouseEnter={() => setCurrentHover(1)}
        isHover={currentHover === 1}
      >
        {firstChild}
      </BigRectangle>
    </motion.article>
  );
};

const BigRectangle = ({
  children,
  className,
  onMouseEnter,
  isHover,
  direction = 1,
}: {
  direction?: number;
  isHover?: boolean;
  onMouseEnter?: () => void;
  className?: string;
  children?: ReactNode;
}) => {
  const [scope, animate] = useAnimate();
  const [infinityScope, x] = useInfinityMovement(direction);
  useEffect(() => {
    if (isHover) {
      animate(scope.current, { filter: "blur(0px)" }, { duration: 0.5 });
    } else {
      animate(scope.current, { filter: "blur(9px)" }, { duration: 2 });
    }
  }, [isHover]);
  return (
    <div
      style={{ filter: "blur(9px)" }}
      ref={scope}
      onMouseEnter={onMouseEnter}
      className={cn(
        "h-28 bg-red-500 absolute -rotate-12 top-[40vh] w-[120%] translate-x-[-10vw] gird place-content-center text-3xl text-nowrap",
        "uppercase font-bold",
        className
      )}
    >
      <motion.div style={{ x }} ref={infinityScope} className="w-max flex">
        {children} {children}
      </motion.div>
    </div>
  );
};
