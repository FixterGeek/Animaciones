import {
  motion,
  useAnimate,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { cn } from "../lib/utils";
import {
  Children,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useInfinityMovement } from "~/hooks/useInfinityMovement";

export const RedBanners = ({ children }: { children?: ReactNode }) => {
  const firstChild = Children.toArray(children)[0];
  const secondChild = Children.toArray(children)[1];
  const x = useSpring(500);
  const y = useSpring(500);
  const background = useMotionTemplate`radial-gradient(at ${x}px ${y}px, #5158f6 5%, black 80%)`;
  const [currentHover, setCurrentHover] = useState(1);
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    x.set(event.pageX);
    y.set(event.pageY);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      style={{ background }}
      className={cn("min-h-screen text-white relative overflow-hidden")}
    >
      <BigRectangle
        direction={-1}
        onMouseEnter={() => setCurrentHover(0)}
        isHovered={currentHover === 0}
        className="rotate-12 bg-black"
      >
        {secondChild}
      </BigRectangle>
      <BigRectangle
        isHovered={currentHover === 1}
        onMouseEnter={() => setCurrentHover(1)}
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
  direction,
  isHovered,
}: {
  direction?: number;
  onMouseEnter: () => void;
  isHovered: boolean;
  className?: string;
  children?: ReactNode;
}) => {
  const [infinityScope, x] = useInfinityMovement(direction);
  const [animateScope, animate] = useAnimate();

  useEffect(() => {
    if (isHovered) {
      animate(animateScope.current, { filter: "blur(0px)" }, { duration: 0.5 });
    } else {
      animate(animateScope.current, { filter: "blur(9px)" }, { duration: 2 });
    }
  }, [isHovered]);
  return (
    <div
      ref={animateScope}
      style={{ filter: "blur(9px)" }}
      id={isHovered ? "blury" : "none"}
      onMouseEnter={onMouseEnter}
      className={cn(
        "h-28 bg-red-500 absolute -rotate-12 top-[40vh] w-[120%] translate-x-[-10vw] gird place-content-center text-3xl text-nowrap",
        "uppercase font-bold",
        className
      )}
    >
      <motion.div ref={infinityScope} style={{ x }} className="min-w-max">
        {children}
        {children}
      </motion.div>
    </div>
  );
};
