import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { cn } from "../lib/utils";
import { Children, type MouseEvent, type ReactNode } from "react";

export const RedBanners = ({ children }: { children?: ReactNode }) => {
  const firstChild = Children.toArray(children)[0];
  const secondChild = Children.toArray(children)[1];
  const x = useSpring(500);
  const y = useSpring(500);
  const background = useMotionTemplate`radial-gradient(at ${x}px ${y}px, #5158f6 1%, black 80%)`;
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
      <BigRectangle className="rotate-12 bg-black">{secondChild}</BigRectangle>
      <BigRectangle>{firstChild}</BigRectangle>
    </motion.article>
  );
};

const BigRectangle = ({
  children,
  className,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ filter: "blur(0px)" }}
      style={{ filter: "blur(9px)" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "h-28 bg-red-500 absolute -rotate-12 top-[40vh] w-[120%] translate-x-[-10vw] gird place-content-center text-3xl text-nowrap",
        "uppercase font-bold",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
