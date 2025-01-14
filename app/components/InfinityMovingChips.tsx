import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { useInfinityMovement } from "~/hooks/useInfinityMovement";

export const InfinityMovingChips = ({
  children,
  direction = 1,
}: {
  direction?: number;
  children: ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, x] = useInfinityMovement(direction, isHovered, true);

  return (
    <article className="overflow-hidden w-screen">
      <motion.section
        ref={scope}
        style={{ x }}
        className="flex w-max"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {children}
        {children}
      </motion.section>
    </article>
  );
};
